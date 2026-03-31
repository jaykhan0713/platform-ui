import { inputClass, labelClass } from "@/components/auth/shared"

interface SignInViewProps {
  email: string
  setEmail: (v: string) => void
  password: string
  setPassword: (v: string) => void
  loading: boolean
  error: string
  onSubmit: () => void
  onForgot: () => void
}

export function SignInView({
  email,
  setEmail,
  password,
  setPassword,
  loading,
  error,
  onSubmit,
  onForgot,
}: SignInViewProps) {
  return (
    <>
      {error && <p className="text-[12px] text-red-400 mb-4">{error}</p>}

      <label className={labelClass}>Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${inputClass} mb-5`}
      />

      <label className={labelClass}>Password</label>
      <input
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`${inputClass} mb-2`}
      />

      <div className="text-right mb-5">
        <span
          onClick={onForgot}
          className="text-[12px] text-[#7F77DD]/70 cursor-pointer hover:text-[#7F77DD] transition-colors"
        >
          Forgot password?
        </span>
      </div>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full py-[13px] bg-[#E8E6E0] text-[#0A0A0F] rounded-lg text-[14px] font-medium cursor-pointer hover:bg-white transition-colors disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign in →"}
      </button>
    </>
  )
}
