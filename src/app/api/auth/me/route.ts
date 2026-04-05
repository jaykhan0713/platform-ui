import { getCurrentUser } from "aws-amplify/auth/server"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils"

export async function GET() {
  try {
    const user = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    })
    return NextResponse.json({ email: user.signInDetails?.loginId ?? null })
  } catch {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 })
  }
}
