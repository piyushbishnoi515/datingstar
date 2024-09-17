import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import card1 from '../../assets/image/webp/card1img.png'
import card2 from '../../assets/image/webp/card2img.png'
import card3 from '../../assets/image/webp/card3img.png'
import timer from '../../assets/image/svg/timer.svg'
import locationbar from '../../assets/image/svg/locationbar.svg'

const MeetDating = () => {
  return (
    <div className='bg-black pb-[150px]'>
      <div className='container'>
        <div className='flex justify-center items-center flex-col pt-[160px] mt-[-10px]'>
          <h2 className=' font-raleway font-semibold text-[40px] text-white  items-center'>Meet  <span className=' text-yellow'>  DatingStars</span></h2>
          <p className='text-white text-base font-normal font-inter mt-4 opacity-70'>Lorem ipsum dolor sit amet consectetur. Interdum est donec lacus vitae elit dictum eros cras sagittis.</p>
        </div>
        <Swiper className='mt-[60px]'
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          spaceBetween={50}
          slidesPerView={3}
        >
          <SwiperSlide className=''>
            <div>
              <img className='relative' src={card1} alt="slider" />
              <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px]  border-[1px] border-[#B7B4B5] rounded-[6px] w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                <div className='flex items-center justify-between mt-[6px]'>
                  <div className='flex items-center gap-2'>
                    <img src={timer} alt="calender-do-not-show" />
                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={locationbar} alt="loaction-do-not-show" />
                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div>
              <img className='relative' src={card2} alt="no-images-slider" />
              <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-[#B7B4B5] border-[1px] rounded-[6px] w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                <div className='flex items-center justify-between mt-[6px]'>
                  <div className='flex items-center gap-2'>
                    <img src={timer} alt="calender-do-not-show" />
                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={locationbar} alt="loaction-do-not-show" />
                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div>
              <img className='relative' src={card3} alt="no-images-slider" />
              <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-[#B7B4B5] border-[1px] rounded-[6px] w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                <div className='flex items-center justify-between mt-[6px]'>
                  <div className='flex items-center gap-2'>
                    <img src={timer} alt="calender-do-not-show" />
                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={locationbar} alt="loaction-do-not-show" />
                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div>
              <img className='relative' src={card2} alt="no-images-slider" />
              <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-[#B7B4B5] border-[1px] rounded-[6px] w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                <div className='flex items-center justify-between mt-[6px]'>
                  <div className='flex items-center gap-2'>
                    <img src={timer} alt="calender-do-not-show" />
                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={locationbar} alt="loaction-do-not-show" />
                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div>
              <img className='relative' src={card3} alt="no-images-slider" />
              <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-[#B7B4B5] border-[1px] rounded-[6px] w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                <div className='flex items-center justify-between mt-[6px]'>
                  <div className='flex items-center gap-2'>
                    <img src={timer} alt="calender-do-not-show" />
                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={locationbar} alt="loaction-do-not-show" />
                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div>
              <img className='relative' src={card2} alt="no-images-slider" />
              <div className='p-[10px_10px_16px_10px] absolute bottom-[21px] left-[18px] border-[#B7B4B5] border-[1px] rounded-[6px] w-[309px] min-h-[75px] backdrop-blur-[3px] bg-[#0000001A]'>
                <h3 className='text-white text-base font-normal font-inter '>Affiliate World Europe</h3>
                <div className='flex items-center justify-between mt-[6px]'>
                  <div className='flex items-center gap-2'>
                    <img src={timer} alt="calender-do-not-show" />
                    <p className='text-white text-xs font-normal font-inter'>July 12th - 13th</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src={locationbar} alt="loaction-do-not-show" />
                    <h3 className='text-white text-xs font-normal font-inter'>Barcelona </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default MeetDating