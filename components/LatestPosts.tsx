"use client";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import  Card  from "@/components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
// import { config } from '@fortawesome/fontawesome-svg-core';

export default () => {
  return (
    <>
      <div className="wrapper relative group/Cards  py-8 ">
        <h2 className="text-3xl font-rubik pb-8 block px-8 ">
          Take a look at The latest announces :
        </h2>
        <Swiper
          style={{ paddingBottom: "2.5rem", paddingInline: "2rem" }}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            850: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          // navigation
          pagination={{ clickable: true }}
        >
          <SwiperControlle />
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

function SwiperControlle() {
  const swiper = useSwiper();
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 hidden md:flex justify-between items-center   ">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-blue-700 text-xl px-[-2rem] py-1  font-bold z-20 block p-[.5rem] "
        aria-label="swipe slider to left"
      >
        {" "}
        <FontAwesomeIcon icon={faChevronLeft} style={{ width: "1rem" }} />{" "}
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-blue-700 text-xl px-[-2rem] py-1  font-bold z-20 block p-[.5rem] "
        aria-label="swipe slider to right"

      >
        {" "}
        <FontAwesomeIcon icon={faChevronRight} style={{ width: "1rem" }} />{" "}
      </button>
    </div>
  );
}
