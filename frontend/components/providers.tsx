"use client"

import { StellarProvider } from "@/lib/stellar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// OnchainKit depends on wagmi; removed to avoid pulling wagmi back in.
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type { Transition } from "framer-motion"

// Set up react-query client
const queryClient = new QueryClient()

// Animation variants for page transitions
const pageVariants = {
  hidden: { opacity: 0, x: -10 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 }
}

const pageTransition: Transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.3
}

function PageAnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StellarProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageAnimationProvider>
            {children}
          </PageAnimationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StellarProvider>
  )
}