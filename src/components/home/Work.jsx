import React from 'react'
import massage from '../../assets/image/svg/massage.svg'

const Work = () => {
  return (
    <div className=' bg-black -mt-1'>
      <div className="container">
        <div className="flex flex-wrap flex-row mx-[-12px] ">
          <div className=" w-1/2 px-3">
            <h3 className=' font-raleway font-semibold text-[40px] leading-[48px] text-white'>Let’s work together</h3>
            <p className=' font-inter font-normal text-[16px] leading-[24px] text-white opacity-70 max-w-[474px] pt-[16px]'>Building long term relationships with advertisers and publisher, is at core of our business</p>
            <h3 className='font-raleway font-semibold text-[24px] leading-[36px] text-white pt-[40px]'>Get in touch</h3>
            <p className='font-inter font-normal text-[16px] leading-[24px] text-white opacity-70 max-w-[461px] pt-[12px] '>Feel free to send us an email or complete the form, we are always happy to answer your questions and meet you.</p>
            <div className=' gap-[12px] flex items-center mt-[23px]'>
              <img src={massage} alt="" />
              <a href="" className=' font-inter font-normal text-[16px] leading-[24px] text-white'>support@datingstars.com</a>

            </div>
          </div>
          <div className="w-1/2 px-3">
            <form method="get" className='flex flex-col max-w-[465px] w-full gap-5'>
              <div className="flex justify-between gap-5">
                <input type="text" className='max-w-[222px] border border-[#828282] rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white w-full outline-none' placeholder='Name' required />
                <input type="text" className='max-w-[222px] border border-[#828282] rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white w-full outline-none' placeholder='Last Name*' required />
              </div>
              <input type="email" className='border border-[#828282] rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white outline-none' placeholder='Email*' required />
              <input type="number" className='border-[#828282] border rounded-[10px] bg-transparent h-[50px] pl-5 font-inter font-normal text-base text-white number outline-none' placeholder='Phone Number*' required />
              <textarea className='border h-[140px] border-[#828282] rounded-[10px] bg-transparent p-5 font-inter font-normal text-base text-white outline-none' placeholder='Your message...'></textarea>
              <button className='mt-5 w-[159px] h-[48px]' hoverClass='bg-white' text='Send Message' >Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work