import React from 'react'

export const Customerinfo = () => {
    return (
    <>
    <div className='mt-[50px]'>
        {/* Customer name */}
        <div>
            <label for="name" className=''>
                Customer's Name 
            </label>
            <div className='flex flex-col sm:flex-row  mt-2'>
                <div>
                    <input type="text" id="name" className=' bg-gray-100 rounded-md  border border-gray-500  mr-14 p-1 w-[300px] focus:border-blue-600' />
                    <p className='text-sm mt-1 text-gray-500'>First Name</p>
                </div>
                <div>
                    <input type="text" className=' bg-gray-100 rounded-md border border-gray-500  w-[300px] p-1 focus:border-blue-600'/>
                    <p className='text-sm mt-1 text-gray-500'>Last Name</p>
                </div>
            </div>
        </div>
        {/* Customer phone and Email  */}
        <div className='mt-5 flex flex-col sm:flex-row'>
        {/* Phone */}
        <div>
            <label for="phone">Customer's Phone Number </label>
            <input type="text" id='phone' className=' bg-gray-100 rounded-md  border border-gray-500  w-[300px]  mr-14 p-1 focus:border-blue-600 block mt-2' placeholder='(000) 000-0000'  />
            <p className='text-sm mt-1 text-gray-500'>Please enter a valid phone number.</p>
        </div>
        {/* Email */}
        <div>
            <label for="email">Customer's Email </label>
            <input type="text" id='email' className=' bg-gray-100 rounded-md  border border-gray-500  w-[300px] mr-14 p-1 focus:border-blue-600 block mt-2' />
            <p className='text-sm mt-1 text-gray-500'>example@example.com</p>
        </div>
        </div>
    </div>
    </>
    )
}
