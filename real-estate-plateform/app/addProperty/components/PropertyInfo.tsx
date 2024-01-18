"use client";
import React, { useState } from "react";

type PropertyProps = {
  rentOrSell: string,
  title: string,
  description: string,
  bathRooms: string,
  bedRooms: string,
  price: number,
  propertyType: string,
  furniture: string,
  surface: number,
  centralizedClimat: boolean,
  concierge: boolean,
  parking: boolean,
  storage: boolean,
  pool: boolean,
  downtown: boolean,
  currentStepIndex?: number
}

type PropertyInfoProps = PropertyProps & {
  updateData: (updatedData: Partial<PropertyProps>) => void
}
export default function PropertyInfo({
  rentOrSell,
  title,
  description,
  bathRooms,
  bedRooms,
  price,
  propertyType,
  furniture,
  surface,
  centralizedClimat,
  concierge,
  parking,
  storage,
  pool,
  downtown,
  currentStepIndex,
  updateData,
}: PropertyInfoProps) {
 
  return (
    <div className={`Container  ${currentStepIndex !== 1 ? "hidden" : "" }`}>
      <h1 className="font-bold wrapper text-black text-[2rem] p-4">
        Property Information
      </h1>
      <div className="wrapper">
        <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          Basic Informations
        </h1>
        <div className="flex max-sm:flex-wrap">
          <div className="flex flex-col flex-nowrap lg:justify-center pb-4 px-8 gap-4 w-full  lg:w-1/2">
            <span>
              <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                Rent or Sell <span className="text-red-700">*</span>
              </h2>
              <select name="" id="" className="Input w-full" onChange={(e)=>updateData({rentOrSell: e.target.value})}>
                <option value="sell" selected={rentOrSell === "sell" ? true : false}>Sell</option>
                <option value="rent" selected={rentOrSell === "rent" ? true : false}>Rent</option>
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
                value={title}
                onChange={(e) => {
                  updateData({title: e.target.value });
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
                value={description}
                onChange={(e) => {
                  updateData({
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
              <select name="" id="" className="Input w-full" onChange={(e)=>updateData({propertyType: e.target.value})}>
                <option value="Apartment" selected={propertyType ==="Apartment" ? true : false}>Apartment</option>
                <option value="Building" selected={propertyType ==="Building" ? true : false}>Building</option>
                <option value="Bungalow" selected={propertyType ==="Bungalow" ? true : false}>Bungalow</option>
                <option value="Cottage" selected={propertyType ==="Cottage" ? true : false}>Cottage</option>
                <option value="Duplex" selected={propertyType ==="Duplex" ? true : false}>Duplex</option>
                <option value="Factory" selected={propertyType ==="Factory" ? true : false}>Factory</option>
                <option value="Ground" selected={propertyType ==="Ground" ? true : false}>Ground</option>
                <option value="Hangar" selected={propertyType ==="Hangar" ? true : false}>Hangar</option>
                <option value="House" selected={propertyType ==="House" ? true : false}>House</option>
                <option value="PentHouse" selected={propertyType ==="PentHouse" ? true : false}>PentHouse</option>
                <option value="Riad" selected={propertyType ==="Riad" ? true : false}>Riad</option>
                <option value="Studio" selected={propertyType ==="Studio" ? true : false}>Studio</option>
                <option value="Triplex" selected={propertyType ==="Triplex" ? true : false}>Triplex</option>
                <option value="Villa" selected={propertyType ==="Villa" ? true : false}>Villa</option>
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
                value={price}
                onChange={(e) => {
                  updateData({
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
                value={surface}
                onChange={(e) => {
                  updateData({
                                      surface: parseInt(e.target.value),
                  });
                }}
              />
            </span>
          </div>
        </div>
        <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          Suplemetary Informations
        </h1>

        <div className="flex gap-4 px-8 max-sm:flex-wrap">
          <span className="lg:w-[33%] w-full">
            <h2 className="pb-2 font-roboto text-slate-950 font-semibold whitespace-nowrap">
              Bed rooms <span className="text-red-700">*</span>
            </h2>
            <select name="" id="" className="Input w-full" onChange={(e)=>updateData({bedRooms: e.target.value})}>
              <option value="Studio" selected={bedRooms === "Studio" ? true : false}>Studio</option>
              <option value="1" selected={bedRooms === "1" ? true : false}>1</option>
              <option value="2" selected={bedRooms === "2" ? true : false}>2</option>
              <option value="3" selected={bedRooms === "3" ? true : false}>3</option>
              <option value="4" selected={bedRooms === "4" ? true : false}>4</option>
              <option value="5" selected={bedRooms === "5" ? true : false}>5</option>
              <option value="6" selected={bedRooms === "6" ? true : false}>6</option>
              <option value="7" selected={bedRooms === "7" ? true : false}>7</option>
              <option value="7" selected={bedRooms === "7+" ? true : false}>7+</option>
            </select>
          </span>
          <span className="lg:w-[33%] w-full">
            <h2 className="pb-2 font-roboto text-slate-950 font-semibold whitespace-nowrap">
              Bath rooms <span className="text-red-700">*</span>
            </h2>
            <select name="" id="" className="Input w-full" onChange={(e)=>updateData({bathRooms: e.target.value})}>
              <option value="1"  selected={bathRooms === '1' ? true : false }>1</option>
              <option value="2"  selected={bathRooms === '2' ? true : false }>2</option>
              <option value="3"  selected={bathRooms === '3' ? true : false }>3</option>
              <option value="4"  selected={bathRooms === '4' ? true : false }>4</option>
              <option value="5"  selected={bathRooms === '5' ? true : false }>5</option>
              <option value="6"  selected={bathRooms === '6' ? true : false }>6</option>
              <option value="7"  selected={bathRooms === '7' ? true : false }>7</option>
              <option value="7+" selected={bathRooms === '7+' ? true : false }>7+</option>
            </select>
          </span>
          <span className="lg:w-[33%] w-full">
            <h2 className="pb-2 font-roboto text-slate-950 font-semibold whitespace-nowrap">
              Furniture <span className="text-red-700">*</span>
            </h2>
            <select name="" id="" className="Input w-full" onChange={(e)=>updateData({furniture: e.target.value})}>
              <option value="Furnished"      selected={furniture === "Furnished" ? true : false}>Furnished</option>
              <option value="Unfurnished"    selected={furniture === "Unfurnished" ? true : false}>Unfurnished</option>
              <option value="Semi-Furnished" selected={furniture === "Semi-Furnished" ? true : false}>Semi-Furnished</option>
            </select>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 px-8 pt-8">
          <span>
            <label className="flex gap-4 items-stretch justify-start pb-4 whitespace-nowrap">
              <input
                className="w-6 h-6"
                type="checkbox"
                checked={centralizedClimat}
                onClick={(e) =>
                  updateData({
                                      centralizedClimat: !centralizedClimat,
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
                checked={parking}
                onClick={(e) =>
                  updateData({
                                      parking: !parking,
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
                checked={storage}
                onClick={(e) =>
                  updateData({
                                      storage: !storage,
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
                checked={concierge}
                onClick={(e) =>
                  updateData({
                                      concierge: !concierge,
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
                checked={pool}
                onClick={(e) =>
                  updateData({
                                      pool: !pool,
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
                checked={downtown}
                onClick={(e) =>
                  updateData({
                                      downtown: !downtown,
                  })
                }
              />
              <h2>downtown</h2>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
}
