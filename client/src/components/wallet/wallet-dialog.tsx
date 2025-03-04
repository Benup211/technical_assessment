import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DialogDescription } from "@radix-ui/react-dialog"

interface WalletDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function WalletDialog({ open, onOpenChange }: WalletDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-[#0e0d0d] border-gray-800">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogDescription className="hidden">Hardware Wallet Connection</DialogDescription>
                    <DialogTitle className="text-xl font-semibold text-white">Connect Wallet</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <p className="text-gray-400 text-sm">Choose how you want to connect. There are several wallet providers.</p>
                    <div className="space-y-2">
                        <Button
                            variant="outline"
                            className="w-full bg-[#2C2C2C] border-gray-700 hover:bg-[#3C3C3C] text-white hover:text-white justify-between h-12"
                        >
                            Connect to Ledger
                            <Image src="/ledger.svg?height=24&width=24" alt="ledger logo" width={24} height={24} className="ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full bg-[#2C2C2C] border-gray-700 hover:bg-[#3C3C3C] text-white hover:text-white justify-between h-12"
                        >
                            Connect to Trezor
                            <Image
                                src="/trezor.svg?height=24&width=24"
                                alt="trezor logo"
                                width={24}
                                height={24}
                                className="ml-2"
                            />
                        </Button>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-4">
                    <p className="text-xs text-gray-400 text-center">
                        By connecting a wallet, you agree to DeFi Forge Terms of Service and Privacy Policy
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

