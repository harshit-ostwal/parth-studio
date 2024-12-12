import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-20vh)] gap-4">
      <p className="text-lg font-light">Sorry, This Page Was Not Found</p>
      <h1 className="text-9xl">404</h1>
      <Link href={"/"} className="outline outline-1 group outline-black/40 hover:outline-black after:outline-black/40 hover:after:outline-black relative hover:text-white transition-all overflow-hidden after:transition-all after:duration-300 ease-in-out after:ease-in-out py-2 px-5 rounded-full font-medium text-lg after:bottom-[-100%] after:left-0 after:absolute after:bg-black after:h-full after:w-full after:rounded-[50%] hover:after:rounded-none hover:after:bottom-0">
        <div className="relative z-10 flex items-center gap-2">Back To Home <div className="transition-all duration-300 -rotate-45 group-hover:rotate-0"><ArrowRight /></div></div>
      </Link>
    </div>
  )
}

export default NotFound