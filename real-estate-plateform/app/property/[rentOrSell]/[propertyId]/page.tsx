"use client";
import React, { useState } from "react";

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
import Link from "next/link";

import Map from "@/components/Map";
import toast from "react-hot-toast";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faLocationDot,
  faBed,
  faBath,
  faChevronLeft,
  faChevronRight,
  faCalendarDays,
  faCheck,
  faX,
  faHouse,
  faCouch,
  faPrint,
  faPhone,
  faUser,
  faTentArrowLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { getSession, useSession } from "next-auth/react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function page({
  params,
}: {
  params: { rentOrSell: string; propertyId: string };
}) {
  const {data:session, status: statusOfSession} = useSession()
  const [value, onChange] = useState<Value>(new Date());

  const { rentOrSell, propertyId } = params;
  const { data, status } = useQuery({
    queryKey: ["property", rentOrSell, propertyId],
    queryFn: fetchPropertyData,
    staleTime: 500000,
  });

  async function fetchPropertyData() {
    const res = await axios(
      `/api/searchPropertyData/${rentOrSell}/${propertyId}`
    );
    return res.data;
  }
  function submitBooking(e: any) {
    e.preventDefault();
  }
  if (status == "success") {
    const hashtags = JSON.parse(data.Hashtags);
    var { centralizedClimat, parking, storage, concierge, pool, downtown } =
      hashtags;
    var imagesArray = JSON.parse(data.images);
  }

  async function updateUserData() {
    try {
      const ownerId = (session?.user as any)?.id; // Ensure session and user exist
  
      if (!ownerId || !propertyId) {
        throw new Error("Invalid ownerId or propertyId"); // Handle invalid values
      }
      if(statusOfSession !== "authenticated"){
        throw new Error("Invalid ownerId or propertyId"); 
      }
     
      const res = await axios.put("/api/addAFavoriteProperty",{ownerId: ownerId,
      propertyId: propertyId})
      if (statusOfSession === 'authenticated') {
        const fetchData = async () => {
          try {
            // Fetch the session data again to update user-related information
            await getSession({ force: true } as any);
          } catch (error) {
            console.error('Error fetching session data:', error);
          }
        };
  
        fetchData();
      }
  
      toast.success("Announce Added to Favorites")
      console.log("User data updated:",res.data); // Log response from server
    } catch (error) {
      toast.error("An Error Ocurred")
    }
  }
  return (
    <div className=" bg-gray-50">
      {status === "loading" && <div>loading</div>}
      {status === "success" && (
        <>
          {/* bg-sky-50 for the header only in home page */}
          <div className="absolute top-0 left-0 right-0 h-20 max-sm:h-22 bg-gray-50 z-[-1]"></div>
          <div className=" w-full group/card   ">
            <div className=" h-[20rem] md:h-[25rem]">
              <Swiper
                // spaceBetween={0}
                slidesPerView={1}
                style={{ height: "100%" }}
                autoplay={{ delay: 3000 }}
                loop={true}
                zoom={true}
                modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                  480: {
                    slidesPerView: 1,
                  },
                  850: {
                    slidesPerView: imagesArray.length >= 2 ? 2 : 1,
                  },
                  1200: {
                    slidesPerView:
                      imagesArray.length >= 2
                        ? imagesArray.length >= 3
                          ? 3
                          : 2
                        : 1,
                  },
                }}
              >
                <SwiperControlle />

                {imagesArray.map((imageUrl: string) => (
                  <SwiperSlide>
                    <div className="swiper-zoom-container ">
                      <Image
                        src={imageUrl}
                        alt="propertyImg"
                        width="500"
                        height="300"
                        className={"w-full h-full !object-fill "}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="Container !max-w-[2000px] mx-auto flex justify-center  gap-6 my-4 ">
              <div className="w-full">
                <div className="bg-white  text-gray-500 wrapper w-full border">
                  <div className="p-8">
                    <div className="flex justify-between flex-wrap w-full">
                      <span className="font-semibold text-[1.5rem] font-rubik text-gray-800 ">
                        {data.title}
                      </span>
                      <div className=" text-blue-800 text-[1.3rem] font-roboto font-semibold">
                        <span>{data.price}</span> $
                        {params.rentOrSell === "rent" && (
                          <span>/{`${data.rentalPeriod}`}</span>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap">
                      <span className="pr-4">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "#6b7280" }}
                        />
                        <span>
                          {`${data.country}, ${data.city}, ${data.address}`}
                        </span>
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          style={{ color: "#6b7280" }}
                        />
                        <span className=" whitespace-nowrap">
                          {` Published ${new Date(
                            data.createdAt
                          ).getDay()}/${new Date(
                            data.createdAt
                          ).getMonth()}/${new Date(
                            data.createdAt
                          ).getFullYear()}`}
                        </span>
                      </span>
                    </div>
                  </div>
                  <hr />
                  <ul className="flex max-sm:flex-col align-center w-full py-2">
                    <div className="flex w-full align-center justify-center">
                      <li className="flex flex-col gap-1 justify-center align-center w-full border-r  py-4">
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
                      <li className="flex flex-col gap-1 justify-center align-center w-full sm:border-r py-4">
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
                    <li className="flex flex-col gap-1 justify-center max-sm:order-3 align-center w-1/2 max-sm:w-full sm:border-r py-4">
                      <FontAwesomeIcon
                        style={{ fontSize: "1.5rem" }}
                        icon={faTentArrowLeftRight}
                      />
                      <span className="text-center text-nowrap">
                        Property Area
                      </span>
                      <span className="text-center text-gray-800 font-roboto font-semibold text-[1rem] ">
                        {data.surface}
                      </span>
                    </li>
                    <div className="flex w-full align-center justify-center">
                      <li className="flex flex-col gap-1 justify-center align-center w-full border-r  py-4">
                        <FontAwesomeIcon
                          style={{ fontSize: "1.5rem" }}
                          icon={faBed}
                        />
                        <span className="text-center text-nowrap">
                          Beds Number
                        </span>
                        <span className="text-center text-gray-800 font-roboto font-semibold text-[1rem] ">
                          {data.bedsNumber}
                        </span>
                      </li>
                      <li className="flex flex-col gap-1 justify-center align-center w-full  py-4">
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

                  <div className="w-full p-8 text-gray-800 font-roboto font-semibold text-[1rem] flex max-341px:flex-col justify-between ">
                    <div className="border-r max-341px:border-0 flex flex-col items-center justify-center w-full">
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
                    <div className="max-sm:hidden border-r flex flex-col items-center justify-center w-full">
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
                  <div className="p-8">
                    <div className="text-gray-800 font-roboto font-semibold text-[1rem]">
                      Description
                    </div>
                    <div>{`${data.description}`}</div>
                  </div>
                  <hr />

                  <div className="p-8 w-full ">
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
                  <div className="lg:hidden bg-white  h-min sticky top-0 ">
                    <div className="flex items-center border-b px-8 py-4">
                      <span className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border border-gray-200 ">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <span className="pl-3 text-gray-800 font-roboto font-semibold text-[1rem] ">
                        Oussama Jadidi
                      </span>
                    </div>
                    <form className="flex flex-col items-center gap-2 p-8 text-gray-500">
                      <div className="">
                        <Calendar
                          onChange={onChange}
                          value={value}
                          className="!w-full !rounded-md !border-gray-200"
                          tileDisabled={({ date }) => date < new Date()}
                        />
                      </div>
                      <textarea
                        name=""
                        id=""
                        className="border rounded-md w-full py-2 !px-4"
                      >
                        More Info about you
                      </textarea>
                      <button
                        className="bg-blue-800 text-white  p-2 rounded-md px-4 w-full text-semibold text-center"
                        onClick={(e) => submitBooking(e)}
                      >
                        Book your visits
                      </button>
                    </form>
                    <hr />
                    <div className="text-gray-500 w-full flex flex-col gap-4 items-center  p-8">
                      <button className="p-2 rounded-md px-4 w-full text-semibold text-center border group">
                        <FontAwesomeIcon
                          className="group-hover:text-red-500"
                          icon={faHeart}
                        />
                        <span className="pl-2" onClick={updateUserData}> Add to Favorites</span>
                      </button>
                      <button
                        className="flex justify-center group"
                        onClick={() => window.print()}
                      >
                        <FontAwesomeIcon
                          icon={faPrint}
                          className="group-hover:text-black"
                        />
                        <span className="pl-2"> Print this page</span>
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-around p-4">
                      {data.ownerFacebookContact && (
                        <a
                          href={data.ownerFacebookContact}
                          className="group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="group-hover:text-[#1877F2] text-[1.5rem] text-gray-500"
                            icon={faFacebookF}
                          />
                        </a>
                      )}
                      {data.ownerInstagramContact && (
                        <a
                          href={data.ownerInstagramContact}
                          className="group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-[1.5rem] text-gray-500 group-hover:text-[#b95a5a]"
                          />
                        </a>
                      )}
                      {data.ownerTwitterContact && (
                        <a
                          href={data.ownerTwitterContact}
                          className="group "
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            className="group-hover:text-black text-[1.5rem] text-gray-500"
                            icon={faXTwitter}
                          />
                        </a>
                      )}
                      {data.ownerEmail && (
                        <a
                          href={`mailto:${data.ownerEmail}?subject=From EstateElite to disscuss about your property for ${params.rentOrSell}&body=Hi I noticed your property at EstateElite plateform\n`}
                          className="group"
                        >
                          <FontAwesomeIcon
                            className="group-hover:text-[#ff7b00c5] text-[1.5rem] text-gray-500"
                            icon={faEnvelope}
                          />
                        </a>
                      )}
                      {data.ownerPhone && (
                        <button
                          className="group"
                          onClick={() =>
                            toast(
                              <>
                                <FontAwesomeIcon
                                  className="text-green-600 text-[1.5rem] "
                                  icon={faPhone}
                                />
                                {`${data.ownerPhone}`}
                              </>
                            )
                          }
                        >
                          <FontAwesomeIcon
                            className="group-hover:text-green-600 text-[1.5rem] text-gray-500"
                            icon={faPhone}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full wrapper  ">
                  <div className="text-gray-800 font-roboto font-semibold text-[1rem] ">
                    Similar announces
                  </div>
                  <div>{`${data.description}`}</div>
                </div>
              </div>

              <div className="max-lg:hidden bg-white w-[30rem] h-min sticky top-0 border">
                <div className="flex items-center border-b p-4">
                  <span className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center border border-gray-200 ">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <span className="pl-3 text-gray-800 font-roboto font-semibold text-[1rem] ">
                    Oussama Jadidi
                  </span>
                </div>
                <form className="flex flex-col items-center gap-2 p-4 text-gray-500">
                  <div className="">
                    <Calendar
                      onChange={onChange}
                      value={value}
                      className="!w-full !rounded-md !border-gray-200"
                      tileDisabled={({ date }) => date < new Date()}
                    />
                  </div>
                  <textarea
                    name=""
                    id=""
                    className="border rounded-md w-full py-2 px-4"
                  >
                    More Info about you
                  </textarea>
                  <button
                    className="bg-blue-800 text-white  p-2 rounded-md px-4 w-full text-semibold text-center"
                    onClick={(e) => submitBooking(e)}
                  >
                    Book your visit
                  </button>
                </form>
                <hr />
                <div className="text-gray-500 w-full flex flex-col gap-4 items-center px-4  py-6">
                  <button className="p-2 rounded-md px-4 w-full text-semibold text-center border group">
                    <FontAwesomeIcon
                      className="group-hover:text-red-500"
                      icon={faHeart}
                    />
                    <span className="pl-2" onClick={updateUserData}> Add to Favorites</span>
                  </button>
                  <button
                    className="flex justify-center group"
                    onClick={() => window.print()}
                  >
                    <FontAwesomeIcon
                      icon={faPrint}
                      className="group-hover:text-black"
                    />
                    <span className="pl-2"> Print this page</span>
                  </button>
                </div>
                <hr />
                <div className="flex justify-around p-4">
                  {data.ownerFacebookContact && (
                    <a
                      href={data.ownerFacebookContact}
                      className="group hover:bg-gray-200 p-4 rounded-full"
                      target="_blank"
                          rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="group-hover:text-[#1877F2] text-[1.5rem] text-gray-500"
                        icon={faFacebookF}
                      />
                    </a>
                  )}
                  {data.ownerInstagramContact && (
                    <a
                      href={data.ownerInstagramContact}
                      className="group hover:bg-gray-200 p-4 rounded-full"
                      target="_blank"
                          rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-[1.5rem] text-gray-500 group-hover:text-[#b95a5a]"
                      />
                    </a>
                  )}
                  {data.ownerTwitterContact && (
                    <a
                      href={data.ownerTwitterContact}
                      className="group hover:bg-gray-200 p-4 rounded-full"
                      target="_blank"
                          rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="group-hover:text-black text-[1.5rem] text-gray-500"
                        icon={faXTwitter}
                      />
                    </a>
                  )}
                  {data.ownerEmail && (
                    <a
                      href={`mailto:${data.ownerEmail}?subject=From EstateElite to disscuss about your property for ${params.rentOrSell}&body=Hi I noticed your property at EstateElite plateform\n`}
                      className="group hover:bg-gray-200 p-4 rounded-full"
                    >
                      <FontAwesomeIcon
                        className="group-hover:text-[#ff7b00c5] text-[1.5rem] text-gray-500"
                        icon={faEnvelope}
                      />
                    </a>
                  )}
                  {data.ownerPhone && (
                    <button
                      className="group hover:bg-gray-200 p-4 rounded-full"
                      onClick={() =>
                        toast(
                          <>
                            <FontAwesomeIcon
                              className="text-green-600 text-[1.5rem] "
                              icon={faPhone}
                            />
                            {`${data.ownerPhone}`}
                          </>
                        )
                      }
                    >
                      <FontAwesomeIcon
                        className="group-hover:text-green-600 text-[1.5rem] text-gray-500"
                        icon={faPhone}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SwiperControlle() {
  const swiper = useSwiper();
  return (
    <div className="px-8 absolute top-0 bottom-0 left-0 right-0 z-[1] flex justify-between items-center pointer-events-none">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-blue-800 rounded-md text-white text-xl px-2 py-1  font-bold "
        style={{ pointerEvents: "auto" }} // Set pointer-events to auto
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ width: "1rem" }} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-blue-800 rounded-md text-white text-xl px-2 py-1  font-bold "
        style={{ pointerEvents: "auto" }} // Set pointer-events to auto
      >
        <FontAwesomeIcon icon={faChevronRight} style={{ width: "1rem" }} />
      </button>
    </div>
  );
}
