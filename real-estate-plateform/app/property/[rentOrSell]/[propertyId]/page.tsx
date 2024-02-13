"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

import Map from "@/components/Map";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBed,
  faBath,
  faTentArrowLeftRight,
  faChevronLeft,
  faChevronRight,
  faCalendarDays,
  faCheck,
  faX,
  faHouse,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useQuery } from "@tanstack/react-query";
export default function page({
  params,
}: {
  params: { rentOrSell: string; propertyId: string };
}) {
  const { rentOrSell, propertyId } = params;
  async function fetchPropertyData() {
    const res = await axios(
      `/api/searchPropertyData/${rentOrSell}/${propertyId}`
    );
    return res.data;
  }
  const { data, status } = useQuery({
    queryKey: ["property", rentOrSell, propertyId],
    queryFn: fetchPropertyData,
    // staleTime: 50000
    // refetchInterval:3000
    // gcTime per diffault intact data garbage collected after 5 min
    // retry  retry fetching after failing per default its 3 tima
    // retryDelaty
  });

  // const qC= useQueryClient()
  // qC.invalidateQueries({queryKey: ["haid"],exact: true}) atym7aw li fihom had lArray awa aktar not lesss
  // const d =  fetchPropertyData()
  // console.log(d)

  // "{\"centralizedClimat\":false,\"parking\":false,\"storage\":false,\"concierge\":false,\"pool\":false,\"downtown\":false}"
  if (status == "success") {
    const hashtags = JSON.parse(data.Hashtags);
    var { centralizedClimat, parking, storage, concierge, pool, downtown } =
      hashtags;
  }
  return (
    <div className="Container">
      {status === "loading" && <div>loading</div>}
      {status === "success" && (
        <div className="  flex justify-between ">
          <div className=" w-full group/card  min-w-0">
            <div className=" h-[20rem] md:h-[25rem]">
              <Swiper
                // spaceBetween={50}
                slidesPerView={1}
                style={{ height: "100%" }}
                autoplay={{ delay: 3000 }}
                loop={true}
                // zoom={true}
                modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
              >
                {/* <SwiperControlle /> */}
                <SwiperSlide>
                  <div className="swiper-zoom-container ">
                    <Image
                      src="/assets/c.jpg"
                      alt="propertyImg"
                      width="500"
                      height="300"
                      className={"w-full h-full"}
                    />
                  </div>
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
            <div className="text-gray-500 wrapper">
              <div className="py-4">
                <div className="flex justify-between flex-wrap w-full">
                  <span className="font-semibold text-[1.5rem] font-rubik text-gray-800 ">
                    {data.title}
                  </span>
                  <div className=" text-blue-800 text-[1.3rem] font-roboto font-semibold">
                    <span>1900</span> $/<span>month</span>{" "}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap">
                  <span className="pr-4">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#6b7280" }}
                    />
                    <span>
                      {" "}
                      {`${data.country}, ${data.city}, ${data.address}`}
                    </span>
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      style={{ color: "#6b7280" }}
                    />
                    <span className=" whitespace-nowrap">
                      {` Published at ${new Date(
                        data.createdAt
                      ).getDay()}/${new Date(
                        data.createdAt
                      ).getMonth()}/${new Date(data.createdAt).getFullYear()}`}
                    </span>
                  </span>
                </div>
              </div>
              <hr />
              <ul className="flex w-full align-center    max-sm:flex-col ">
                <div className="flex w-full align-center justify-center">
                  <li className="flex flex-col gap-1 justify-center align-center w-full border-x border-x-1 py-4">
                    <FontAwesomeIcon
                      style={{ fontSize: "1.5rem" }}
                      icon={faHouse}
                    />
                    <span className="text-center text-nowrap">
                      Property Type
                    </span>
                    <span className="text-center text-gray-800 font-roboto font-semibold text-[1rem] ">
                      {data.propertyType}
                    </span>
                  </li>
                  <li className="flex flex-col gap-1 justify-center align-center w-full border-r border-r-1 py-4">
                    <FontAwesomeIcon
                      style={{ fontSize: "1.5rem" }}
                      icon={faCouch}
                    />
                    <span className="text-center">Furniture</span>
                    <span className="text-center text-gray-800 font-roboto font-semibold text-[1rem] ">
                      {data.furniture}
                    </span>
                  </li>
                </div>
                <li className="flex flex-col gap-1 justify-center max-sm:order-3 align-center w-1/2 max-sm:w-full border-r border-r-1 py-4">
                  <FontAwesomeIcon
                    style={{ fontSize: "1.5rem" }}
                    icon={faCouch}
                  />
                  <span className="text-center text-nowrap">Property Area</span>
                  <span className="text-center text-gray-800 font-roboto font-semibold text-[1rem] ">
                    {data.surface}
                  </span>
                </li>
                <div className="flex w-full align-center justify-center">
                  <li className="flex flex-col gap-1 justify-center align-center w-full border-r border-r-1 py-4">
                    <FontAwesomeIcon
                      style={{ fontSize: "1.5rem" }}
                      icon={faBed}
                    />
                    <span className="text-center text-nowrap">Beds Number</span>
                    <span className="text-center text-gray-800 font-roboto font-semibold text-[1rem] ">
                      {data.bedsNumber}
                    </span>
                  </li>
                  <li className="flex flex-col gap-1 justify-center align-center w-full border-r border-r-1 py-4">
                    <FontAwesomeIcon
                      style={{ fontSize: "1.5rem" }}
                      icon={faBath}
                    />
                    <span className="text-center text-nowrap">
                      Baths Number
                    </span>
                    <span className="text-center text-gray-800 font-roboto font-semibold text-[1rem] ">
                      {data.bathsNumber}
                    </span>
                  </li>
                </div>
              </ul>
              <hr />

              <div className="w-full py-4 text-gray-800 font-roboto font-semibold text-[1rem] flex max-341px:flex-col justify-between ">
                <div className="border-r-2 max-341px:border-0 flex flex-col items-center justify-center w-full">
                  <div className=" whitespace-nowrap pb-2">
                    {downtown ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    DownTownn
                  </div>
                  <div className=" whitespace-nowrap pb-2">
                    {concierge ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    Concierge
                  </div>
                  <div className="sm:hidden whitespace-nowrap pb-2">
                    {parking ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    Parking couvert
                  </div>
                </div>
                <div className="max-sm:hidden border-r-2 flex flex-col items-center justify-center w-full">
                  <div className=" whitespace-nowrap pb-2">
                    {parking ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    Parking couvert
                  </div>
                  <div className=" whitespace-nowrap pb-2">
                    {storage ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    Storage
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <div className=" whitespace-nowrap pb-2">
                    {centralizedClimat ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    Centralized Climat
                  </div>
                  <div className=" whitespace-nowrap pb-2">
                    {pool ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    Pool
                  </div>
                  <div className="sm:hidden whitespace-nowrap pb-2">
                    {storage ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faX}
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      />
                    )}
                    Storage
                  </div>
                </div>
              </div>
              <hr />
              <div className="py-4">
                <div className="text-gray-800 font-roboto font-semibold text-[1rem]">
                  Description
                </div>
                <div>{`${data.description}`}</div>
              </div>
              <hr />
              <div className="py-4 w-full ">
                <div className="text-gray-800 font-roboto font-semibold text-[1rem] pb-3">
                  Location on the map :
                </div>
                <div className="h-[25rem] ">
                  <Map
                    showMultiplePositions={false}
                    latAndLng={JSON.parse(data.latAndLng)}
                  />
                </div>
              </div>
              <hr />
              <button
                type="button"
                className=" bg-blue-800 text-white r p-2 rounded-md px-4 my-4 w-full font-semibold"
              >
                Book your visite
              </button>
            </div>
          </div>
          {/* <div className="border-r border-gray-800 min-w-[20rem] ml-1 max-xl:hidden text-center">
            ad panel
          </div> */}
        </div>
      )}
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
