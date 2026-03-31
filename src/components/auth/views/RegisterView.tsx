import { inputClass, labelClass } from "@/components/auth/shared"

interface RegisterViewProps {
  email: string
  setEmail: (v: string) => void
  password: string
  setPassword: (v: string) => void
  confirmPassword: string
  setConfirmPassword: (v: string) => void
  loading: boolean
  error: string
  onSubmit: () => void
}

export function RegisterView({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  loading,
  error,
  onSubmit,
}: RegisterViewProps) {
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
        className={`${inputClass} mb-5`}
      />

      <label className={labelClass}>Confirm password</label>
      <input
        type="password"
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={`${inputClass} mb-5`}
      />

      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full py-[13px] bg-[#E8E6E0] text-[#0A0A0F] rounded-lg text-[14px] font-medium cursor-pointer hover:bg-white transition-colors disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create account →"}
      </button>
    </>
  )
}
