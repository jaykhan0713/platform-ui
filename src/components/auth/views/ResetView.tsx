import { inputClass, labelClass } from "@/components/auth/shared"

interface ResetViewProps {
  email: string
  code: string
  setCode: (v: string) => void
  newPassword: string
  setNewPassword: (v: string) => void
  loading: boolean
  error: string
  onSubmit: () => void
}

export function ResetView({
  email,
  code,
  setCode,
  newPassword,
  setNewPassword,
  loading,
  error,
  onSubmit,
}: ResetViewProps) {
  return (
    <>
      {error && <p className="text-[12px] text-red-400 mb-4">{error}</p>}

      <p className="text-[13px] text-[#E8E6E0]/45 mb-6">
        Enter the code sent to <span className="text-[#E8E6E0]/70">{email}</span>
      </p>

      <label className={labelClass}>Reset code</label>
      <input
        type="text"
        inputMode="numeric"
        placeholder="123456"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className={`${inputClass} mb-5`}
      />

      <label className={labelClass}>New password</label>
      <input
        type="password"
        placeholder="••••••••"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className={`${inputClass} mb-5`}
      />

      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full py-[13px] bg-[#E8E6E0] text-[#0A0A0F] rounded-lg text-[14px] font-medium cursor-pointer hover:bg-white transition-colors disabled:opacity-50"
      >
        {loading ? "Resetting..." : "Reset password →"}
      </button>
    </>
  )
}
