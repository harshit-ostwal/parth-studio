"use client"
import React, { useState } from 'react';
import WeddingData from './Data/Wedding';
import Image from 'next/image';
import Link from 'next/link';

export default function Wedding() {

    //Load Fully And The Show
    const [loaded, setLoaded] = useState(false);

    //Load More Map After This Number
    const [visibleItems, setVisibleItems] = useState(9);

    //Load More
    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 9);
    };

    return (
        <>
            {/* Grid Layout For Video Links Posters */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 opacity-0 duration-1000 delay-1000 ease-in-out transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setLoaded(true)}>

                {/* Mapping The Video Links & Data */}
                {WeddingData.slice(0, visibleItems).map((data) => (
                    <div key={data.id} className="bg-black">

                        {/* Mapping Image */}
                        <div className="group relative">
                            <Link href={`${data.href}`}>
                                <Image
                                    src={data.image}
                                    width={1920}
                                    loading="lazy"
                                    alt={data.title}
                                    height={1080}
                                    quality={100}
                                    className="opacity-25 group-hover:opacity-100 duration-1000 transition-all ease-in-out"
                                    onLoad={() => setLoaded(true)}
                                />
                            </Link>

                            {/* Text Details On Images */}
                            <Link href={data.href} className="absolute inset-0 flex p-5 text-center gap-5 justify-center flex-col opacity-0 group-hover:opacity-100 duration-1000 transition-all ease-in-out">
                                <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl text-white font-Salsa">{data.title}</h1>
                                <p className="font-Oregano text-lg md:text-xl lg:text-2xl font-semibold text-white">{data.date}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {WeddingData.length > visibleItems && (
                <div className="flex items-center justify-center p-20">
                    <button onClick={loadMoreItems} className="bg-slate-950 font-Salsa hover:text-slate-950 hover:bg-white hover:border hover:border-slate-950 transition-all duration-1000 animate-bounce text-gray-400 px-10 py-4 rounded-xl">
                        Load More
                    </button>
                </div>
            )}
        </>
    )
}
