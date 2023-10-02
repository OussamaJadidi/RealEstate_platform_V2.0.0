import Image from "next/image";

export default function Home() {
  return (
    <main className="Container | h-[calc(100vh-4rem)] bg-sky-100 font-medium | flex justify-between items-center">
      <section className = "w-full flex justify-between items-center">
        <div className="w-[50vw] flex gap-2"></div>
        <div className="w-[50vw] flex gap-2">
          <Image className="w-[100%] h-[100%] rounded-md" src="/assets/house-1836070_1280.jpg" alt="House picture" width="500" height="5500" />
          <span className="flex flex-col gap-2 rounded-md">
            <Image className="w-[13rem] h-[13rem]  rounded-md" src="/assets/kitchen-1675190_1280.jpg" alt="House picture" width="400" height="400"  />
            <Image className="w-[13rem] h-[13rem] rounded-md" src="/assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg" alt="House picture" width="7100" height="501100"  />
          </span>
        </div>
      </section>
    </main>
  );
}
