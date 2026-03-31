import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p
        className="font-display font-extrabold text-[#E8E6E0] tracking-[-2px] mb-4"
        style={{ fontSize: "clamp(48px, 10vw, 96px)" }}
      >
        404
      </p>
      <p className="text-[16px] text-[#E8E6E0]/45 mb-8">This page doesn&#39;t exist.</p>
      <Link
        href="/"
        className="text-[13px] font-medium text-[#0A0A0F] bg-[#E8E6E0] px-5 py-2 rounded-md hover:bg-white transition-colors"
      >
        ← Back to jay.platform
      </Link>
    </div>
  )
}
