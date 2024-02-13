// "use client";
import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/zoom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import Image from "next/image";

// import Map from "@/components/Map";
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
               {/* <Swiper
                // spaceBetween={50}
                slidesPerView={1}
                style={{ height: "100%" }}
                autoplay={{ delay: 3000 }}
                loop={true}
                // zoom={true}
                modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
              >
                <SwiperControlle /> 
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
              </Swiper>  */}
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
                    <span>{`${data.country}, ${data.city}, ${data.address}`}</span>
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      style={{ color: "#6b7280" }}
                    />
                    <span className=" whitespace-nowrap">
                      {`Published at ${new Date(
                        data.createdAt
                      ).getDay()}/${new Date(
                        data.createdAt
                      ).getMonth()}/${new Date(data.createdAt).getFullYear()}`}
                    </span>
                  </span>
                </div>
              </div>
              <hr />
              <div className="flex  justify-between py-4 lg:px-4 max-md:flex-col max-md:items-center gap-x-8 gap-y-4">
                <ul className="w-full sm:w-[70%] lg:w-[50%]max-sm:w-full flex flex-col gap-y-2 min-w-[0] ">
                  {/* <li className="flex flex-wrap justify-between">
                  <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                    Counry
                  </span>
                  <span>Morocco</span>
                </li>
                <li className="flex flex-wrap justify-between">
                  <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                    City
                  </span>
                  <span>Oujda</span>
                </li>
                <li className="flex flex-wrap justify-between">
                  <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                    Address
                  </span>
                  <span>Rue atlas lot talhaoui nr 15 oujda</span>
                </li> */}
                  <li className="flex flex-wrap justify-between">
                    <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                      Type
                    </span>
                    <span>{`${data.propertyType}`}</span>
                  </li>
                  <li className="flex flex-wrap justify-between">
                    <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                      Beds
                    </span>
                    <span>{`${data.bedsNumber}`}</span>
                  </li>
                  <li className="flex flex-wrap justify-between">
                    <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                      Baths
                    </span>
                    <span>{`${data.bathsNumber}`}</span>
                  </li>
                  <li className="flex flex-wrap justify-between">
                    <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                      Furniture state
                    </span>
                    <span>{`${data.furniture}`}</span>
                  </li>
                  <li className="flex flex-wrap justify-between">
                    <span className="text-gray-800 font-roboto font-semibold text-[1rem]">
                      Surface
                    </span>
                    <span>{`${data.surface}m²`}</span>
                  </li>
                </ul>

                <div className="w-full sm:w-[70%] lg:w-[50%] text-gray-800 font-roboto font-semibold text-[1rem] flex flex-wrap justify-between ">
                  <div className="p-0 ">
                    <div className=" whitespace-nowrap">
                      {centralizedClimat ?  <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      /> :  <FontAwesomeIcon
                      icon={faX}
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    />}
                      Centralized Climat
                    </div>
                    <div className=" whitespace-nowrap">
                    {concierge ?  <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      /> :  <FontAwesomeIcon
                      icon={faX}
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    />}
                      Concierge
                    </div>
                    <div className=" whitespace-nowrap">
                    {parking ?  <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      /> :  <FontAwesomeIcon
                      icon={faX}
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    />}
                      Parking couvert
                    </div>
                  </div>
                  <div>
                    <div className=" whitespace-nowrap">
                    {storage ?  <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      /> :  <FontAwesomeIcon
                      icon={faX}
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    />}
                      Storage
                    </div>
                    <div className=" whitespace-nowrap">
                    {pool ?  <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      /> :  <FontAwesomeIcon
                      icon={faX}
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    />}
                      Pool
                    </div>
                    <div className=" whitespace-nowrap">
                    {downtown ?  <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: "#22c55e",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      /> :  <FontAwesomeIcon
                      icon={faX}
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      }}
                    />}
                      DownTownn
                    </div>
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
                  {/* <Map
                    showMultiplePositions={false}
                    latAndLng={JSON.parse(data.latAndLng)}
                  /> */}
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
          {/* <div className="border border-gray-800 min-w-[20rem] ml-1 max-xl:hidden text-center">
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
