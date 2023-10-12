import Image from "next/image";
import React from "react";
import { Container, FilterBar } from "@/components";
export default function page() {
  return (
    <div>
      <Container className="h-screen border border-black">
        <div className=" w-screen h-16 bg-sky-50 rounded-lg  px-[5rem] py-[1rem] border border-red-700 flex justify-center items-center">
          <FilterBar />
        </div>
      </Container>
    </div>
  );
}
