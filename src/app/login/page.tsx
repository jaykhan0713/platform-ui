"use client"

import { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser } from "aws-amplify/auth"
import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>
}) {
  const params = use(searchParams)
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    getCurrentUser()
      .then(() => router.push("/"))
      .catch(() => setChecking(false))
  }, [])

  if (checking) return null

  return <LoginForm params={params} />
}
