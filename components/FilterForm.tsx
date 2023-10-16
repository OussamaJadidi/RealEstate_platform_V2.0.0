"use client";
import { useState, useRef } from "react";
import useHandlePopUp from "@/hooks/useHandlePopUp";
import Image from "next/image";
import { SearchForm } from "./";
export default function FilterForm() {
  const FilterPopUpTrigger = useRef<HTMLButtonElement | null>(null);
  const FilterPopUp = useRef<HTMLDivElement | null>(null);
  const [filterPopUpIsOpen, handleFilterPopUp] = useHandlePopUp(
    FilterPopUpTrigger,
    FilterPopUp
  );

  return (
    <div className="">
      <button
        ref={FilterPopUpTrigger}
        onClick={handleFilterPopUp}
        className="border border-gray-500 rounded-md px-4 py-2 text-gray-500 outline-none flex justify-between items-center gap-x-2"
      >
        <Image
          src="/assets/filters.png"
          width="20"
          height="20"
          alt="filter icon"
        />
        Filters
      </button>
      {filterPopUpIsOpen && (
        <div
          ref={FilterPopUp}
          className="absolute z-30 bg-white p-4 border border-gray-500 mt-1 rounded-md max-710px:right-0"
        >
          <SearchForm showAllOptions={true} />
        </div>
      )}
    </div>
  );
}
