import Image from 'next/image'
import React from 'react'
import { Send } from 'lucide-react'

export default function page() {
  return (
    <>
      {/* ReachUs Page Has Image And Form  */}
      <div className="sm:mt-20 sm:mb-20 mt-10 flex justify-center items-center flex-col gap-10 sm:gap-20">
        <div className='flex flex-col sm:p-5 p-3 overflow-y-auto w-full gap-10'>
          <div className="text-lg text-center md:text-xl lg:text-2xl xl:text-3xl font-Merienda font-bold">Looking To Capture Like This Moment With Us?</div>
          <div>
            {/* Reach Us Image */}
            <Image
              src="https://res.cloudinary.com/davazn01h/image/upload/v1699086298/Parth%20Studio/Reach%20Us/zfismogzg42qnda2ivx1.jpg"
              alt='ReachUs'
              width={1920}
              height={1080}
              loading="lazy"
              quality={100}
            />
          </div>
        </div>

        {/* Reach Us Form */}
        <form className="w-full font-Poppins md:p-10 p-3 text-sm md:text-base">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:gap-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="f_couple_name" className="text-gray-500 ml-1">Couple Name</label>
              <input type="text" name="f_couple_name" id="f_couple_name" placeholder="Name" className='h-14 rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="f_email_id" className="text-gray-500 ml-1">Email ID</label>
              <input type="email" name="f_email_id" id="f_email_id" placeholder="name@gmail.com" className='h-14 rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="f_mobile_no" className="text-gray-500 ml-1">Mobile No</label>
              <input type="number" name="f_mobile_no" id="f_mobile_no" placeholder="+91 XXXXX XXXXX" className='h-14 rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="f_shoot_date" className="text-gray-500 ml-1">Shoot Date</label>
              <input type="date" name="f_shoot_date" id="f_shoot_date" className='h-14 w-full rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="f_shoot_type" className="text-gray-500 ml-1">Type Shoot</label>
              <input type="text" name="f_shoot_type" id="f_shoot_type" placeholder="Wedding / Couple Shoot / Other Events" className='h-14 rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="f_shoot_location" className="text-gray-500 ml-1">Shoot Location</label>
              <input type="text" name="f_shoot_location" id="f_shoot_location" placeholder="India / International" className='h-14 rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="f_shoot_location" className="text-gray-500 ml-1">How Did You Hear About Us?</label>
              <input type="text" name="f_shoot_location" id="f_shoot_location" placeholder="Instagram / Facebook / Youtube / Others" className='h-14 rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="f_shoot_location" className="text-gray-500 ml-1">If There Are Any Details We Are Missing Out, Please Let Us Know?</label>
              <input type="text" name="f_shoot_location" id="f_shoot_location" placeholder="No.Of.Guests , Flow Of Events etc..." className='h-14 rounded-2xl border border-gray-300 bg-transparent p-5 hover:border-black transition-all duration-300 ease-in-out' required />
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 mb-20">
            <button type="submit" className="bg-slate-500 text-white flex gap-2 items-center py-5 px-20 font-semibold rounded-3xl">
              <Send size={18} />
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
