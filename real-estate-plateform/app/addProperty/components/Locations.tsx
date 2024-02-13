"use client";
import Map from "@/components/Map";
import getCountries from "@/utils/getCountries";
import { LatLngExpression } from "leaflet";
import { useState } from "react";
type LocationProp={
  address: string,
  country: string,
  city: string,
  latAndLng: [number,number] 
  currentStepIndex?: number
}
type LocationFormProps=LocationProp & {
  
  updateData: (updatedData: Partial<LocationProp>) => void
}
export default function Locations({address,country,city,latAndLng,currentStepIndex,updateData}: LocationFormProps) {
  const countries = getCountries();

  return (
    <div className={`Container ${currentStepIndex !== 0 ? "hidden" : "" }`}>
      <div className=" max-sm:h-22 wrapper ">
        <h1 className="font-bold text-black text-[2rem] p-4">Location</h1>
        <div className=" flex max-lg:flex-col items-center justify-between w-full ">
          <div className="flex flex-col flex-nowrap lg:justify-center pb-4 px-8 gap-4 w-full  lg:w-1/2">
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Country <span className="text-red-700">*</span>
              </h2>
              <input
                name="country"
                className="Input w-full "
                list="country"
                placeholder="Country name"
                value={country}
                onChange={(e) => {
                  updateData({country: e.target.value});
                }}
                required
                autoFocus
              />
              <datalist className="marker:text-red-600" id="country">
                {countries.map((country) => {
                  return <option value={country.name}>{country.label}</option>;
                })}
              </datalist>
            </span>

            <span>
              <h2 className=" pb-2 font-roboto text-slate-950 font-semibold">
                City <span className="text-red-700">*</span>
              </h2>
              <input
                name="city"
                className="Input w-full"
                type="text"
                placeholder="City name"
                autoComplete="address-level2"
                value={city}
                onChange={(e) => {
                  updateData({city: e.target.value });
                }}
                required
              />
            </span>
            <span>
              <h2 className="gi pb-2 font-roboto text-slate-950 font-semibold">
                Address <span className="text-red-700">*</span>
              </h2>
              <input
                type="text"
                className="Input w-full"
                placeholder="Street address"
                autoComplete="address-line1"
                value={address}
                onChange={(e) => {
                  updateData({address: e.target.value });
                }}
                required
              />
            </span>
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <h2 className=" pb-2 font-roboto text-slate-950 font-semibold ">
              Please select the position manually after filling all the fields
              <span className="text-red-700">*</span>
            </h2>
            <div className="w-full h-[15rem] border border-black rounded-md">
              <Map
                showMultiplePositions={false}
                address={`${country} ${city} ${address}`}
                latAndLng={latAndLng}
                updateData={updateData}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
