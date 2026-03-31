"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser } from "aws-amplify/auth"
import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    getCurrentUser()
      .then(() => router.push("/"))
      .catch(() => setChecking(false))
  }, [])

  if (checking) return null

  return <LoginForm />
}
