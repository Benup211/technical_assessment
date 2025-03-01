import Image from "next/image"
import {
    Menu,
    X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar({ setWalletOpen }: {
    setWalletOpen: (open: boolean) => void
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="border-b border-gray-800 bg-black">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-1">
                    <div className="mr-4">
                        <Image src="/favicon.svg" alt="Logo" width={28} height={28} />
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
                    <Image src="/globe.svg" alt="globe" width={28} height={28} />
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
    )
}
