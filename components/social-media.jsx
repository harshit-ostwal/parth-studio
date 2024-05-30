import { SocialMediaData } from '@/data/social-media'
import Link from 'next/link'
import React from 'react'

function SocialMedia() {
    return (
        <div className="flex gap-5">
            {SocialMediaData.map((data, index) => (
                <Link href={data.iconHref} key={index}>{data.iconName}</Link>
            ))}
        </div>
    )
}

export default SocialMedia