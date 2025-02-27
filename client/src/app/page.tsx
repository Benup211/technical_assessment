"use client"

import { useState } from "react"
import {
  Flame,
  Gem,
  Coins,
  PiggyBank,
  Settings,
  User,
  Tag,
  CoinsIcon,
  DollarSign,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { WalletDialog } from "@/components/wallet/wallet-dialog"

// Mock transaction data
const transactions = [
  {
    id: 1,
    username: "crypto_whale",
    type: "Stake",
    token: "ETH",
    amount: "5.2",
    date: "2025-02-27",
  },
  {
    id: 2,
    username: "defi_master",
    type: "Borrow",
    token: "USDC",
    amount: "10000",
    date: "2025-02-27",
  },
  {
    id: 3,
    username: "hodl_king",
    type: "Lend",
    token: "DAI",
    amount: "5000",
    date: "2025-02-26",
  },
  {
    id: 4,
    username: "eth_lover",
    type: "Stake",
    token: "ETH",
    amount: "2.5",
    date: "2025-02-26",
  },
  {
    id: 5,
    username: "yield_farmer",
    type: "Lend",
    token: "USDT",
    amount: "7500",
    date: "2025-02-25",
  },
  {
    id: 6,
    username: "nft_collector",
    type: "Borrow",
    token: "ETH",
    amount: "1.8",
    date: "2025-02-25",
  },
  {
    id: 7,
    username: "defi_explorer",
    type: "Stake",
    token: "FORGE",
    amount: "1000",
    date: "2025-02-24",
  },
  {
    id: 8,
    username: "blockchain_dev",
    type: "Lend",
    token: "USDC",
    amount: "15000",
    date: "2025-02-24",
  },
  {
    id: 9,
    username: "token_trader",
    type: "Borrow",
    token: "DAI",
    amount: "8000",
    date: "2025-02-23",
  },
  {
    id: 10,
    username: "crypto_guru",
    type: "Stake",
    token: "ETH",
    amount: "3.7",
    date: "2025-02-23",
  },
  {
    id: 11,
    username: "defi_whale",
    type: "Lend",
    token: "USDT",
    amount: "25000",
    date: "2025-02-22",
  },
  {
    id: 12,
    username: "eth_staker",
    type: "Stake",
    token: "ETH",
    amount: "10.5",
    date: "2025-02-22",
  },
]

export default function Home() {
  const [filter, setFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [walletOpen, setWalletOpen] = useState(false)
  const itemsPerPage = 5

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
    setCurrentPage(1) // Reset page when filter changes
  }

  const filteredTransactions = filter === "All" ? transactions : transactions.filter((tx) => tx.type === filter)

  // Calculate pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem)

  // Pagination controls
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <WalletDialog open={walletOpen} onOpenChange={setWalletOpen} />
      {/* Navbar */}
      <header className="border-b border-gray-800 bg-black">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-1">
            <div className="mr-4">
              <Gem className="h-6 w-6 text-teal-400" />
            </div>
            <Button variant="default" className="bg-gray-700 hover:bg-gray-600 hidden sm:inline-flex">
              Dashboard
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Staking
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Borrow
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Save
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Settings className="h-5 w-5 text-gray-400 hidden sm:block" />
            <Button
              variant="outline"
              className="border-teal-500 text-teal-500 hover:bg-teal-500/10 hidden sm:inline-flex"
              onClick={() => setWalletOpen(true)}
            >
              Connect to wallet
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-gray-900 py-2">
            <nav className="container mx-auto flex flex-col space-y-2">
              <Button variant="default" className="justify-start bg-gray-700 hover:bg-gray-600">
                Dashboard
              </Button>
              <Button variant="ghost" className="justify-start">
                Staking
              </Button>
              <Button variant="ghost" className="justify-start">
                Borrow
              </Button>
              <Button variant="ghost" className="justify-start">
                Save
              </Button>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-500/10 justify-start"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setWalletOpen(true)
                }}
              >
                Connect to wallet
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Recent Transactions Section */}
      <section className="container mx-auto py-4 sm:py-6">
        <div className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-teal-400">Recent Transactions</h2>

            <div className="overflow-x-auto -mx-4 px-4 sm:overflow-visible sm:px-0">
              <div className="flex space-x-2 min-w-max sm:min-w-0">
                <Button
                  variant={filter === "All" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("All")}
                  className={filter === "All" ? "bg-teal-600 hover:bg-teal-700" : ""}
                >
                  All
                </Button>
                <Button
                  variant={filter === "Stake" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("Stake")}
                  className={filter === "Stake" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  Stake
                </Button>
                <Button
                  variant={filter === "Borrow" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("Borrow")}
                  className={filter === "Borrow" ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  Borrow
                </Button>
                <Button
                  variant={filter === "Lend" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleFilterChange("Lend")}
                  className={filter === "Lend" ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  Lend
                </Button>
              </div>
            </div>
          </div>

          <Card className="border-gray-800 bg-[#0D1117]">
            <CardContent className="p-0">
              <div className="block sm:hidden">
                {/* Mobile View */}
                <div className="divide-y divide-gray-800">
                  {currentTransactions.map((tx, index) => (
                    <div key={tx.id} className={`p-4 ${index % 2 === 0 ? "bg-[#0D1117]" : "bg-[#1C2128]"}`}>
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-white">{tx.username}</span>
                          <Badge
                            className={
                              tx.type === "Stake"
                                ? "bg-green-500/20 text-green-400 hover:bg-green-500/20"
                                : tx.type === "Borrow"
                                  ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                                  : "bg-purple-500/20 text-purple-400 hover:bg-purple-500/20"
                            }
                          >
                            {tx.type}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Token</span>
                          <span className="text-white">{tx.token}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Amount</span>
                          <span className="text-white">{tx.amount}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Date</span>
                          <span className="text-white">{new Date(tx.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden sm:block">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-transparent">
                      <TableHead className="text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>Username</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Tag className="h-4 w-4" />
                          <span>Transaction Type</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-gray-400">
                        <div className="flex items-center space-x-1">
                          <CoinsIcon className="h-4 w-4" />
                          <span>Token</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-right text-gray-400">
                        <div className="flex items-center justify-end space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>Amount</span>
                        </div>
                      </TableHead>
                      <TableHead className="text-right text-gray-400">
                        <div className="flex items-center justify-end space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Date</span>
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentTransactions.map((tx, index) => (
                      <TableRow
                        key={tx.id}
                        className={`border-gray-800 transition-colors text-white ${
                          index % 2 === 0 ? "bg-[#0D1117]" : "bg-[#1C2128]"
                        } hover:bg-gray-800`}
                      >
                        <TableCell className="font-medium text-white">{tx.username}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              tx.type === "Stake"
                                ? "bg-green-500/20 text-green-400 hover:bg-green-500/20"
                                : tx.type === "Borrow"
                                  ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                                  : "bg-purple-500/20 text-purple-400 hover:bg-purple-500/20"
                            }
                          >
                            {tx.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-white">{tx.token}</TableCell>
                        <TableCell className="text-right text-white">{tx.amount}</TableCell>
                        <TableCell className="text-right text-white">
                          {new Date(tx.date).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800 px-4 py-3">
              <div className="text-sm text-gray-400 order-2 sm:order-1">
                Showing <span className="font-medium text-white">{indexOfFirstItem + 1}</span> to{" "}
                <span className="font-medium text-white">{Math.min(indexOfLastItem, filteredTransactions.length)}</span>{" "}
                of <span className="font-medium text-white">{filteredTransactions.length}</span> transactions
              </div>
              <div className="flex space-x-1 order-1 sm:order-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="h-8 w-8 border-gray-700"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous page</span>
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => goToPage(page)}
                    className={`h-8 w-8 ${currentPage === page ? "bg-teal-600 hover:bg-teal-700" : "border-gray-700"}`}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 border-gray-700"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto py-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-teal-400">Welcome to DeFi Forge</h1>
        <p className="mx-auto mb-12 max-w-3xl text-gray-400">
          Discover the power of decentralized finance. Get FORGE, stake tokens, borrow, lend, and save—all in one secure
          platform.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Get FORGE Card */}
          <Card className="bg-white text-black">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2">
                <Flame className="h-10 w-10 text-red-500" />
              </div>
              <CardTitle>Get FORGE</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Acquire FORGE tokens and unlock the power of decentralized finance.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700">Get FORGE</Button>
            </CardFooter>
          </Card>

          {/* Stake Card */}
          <Card className="bg-white text-black">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2">
                <Coins className="h-10 w-10 text-gray-500" />
              </div>
              <CardTitle>Stake</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Stake your FORGE tokens to earn IGNIS rewards with competitive APYs.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700">Start Staking</Button>
            </CardFooter>
          </Card>

          {/* Borrow & Lend Card */}
          <Card className="bg-white text-black">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2">
                <Gem className="h-10 w-10 text-black" />
              </div>
              <CardTitle>Borrow & Lend</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Access decentralized borrowing and lending with your FORGE tokens.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700">Borrow Now</Button>
            </CardFooter>
          </Card>

          {/* Save Card */}
          <Card className="bg-white text-black">
            <CardHeader className="text-center">
              <div className="mx-auto mb-2">
                <PiggyBank className="h-10 w-10 text-yellow-300" />
              </div>
              <CardTitle>Save</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Save your FORGE tokens securely and earn stable rewards.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700">Start Saving</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}

