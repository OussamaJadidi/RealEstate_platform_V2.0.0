"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import  Map  from "@/components/Map";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
  faTentArrowLeftRight,
  faChevronLeft,
  faChevronRight,
  faCalendarDays,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function page() {
  return (
    <div className="Container">
        <div className="  flex justify-between ">
          <div className=" w-full group/card  min-w-0">
            <div className=" h-[20rem] md:h-[25rem]">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
        
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ height: "100%"}}
       
            >
              <SwiperControlle />
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/assets/c.jpg"
                  alt="propertyImg"
                  width="500"
                  height="300"
                  className={"w-full  h-full"}
                />
              </SwiperSlide>
            </Swiper>
            </div>
            <div className="text-gray-500">
              <div className="py-4" >
                <div className="flex justify-between flex-wrap w-full">
                  <span className="font-semibold text-[1.5rem] font-rubik text-gray-800 ">Title of the property</span>
                  <div className=' text-blue-800 text-[1.3rem] font-roboto font-semibold'><span>1900</span> $/<span>month</span> </div>
                </div>
                
                <div className="pt-2 flex flex-wrap">
                  <span className="pr-4">
                    <FontAwesomeIcon icon={faLocationDot} style={{color:'#6b7280'}} />{" "}
                    <span>Morroco, oujda</span>
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCalendarDays} style={{color:'#6b7280'}} />
                    <span className=" whitespace-nowrap"> Published at 15/10/2023</span>
                  </span>
                </div>
              </div>
              <hr />
              <div  className="flex  justify-between py-4 lg:px-4 max-md:flex-col max-md:items-center gap-x-8 gap-y-4">
                <ul className="w-full sm:w-[70%] lg:w-[50%]max-sm:w-full flex flex-col gap-y-2 min-w-[0] ">
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">Counry</span><span>Morocco</span></li>
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">City</span><span>Oujda</span></li>
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">Address</span><span>Rue atlas lot talhaoui nr 15 oujda</span></li>
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">Type</span><span>Appartement</span></li>
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">Beds</span><span>2</span></li>
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">Baths</span><span>3</span></li>
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">Meublemnt</span><span>Not-meuble</span></li>
                  <li className="flex flex-wrap justify-between"><span className="text-gray-800 font-roboto font-semibold text-[1rem]">Surface</span><span>130m²</span></li>
                </ul>
                
                <div className="w-full sm:w-[70%] lg:w-[50%] text-gray-800 font-roboto font-semibold text-[1rem] flex flex-wrap justify-between ">
                  <div className="p-0 ">
                    <div className=" whitespace-nowrap"><FontAwesomeIcon icon={faCheck} style={{color:"#22c55e",fontWeight:"bold",fontSize:"1.2rem"}}/> Animaux autorisé</div>
                    <div className=" whitespace-nowrap"><FontAwesomeIcon icon={faCheck} style={{color:"#22c55e",fontWeight:"bold",fontSize:"1.2rem"}}/> Concierge</div>
                    <div className=" whitespace-nowrap"><FontAwesomeIcon icon={faCheck} style={{color:"#22c55e",fontWeight:"bold",fontSize:"1.2rem"}}/> Parking couvert</div>
                  </div>
                  <div>
                    <div className=" whitespace-nowrap"><FontAwesomeIcon icon={faCheck} style={{color:"#22c55e",fontWeight:"bold",fontSize:"1.2rem"}}/> Climatisations central</div>
                    <div className=" whitespace-nowrap"><FontAwesomeIcon icon={faCheck} style={{color:"#22c55e",fontWeight:"bold",fontSize:"1.2rem"}}/> Dressing</div>
                    <div className=" whitespace-nowrap"><FontAwesomeIcon icon={faCheck} style={{color:"#22c55e",fontWeight:"bold",fontSize:"1.2rem"}}/> Rangements</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="py-4">
                 <div className="text-gray-800 font-roboto font-semibold text-[1rem]"> Description</div>
                 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia maxime fugit esse repellat velit corporis molestias rem. Numquam, rem. Neque cumque quod sed nostrum, facere dignissimos voluptas in voluptate!
                 </div>
              </div>
              <hr />
              <div className="py-4 w-full ">
                <div className="text-gray-800 font-roboto font-semibold text-[1rem] pb-3"> Location on the map :</div>
                <div className="h-[25rem] " >
                  <Map showMultiplePositions={false} latAndLng={[12,4] }/>
                </div>
              </div>
              <hr />
              <button type="button" className=" bg-blue-800 text-white r p-2 rounded-md px-4 my-4 w-full font-semibold">
                Book your visite</button>
            </div>
          </div>
          <div className="border border-gray-800 min-w-[20rem] ml-1 max-xl:hidden text-center">
            ad panel
          </div>
        </div>
    </div>
  );
}

function SwiperControlle() {
  const swiper = useSwiper();
  return (
    <div className=" absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-between items-center ">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-white text-xl px-2 py-1  font-bold "
      >
        {" "}
        <FontAwesomeIcon icon={faChevronLeft} style={{ width: "1rem" }} />{" "}
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-white text-xl px-2 py-1  font-bold "
      >
        {" "}
        <FontAwesomeIcon icon={faChevronRight} style={{ width: "1rem" }} />{" "}
      </button>
    </div>
  );
}
