"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Amplify } from "aws-amplify"
import { getCurrentUser, signOut } from "aws-amplify/auth"
import { usePathname } from "next/navigation"
import { awsConfig } from "@/config/env"

Amplify.configure(awsConfig)

interface AuthState {
  userEmail: string | null
  authLoading: boolean
  handleSignOut: () => Promise<void>
}

const AuthContext = createContext<AuthState>({
  userEmail: null,
  authLoading: true,
  handleSignOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = async () => {
      setAuthLoading(true)
      try {
        const userName = await getCurrentUser().then((authUser) => authUser.signInDetails?.loginId) //throws if no session
        setUserEmail(userName ?? null)
      } catch {
        setUserEmail(null) //not authenticated, clear email
      } finally {
        setAuthLoading(false)
      }
    }
    checkAuth()
  }, [pathname])

  const handleSignOut = async () => {
    await signOut()
    setUserEmail(null)
  }

  return (
    <AuthContext.Provider value={{ userEmail, authLoading, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
