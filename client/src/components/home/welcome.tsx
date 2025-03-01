import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cardDatas = [
    {
        title: "Get FORGE",
        description: "Acquire FORGE tokens and unlock the power of decentralized finance.",
        buttonText: "Get FORGE",
        imageSrc: "fire.svg",
        imageAlt: "forge fire",
    },
    {
        title: "Stake",
        description: "Stake your FORGE tokens to earn IGNIS rewards with competitive APYs.",
        buttonText: "Start Staking",
        imageSrc: "iron.svg",
        imageAlt: "forge iron",
    },
    {
        title: "Borrow & Lend",
        description: "Access decentralized borrowing and lending with your FORGE tokens.",
        buttonText: "Borrow Now",
        imageSrc: "crysto.svg",
        imageAlt: "forge crysto",
    },
    {
        title: "Save",
        description: "Save your FORGE tokens securely and earn stable rewards.",
        buttonText: "Start Saving",
        imageSrc: "shild.svg",
        imageAlt: "forge shield",
    },
]

export default function Welcome() {
    return (
        <section className="container mx-auto py-6 text-center">
            <h1 className="mb-4 text-4xl font-bold text-teal-400">Welcome to DeFi Forge</h1>
            <p className="mx-auto mb-12 max-w-3xl text-gray-400">
                Discover the power of decentralized finance. Get FORGE, stake tokens, borrow, lend, and save—all in one secure
                platform.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {cardDatas.map((card, index) => (
                    <Card key={index} className="bg-white text-black max-w-[325px] md:max-w-[280px] min-h-[280px]">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-2">
                                <Image src={card.imageSrc} width={60} height={60} alt={card.imageAlt} />
                            </div>
                            <CardTitle>{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardDescription className="text-gray-600">{card.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <Button className="bg-teal-600 hover:bg-teal-700">{card.buttonText}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
