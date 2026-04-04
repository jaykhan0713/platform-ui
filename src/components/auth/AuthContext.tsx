"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

interface AuthState {
  userEmail: string | null
  isAuthReady: boolean
  handleSignOut: () => void
}

const AuthContext = createContext<AuthState>({
  userEmail: null,
  isAuthReady: false,
  handleSignOut: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false)
  const channelRef = useRef<BroadcastChannel | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me")
        if (res.ok) {
          const { email } = await res.json()
          setUserEmail(email ?? null)
        } else {
          setUserEmail(null)
        }
      } catch {
        setUserEmail(null)
      } finally {
        setIsAuthReady(true)
      }
    }
    checkAuth()
  }, [pathname])

  useEffect(() => {
    channelRef.current = new BroadcastChannel("auth")
    channelRef.current.onmessage = (e) => {
      if (e.data.type === "signOut") {
        setUserEmail(null)
      }
    }
    return () => channelRef.current?.close()
  }, [])

  const handleSignOut = () => {
    channelRef.current?.postMessage({ type: "signOut" })
    window.location.href = "/api/auth/logout"
  }

  return (
    <AuthContext.Provider value={{ userEmail, isAuthReady, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
