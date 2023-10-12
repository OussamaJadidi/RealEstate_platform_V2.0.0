import {Container} from "@/components"
export default function CTA() {
  return (
    <div className='py-8 bg-sky-50 '>
      <Container className="flex flex-wrap justify-center items-center px-8 gap-x-20 gap-y-8 ">
      <p className="max-w-[45rem] text-blue-800 font-rubik font-semibold text-2xl">EstateElite is the revolution in real estate.<br /> Connect, transact, and transform your journey.<br /> Explore now!</p>
      <form action="">
        <button className='px-4 py-2 rounded-md bg-blue-800 text-white '>Explore now</button>
      </form>
      </Container>
    </div>
  )
}
