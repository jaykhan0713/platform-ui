import { NextResponse } from "next/server"
import { withAuth } from "@/utils/withAuth"

export const GET = withAuth(async (_, response, accessToken) => {
  // accessToken is guaranteed fresh here
  const backendRes = await fetch(`${process.env.API_PLATFORM_URL}/user/wallet`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await backendRes.json()
  return NextResponse.json(data, { headers: response.headers })
})
