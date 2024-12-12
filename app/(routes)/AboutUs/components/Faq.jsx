"use client"
import { FaqData } from '@/data/Faq'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

function Faq() {

    const [active, SetActive] = useState(null);

    const handleClick = (index) => {
        SetActive(active === index ? null : index);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full gap-20">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <p className="px-5 py-2 text-sm font-medium rounded-full bg-amber-100 md:text-lg">FAQ</p>
                <h1 className="text-6xl font-semibold">Frequently Asked Questions</h1>
            </div>
            <div className="flex flex-col w-full">
                {FaqData.map((data, index) => (
                    <div key={index} onClick={() => handleClick(index)} className="relative w-full overflow-hidden border-b border-black group" >
                        <div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all duration-500 left-0 w-full h-full FooterBG group-hover:rounded-none rounded-[50%]"></div>
                        <div className="py-[2vw] px-[1vw] relative z-10 flex justify-between items-center w-full h-full">
                            <div className="relative flex flex-col gap-4">
                                <h1 className="font-semibold tracking-tight md:text-xl lg:text-4xl">{data.question}</h1>
                                <div className={`transition-[max-height] overflow-hidden duration-500 ease-in-out ${active === index ? "max-h-40" : "max-h-0"}`}>
                                    <h1 className="max-w-md text-sm tracking-tight md:max-w-3xl md:text-xl">
                                        {data.answer}
                                    </h1>
                                </div>
                            </div>
                            <div className="transition-all duration-500 -rotate-45 group-hover:rotate-0"><ArrowRight className="w-4 h-4 md:h-8 md:w-8" /></div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Faq