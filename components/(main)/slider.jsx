"use client"
import React, { useRef } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { SliderData } from '@/data/slider'

function Slider() {

    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="bg-transparent lg:w-11/12 xl:w-11/12"
        >
            <CarouselContent>
                {SliderData.map((data, index) => (
                    <CarouselItem key={index}>
                        <img src={data.imageUrl} className="w-full h-full lg:h-[800px] object-cover" fetchPriority="high" />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default Slider