"use client"

import { useState } from "react"
import { WalletDialog } from "@/components/wallet/wallet-dialog"
import { Navbar } from "@/components/home/navbar"
import Welcome from "@/components/home/welcome"
import Transaction from "@/components/home/transaction"





export default function Home() {
  const [walletOpen, setWalletOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <WalletDialog open={walletOpen} onOpenChange={setWalletOpen} />
      {/* Navbar */}
      <Navbar setWalletOpen={setWalletOpen} />
      {/* Welcome Section */}
      <Welcome />
      {/* Recent Transactions Section */}
      <Transaction />
    </div>
  )
}

