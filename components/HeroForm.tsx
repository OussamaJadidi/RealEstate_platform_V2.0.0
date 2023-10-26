"use client";
import React, { useState } from "react";
import SearchForm from "./SearchForm";
export default function HeroForm() {
  const [isForSell, setIsForSell] = useState(true);
  function handleIsForSell() {
    setIsForSell(!isForSell);
  }
  return (
    <>
      <div className="min-w-[12rem] w-[90%]  516px:w-max z-10  max-lg:mx-auto / max-w-4xl p-6 sm:p-8 shadow-xl rounded-md bg-white | flex flex-col max-lg:h-max max-lg:mt-52 ">
        <h1 className="text-4xl font-semiBold max-sm:hidden font-rubik pb-2">
          <span className="text-blue-800">{isForSell ? "Buy" : "Rent"} </span>
          your next Home <br />
          Where you want to live
        </h1>
        <p className=" font-medium text-slate-600 max-sm:hidden pb-6">
          Find your comfortable space to live
          <br />
          Sell your property at the best Price
        </p>
        <div>
          {/* <div className="fixed mb-[10rem]  border-red-800 bg-white">
            <h1 className="text-4xl font-semiBold max-sm:hidden font-rubik pb-2">
              <span className="text-blue-800">"Buy" </span>
            </h1>
            <h1 className="text-4xl font-semiBold max-sm:hidden font-rubik pb-2">
              <span className="text-blue-800">"Rent"</span>
            </h1>
          </div> */}
          <SearchForm isForSell={isForSell} handleIsForSell={handleIsForSell} />
        </div>
      </div>
    </>
  );
}
