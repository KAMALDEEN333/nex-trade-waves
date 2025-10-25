"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  Settings,
  User,
  LogOut,
  Plus,
  TrendingUp,
  DollarSign,
  Activity,
  BarChart3,
  Search,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { WalletConnect } from "@/components/wallet/wallet-connect"
import { BasecoinWalletHeader } from "@/components/wallet/basecoin-wallet-header"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const portfolioStats = [
    {
      title: "Portfolio Value",
      value: "$125,847.32",
      change: "+12.45%",
      icon: DollarSign,
      color: "text-amber-600",
      trend: "up",
    },
    {
      title: "24h P&L",
      value: "+$3,247.89",
      change: "+2.67%",
      icon: TrendingUp,
      color: "text-green-600",
      trend: "up",
    },
    {
      title: "Total Trades",
      value: "1,247",
      change: "+23",
      icon: Activity,
      color: "text-blue-600",
      trend: "up",
    },
    {
      title: "Win Rate",
      value: "68.5%",
      change: "+1.2%",
      icon: BarChart3,
      color: "text-purple-600",
      trend: "up",
    },
  ]

  const recentTrades = [
    {
      pair: "ETH/USDC",
      type: "Buy",
      amount: "2.5 ETH",
      value: "$5,420.00",
      time: "2 min ago",
      status: "Completed",
    },
    {
      pair: "BTC/USDC",
      type: "Sell",
      amount: "0.1 BTC",
      value: "$4,320.50",
      time: "15 min ago",
      status: "Completed",
    },
    {
      pair: "SOL/USDC",
      type: "Buy",
      amount: "15 SOL",
      value: "$1,475.25",
      time: "1 hour ago",
      status: "Completed",
    },
    {
      pair: "AVAX/USDC",
      type: "Sell",
      amount: "8 AVAX",
      value: "$86.40",
      time: "2 hours ago",
      status: "Completed",
    },
  ]

  const watchlist = [
    { name: "Ethereum", symbol: "ETH", price: "$2,168.00", change: "+2.45%", icon: "🔷" },
    { name: "Bitcoin", symbol: "BTC", price: "$43,250.00", change: "+1.82%", icon: "🔶" },
    { name: "Solana", symbol: "SOL", price: "$98.75", change: "+5.23%", icon: "🟢" },
    { name: "Avalanche", symbol: "AVAX", price: "$10.80", change: "-0.95%", icon: "🔺" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Nex Trade Wave 🌊</span>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search markets, tokens..."
                className="pl-10 pr-4 py-2 bg-white/50 border-amber-200 focus:border-amber-300 focus:ring-amber-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Basecoin Wallet Header */}
            <BasecoinWalletHeader />
            
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">User</p>
                    <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Trader!</h1>
          <p className="text-gray-600">Monitor your portfolio and execute trades on Base network.</p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portfolioStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className={`text-xs flex items-center ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>Your trading performance over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <p className="text-gray-600">Portfolio chart visualization</p>
                    <p className="text-sm text-gray-500 mt-2">Interactive chart showing your Base network trading performance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Trades</CardTitle>
                <CardDescription>Latest transactions on Base network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-amber-50 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">{trade.pair}</div>
                        <div className="text-sm text-gray-500">{trade.time}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${trade.type === "Buy" ? "text-green-600" : "text-red-600"}`}>
                          {trade.type} {trade.amount}
                        </div>
                        <div className="text-sm text-gray-500">{trade.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Watchlist */}
        <div className="mt-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Watchlist</CardTitle>
              <CardDescription>Track your favorite tokens on Base network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {watchlist.map((token, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-amber-200 hover:bg-amber-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{token.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{token.name}</div>
                        <div className="text-sm text-gray-500">{token.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{token.price}</div>
                      <div className={`text-sm ${token.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                        {token.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}