import { getUser, insertUser } from "@/db/prepared"
import NextAuth from "next-auth"
import Google, { GoogleProfile } from "next-auth/providers/google"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Google<GoogleProfile>({
      async profile(profile) {
        const { email } = profile
        const { isAdmin, email: id } =
          (await insertUser.get({ email })) || (await getUser.get({ email }))
        return { id, isAdmin, ...profile }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) Object.assign(token, user)
      return token
    },
    session({ session, token }) {
      if (session.user) session.user.isAdmin = token.isAdmin
      return session
    },
  },
})
