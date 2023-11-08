"use client"

import { signIn, signOut } from "next-auth/react"

export const logOut = () => signOut()

export const logIn = () => signIn("google")
