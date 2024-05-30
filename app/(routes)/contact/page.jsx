import ContactForm from '@/components/(contact)/contactForm'
import GoogleMap from '@/components/(contact)/googleMap'
import React from 'react'

function page() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-20">
            <div className="flex flex-col justify-between w-11/12 h-full gap-20 xl:flex-row">
                <div className="flex flex-col w-full min-h-full gap-6">
                    <h1 className="text-6xl font-semibold sm:text-9xl text-nowrap">Let’s talk</h1>
                    <p className="text-lg font-medium">We’re ready to listen</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-medium">Contact us :-</p>
                        <h1 className="text-xl font-semibold">+91 00000 00000</h1>
                        <h1 className="text-xl font-semibold">contact@parthstudios.com</h1>
                        <h1 className="text-xl font-semibold">10th Ave, Ashok Nagar, Chennai, Tamil Nadu 600083</h1>
                    </div>
                </div>
                <ContactForm />
            </div>
            <GoogleMap />
        </div>
    )
}

export default page