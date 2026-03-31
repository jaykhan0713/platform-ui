"use client"

import { useState } from "react"
import Link from "next/link"
import { SignInView } from "@/components/auth/views/SignInView"
import { RegisterView } from "@/components/auth/views/RegisterView"
import { ConfirmView } from "@/components/auth/views/ConfirmView"
import { ForgotView } from "@/components/auth/views/ForgotView"
import { ResetView } from "@/components/auth/views/ResetView"
import { confirmSignUp, signIn, signUp } from "aws-amplify/auth"
import { useRouter } from "next/navigation"

type View = "signin" | "register" | "confirm" | "forgot" | "reset"

const viewTitle: Partial<Record<View, string>> = {
  confirm: "Check your email",
  forgot: "Reset password",
  reset: "New password",
}

export function LoginForm() {
  const [view, setView] = useState<View>("signin")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [code, setCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const showTabs = view === "signin" || view === "register"

  const router = useRouter()

  // handlers — wired to Amplify
  const handleSignIn = async () => {
    setError("")
    setLoading(true)
    try {
      await signIn({ username: email, password })
      router.push("/")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Sign in failed")
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async () => {
    setError("")
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    setLoading(true)
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: { email },
        },
      })
      setView("confirm")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  const handleConfirm = async () => {
    setError("")
    setLoading(true)
    try {
      await confirmSignUp({ username: email, confirmationCode: code })
      setView("signin")
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Verification failed")
    } finally {
      setLoading(false)
    }
  }

  const handleForgot = () => {}
  const handleReset = () => {}

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-[420px] bg-[#0E0E16] border-[0.5px] border-white/[0.08] rounded-2xl p-10">
        <div className="font-display font-extrabold text-[18px] text-[#E8E6E0] text-center mb-8 tracking-[-0.5px]">
          jay<span className="text-[#7F77DD]">.</span>platform
        </div>

        {showTabs ? (
          <div className="flex border-[0.5px] border-white/[0.08] rounded-lg overflow-hidden mb-8">
            {(["signin", "register"] as View[]).map((v) => (
              <button
                key={v}
                onClick={() => {
                  setView(v)
                  setError("")
                }}
                className={`flex-1 py-[10px] text-[13px] font-medium transition-all border-none cursor-pointer ${
                  view === v ? "bg-[#7F77DD]/15 text-[#AFA9EC]" : "bg-transparent text-[#E8E6E0]/35"
                }`}
              >
                {v === "signin" ? "Sign in" : "Register"}
              </button>
            ))}
          </div>
        ) : (
          <div className="mb-8">
            <button
              onClick={() => {
                setView("signin")
                setError("")
              }}
              className="text-[12px] text-[#E8E6E0]/30 hover:text-[#E8E6E0]/50 transition-colors bg-transparent border-none cursor-pointer p-0 mb-4 block"
            >
              ← Back
            </button>
            <p className="font-display font-bold text-[18px] text-[#E8E6E0] tracking-[-0.3px]">
              {viewTitle[view]}
            </p>
          </div>
        )}

        {view === "signin" && (
          <SignInView
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            error={error}
            onSubmit={handleSignIn}
            onForgot={() => {
              setView("forgot")
              setError("")
            }}
          />
        )}

        {view === "register" && (
          <RegisterView
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            loading={loading}
            error={error}
            onSubmit={handleRegister}
          />
        )}

        {view === "confirm" && (
          <ConfirmView
            email={email}
            code={code}
            setCode={setCode}
            loading={loading}
            error={error}
            onSubmit={handleConfirm}
          />
        )}

        {view === "forgot" && (
          <ForgotView
            email={email}
            setEmail={setEmail}
            loading={loading}
            error={error}
            onSubmit={handleForgot}
          />
        )}

        {view === "reset" && (
          <ResetView
            email={email}
            code={code}
            setCode={setCode}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            loading={loading}
            error={error}
            onSubmit={handleReset}
          />
        )}
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
