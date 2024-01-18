"use client";
import { faVcard } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
type OwnerProps={
  name: string,
  email: string,
  phoneNumber: string,
  facebook: string,
  instagram: string,
  twitter: string,
  currentStepIndex?:number,
}
type OwnerInfoProps= OwnerProps & {
  updateData : (updatedData : Partial<OwnerProps>) => void
}
export default function OwnerInfo({name , email,currentStepIndex , phoneNumber , facebook , instagram, twitter,updateData}: OwnerInfoProps) {
  return (
    <div className={`Container  ${currentStepIndex !== 2 ? "hidden" : "" }`}>
      <h1 className="font-bold wrapper text-black text-[2rem] p-4">Owner Contacts</h1>
      <div className="wrapper flex max-md:flex-col justify-between w-full ">
        <div className="w-full">
          <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">
            Necessary Informations
          </h1>
          <div className="flex w-full">
            <div className="flex flex-col flex-nowrap lg:justify-center pb-4 px-8 gap-4 w-full ">
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Name <span className="text-red-700">*</span>
                </h2>
                <input
                  name="name"
                  className="Input w-full"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    updateData({name: e.target.value });
                  }}
                />
              </span>
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Email <span className="text-red-700">*</span>
                </h2>
                <input
                  name="email"
                  className="Input w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    updateData({email: e.target.value });
                  }}
                />
              </span>
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Phone Number <span className="text-red-700">*</span>
                </h2>
                <input
                  type="tel"
                  name="number"
                  className="Input w-full"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    updateData({phoneNumber: e.target.value });
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">
            Social Media links{" "}
          </h1>
          <div className="flex">
            <div className="flex flex-col flex-nowrap lg:justify-center pb-4 px-8 gap-4 w-full ">
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Facebook Link 
                </h2>
                <input
                  name="facebook"
                  className="Input w-full"
                  placeholder="Facebook Link"
                  value={facebook}
                  onChange={(e) => {
                    updateData({facebook: e.target.value });
                  }}
                />
              </span>
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Instagram Link 
                </h2>
                <input
                  name="instagram"
                  className="Input w-full"
                  placeholder="Instagram Link"
                  value={instagram}
                  onChange={(e) => {
                    updateData({instagram: e.target.value });
                  }}
                />
              </span>
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Twitter Link 
                </h2>
                <input
                  name="twitter"
                  className="Input w-full"
                  placeholder="Twitter Link"
                  value={twitter}
                  onChange={(e) => {
                    updateData({twitter: e.target.value });
                  }}
                />
              </span>
            </div>
          </div>
        </div>

      </div>
     
    </div>
  );
}
