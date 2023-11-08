import "next-auth"

interface Role {
  isAdmin: boolean
}

declare module "@auth/core/types" {
  interface Session {
    user: DefaultSession["user"] & Role
  }
}

declare module "@auth/core/jwt" {
  interface JWT extends Role {}
}
