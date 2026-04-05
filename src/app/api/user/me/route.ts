import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const allCookies = cookieStore.getAll()
    const idTokenCookie = allCookies.find((c) => c.name.endsWith(".idToken"))

    if (!idTokenCookie) {
      return NextResponse.json({ error: "Unauthenticated" }, { status: 401 })
    }

    const payload = JSON.parse(
      Buffer.from(idTokenCookie.value.split(".")[1], "base64url").toString(),
    )

    return NextResponse.json({ email: payload.email ?? null })
  } catch {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 })
  }
}
