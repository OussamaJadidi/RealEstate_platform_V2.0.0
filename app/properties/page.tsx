import React from "react";
import { Container, FilterForm, Card, Map, SearchForm } from "@/components";
export default function page() {
  return (
    <div className="Container">
      <Container>
        <div className="flex gap-x-[.5rem] items-center lg:hidden">
          <div className="flex gap-5 items-center">
            <select className="border border-gray-500 rounded-md px-4 py-2  text-gray-500 outline-none">
              <option value="">Sorted by</option>
              <option value="ascending price">ascending price</option>
              <option value="descending price">descending price</option>
              <option value="recent posts">Recent Posts</option>
              <option value="rldest posts">descending price</option>
            </select>
          </div>
          <div>
            <FilterForm />
          </div>
        </div>

        <div className=" flex justify-between max-lg:flex-col-reverse">
          <div className="flex flex-col gap-y-4 lg:w-[100rem]  py-4 ">
            <div className="flex gap-x-[.5rem] items-center max-lg:hidden">
              <div className="flex gap-5 items-center">
                <select className="border border-gray-500 rounded-md px-4 py-2  text-gray-500 outline-none">
                  <option value="">Sorted by</option>
                  <option value="ascending price">ascending price</option>
                  <option value="descending price">descending price</option>
                  <option value="recent posts">Recent Posts</option>
                  <option value="rldest posts">descending price</option>
                </select>
              </div>
              <div>
                <FilterForm />
              </div>
            </div>
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
          </div>
          <div className="w-full max-w-[500rem] p-[.5rem]  rounded-lg max-lg:aspect-square lg:h-[100vh] lg:sticky top-0">
            {/* <div className="w-[20rem] h-[20rem]  rounded-lg "> */}
            <Map />
          </div>
        </div>
      </Container>
    </div>
  );
}
