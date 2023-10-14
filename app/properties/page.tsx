import Image from "next/image";
import React from "react";
import { Container, FilterBar, Card,Map } from "@/components";
export default function page() {
  return (
    <div className="Container">
      <Container className=" flex ">
    
        {/* <div className=" w-[15rem]   rounded-lg ">
          <div className="bg-sky-50 fixed  w-[13rem]  border border-black">
            <FilterBar />
          </div>
        </div> */}
        <div className="flex flex-col gap-y-4 py-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className=" w-[15rem] relative  rounded-lg pl-[0rem] pt-[4rem]">
          <Map />
        </div>
      </Container>
    </div>
  );
}
