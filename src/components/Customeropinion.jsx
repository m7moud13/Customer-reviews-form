import React from 'react'

export const Customer = () => {
  return (
    <div className='mt-[30px]'>
        <h1 className='mb-3 text-xl'>
        Did the product met your expectations? 
        </h1>
        {/* yes */}
          <div>
              <input type="radio" name='votee' id='yes' className=' mt-2 mr-1 cursor-pointer' />
              <label for="yes">Yes</label>
          </div>
        {/* no */}
          <div>
            <input type="radio" name='votee' id='no' className=' mt-2 mr-1 cursor-pointer' />
            <label for="no">no</label>
          </div>
        </div>
  )
}
