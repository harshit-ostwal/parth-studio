import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo/ps.png'
import React from 'react'
import SocailMediaIcon from './Data/SocialMedia'

export default function Footer() {
    return (
        <>
            {/* Footer Contains Logo , Navigation , Socail Links , CopyRights */}
            <div className="bg-slate-950 flex flex-col justify-center gap-3 w-full py-14 items-center md:p-8">
                {/* Website Logo */}
                <Link href={"/"}>
                    <Image
                        src={Logo}
                        alt='Parth Studio'
                        width={80}
                        height={80}
                        quality={100}
                    />
                </Link>

                {/* Copyrights */}
                <h1 className="text-gray-400 font-Oregano tracking-wide md:tracking-widest font-semibold text-xs sm:text-base">Copyright © 2023 - All right reserved by Harshit Ostwal</h1>

                {/* Social Media Icons */}
                <div className="flex gap-2 text-slate-400 items-center justify-center">
                    {SocailMediaIcon.map((Icons) => (
                        <Link key={Icons.id} target="_blank" href={Icons.href}>{Icons.icon}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}
