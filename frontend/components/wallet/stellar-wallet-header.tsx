"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { useAccount, useDisconnect } from "@/lib/stellar"
import { StellarWalletModal } from "@/components/wallet/stellar-wallet-modal"

export function StellarWalletHeader() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [shortAddress, setShortAddress] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (address) setShortAddress(`${address.slice(0, 6)}…${address.slice(-4)}`)
    else setShortAddress("")
  }, [address])

  return (
    <>
      <StellarWalletModal open={open} onOpenChange={setOpen} />
      {isConnected ? (
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="rounded-full h-9 px-4" onClick={() => setOpen(true)}>
            <Wallet className="w-4 h-4 mr-2" />
            <span>{shortAddress}</span>
          </Button>
          <Button variant="ghost" onClick={async () => await disconnect()}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Button
          className="rounded-full h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center"
          onClick={() => setOpen(true)}
        >
          <Wallet className="w-4 h-4 mr-2" />
          Connect Stellar Wallet
        </Button>
      )}
    </>
  )
}
