import Image from "next/image";
import HeroForm from "./HeroForm";
export default function Hero() {
  return (
    <section className="Container max-lg:p-0 bg-sky-50">
      <div className="wrapper | relative  flex lg:items-center lg:h-[calc(100vh-5rem)] max-sm:h-[30rem] sm:max-lg:h-[35rem] ">
        {/* <div className="min-w-[12rem] w-[90%]  516px:w-max  z-10 absolute top-[12rem] lg:top-[50%] lg:translate-y-[-50%]  / left-0 max-lg:left-[50%] max-lg:translate-x-[-50%] / max-w-4xl p-6 lg:p-8 shadow-xl rounded-md bg-white | flex flex-col"> */}
        <HeroForm />
        <div className=" sm:h-[25rem] flex absolute right-0  max-lg:top-0 max-md:bottom-0 gap-[0.4rem] ">
          <span className="absolute top-0 right-0 left-0 bottom-0  z-[1] sm:hidden">
            <h1 className=" text-[2.5rem] sm:text-[3rem] sm:pt-16 516px:max-sm:pt-20 text-blue-800 textPublicitaire font-bold font-roboto p-12  text-center max-sm:h-[15rem] sm:max-lg:h-[20rem]">
              Find your Future Home
            </h1>
          </span>
          <div className="relative bg-gray-300 lg:rounded-2xl overflow-hidden w-screen lg:w-[40rem] xl:w-[35rem] / h-full max-sm:h-[15rem] sm:max-lg:h-[20rem]">
            <Image
              src="/assets/pexels-jean-van-der-meulen-1457842.jpg"
              alt="House picture"
              className="w-full h-full"
              width={560}
              height={400}
              sizes="(min-width: 1024px) 40rem, (min-width: 1281px) 35rem, 100vw"
              priority={true}
              loading="eager"
            />
          </div>
          <span className="max-xl:hidden flex flex-col justify-between gap-[.35rem]">
            <div className="bg-gray-300 w-[21rem] h-full rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full"
                src="/assets/sean-pollock-PhYq704ffdA-unsplash.jpg"
                alt="House picture"
                width={336}
                height={197}
                loading="eager"
              />
            </div>
            <div className="bg-gray-300 w-[21rem] h-full rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full"
                src="/assets/jason-dent-w3eFhqXjkZE-unsplash.jpg"
                alt="House picture"
                width={336}
                height={197}
                loading="eager"
              />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
