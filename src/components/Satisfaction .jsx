import React from 'react'

export const Satisfaction  = () => {
  return (
    <>
    <div className='mt-[30px]'>
        <h1 className='mb-3 text-xl'>
        Satisfaction rating about the product or service 
        </h1>
        {/* Full Satisfaction Tabl */}
        <table className='w-[350px] md:w-[500px] lg:w-[700px]'>
            <thead>
                <tr>
                    <td className='border-none'></td>
                    <td  className='p-2  bg-[#c3cad8]'>Very Satisfied</td>
                    <td  className='p-2  bg-[#c3cad8]'>Satisfied</td>
                    <td  className='p-2  bg-[#c3cad8]'>Somewhat Satisfied</td>
                    <td  className='p-2  bg-[#c3cad8]'>Not Satisfied</td>
                </tr>
            </thead>
            <tbody className='text-center'>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px]'>Quality</td>
                    <td><input type="radio" name='vote1' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote1' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote1' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote1' className='cursor-pointer'/></td>
                </tr>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px]'>Customer service</td>
                    <td><input type="radio" name='vote2' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote2' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote2' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote2' className='cursor-pointer'/></td>
                </tr>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px] '>Experience</td>
                    <td><input type="radio" name='vote3' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote3' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote3' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote3' className='cursor-pointer'/></td>
                </tr>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px] '>Price</td>
                    <td><input type="radio" name='vote4' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote4' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote4' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote4' className='cursor-pointer'/></td>
                </tr>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px] '>Cleanliness</td>
                    <td><input type="radio" name='vote5' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote5' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote5' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote5' className='cursor-pointer'/></td>
                </tr>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px] '>Attitude of the staff</td>
                    <td><input type="radio" name='vote6' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote6' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote6' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote6' className='cursor-pointer'/></td>
                </tr>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px] '>Professionalism of the staff</td>
                    <td><input type="radio" name='vote7' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote7' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote7' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote7' className='cursor-pointer'/></td>
                </tr>
                <tr>
                    <td className=' bg-[#c3cad8] w-[200px] p-2 text-left text-[15px] ' >Friendliness of the staff</td>
                    <td><input type="radio" name='vote8' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote8' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote8' className='cursor-pointer'/></td>
                    <td><input type="radio" name='vote8' className='cursor-pointer'/></td>
                </tr>
            </tbody>
        </table>
        </div>
    </>
  )
}
