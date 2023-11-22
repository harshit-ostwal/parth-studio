import Image from 'next/image'
import React from 'react'
import SilderData from './Data/Silder'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Slider() {
    return (
        <>
            <div className="">
                <div className="">

                    {/* Left Arrow Button For Previous Slide */}
                    <ArrowLeft size={32} color='black' />

                    {/* Mapping Slide Images */}
                    {SilderData.map((data) => (
                        <div key={data.id} className="">
                            <Image
                                src={data.image}
                                alt={data.title}
                                quality={100}
                                loading="lazy"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    ))}

                    {/* Right Arrow Button For Next Slide */}
                    <ArrowRight size={32} color='black' />
                </div>

                {/* Indicators For Slides */}
                <div>

                </div>

            </div>
        </>
    )
}
