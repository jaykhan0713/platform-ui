import { NextResponse } from "next/server"
import { withAuth } from "@/utils/withAuth"

export const GET = withAuth(async (_, response, accessToken) => {
  // accessToken is guaranteed fresh here
  const backendRes = await fetch(`${process.env.API_PLATFORM_URL}/user/wallet`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const contentType = backendRes.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) {
    // API GW returned HTML 503 or similar
    throw new Error(`Services down: ${backendRes.status}`)
  }
  const data = await backendRes.json()

  //note that consumer of this handler needs to check status.ok
  return NextResponse.json(data, { status: backendRes.status, headers: response.headers })
})
