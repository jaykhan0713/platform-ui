// Higher order function, route handler wrapper to ensure accessToken is refreshed
import { fetchAuthSession } from "aws-amplify/auth/server"
import { NextRequest, NextResponse } from "next/server"
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils"
import { AmplifyServer } from "aws-amplify/adapter-core"

type AuthenticatedHandler = (
  request: NextRequest,
  response: NextResponse,
  accessToken: string,
) => Promise<NextResponse>

export function withAuth(handler: AuthenticatedHandler) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const response = new NextResponse()

    try {
      const accessToken = await runWithAmplifyServerContext({
        nextServerContext: { request, response },
        operation: async (contextSpec: AmplifyServer.ContextSpec) => {
          const session = await fetchAuthSession(contextSpec)
          return session.tokens?.accessToken?.toString() ?? null
        },
      })

      if (!accessToken) {
        return NextResponse.json(
          { error: "Unauthenticated" },
          { status: 401, headers: response.headers },
        )
      }

      return await handler(request, response, accessToken)
    } catch {
      return NextResponse.json(
        { error: "Unauthenticated" },
        { status: 401, headers: response.headers },
      )
    }
  }
}

// // src/app/api/<api call paths>/route.ts
// import { withAuth } from "@/utils/withAuth"
// import { NextRequest, NextResponse } from "next/server"
//
// export const GET = withAuth(async (request, response, accessToken) => {
//   // accessToken is guaranteed fresh here
//   const backendRes = await fetch(`${process.env.BACKEND_URL}/...`, {
//     headers: { Authorization: `Bearer ${accessToken}` }
//   })
//   const data = await backendRes.json()
//   return NextResponse.json(data, { headers: response.headers })
// })
