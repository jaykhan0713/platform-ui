"use client"

import { useState } from "react"
import Link from "next/link"

type Tab = "signin" | "register"

export function LoginForm() {
  const [tab, setTab] = useState<Tab>("signin")

  const inputClass =
    "w-full bg-white/[0.04] border-[0.5px] border-white/10 rounded-lg px-[14px] py-3 text-[14px] text-[#E8E6E0] font-sans placeholder:text-[#E8E6E0]/20 outline-none focus:border-[#7F77DD]/50 transition-colors box-border"
  const labelClass =
    "block text-[12px] font-medium text-[#E8E6E0]/45 tracking-[0.5px] uppercase mb-2"

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-[420px] bg-[#0E0E16] border-[0.5px] border-white/[0.08] rounded-2xl p-10">
        <div className="font-display font-extrabold text-[18px] text-[#E8E6E0] text-center mb-8 tracking-[-0.5px]">
          jay<span className="text-[#7F77DD]">.</span>platform
        </div>

        <div className="flex border-[0.5px] border-white/[0.08] rounded-lg overflow-hidden mb-8">
          {(["signin", "register"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-[10px] text-[13px] font-medium transition-all border-none cursor-pointer ${
                tab === t ? "bg-[#7F77DD]/15 text-[#AFA9EC]" : "bg-transparent text-[#E8E6E0]/35"
              }`}
            >
              {t === "signin" ? "Sign in" : "Register"}
            </button>
          ))}
        </div>

        <label className={labelClass}>Email</label>
        <input type="email" placeholder="you@example.com" className={`${inputClass} mb-5`} />

        <label className={labelClass}>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className={`${inputClass} ${tab === "signin" ? "mb-2" : "mb-5"}`}
        />

        {tab === "register" && (
          <>
            <label className={labelClass}>Confirm password</label>
            <input type="password" placeholder="••••••••" className={`${inputClass} mb-5`} />
          </>
        )}

        {tab === "signin" && (
          <div className="text-right mb-5">
            <span className="text-[12px] text-[#7F77DD]/70 cursor-pointer hover:text-[#7F77DD] transition-colors">
              Forgot password?
            </span>
          </div>
        )}

        <button className="w-full py-[13px] bg-[#E8E6E0] text-[#0A0A0F] rounded-lg text-[14px] font-medium cursor-pointer hover:bg-white transition-colors mt-1">
          {tab === "signin" ? "Sign in →" : "Create account →"}
        </button>
      </div>

      <Link
        href="/"
        className="text-[12px] text-[#E8E6E0]/30 mt-6 no-underline hover:text-[#E8E6E0]/50 transition-colors"
      >
        ← Back to <span className="text-[#7F77DD]/70">jay.platform</span>
      </Link>
    </div>
  )
}
