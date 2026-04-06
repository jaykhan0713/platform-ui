import { fetchAuthSession } from "aws-amplify/auth/server"
import { NextRequest, NextResponse } from "next/server"
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils"
import { AmplifyServer } from "aws-amplify/adapter-core"

export async function proxy(request: NextRequest) {
  // Early return for RSC prefetch requests, don't redirect these
  if (request.headers.get("RSC") === "1") {
    return NextResponse.next()
  }

  const response = NextResponse.next()

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec: AmplifyServer.ContextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec)
        return session.tokens?.accessToken !== undefined && session.tokens?.idToken !== undefined
      } catch {
        return false
      }
    },
  })

  if (authenticated) return response

  return NextResponse.redirect(new URL("/api/auth/sign-in", request.url))
}

export const config = {
  matcher: ["/demo/:path*"],
}
