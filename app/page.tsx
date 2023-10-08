import Image from "next/image";
import { SearchForm } from "@/components";
import {Container } from "@/components"
export default function Home() {
  return (
    <main className="Container max-lg:!px-0  bg-sky-50 font-medium ">
      <Container className=" h-[calc(100vh-5rem)] ">
        
      <section className="relative w-full h-full  flex items-center  ">
        {/* <div className="min-w-[12rem] w-[90%]  516px:w-max  z-10 absolute top-[12rem] lg:top-[50%] lg:translate-y-[-50%]  / left-0 max-lg:left-[50%] max-lg:translate-x-[-50%] / max-w-4xl p-6 lg:p-8 shadow-xl rounded-md bg-white | flex flex-col"> */}
        <div className="min-w-[12rem] w-[90%]  516px:w-max z-10  max-lg:mx-auto / max-w-4xl p-6 lg:p-8 shadow-xl rounded-md bg-white | flex flex-col">
          <h1 className="text-4xl font-semiBold max-sm:hidden font-rubik pb-2">
            Buy your next Home   <br />
            Where you want to live
          </h1>
          <p className=" font-medium text-slate-600 max-sm:hidden pb-6">
            Find your comfortable space to live
            <br />
            Sell your property at the best Price
          </p>
          <SearchForm />
        </div>
        <div className=" sm:h-40rem flex absolute  right-0  max-lg:top-0 max-md:bottom-0">
          <span className="absolute top-0 right-0 left-0 bottom-0 sm:hidden">
            <h1 className=" text-[2.5rem] sm:text-[3rem] sm:pt-16 516px:max-sm:pt-20 text-blue-800 textPublicitaire font-semiBold p-12  text-center max-sm:h-[15rem] sm:max-lg:h-[20rem]">
              Find your Future Home
            </h1>
          </span>
          <Image
            className="w-[75rem] lg:w-[40rem] xl:w-[35rem] / max-sm:h-[15rem] sm:max-lg:h-[15rem] / xl:p-1 lg:rounded-2xl "
            src="/assets/pexels-jean-van-der-meulen-1457842.jpg"
            // src="/assets/sean-pollock-PhYq704ffdA-unsplash.jpg"
            // src="/assets/jason-dent-w3eFhqXjkZE-unsplash.jpg"
            // src="/assets/andrea-davis-VOWXF7lsAN0-unsplash.jpg"


            alt="House picture"
            width="2500"
            height="2500"
          />
          <span className="max-xl:hidden ">
            <Image
              className="h-[50%] w-[21rem] p-1 rounded-2xl"
              src="/assets/sean-pollock-PhYq704ffdA-unsplash.jpg"

              alt="House picture"
              width="1000"
              height="1000"
            />
            <Image
              className="h-[50%] w-[21rem] p-1 rounded-2xl"
              src="/assets/jason-dent-w3eFhqXjkZE-unsplash.jpg"

              alt="House picture"
              width="1000"
              height="1000"
            />
          </span>
        </div>
      </section>
    
      </Container>
    </main>
  );
}
