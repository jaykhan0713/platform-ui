"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser } from "aws-amplify/auth"
import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    getCurrentUser()
      .then(() => router.push("/"))
      .catch(() => {})
  }, [])

  return <LoginForm />
}
