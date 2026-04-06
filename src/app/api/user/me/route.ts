import { fetchAuthSession } from "aws-amplify/auth/server"
import { NextRequest, NextResponse } from "next/server"
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils"

export async function GET(request: NextRequest) {
  const response = new NextResponse()

  try {
    const email = await runWithAmplifyServerContext({
      nextServerContext: { request, response },
      operation: async (contextSpec) => {
        const session = await fetchAuthSession(contextSpec)
        const idToken = session.tokens?.idToken
        if (!idToken) return null
        return (idToken.payload["email"] as string) ?? null
      },
    })

    if (!email) {
      return NextResponse.json(
        { error: "Unauthenticated" },
        { status: 401, headers: response.headers },
      )
    }

    return NextResponse.json({ email }, { headers: response.headers })
  } catch {
    return NextResponse.json(
      { error: "Unauthenticated" },
      { status: 401, headers: response.headers },
    )
  }
}
