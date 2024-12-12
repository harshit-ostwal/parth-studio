import { NumberTicker } from '@/components/ui/number-ticker'
import React from 'react'

function Counter() {

  const CounterData = [
    {
      name: "Events Covered",
      value: 305
    },
    {
      name: "Shoot Days",
      value: 638
    },
    {
      name: "Happy Couples",
      value: 116
    },
    {
      name: "States Covered",
      value: 7
    },
    {
      name: "Team Members",
      value: 25
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-10 lg:gap-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {CounterData.map((data, index) => (
        <div key={index} className="flex flex-col items-center justify-center h-40 gap-4 rounded-md min-w-40">
          <div className="flex">
            <NumberTicker value={data.value} />
            <span className="text-3xl font-light md:text-4xl">+</span>
          </div>
          <p className="text-lg font-medium md:text-xl text-neutral-600">{data.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Counter