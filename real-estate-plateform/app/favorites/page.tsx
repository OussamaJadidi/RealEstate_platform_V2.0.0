"use client";
import FilterForm from "@/components/FilterForm";
import Card from "@/components/Card";
import Map from "@/components/Map";
import PaginationButtons from "@/components/PaginationButtons";
import Image from "next/image";

export default function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? 1;
  return (
    <main className=" w-full flex max-lg:flex-col">
      <div className="w-1/2 first-let max-lg:w-full max-lg:px-[2rem] max-lg:py-[1rem]   max-lg:aspect-square lg:h-[100vh] lg:sticky top-0   ">
        <Map showMultiplePositions={true} />
      </div>
      <div className=" propertiesResults  lg:w-1/2 p-[.75rem] max-lg:px-[2rem] flex flex-col gap-y-4  ">
        <div>
          <h1 className="font-semibold text-black font-rubik text-[2rem] max-lg:hidden ">
            Favorties Properties
          </h1>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-400 font-rubic whitespace-nowrap">
              <span>15</span> Location
            </span>
            <div className="flex gap-2 flex-wrap justify-end items-center ">
             <h3 className="font-semibold text-gray-800 font-rubik text-[1rem]"> Properties For :</h3>
              <div className="flex gap-5 items-center">
                <select className="border border-gray-500 rounded-md px-4 py-2 w-[9rem] h-[2.5rem] bg-white  text-gray-500 outline-none">
                  <option value="All Properties">Sell & Rent</option>
                  <option value="Propeties For Rent">Rent</option>
                  <option value="Propeties For Sell">Sell</option>
                </select>
              </div>
              <div className="flex gap-5 items-center">
                <select className="border border-gray-500 rounded-md px-4 py-2 w-[8rem] h-[2.5rem] bg-white  text-gray-500 outline-none">
                  <option value="">Sorted by</option>
                  <option value="ascending price">ascending price</option>
                  <option value="descending price">descending price</option>
                  <option value="recent posts">Recent Posts</option>
                  <option value="rldest posts">Old Posts</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* <Card TailwindCSS="flex max-lg:flex-col" /> */}
        <div className="gridF">
          <div className="">
            <Card />
          </div>
          <div className="">
            <Card />
          </div>
          <div className="">
            <Card />
          </div>
          <div className="">
            <Card />
          </div>
          <div className="">
            <Card />
          </div>
        </div>
        <PaginationButtons />
      </div>
    </main>
  );
}
