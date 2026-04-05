"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth/AuthContext"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { userEmail, isAuthReady, handleSignOut } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-5 border-b border-white/[0.06] bg-[#0A0A0F]/80 backdrop-blur-[12px]">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="font-display font-extrabold text-[18px] tracking-[-0.5px] text-[#E8E6E0]">
          jay<span className="text-[#7F77DD]">.</span>platform
        </div>

        {/* center links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <a
              href="https://www.linkedin.com/in/jay-khan-458b3a132/"
              target="_blank"
              className="text-[13px] text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors no-underline tracking-[0.3px]"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jaykhan0713/platform-aws-cdk/blob/main/README.md"
              target="_blank"
              className="text-[13px] text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors no-underline tracking-[0.3px]"
            >
              Architecture
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jaykhan0713/platform-service"
              target="_blank"
              className="text-[13px] text-[#E8E6E0]/50 hover:text-[#E8E6E0] transition-colors no-underline tracking-[0.3px]"
            >
              Microservices
            </a>
          </li>
        </ul>

        {/* right side, auth + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthReady ? (
            userEmail ? (
              <>
                <span className="text-[13px] text-[#E8E6E0]/45">{userEmail}</span>
                <button
                  onClick={handleSignOut}
                  className="text-[13px] text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors bg-transparent border-none cursor-pointer px-3 py-2"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/api/auth/sign-in"
                className="text-[13px] text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors px-3 py-2 no-underline"
              >
                Log in
              </Link>
            )
          ) : (
            <div className="h-4 w-24 rounded-full bg-white/10 animate-pulse" />
          )}
          <Link
            href="/demo"
            className="text-[13px] font-medium text-[#E8E6E0] border border-white/20 px-5 py-2 rounded-md hover:border-[#7F77DD] hover:bg-[#7F77DD]/10 transition-all no-underline"
          >
            Try the demo →
          </Link>
        </div>

        {/* hamburger */}
        <button
          className="md:hidden text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile drawer */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 pt-4 pb-2 border-t border-white/[0.06] mt-4">
          <a
            href="https://www.linkedin.com/in/jay-khan-458b3a132/"
            target="_blank"
            className="text-[14px] text-[#E8E6E0]/50 text-center hover:text-[#E8E6E0] transition-colors py-2 no-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jaykhan0713/platform-aws-cdk/blob/main/README.md"
            target="_blank"
            className="text-[14px] text-[#E8E6E0]/50 text-center hover:text-[#E8E6E0] transition-colors py-2 no-underline"
          >
            Architecture
          </a>
          <a
            href="https://github.com/jaykhan0713/platform-service"
            target="_blank"
            className="text-[14px] text-[#E8E6E0]/50 text-center hover:text-[#E8E6E0] transition-colors py-2 no-underline"
          >
            Microservices
          </a>
          <Link
            href="/demo"
            className="text-[14px] font-medium text-[#E8E6E0] border border-white/20 px-5 py-3 rounded-md text-center hover:border-[#7F77DD] hover:bg-[#7F77DD]/10 transition-all no-underline mt-1"
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
              href="/api/auth/sign-in"
              className="text-[14px] text-[#E8E6E0]/60 hover:text-[#E8E6E0] transition-colors text-center py-2 no-underline"
            >
              Log in
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
