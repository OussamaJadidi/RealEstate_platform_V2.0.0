"use client"

import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
  faTentArrowLeftRight,
  faChevronLeft,
  faChevronRight,

} from "@fortawesome/free-solid-svg-icons";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
// import { config } from '@fortawesome/fontawesome-svg-core';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Card() {
  return (
    <div className='max-w-[47rem]  rounded-lg  group/card  overflow-hidden border flex flex-row'>
    <span className='relative '>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // navigation
      // pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{width: "20rem"}}
    >
      <SwiperControlle />
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
        <SwiperSlide><Image src="/assets/c.jpg" alt="propertyImg" width="500" height="600" className='h-[15rem] flex w-full ' /></SwiperSlide>
    </Swiper>
    </span >
        <section className='w-full  p-3 z-20 flex flex-col justify-between gap-4  text-gray-500 text-sm bg-white '>
          <div>
            <p  >Appartement</p>
            <div className=' text-blue-800 text-[1.1rem] '><span>1900</span> $/<span>month</span> </div>
            <h3 className=' text-black text-base '>Superbe appartment a louer bla blo Superbe appartment a louer bla blo </h3>
          </div>
          <div className='flex flex-col gap-1 font-normal'>
            <p><FontAwesomeIcon icon={faLocationDot} /> <span>Morroco, oujda</span> </p>
            <div className='flex flex-wrap'>
              <span className='whitespace-nowrap'><FontAwesomeIcon icon={faBed} /> <span >3</span> bedrooms </span>   <span className='px-2'>|</span>
              <span className='whitespace-nowrap'><FontAwesomeIcon icon={faBath} /> <span >2</span> bathrooms </span> <span className='px-2'>|</span> 
              <span className='whitespace-nowrap'><FontAwesomeIcon icon={faTentArrowLeftRight} /> <span >120</span>m²</span>
            </div>
          </div>
        </section>
    </div>
    
  )
}
function SwiperControlle(){
  const swiper = useSwiper();
  return<div className='hidden absolute top-0 bottom-0 left-0 right-0 z-10 group-hover/card:flex justify-between items-center '>
     <button onClick={()=>swiper.slidePrev()} className='text-white text-xl px-2 py-1  font-bold '> <FontAwesomeIcon icon={faChevronLeft}  style={{width: "1rem"}}/> </button>
     <button onClick={()=>swiper.slideNext()} className='text-white text-xl px-2 py-1  font-bold '> <FontAwesomeIcon icon={faChevronRight}  style={{width: "1rem"}}/> </button> 
  </div>
} 