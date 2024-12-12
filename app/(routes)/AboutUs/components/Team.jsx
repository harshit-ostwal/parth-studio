import { TeamData } from '@/data/Team'
import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 text-center">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <p className="px-5 py-2 text-sm font-medium rounded-full bg-amber-100 md:text-lg">Team</p>
        <h1 className="text-6xl font-semibold">Meet The Squad</h1>
      </div>

      <div className="grid items-center w-full grid-cols-1 gap-10 leading-none text-left md:w-11/12 lg:w-3/4 sm:grid-cols-2 xl:grid-cols-3">
        {TeamData.map((data, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <div className="relative w-full h-80">
              <Image draggable={false} src={data.image} fetchPriority="high" priority loading="eager" quality={100} alt="Image" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-medium">{data.name}</h1>
              <p className="text-neutral-500">{data.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team