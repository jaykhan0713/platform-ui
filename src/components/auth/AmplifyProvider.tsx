"use client"

import { Amplify } from "aws-amplify"
import { awsConfig } from "@/config/env"

Amplify.configure(awsConfig)

export function AmplifyProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
