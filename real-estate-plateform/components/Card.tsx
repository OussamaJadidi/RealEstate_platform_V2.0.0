"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
  faTentArrowLeftRight,
  faChevronLeft,
  faChevronRight,
  faTrash,
  faPen,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
// import { config } from '@fortawesome/fontawesome-svg-core';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type CardPropsType = {
  TailwindCSS?: String;
  myProperties?: boolean;
};

export default function Card({
  TailwindCSS = "undefined",
  myProperties = false,
}: CardPropsType) {
  const id = "37d8d7f5-fe8c-41a3-ae3f-b55c6d7f826e";
  const rentOrSell = "rent";
  const router = useRouter();
  return (
    <div
      className={`${TailwindCSS} rounded-lg overflow-hidden group/card border `}
      onClick={() => {
        toast.loading("redirecting", { duration: 500 });
        router.push("/property/" + rentOrSell + "/" + id);
      }}
    >
      <span
        className={`relative    ${
          TailwindCSS !== "undefined" ? "lg:w-[20rem] w-full" : ""
        } `}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[A11y]}
          style={{ height: "13.5rem" }}
          className="group/img"
        >
          <SwiperControlle />
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="eager"
              width="394"
              height="240"
              className={
                "w-full h-full group-hover/img:scale-110 transition-all "
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/c.jpg"
              alt="image of some property for sell"
              loading="lazy"
              width="394"
              height="240"
              className={"w-full h-full"}
            />
          </SwiperSlide>
        </Swiper>
      </span>
      <section className="flex justify-between w-full">
        <section className="p-3 flex flex-col justify-between gap-4 text-gray-500 text-sm bg-white w-full">
          <div>
            <p>Appartement</p>
            <div className=" text-blue-800 text-[1.1rem] font-bold font-roboto">
              <span>1900</span> $/<span>month</span>
            </div>
            <h3 className=" text-black text-base ">
              Superbe appartment a louer bla blo Superbe appartment a louer bla
              blo
            </h3>
          </div>
          <div className="flex flex-col gap-1 font-normal">
            <p>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <span>Morroco, oujda</span>
            </p>
            <div className="flex flex-wrap">
              <span className="whitespace-nowrap">
                <FontAwesomeIcon icon={faBed} /> <span>3</span> bedrooms
              </span>
              <span className="px-2">|</span>
              <span className="whitespace-nowrap">
                <FontAwesomeIcon icon={faBath} /> <span>2</span> bathrooms
              </span>
              <span className="px-2">|</span>
              <span className="whitespace-nowrap">
                <FontAwesomeIcon icon={faTentArrowLeftRight} /> <span>120</span>
                m²
              </span>
            </div>
          </div>
        </section>

        {myProperties === true && (
          <section className="w-min flex flex-col items-center justify-start gap-2 pt-2 pr-2">
            <button
              className="hover:border border-black rounded-md p-2 hover:bg-green-300"
              title="Modify"
            >
              <FontAwesomeIcon icon={faPen} /> 
            </button>
            <button
              className="hover:border border-black rounded-md p-2 hover:bg-blue-400"
              title="Boost"
            >
              <FontAwesomeIcon icon={faBolt} />
            </button>
            <button
              className="hover:border border-black rounded-md p-2 hover:bg-red-300"
              title="Delete"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </section>
        )}
      </section>
    </div>
  );
}
function SwiperControlle() {
  const swiper = useSwiper();
  return (
    <div className="hidden absolute top-0 bottom-0 left-0 right-0 z-10  group-hover/card:flex justify-between items-center ">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-white text-xl px-2 py-1  font-bold "
        aria-label="swipe to next image"
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ width: "1rem" }} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-white text-xl px-2 py-1  font-bold "
        aria-label="swipe previous image"
      >
        <FontAwesomeIcon icon={faChevronRight} style={{ width: "1rem" }} />
      </button>
    </div>
  );
}
