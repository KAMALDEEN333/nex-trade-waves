"use client"

import { useState, useEffect } from "react"
import { useAccount, useConnect, useDisconnect } from "@/lib/stellar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Wallet, LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function WalletConnect() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { toast } = useToast()
  const [shortAddress, setShortAddress] = useState("")

  useEffect(() => {
    if (address) {
      setShortAddress(`${address.substring(0, 6)}...${address.substring(address.length - 4)}`)
    }
  }, [address])

  // No-op: errors handled by connect() throwing

  if (isConnected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center space-x-2">
            <Wallet className="w-4 h-4" />
            <span>{shortAddress}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>Stellar Wallet Connected</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col items-start">
            <span className="font-medium">Address</span>
            <span className="text-xs text-gray-500">{shortAddress}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex flex-col items-start">
            <span className="font-medium">Connector</span>
            <span className="text-xs text-gray-500">Freighter</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={async () => {
              await disconnect()
              toast({ title: "Wallet disconnected", description: "You are now disconnected from Stellar network." })
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        onClick={async () => {
          try {
            await connect()
            toast({ title: "Wallet connected", description: "Connected to Stellar via Freighter." })
          } catch (err: any) {
            toast({ title: "Connection Error", description: err?.message || "Failed to connect wallet", variant: "destructive" })
          }
        }}
        variant="outline"
        className="flex items-center space-x-2"
      >
        <Wallet className="w-4 h-4" />
        <span>Connect Stellar Wallet</span>
      </Button>
    </div>
  )
}