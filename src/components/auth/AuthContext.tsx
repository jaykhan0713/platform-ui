"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Amplify } from "aws-amplify"
import { getCurrentUser, signOut } from "aws-amplify/auth"
import { usePathname } from "next/navigation"
import { awsConfig } from "@/config/env"

//ssr moves access/id/refresh tokens from local storage to cookies so server and client can both use.
Amplify.configure(awsConfig, { ssr: true })

interface AuthState {
  userEmail: string | null
  handleSignOut: () => Promise<void>
}

const AuthContext = createContext<AuthState>({
  userEmail: null,
  handleSignOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        //throws if no session
        const userName = await getCurrentUser().then((authUser) => authUser.signInDetails?.loginId)
        setUserEmail(userName ?? null)
      } catch {
        setUserEmail(null) //not authenticated, clear email
      }
    }
    checkAuth()
  }, [pathname])

  const handleSignOut = async () => {
    await signOut()
    setUserEmail(null)
  }

  return (
    <AuthContext.Provider value={{ userEmail, handleSignOut }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
