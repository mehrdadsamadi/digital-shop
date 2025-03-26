import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Card, CardContent
} from "@/components/ui"

import IMG1 from "./images/img1.webp"
import IMG2 from "./images/img2.webp"
import IMG3 from "./images/img3.webp"
import IMG4 from "./images/img4.gif"
import Image from "next/image";

export default function Banner() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {[IMG1, IMG2, IMG3, IMG4].map((image, index) => (
                    <CarouselItem key={index}>
                            <Card className="overflow-hidden rounded-lg p-0">
                                <CardContent className="relative aspect-square h-[400px] w-full flex items-center justify-center">
                                    <Image src={image} alt="banner" fill className="object-cover" />
                                </CardContent>
                            </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
