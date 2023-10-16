import Image from "next/image"
import {Container} from "./"
export default function Value() {
  return (
    <Container className="Container flex max-lg:flex-col items-center justify-center gap-x-16 gap-y-8 py-[4rem] ">
      <Image src="/assets/c.jpg" width="500" height="500" className=" rounded-xl w-[25rem] max-lg:w-screen sm:max-lg:h-[20rem] " alt="marketing img"/>
      <div className="w-fit ">
        <h2 className="font-rubik text-3xl pb-8">Easy & Simple way to Find your Next Home</h2>
        <ul className=" h-[13rem] flex flex-col justify-between">
          <li className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">01</span>Search your desire location</li>
          <li className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">02</span>Book visits, Contact owners</li>
          <li className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">03</span>Pick what fit you</li>
          <li className="text-gray-500" ><span className=" bg-blue-800 inline-flex justify-center items-center rounded-full w-[3rem] h-[2rem]  text-white mr-[1.2rem]">04</span>Enjoy your House</li>
        </ul>
      </div>
    </Container>
  )
}
