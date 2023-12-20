"use client";
import { Container } from "@/components";
import { faVcard } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function PropertyInfo() {
  const [propertyInfo, setPropertyInfo] = useState({
    rentOrSell: "",
    title: "",
    description: "",
    bathRooms: 1,
    bedRooms: 1,
    price: 0,
    propertyType: "",
    furniture: "",
    surface: 0,
    centralizedClimat: false,
    concierge: false,
    parking: false,
    storage: false,
    pool: false,
    downtown: false,
  });
  return (
    <div className="Container">
      <h1 className="font-bold text-black text-[2rem] p-4">Property Information</h1>
      <Container>
      <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">Basic Informations</h1>
        <div className="flex">
          <div className="flex flex-col flex-nowrap lg:justify-center pb-4 px-8 gap-4 w-full  lg:w-1/2">
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Rent or Sell <span className="text-red-700">*</span>
              </h2>
              <select name="" id="" className="Input w-full">
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </select>
            </span>
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Title <span className="text-red-700">*</span>
              </h2>
              <input
                name="title"
                className="Input w-full"
                placeholder="Title"
                value={propertyInfo.title}
                onChange={(e) => {
                  setPropertyInfo({ ...propertyInfo, title: e.target.value });
                }}
              />
            </span>
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Description <span className="text-red-700">*</span>
              </h2>
              <input
                name="description"
                className="Input w-full"
                placeholder="Description"
                value={propertyInfo.description}
                onChange={(e) => {
                  setPropertyInfo({
                    ...propertyInfo,
                    description: e.target.value,
                  });
                }}
              />
            </span>
          </div>
          <div className="flex flex-col flex-nowrap lg:justify-center pb-4 px-8 gap-4 w-full  lg:w-1/2">
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Property type <span className="text-red-700">*</span>
              </h2>
              <select name="" id="" className="Input w-full">
                <option value="Apartment">Apartment</option>
                <option value="Building">Building</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Cottage">Cottage</option>
                <option value="Duplex">Duplex</option>
                <option value="Factory">Factory</option>
                <option value="Ground">Ground</option>
                <option value="Hangar">Hangar</option>
                <option value="House">House</option>
                <option value="PentHouse">PentHouse</option>
                <option value="Riad">Riad</option>
                <option value="Studio">Studio</option>
                <option value="Triplex">Triplex</option>
                <option value="Villa">Villa</option>
              </select>
            </span>
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Price <span className="text-red-700">*</span>
              </h2>
              <input
                type="number"
                name="Price"
                className="Input w-full"
                placeholder="Price"
                value={propertyInfo.price}
                onChange={(e) => {
                  setPropertyInfo({
                    ...propertyInfo,
                    price: parseInt(e.target.value),
                  });
                }}
              />
            </span>
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Surface <span className="text-red-700">*</span>
              </h2>
              <input
                type="number"
                name="surface"
                className="Input w-full"
                placeholder="surface"
                value={propertyInfo.surface}
                onChange={(e) => {
                  setPropertyInfo({
                    ...propertyInfo,
                    surface: parseInt(e.target.value),
                  });
                }}
              />
            </span>
          </div>
        </div>
      <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">Suplemetary Informations</h1>

        <div className="flex gap-4 px-8">
          <span className="lg:w-[33%]">
            <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
              Bed rooms <span className="text-red-700">*</span>
            </h2>
            <select name="" id="" className="Input w-full">
              <option value="">Studio</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">7+</option>
            </select>
          </span>
          <span className="lg:w-[33%]">
            <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
              Bath rooms <span className="text-red-700">*</span>
            </h2>
            <select name="" id="" className="Input w-full">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">7+</option>
            </select>
          </span>
          <span className="lg:w-[33%]">
            <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
              Furniture <span className="text-red-700">*</span>
            </h2>
            <select name="" id="" className="Input w-full">
              <option value="Furnished">Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
            </select>
          </span>
        </div>

        <div className="flex justify-between gap-4 px-8 pt-8">
          <span>
            <label className="flex gap-4 items-stretch justify-start pb-4 whitespace-nowrap">
              <input
                className="w-6 h-6"
                type="checkbox"
                checked={propertyInfo.centralizedClimat}
                onClick={(e) =>
                  setPropertyInfo({
                    ...propertyInfo,
                    centralizedClimat: !propertyInfo.centralizedClimat,
                  })
                }
              />
              <h2>Centralize climat</h2>
            </label>
          </span>
          <span>
            <label className="flex gap-4 items-stretch justify-start pb-4 whitespace-nowrap">
              <input
                className="w-6 h-6"
                type="checkbox"
                checked={propertyInfo.parking}
                onClick={(e) =>
                  setPropertyInfo({
                    ...propertyInfo,
                    parking: !propertyInfo.parking,
                  })
                }
              />
              <h2>Parking</h2>
            </label>
          </span>
          <span>
            <label className="flex gap-4 items-stretch justify-start pb-4 whitespace-nowrap">
              <input
                className="w-6 h-6"
                type="checkbox"
                checked={propertyInfo.storage}
                onClick={(e) =>
                  setPropertyInfo({
                    ...propertyInfo,
                    storage: !propertyInfo.storage,
                  })
                }
              />
              <h2>Storage</h2>
            </label>
          </span>
          <span>
            <label className="flex gap-4 items-stretch justify-start pb-4 whitespace-nowrap">
              <input
                className="w-6 h-6"
                type="checkbox"
                checked={propertyInfo.concierge}
                onClick={(e) =>
                  setPropertyInfo({
                    ...propertyInfo,
                    concierge: !propertyInfo.concierge,
                  })
                }
              />
              <h2>Concierge</h2>
            </label>
          </span>
          <span>
            <label className="flex gap-4 items-stretch justify-start pb-4 whitespace-nowrap">
              <input
                className="w-6 h-6"
                type="checkbox"
                checked={propertyInfo.pool}
                onClick={(e) =>
                  setPropertyInfo({
                    ...propertyInfo,
                    pool: !propertyInfo.pool,
                  })
                }
              />
              <h2>Pool</h2>
            </label>
          </span>
          <span>
            <label className="flex gap-4 items-stretch justify-start pb-4 whitespace-nowrap">
              <input
                className="w-6 h-6"
                type="checkbox"
                checked={propertyInfo.downtown}
                onClick={(e) =>
                  setPropertyInfo({
                    ...propertyInfo,
                    downtown: !propertyInfo.downtown,
                  })
                }
              />
              <h2>downtown</h2>
            </label>
          </span>
        </div>

        <button
            type="submit"
            className=" bg-blue-800 text-white px-8 py-2 rounded-md  my-12 mx-auto block"
          >
            Next
          </button>
      </Container>
    </div>
  );
}
