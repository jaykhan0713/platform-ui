"use client"

import Link from "next/link"
import { useEffect } from "react"
import { apiFetch } from "@/utils/apiFetch"

export default function DemoPage() {
  useEffect(() => {
    const walletTest = async () => {
      const res = await apiFetch("/api/demo/user/wallet")
      console.log(await res.json())
    }

    walletTest()
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">
        Currently Unavailable
      </p>
      <h1 className="font-syne text-4xl font-extrabold tracking-tight text-[#E8E6E0] mb-4">
        AWS API is in sleep mode.
      </h1>
      <p className="text-sm text-[#E8E6E0]/50 max-w-sm mb-8">
        To save enormous costs of an entire AWS distributed systems (ALB, ECS tasks for
        microservices, RDS, VPC endpoints, etc) running, I have a portable sleep mode enabled. Email
        me at <a className="text-purple-400">jaykhan0713@gmail.com </a> if you&#39;d like a walk
        through of the demo!
      </p>
      <Link
        href="/"
        className="text-[13px] font-medium text-[#0A0A0F] bg-[#E8E6E0] px-5 py-2 rounded-md hover:bg-white transition-colors"
      >
        ← Back to jay.platform
      </Link>
    </main>
  )
}
