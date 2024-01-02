"use client";
import Map from "@/components/Map";
import getCountries from "@/utils/getCountries";
import { LatLngExpression } from "leaflet";
import { useState } from "react";

export default function Locations() {
  const countries = getCountries();

  const [location, setLocation] = useState({
    address: "",
    country: "",
    city: "",
  });

  return (
    <div className="Container ">
      <div className="py-8 max-sm:h-22 wrapper ">
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
                value={location.country}
                onChange={(e) => {
                  setLocation({ ...location, country: e.target.value });
                }}
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
                value={location.city}
                onChange={(e) => {
                  setLocation({ ...location, city: e.target.value });
                }}
              />
            </span>
            <span>
              <h2 className=" pb-2 font-roboto text-slate-950 font-semibold">
                Address <span className="text-red-700">*</span>
              </h2>
              <input
                type="text"
                className="Input w-full"
                placeholder="Street address"
                autoComplete="address-line1"
                value={location.address}
                onChange={(e) => {
                  setLocation({ ...location, address: e.target.value });
                }}
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
                address={`${location.country} ${location.city} ${location.address}`}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className=" bg-blue-800 text-white px-8 py-2 rounded-md  mt-16 mb-6 mx-auto block"
        >
          Next
        </button>
      </div>
    </div>
  );
}
