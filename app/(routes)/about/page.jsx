"use client"
import { Skeleton } from '@/components/ui/skeleton'
import { AboutImagesData } from '@/data/aboutImages'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className="flex items-center justify-center w-full h-full py-20 capitalize text-black/80">
      <div className="flex flex-col w-11/12 min-h-screen gap-20 xl:w-4/5">
        <h1 className="text-6xl font-semibold tracking-tighter sm:text-9xl text-black/80 text-nowrap">About Us</h1>
        <p className="text-sm sm:text-base md:text-lg text-black/50"> We started our venture in the year 2017 in Chennai, and we have been growing ever since! Our studio started as a one-man army, but now it comprises 15 energetic people. We have taken over 10,000 photos and more. Our motive is to always bring out the best of a happy moment. We continuously seek to create new realities, new platforms, and new experiences. The secret to our success is capturing moments without hindering their inception so that our customers can relive those moments any time they gaze upon these photographs. We have taken pictures for many events such as music and dance contests, weddings, college fests, and many more. We have taken photos of stars such as Vidya Vox. We believe that “Anybody can take a picture, but only an individual with a keen eye for detail and passion sees the picture before it is taken.” This is what XYZ studios is! We have seen it before you and are ready to capture it!</p>
        <div className="grid items-center w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AboutImagesData.map((data, index) => (
            <picture className="block overflow-hidden" key={index}>
              <Image src={data.imageUrl} width={640} height={480} quality={100} priority={true} className="object-cover w-full h-full duration-300 ease-in-out hover:scale-125 hover:origin-center" fetchPriority="high" />
            </picture>
          ))}
        </div>
        <p className="text-sm sm:text-base md:text-lg text-black/50"> We started our venture in the year 2017 in Chennai, and we have been growing ever since! Our studio started as a one-man army, but now it comprises 15 energetic people. We have taken over 10,000 photos and more. Our motive is to always bring out the best of a happy moment. We continuously seek to create new realities, new platforms, and new experiences. The secret to our success is capturing moments without hindering their inception so that our customers can relive those moments any time they gaze upon these photographs. We have taken pictures for many events such as music and dance contests, weddings, college fests, and many more. We have taken photos of stars such as Vidya Vox. We believe that “Anybody can take a picture, but only an individual with a keen eye for detail and passion sees the picture before it is taken.” This is what XYZ studios is! We have seen it before you and are ready to capture it!</p>
      </div>
    </div>
  )
}

export default page