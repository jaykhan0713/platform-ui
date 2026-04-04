import type { ResourcesConfig } from "aws-amplify"

export const awsConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
      loginWith: {
        email: true,
        oauth: {
          domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
          scopes: ["openid", "email", "profile"],
          redirectSignIn: [process.env.NEXT_PUBLIC_REDIRECT_SIGN_IN!],
          redirectSignOut: [process.env.NEXT_PUBLIC_REDIRECT_SIGN_OUT!],
          responseType: "code",
        },
      },
    },
  },
}
