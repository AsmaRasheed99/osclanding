import React from 'react'
import Logo from './Images/Logo.png'
import phone from './Images/phone.png'
import qr from './Images/qr.png'
const Landing = () => {
  return (
    <div className='flex flex-col  bg-gray-300 items-center h-fit'>
      <div className='flex flex-wrap align-center items-center pt-5'>
        <img className="w-14 h-14" src={Logo} alt="" /> <div className='text-white  text-lg'>BAGUARD</div>
      </div>
      <div className='bg-white shadow-xl rounded-md lg:w-2/3 my-5 py-5 '>
       <div className='flex flex-wrap lg:pl-10 py-5 rounded-lg m-5 border border-gray-500'>
        <img className='lg:w-10 lg:h-15 hidden lg:inline-block' src={phone} alt="" /> 
        <div className='p-5 font-semibold'>Download BAGUARD For Your Phone <br></br> <span className='text-gray-400 text-sm'>Track your Lugagge Location , Damage , Estimated time of arrival wherever you are.</span></div>
        <button className='bg-[#658eac] self-center text-white h-fit ml-2 lg:ml-0 py-2 px-4 rounded-3xl'>Get The App</button>
       </div>
       <div className='flex flex-wrap justify-around py-5'>
        <div>
          <span className='text-[#658eac] font-bold lg:text-2xl'>WHY</span> <span className='text-red-700 font-bold text-2xl'>CHOOSE US ?</span>
          <ul>
            <li className='pb-2  pt-4 lg:text-xl font-semibold'>Eco-Friendly</li>
            <li className='py-2 lg:text-xl font-semibold'>Seamless Integration</li>
            <li className='py-2 lg:text-xl font-semibold'>Costumized Experience</li>
            <li className='py-2 lg:text-xl font-semibold'>Global Support</li>
            <li className='py-2 lg:text-xl font-semibold'>Next Generation Security</li>
            <li className='py-2 lg:text-md text-gray-400'>Scan the QR Code to visit our website</li>
          </ul>
        </div>
        <img className='w-80 h-80' src={qr} alt="" />
       </div>
      </div>
    </div>
  ) 
}

export default Landing