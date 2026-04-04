import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const idToken = req.cookies.get("id_token")?.value

  if (!idToken) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 })
  }

  // Decode the JWT payload — no signature verification needed here
  // since this token was set by your own callback route from Cognito directly.
  // Full verification happens in edge-service via Spring Security.
  try {
    const payload = JSON.parse(Buffer.from(idToken.split(".")[1], "base64url").toString())
    return NextResponse.json({
      email: payload.email,
      sub: payload.sub,
    })
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
