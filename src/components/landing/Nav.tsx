"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth/AuthContext"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const { userEmail, authLoading, handleSignOut } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-5 border-b border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-[12px]">
      <div className="flex items-center justify-between">
        <div className="font-display font-extrabold text-[18px] tracking-[-0.5px] text-[#E8E6E0]">
          jay<span className="text-[#7F77DD]">.</span>platform
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/demo"
            className="text-[13px] font-medium text-[#0A0A0F] bg-[#E8E6E0] px-5 py-2 rounded-md hover:bg-white transition-colors"
          >
            Try the demo →
          </Link>

          {authLoading ? (
            <div className="w-[60px] flex items-center justify-center py-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#E8E6E0]/20 border-t-[#7F77DD] animate-spin" />
            </div>
          ) : userEmail ? (
            <div className="flex items-center gap-3">
              <span className="text-[13px] text-[#E8E6E0]/45">{userEmail}</span>
              <button
                onClick={handleSignOut}
                className="text-[13px] font-medium text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors px-3 py-2 bg-transparent border-none cursor-pointer"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-[13px] font-medium text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors px-3 py-2"
            >
              Log in
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 pt-4 pb-2 border-t border-white/[0.06] mt-4">
          <Link
            href="/demo"
            className="text-[14px] font-medium text-[#0A0A0F] bg-[#E8E6E0] px-5 py-3 rounded-md text-center hover:bg-white transition-colors"
          >
            Try the demo →
          </Link>

          {userEmail ? (
            <>
              <span className="text-[13px] text-[#E8E6E0]/45 text-center py-1">{userEmail}</span>
              <button
                onClick={handleSignOut}
                className="text-[14px] text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors text-center py-2 bg-transparent border-none cursor-pointer w-full"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="text-[14px] text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors text-center py-2"
            >
              Log in
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
