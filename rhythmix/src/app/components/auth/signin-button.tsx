"use client"
import { signIn } from "next-auth/react"
 
export function SignIn() {
  return <button onClick={() => signIn("spotify", {redirectTo: "/"})}>Sign In</button>
}