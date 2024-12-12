import AnimatedText from '@/components/ui/animated-text'
import { flimsData } from '@/data/Flims'
import React from 'react'

function Flims() {
    return (
        <div className="flex flex-col items-center justify-center w-11/12 gap-20">
            <div className="flex flex-col items-center justify-center gap-10 text-center">
                <h1 className="relative text-center text-7xl lg:text-9xl font-SaltyFeathers">Vows on Flims</h1>
                <AnimatedText text="At Parth Studios, we turn your vows into timeless cinematic memories. We capture every heartfelt promise, preserving the emotions and magic of your day. Your love story deserves to be immortalized in stunning detail. With us, your vows will live forever on film, ready to be relived anytime. Let us create a wedding video that truly reflects the depth of your love." className="text-neutral-600" />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {flimsData.slice(0, 4).map((data, index) => (
                    <iframe src={data} className="w-[90vw] h-[30vh]" key={index} />
                ))}
            </div>
        </div>
    )
}

export default Flims