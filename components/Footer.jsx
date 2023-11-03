import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo/ps.png'
import React from 'react'
import SocailMediaIcon from './Data/SocialMedia'

export default function Footer() {
    return (
        <>
            {/* Footer Contains Logo , Navigation , Socail Links , CopyRights */}
            <div className="bg-black text-white flex flex-col justify-center gap-5 w-full h-52 xl:h-60 lg:h-46 items-center md:p-8">
                {/* Website Logo */}
                <Link href={"/"}>
                    <Image
                        src={Logo}
                        alt='Parth Studio'
                        quality={100}
                        layout="responsive"
                        loading='lazy'
                        sizes="(max-width: 1920px) 80px, (max-width: 2600px) 120px, 140px"
                    />
                </Link>
                

                {/* Copyrights */}
                <h1 className="text-gray-400 font-Poppins font-semibold text-sm sm:text-base">Copyright © 2023 - All right reserved by Harshit Ostwal</h1>

                {/* Social Media Icons */}
                <div className="flex gap-2 text-slate-400 items-center justify-center">
                    {SocailMediaIcon.map((Icons) => (
                        <Link key={Icons.id} href={Icons.href}>{Icons.icon}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}
