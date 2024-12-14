import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { SiAdguard } from "react-icons/si";



const Underline = () => {
    return (
        <div className='flex flex-row justify-center relative bg-[#FFFFFF] h-auto md:h-[50px]'>
            <div className='flex items-center gap-2 text-[11px] font-bold'> <div className='py-1'><CiDeliveryTruck /></div> Fast Delivery</div>
            <div className='flex items-center gap-2 text-[11px] font-bold'> 
                <div className='py-1'></div>
                <div className='py-1'><SlCalender /></div > World-class warranty
            </div>
            <div className='flex items-center gap-2 text-[11px] font-bold'> 
                <div className='py-1'></div>
                <div className='py-1'><SiAdguard /> </div> 120-night free trial
            </div>
        </div>
  )
}

export default Underline