import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <>
            <div className="absolute top-0 h-full w-full bg-slate-950 gap-10 flex flex-col items-center justify-center">
                <div className="flex items-center gap-6">
                    <h1 className="text-2xl font-semibold text-white">404</h1>
                    <div className="border-r border-solid h-12 border-gray-600"></div>
                    <h1 className="text-sm text-white">This page could not be found.</h1>
                </div>
                <Link href={"/"} className="flex text-white gap-3 animate-bounce"><ArrowLeftIcon color='gold' size={24}/> Go back</Link>
            </div>
        </>
    )
}
