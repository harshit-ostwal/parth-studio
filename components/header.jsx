import Image from 'next/image'
import React from 'react'
import Ps from "@/public/Logo/psblack.png"
import Link from 'next/link'

function Header() {
    return (
        <nav className="flex items-center justify-center w-full py-5">
            <div className="flex items-center justify-between w-11/12">
                <Image src={Ps} quality={100} width={90} priority fetchPriority="high" alt="Parth Studio" />
                <Link href="/" className="px-8 py-2 text-xl font-medium rounded-full outline">Menu</Link>
            </div>
        </nav>
    )
}

export default Header