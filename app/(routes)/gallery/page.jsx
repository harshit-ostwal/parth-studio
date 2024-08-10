"use client"
import GalleryImages from '@/components/(gallery)/galleryImages'
import React from 'react'

function Page() {

    return (
        <div className="flex items-center justify-center w-full h-full py-20 capitalize text-black/80">
            <div className="flex flex-col w-11/12 min-h-screen gap-20 xl:w-4/5">
                <div className="flex flex-col">
                    <h1 className="text-6xl font-semibold sm:text-9xl text-nowrap">Gallery</h1>
                    <p className="text-base font-medium sm:text-lg md:text-xl text-black/60">Capturing Moments, Crafting Beauty.</p>
                    <p className="text-base font-medium sm:text-lg md:text-xl text-black/60">Here Are Some Gallery Pictures Where Moments Become Art.</p>
                </div>
                <GalleryImages />
            </div>
        </div>
    )
}

export default Page