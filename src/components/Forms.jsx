import React from 'react'

export const Forms = () => {
  return (
    <>
    <div className='mt-[30px]'>
        {/* textarea-1 */}
        <div>
          <label for='textarea-1' className='text-xl'> What are the things you're satisfied with? </label>
          <textarea name="" id="textarea-1"  className='bg-gray-100 p-2 rounded-md  border border-gray-500 block mt-3 w-[600px] h-[180px] focus:border-blue-300 text-[18px]' placeholder='Type here...' />
        </div>
        {/* textarea-2 */}
        <div className='mt-7'>
          <label for='textarea-2' className='text-xl'> What are the things you're not satisfied with? </label>
          <textarea name="" id="textarea-2"   className='bg-gray-100 p-2 rounded-md  border border-gray-500 block mt-3 w-[600px]  h-[180px] focus:border-blue-300 text-[18px]' placeholder='Type here...' />
        </div>
        {/* Overall rating  */}
            <div className='mt-7'>
            <label className='text-xl'> Overall raring</label>
            <div className='mt-[20px]'>
                <ul className='flex flex-col md:flex-row'>
                    <li className='mr-8'>
                        <input type="radio" id="1" name="hosting" value="hosting-small" class="hidden peer" required />
                        <label for="1" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                                1
                        </label>
                        <p className='text-[12px] text-gray-500 block mt-1'> Worst</p>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="2" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="2" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                2
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="3" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="3" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                3
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="4" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="4" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                4
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="5" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="5" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                5
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="6" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="6" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                6
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="7" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="7" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                7
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="8" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="8" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                8
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="9" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="9" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                9
                        </label>
                    </li>
                    <li  className='mr-8'>
                        <input type="radio" id="10" name="hosting" value="hosting-big" class="hidden peer" />
                        <label for="10" class="inline-flex my-2 items-center justify-between  text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer   peer-checked:border-blue-600 peer-checked:text-white px-3 py-1.5  peer-checked:bg-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                10
                        </label>
                        <p className='text-[12px] text-gray-500 block mt-1'> Best</p>
                    </li>
                </ul>
            </div>
        </div>
        {/* End overall Rating */}
        {/* textarea-3 */}
        <div className='mt-7'>
          <label for='textarea-3' className='text-xl'> Comments, suggestions, or feedback </label>
          <textarea name="" id="textarea-3"  className='bg-gray-100 p-2 rounded-md  border border-gray-500 block mt-3 w-[600px] h-[180px] focus:border-blue-300 text-[18px]' placeholder='Type here...' />
        </div>
        {/* last tow qustions for the customer  */}
        {/* first one */}
        <div className='mt-7'>
                <div>
                <h1 className='mb-3 text-xl'>
                Would you refer us to your friends, family, or colleagues? 
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
        </div>
        {/* secone */}
        <div className='mt-7'>
                <div>
                <h1 className='mb-3 text-xl'>
                Would you like to receive email newsletter about our products? 
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
        </div>
        <div className='mt-7'>
                <div>
                <h1 className='mb-3 text-xl'>
                Did you like this form ? 
                </h1>
                {/* yes */}
                <div>
                    <input type="radio" name='votee' id='yes' className=' mt-2 mr-1 cursor-pointer' />
                    <label for="yes">Yes</label>
                </div>
                {/* no */}
                <div>
                    <input type="radio" name='votee' id='no' className=' mt-2 mr-1 cursor-pointer' />
                    <label for="no">Yes</label>
                </div>
            </div>
        </div>
        {/* submit button  */}
        <div className='mt-10 text-center'>
            <input type="submit" className='px-7 my-3 h-[45px] bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700' />
        </div>
    </div>
    </>
  )
}
