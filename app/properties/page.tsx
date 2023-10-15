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
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
          <Card TailwindCSS="max-w-[30rem]"/>
        </div>
        <div className="w-full  rounded-lg h-[calc(100vh-5rem)]">
          <Map />
        </div>
      </Container>
    </div>
  );
}
