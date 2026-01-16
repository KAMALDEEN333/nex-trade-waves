"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type StellarContextType = {
  address: string | null
  isConnected: boolean
  connect: () => Promise<{ accounts: string[] }>
  disconnect: () => Promise<void>
}

const StellarContext = createContext<StellarContextType | null>(null)

export function StellarProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // If a wallet injects a public key at load time (e.g., Freighter), try to read it.
    const tryInit = async () => {
      if (typeof window === "undefined") return
      const w = window as any
      try {
        if (w.freighterApi && typeof w.freighterApi.getPublicKey === "function") {
          const key = await w.freighterApi.getPublicKey()
          if (key) {
            setAddress(key)
            setIsConnected(true)
          }
        }
      } catch (e) {
        // ignore
      }
    }
    tryInit()
  }, [])

  const connect = async () => {
    if (typeof window === "undefined") throw new Error("No window")
    const w = window as any
    if (w.freighterApi && typeof w.freighterApi.getPublicKey === "function") {
      const key = await w.freighterApi.getPublicKey()
      setAddress(key)
      setIsConnected(true)
      return { accounts: [key] }
    }

    // If Freighter not available, open install page and throw so callers can show UI.
    window.open("https://freighter.app", "_blank")
    throw new Error("No Stellar wallet found (Freighter) - opened install page")
  }

  const disconnect = async () => {
    // Freighter does not expose programmatic disconnect; clear local state.
    setAddress(null)
    setIsConnected(false)
  }

  return (
    <StellarContext.Provider value={{ address, isConnected, connect, disconnect }}>
      {children}
    </StellarContext.Provider>
  )
}

export function useAccount() {
  const ctx = useContext(StellarContext)
  return {
    address: ctx?.address ?? null,
    isConnected: ctx?.isConnected ?? false,
  }
}

export function useConnect() {
  const ctx = useContext(StellarContext)
  if (!ctx) {
    return {
      connect: async () => ({ accounts: [] as string[] }),
      connectAsync: async () => ({ accounts: [] as string[] }),
      connectors: [] as any[],
      error: null as any,
      isPending: false,
      status: "disconnected",
    }
  }

  return {
    connect: ctx.connect,
    connectAsync: ctx.connect,
    connectors: [],
    error: null,
    isPending: false,
    status: ctx.isConnected ? "connected" : "disconnected",
  }
}

export function useDisconnect() {
  const ctx = useContext(StellarContext)
  return { disconnect: ctx ? ctx.disconnect : async () => {} }
}

export default StellarProvider
