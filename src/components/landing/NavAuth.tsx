import { runWithAmplifyServerContext } from "@/components/auth/utils/amplifyServerUtils"
import { getCurrentUser } from "aws-amplify/auth/server"
import { cookies } from "next/headers"
import { Nav } from "@/components/landing/Nav"

export async function NavAuth() {
  const user = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      //server needs to know which request's cookies to read
      try {
        return await getCurrentUser(contextSpec)
      } catch {
        return null
      }
    },
  })

  const initialEmail = user?.signInDetails?.loginId ?? null

  return <Nav />
}
