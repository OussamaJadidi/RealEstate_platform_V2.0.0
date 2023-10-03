import Image from "next/image";
import {SearchForm }from "@/components"
export default function Home() {
  return (
    <main className="Container | h-[calc(100vh-4rem)] bg-sky-100 font-medium | flex justify-between items-center">
      <section className="w-full h-full | flex justify-between items-center gap-2">
        <div className="w-full  p-4 border-4 border-white  rounded-md bg-white | flex flex-col gap-2">
          <h1 className="text-4xl font-semiBold">
            Find your next Home <br />
            Where you want to live
          </h1>
          <p className=" font-medium text-slate-600">
            Find your comfortable space to live<br />
            Sell your property at the best Price
          </p>
          <SearchForm />
        </div>
        <div className="flex h-4/6 max-md:hidden">
          <Image
            className="w-[66%] p-1 rounded-2xl"
            src="/assets/house-1836070_1280.jpg"
            alt="House picture"
            width="500"
            height="500"
          />
          <span className="">
            <Image
              className="h-[50%] p-1 rounded-2xl"
              src="/assets/kitchen-1675190_1280.jpg"
              alt="House picture"
              width="500"
              height="500"
            />
            <Image
              className="h-[50%] p-1 rounded-2xl"
              src="/assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg"
              alt="House picture"
              width="500"
              height="500"
            />
          </span>
        </div>
      </section>
    </main>
  );
}
