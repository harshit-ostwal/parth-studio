import Image from 'next/image'
import React from 'react'
import Ps from "@/public/Logo/psblack.png"

function Header() {
    return (
        <nav className="flex items-center justify-between px-8 py-4">
            <Image src={Ps} quality={100} width={90} priority fetchPriority="high" />
        </nav>
    )
}

export default Header