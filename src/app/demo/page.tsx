import Link from "next/link"

export default function DemoPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">
        Coming Soon
      </p>
      <h1 className="font-syne text-4xl font-extrabold tracking-tight text-[#E8E6E0] mb-4">
        The demo is almost ready.
      </h1>
      <p className="text-sm text-[#E8E6E0]/50 max-w-sm mb-8">
        The gacha demo is under active development. Check back soon. For now, test out the{" "}
        <Link
          href="/login"
          className="text-[14px] text-purple-400 hover:text-[#E8E6E0] transition-colors text-center py-2"
        >
          AWS-Amplify Cognito+Oauth2
        </Link>{" "}
        secured login
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
