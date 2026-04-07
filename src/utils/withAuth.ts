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
    } catch (e: unknown) {
      return NextResponse.json(
        { error: (e as Error).message },
        { status: 500, headers: response.headers },
      )
    }
  }
}
