import { createServerRunner } from "@aws-amplify/adapter-nextjs"

export const { runWithAmplifyServerContext, createAuthRouteHandlers } = createServerRunner({
  config: {
    version: "1",
    auth: {
      user_pool_id: process.env.NEXT_PUBLIC_USER_POOL_ID!,
      aws_region: process.env.NEXT_PUBLIC_AWS_REGION!,
      user_pool_client_id: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
      oauth: {
        domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
        scopes: ["openid", "email"],
        redirect_sign_in_uri: [process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN!],
        redirect_sign_out_uri: [process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT!],
        response_type: "code",
        identity_providers: ["COGNITO"],
      },
    },
  },
})
