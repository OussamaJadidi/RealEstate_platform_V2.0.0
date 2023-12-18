import Image from "next/image"
export default function Value() {
  return (
    <div className="Container wrapper px-[5rem] flex max-lg:flex-col items-center justify-center gap-x-16 gap-y-8 py-[4rem] ">
       <div className="relative w-[25rem] max-lg:w-screen h-[18rem] ">
        <div className="absolute inset-0 max-lg:left-[2rem] max-lg:right-[2rem] shadow-2xl rounded-xl overflow-hidden bg-gray-300">
          <Image
            src="/assets/c.jpg"
            width="400"
            height="300"
            sizes="(max-width: 1024px) 100vw, 25rem"
            className="w-full h-full"
            alt="marketing image of a house"
            loading="eager"
          />
        </div>
      </div>
      <div className="w-fit ">
        <h2 className="font-rubik text-3xl pb-8">Easy & Simple way to Find your Next Home</h2>
        <ul className=" h-[13rem] flex flex-col justify-between">
          <li key="01" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">01</span>Search your desire location</li>
          <li key="02" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">02</span>Book visits, Contact owners</li>
          <li key="03" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">03</span>Choose what you want</li>
          <li key="04" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">04</span>Enjoy your House</li>
        </ul>
      </div>
    </div>
  )
}
