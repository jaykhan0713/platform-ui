import { inputClass, labelClass } from "@/components/auth/shared"

interface ForgotViewProps {
  email: string
  setEmail: (v: string) => void
  loading: boolean
  error: string
  onSubmit: () => void
}

export function ForgotView({ email, setEmail, loading, error, onSubmit }: ForgotViewProps) {
  return (
    <>
      {error && <p className="text-[12px] text-red-400 mb-4">{error}</p>}

      <p className="text-[13px] text-[#E8E6E0]/45 mb-6">
        Enter your email and we&#39;ll send you a reset code.
      </p>

      <label className={labelClass}>Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${inputClass} mb-5`}
      />

      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full py-[13px] bg-[#E8E6E0] text-[#0A0A0F] rounded-lg text-[14px] font-medium cursor-pointer hover:bg-white transition-colors disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send reset code →"}
      </button>
    </>
  )
}
