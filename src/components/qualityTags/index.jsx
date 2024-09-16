import React from 'react'
import { FcApproval, FcPaid, FcShipped, FcSms } from 'react-icons/fc'
import { PiBowlFood } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'

const QualityTags = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 md:gap-6 xl:gap-8 px-24 my-10">
        <div className='flex space-x-4'>
            <FcPaid fontSize={56} />
            <div className="">
                <h1 className='font-semibold'>Wide Variety of Choices</h1>
                <p>Diverse restaurants and cuisines</p>
            </div> 
        </div>

        <div className='flex space-x-4'>
            <FcApproval fontSize={56} /> 
            <div className="">
                <h1 className='font-semibold'>Secure Payment</h1>
                <p>Safe transactions and data privacy.</p>
            </div> 
        </div>

        <div className='flex space-x-4'>
            <FcShipped fontSize={56} /> 
            <div className="">
                <h1 className='font-semibold'>Timely Delivery</h1>
                <p>Ensures fast and reliable delivery. </p>
            </div> 
        </div>

        <div className='flex space-x-4'>
            <FcSms fontSize={56} /> 
            <div className="">
                <h1 className='font-semibold'>Excellent Customer Support</h1>
                <p>Quick issue resolution.</p>
            </div> 
        </div>

        <div className='flex space-x-4'>
            <FcApproval fontSize={56} /> 
            <div className="">
                <h1 className='font-semibold'>Wide Variety of Choices</h1>
                <p>Diverse restaurants and cuisines</p>
            </div> 
        </div>

        

    </div>
  )
}

export default QualityTags