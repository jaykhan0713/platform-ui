import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN!
  const clientId = process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN!

  // Exchange authorization code for tokens
  const tokenRes = await fetch(`${cognitoDomain}/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      code,
      redirect_uri: redirectUri,
    }),
  })

  if (!tokenRes.ok) {
    console.error("Token exchange failed", await tokenRes.text())
    return NextResponse.redirect(new URL("/login?reason=auth_failed", req.url))
  }

  const tokens = await tokenRes.json()

  const isProd = process.env.NODE_ENV === "production"

  const cookieOptions = {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax" as const,
    path: "/",
  }

  const response = NextResponse.redirect(new URL("/demo", req.url))

  response.cookies.set("access_token", tokens.access_token, {
    ...cookieOptions,
    maxAge: tokens.expires_in, // typically 3600 (1 hour)
  })

  response.cookies.set("id_token", tokens.id_token, {
    ...cookieOptions,
    maxAge: tokens.expires_in,
  })

  response.cookies.set("refresh_token", tokens.refresh_token, {
    ...cookieOptions,
    maxAge: 60 * 60 * 24 * 30, // 30 days, matches Cognito default
  })

  return response
}
