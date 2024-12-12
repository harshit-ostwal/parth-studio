import Image from 'next/image'
import React from 'react'
import ServiceImg from "@/public/Service.svg";

function Service() {

  return (
    <div className="flex flex-col items-center justify-center w-4/5 leading-none gap-14 md:w-full">
      <p className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-neutral-200 md:text-lg">What We Do</p>
      <Image width={700} height={400} className="object-cover" fetchPriority="high" loading="eager" src={ServiceImg} />
    </div>
  )
}

export default Service