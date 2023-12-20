"use client";
import { Container } from "@/components";
import { faVcard } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function OwnerInfo() {
  const [ownerInfo, setOwnerInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    facebook: "",
    instagram: "",
    twitter: "",
  });
  return (
    <div className="Container">
      <h1 className="font-bold text-black text-[2rem] p-4">Owner Contacts</h1>
      <Container className="flex max-md:flex-col justify-between w-full ">
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
                  value={ownerInfo.name}
                  onChange={(e) => {
                    setOwnerInfo({ ...ownerInfo, name: e.target.value });
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
                  value={ownerInfo.email}
                  onChange={(e) => {
                    setOwnerInfo({ ...ownerInfo, email: e.target.value });
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
                  value={ownerInfo.phoneNumber}
                  onChange={(e) => {
                    setOwnerInfo({ ...ownerInfo, phoneNumber: e.target.value });
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
                  Facebook Link <span className="text-red-700">*</span>
                </h2>
                <input
                  name="facebook"
                  className="Input w-full"
                  placeholder="Facebook Link"
                  value={ownerInfo.facebook}
                  onChange={(e) => {
                    setOwnerInfo({ ...ownerInfo, facebook: e.target.value });
                  }}
                />
              </span>
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Instagram Link <span className="text-red-700">*</span>
                </h2>
                <input
                  name="instagram"
                  className="Input w-full"
                  placeholder="Instagram Link"
                  value={ownerInfo.instagram}
                  onChange={(e) => {
                    setOwnerInfo({ ...ownerInfo, instagram: e.target.value });
                  }}
                />
              </span>
              <span>
                <h2 className="pb-2 font-roboto text-slate-950 font-semibold">
                  Twitter Link <span className="text-red-700">*</span>
                </h2>
                <input
                  name="twitter"
                  className="Input w-full"
                  placeholder="Twitter Link"
                  value={ownerInfo.twitter}
                  onChange={(e) => {
                    setOwnerInfo({ ...ownerInfo, twitter: e.target.value });
                  }}
                />
              </span>
            </div>
          </div>
        </div>

      </Container>
        <button
          type="submit"
          className=" bg-blue-800 text-white px-8 py-2 rounded-md  my-12 mx-auto block"
        >
          Next
        </button>
    </div>
  );
}
