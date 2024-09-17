import React from 'react'
import ellips1 from '../../assets/image/webp/ellips1.png'
import ellips2 from '../../assets/image/webp/Ellipse2.png'
import ellipsgroup from '../../assets/image/webp/ellipsgroup.png'
import { SIX_CARDS } from '../../utils/Healper'


const Why = () => {
  return (
    <div className=' bg-black relative'>
      <img src={ellips1} alt="" className=' absolute top-[2%] right-[1%] hidden' />
      <img src={ellips2} alt="" className=' absolute top-[0%] right-[1%] hidden' />
      <div className="container pt-[195px] ">
        <h1 className=' text-white font-semibold text-[40px] leading-[48px] text-center font-raleway '> Why <span className=' text-yellow'>DatingStars? </span></h1>
        <p className=' text-white font-inter font-normal text-base leading-6 text-center opacity-70 max-w-[759px]  mx-auto pt-[22px] pb-[30px]'>DatingStars has been founded in 2023, but our management team has 10 years+ experience in the casual dating vertical and has developed the best products available in the market.</p>
        <div className='flex flex-wrap flex-row mx-[-12px] mt-[30px] '>
          {SIX_CARDS.map((i, index) => (
            <div key={index} className=' xl:w-1/3 lg:w-1/2 mt-6 md:w-full px-3'>
              <div className=' p-[20px_20px_44px_20px] border-[1px] h-full min-h-[248px] border-[#5E5E5E] rounded-[22px] hover:border-[#F7B103] hover:bg-[#0C0900] bg-[#191919]'>
                <div>
                  <img className='rounded-[100px] p-4 bg-[#444444] ' src={i.icon} alt="svg/icon" />
                </div>
                <h2 className=' font-raleway font-semibold text-2xl text-white pt-6'>{i.title}</h2>
                <p className=' font-inter text-base leading-6 text-ashgrey text-white opacity-70 pt-4'>{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={ellipsgroup} alt="" className=' relative bottom-0 left-0  hidden' />
    </div>
  )
}

export default Why


