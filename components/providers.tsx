"use client"

import { WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { config } from "@/lib/wagmi"
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { base } from 'wagmi/chains'
import { ThemeProvider } from "@/components/theme-provider"

// Set up react-query client
const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  // Use the API key from environment variables
  const okApiKey = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'development-key'
  
  // Disable OnchainKit telemetry/analytics to avoid CORS noise during local dev
  const okConfig = { analytics: false } as const

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider 
          chain={base} 
          apiKey={okApiKey} 
          config={okConfig}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}