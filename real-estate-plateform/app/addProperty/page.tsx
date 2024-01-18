"use client"
import { useState } from "react";
import { Locations, OwnerInfo, PropertyInfo, UploadImages } from "./components";
import {useMultiPageForm} from "@/hooks/useMultiPageForm"; 
import { Check } from "lucide-react";

type FormDataType={
address: string,
country: string,
city: string,
latAndLng: [number,number] ,

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

name: string,
email: string,
phoneNumber: string,
facebook: string,
instagram: string,
twitter: string,

images:  string[] | undefined,
}
export default function page() {
  const [data, setData] = useState<FormDataType>({
    address: "",
    country: "",
    city: "",
    latAndLng: [32, -5],

    rentOrSell: "sell",
    title: "",
    description: "",
    bathRooms: "1",
    bedRooms: "1",
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

    name: "",
    email: "",
    phoneNumber: "",
    facebook: "",
    instagram: "",
    twitter: "",
    images: undefined,
  })
  const { back, next, isFirstStep, isLastStep,currentStepIndex } = useMultiPageForm(4);// currentStepIndex from  0 => currentIndex -1

  function updateData(updatedData: Partial<FormDataType>){
    setData(prev =>{
      return {...prev,...updatedData} 
    })
  }
  
  return (
    <>
      <div className="Container my-8 flex justify-center  ">
        <div className={`${currentStepIndex != 0 ? "max-sm:hidden" : ""} flex flex-nowrap gap-4`}>
          <span className={`${currentStepIndex >= 0 ? "border-blue-700 " : ""} ${currentStepIndex >= 1 ? "bg-blue-700" : ""}  overflow-hidden border-2 rounded-full text-blue-800 flex justify-center items-center h-0 w-0 p-6`}>
            <span >
              {currentStepIndex >= 1 ? <Check className="text-white  block w-8 h-8 " /> : "1" }  
            </span> 
          </span>
          <span>
            <div className="text-black font-semibold">Location</div>
            <div className="text-gray-400 font-medium ">Adress</div>
          </span>
        </div>
        <div className=  {`${currentStepIndex >= 2  ? "max-sm:hidden" : ""} ${currentStepIndex >= 1 ? "border-blue-700" : "border-gray-400"} border-b-[3px] my-auto w-[10rem] flex justify-center h-0 font-extrabold text-xl mx-4`}></div>
        <div className={`${currentStepIndex != 1 ? "max-sm:hidden" : ""} flex flex-nowrap gap-4`}>
          <span className={`${currentStepIndex >= 1 ? "border-blue-700" : ""} ${currentStepIndex >= 2 ? "bg-blue-700" : ""}  border-2 rounded-full text-blue-800 flex justify-center items-center h-0 w-0 p-6`}>
            <span >
              {currentStepIndex >= 2 ? <Check className="text-white  block w-8 h-8 " /> : "2" }  
            </span> 
          </span>
          <span>
            <div className="text-black font-semibold">Property</div>
            <div className="text-gray-400 font-medium ">Infos</div>
          </span>
        </div>
        <div className=  {`${currentStepIndex === 0 || currentStepIndex === 3  ? "max-sm:hidden" : ""} ${currentStepIndex >= 2 ? "border-blue-700" : "border-gray-400"} border-b-[3px] my-auto w-[10rem] flex justify-center h-0 font-extrabold text-xl mx-4`}></div>
        <div className={`${currentStepIndex != 2 ? "max-sm:hidden" : ""} flex flex-nowrap gap-4`}>
          <span className={`${currentStepIndex >= 2 ? "border-blue-700" : ""}  ${currentStepIndex >= 3 ? "bg-blue-700" : ""}  border-2 rounded-full text-blue-800 flex justify-center items-center h-0 w-0 p-6`}>
            <span >
              {currentStepIndex >= 3 ? <Check className="text-white  block w-8 h-8 " /> : "3" }  
            </span> 
          </span>
          <span>
            <div className="text-black font-semibold">Owner</div>
            <div className="text-gray-400 font-medium ">Infos</div>
          </span>
        </div>
        <div className=  {`${currentStepIndex <= 1 ? "max-sm:hidden" : ""} ${currentStepIndex >= 3 ? "border-blue-700" : "border-gray-400"} border-b-[3px] my-auto w-[10rem] flex justify-center h-0 font-extrabold text-xl mx-4`}></div>
        <div className={`${currentStepIndex != 3 ? "max-sm:hidden" : ""} flex flex-nowrap gap-4`}>
          <span className={`${currentStepIndex >=3 ? "border-blue-700" : ""}  ${currentStepIndex >= 4 ? "bg-blue-700" : ""}  border-2 rounded-full text-blue-800 flex justify-center items-center h-0 w-0 p-6`}>
          <span >
              {currentStepIndex >= 4 ? <Check className="text-white  block w-8 h-8 " /> : "4" }  
            </span> 
          </span>
          <span>
            <div className="text-black font-semibold">Images</div>
            <div className="text-gray-400 font-medium ">Upload</div>
          </span>
        </div>
      </div>
       <Locations currentStepIndex={currentStepIndex}  {...data} updateData={updateData}/>
       <PropertyInfo currentStepIndex={currentStepIndex}  {...data} updateData={updateData}/>
       <OwnerInfo currentStepIndex={currentStepIndex} {...data} updateData={updateData}/>
       <UploadImages currentStepIndex={currentStepIndex}  {...data} updateData={updateData}/>
      <div className="flex justify-center gap-4 my-12">
        {!isFirstStep && (
          <button
            type="submit"
            onClick={back}
            className=" bg-white text-black border border-black font-semibold px-8 py-2 rounded-md"
          >
            Back
          </button>
        )}
          <button
            type="submit"
            onClick={()=>{next();
            if(isFirstStep){
              
            }}}
            className=" bg-blue-800 text-white font-semibold px-8 py-2 rounded-md"
          >
            {isLastStep ? "Publish" : "Next"}
          </button>
         
        
      </div>
    </>
  );
}
