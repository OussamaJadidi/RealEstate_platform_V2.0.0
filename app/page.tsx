import Image from "next/image";
import { SearchForm } from "@/components";
export default function Home() {
  return (
    <main className="Container | h-[calc(100vh-4rem)] bg-sky-50 font-medium ">
      <section className="w-full h-full  ">
        <div className=" max-w-xl p-4 shadow-xl rounded-md bg-white | flex flex-col ">
          <h1 className="text-4xl font-semiBold">
            Find your next Home <br />
            Where you want to live
          </h1>
          <p className=" font-medium text-slate-600">
            Find your comfortable space to live
            <br />
            Sell your property at the best Price
          </p>
          <SearchForm />
        </div>
        <div className="">
          {/* <Image
            className="w-[100%] p-1 rounded-2xl"
            src="/assets/d.jpg"
            alt="House picture"
            width="1000"
            height="1000"
          /> */}
          {/* <span className="">
            <Image
              className="h-[50%] p-1 rounded-2xl"
              src="/assets/d.jpg"
              alt="House picture"
              width="1000"
              height="1000"
            />
            <Image
              className="h-[50%] p-1 rounded-2xl"
              src="/assets/pexels-curtis-adams-3288103.jpg"
              alt="House picture"
              width="1000"
              height="1000"
            />
          </span> */}
        </div>
      </section>
    </main>
  );
}
