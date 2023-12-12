import Image from "next/image"
export default function Value() {
  return (
    <div className="Container wrapper flex max-lg:flex-col items-center justify-center gap-x-16 gap-y-8 py-[4rem] ">
      <div className=" shadow-xl ">
        <Image src="/assets/c.jpg" width="400" height="300" className=" rounded-xl w-[25rem] max-lg:w-screen sm:max-lg:h-[20rem] " alt="marketing img of a house" priority loading="eager"/>
      </div>
      <div className="w-fit ">
        <h2 className="font-rubik text-3xl pb-8">Easy & Simple way to Find your Next Home</h2>
        <ul className=" h-[13rem] flex flex-col justify-between">
          <li key="01" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">01</span>Search your desire location</li>
          <li key="02" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">02</span>Book visits, Contact owners</li>
          <li key="03" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">03</span>Pick what fit you</li>
          <li key="04" className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">04</span>Enjoy your House</li>
        </ul>
      </div>
    </div>
  )
}
