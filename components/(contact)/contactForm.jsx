"use client"
import React, { useState } from 'react';
import Input from '../input';
import { hearAboutData, shootTypeData } from '@/data/contactForm';

function ContactForm() {
  const [shootType, setShootType] = useState(null);
  const [otherShootType, setOtherShootType] = useState('');
  const [otherHearAbout, setOtherHearAbout] = useState('');
  const [hearAbout, setHearAbout] = useState(null);

  console.log(otherHearAbout, otherShootType);

  const handleShootType = (index) => {
    setShootType(index);
    if (shootTypeData[index].shootName !== 'Others') {
      setOtherShootType('');
    }
  };

  const handleHearAbout = (index) => {
    setHearAbout(index);
    if (hearAboutData[index].hearAbout !== 'Others') {
      setOtherHearAbout('');
    }
  };

  return (
    <div className="flex justify-center w-full min-h-full">
      <form className="flex flex-col items-center justify-center w-full gap-4 xl:w-4/5">
        <div className="flex flex-col w-full gap-2 md:flex-row">
          <div className="flex flex-col w-full gap-2">
            <p>Full Name</p>
            <Input type="text" placeholder="Full Name" req={true} />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p>Email ID</p>
            <Input type="email" placeholder="abc@gmail.com" req={true} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <p>Mobile No</p>
          <Input type="text" placeholder="+91 00000 00000" req={true} />
        </div>
        <div className="flex flex-col w-full gap-2 md:flex-row">
          <div className="flex flex-col w-full gap-2">
            <p>Shoot Start Date</p>
            <Input type="date" req={true} />
          </div>
          <div className="flex flex-col w-full gap-2">
            <p>Shoot End Date</p>
            <Input type="date" req={true} />
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-4">
          <p>Shoot Type</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {shootTypeData.map((data, index) => (
              <label key={index} className={`w-[110px] py-3 border cursor-pointer ${shootType === index ? 'border-blue-500 border-2' : 'border-black/50'} rounded-xl`}>
                <Input type="radio" className="hidden" checked={shootType === index} req={true} updateValue={() => handleShootType(index)} />
                <p className="flex flex-col items-center justify-center font-semibold">
                  {data.shootName}
                </p>
              </label>
            ))}
          </div>
          {shootType !== null && shootTypeData[shootType].shootName === 'Others' && (
            <div className="flex flex-col w-full gap-2">
              <p>Please specify</p>
              <Input type="text" placeholder="Other Shoot Type Name" req={true} value={otherShootType} updateValue={(e) => setOtherShootType(e.target.value)} />
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-2">
          <p>Shoot Location</p>
          <Input type="text" placeholder="Locate Us Areas/Towns/City" req={true} />
        </div>
        <div className="flex flex-col items-start w-full gap-4">
          <p>Where did you hear about us?</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {hearAboutData.map((data, index) => (
              <label key={index} className={`w-[110px] py-3 border cursor-pointer ${hearAbout === index ? 'border-blue-500 border-2' : 'border-black/50'} rounded-xl`}>
                <Input type="radio" className="hidden" checked={hearAbout === index} req={true} updateValue={() => handleHearAbout(index)} />
                <p className="flex flex-col items-center justify-center font-semibold">
                  {data.hearAbout}
                </p>
              </label>
            ))}
          </div>
          {hearAbout !== null && hearAboutData[hearAbout].hearAbout === 'Others' && (
            <div className="flex flex-col w-full gap-2">
              <p>Please specify</p>
              <Input type="text" placeholder="Other Platform Name" req={true} value={otherHearAbout} updateValue={(e) => setOtherHearAbout(e.target.value)} />
            </div>
          )}
        </div>
        <div className="flex flex-col w-full gap-2">
          <p>Any other message or queries?</p>
          <Input type="text" placeholder="Type here anything..." req={true} />
        </div>
        <button className="w-full py-5 text-xl font-semibold text-white bg-blue-600 rounded-3xl">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;