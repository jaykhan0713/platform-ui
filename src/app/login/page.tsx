"use client"

import { useEffect } from "react"
import { signInWithRedirect, signOut } from "aws-amplify/auth"
import { useSearchParams } from "next/navigation"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  useEffect(() => {
    if (error) return // stop the loop if Cognito returned an error
    signOut({ global: false })
      .catch(() => {})
      .finally(() => signInWithRedirect())
  }, [error])

  if (error) return <p style={{ color: "red" }}>Auth error: {error}</p>

  return null
}
