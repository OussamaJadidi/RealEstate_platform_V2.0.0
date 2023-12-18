// import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <main className="  h-[calc(100vh-5rem)] flex gap-2 wrapper">
      {/* <div className="w-1/2">
          <Skeleton className="w-full h-full " />
      </div>
      <div className="">
        <div className="">
          <CardSkelaton />
        </div>
        <div className="">
          <CardSkelaton />
        </div>
        <div className="">
          <CardSkelaton />
        </div>
      </div> */}
    </main>
  );
}

export default loading;

function CardSkelaton() {
  return (
    <div
      className={`flex max-lg:flex-col rounded-lg overflow-hidden group/card border `}
    >
      {/* <div>
        <Skeleton className="h-[15rem] w-[20rem] " />
      </div>
      <section className="p-3 flex flex-col justify-between gap-4 text-gray-500 text-sm bg-white ">
        <div>
          <Skeleton className="w-[74px] h-[20px] rounded-md " />
          <Skeleton className="w-[100px] h-[20px] rounded-md mt-1" />
          <Skeleton className="w-[300px] h-[20px] rounded-md mt-2" />
          <Skeleton className="w-[300px] h-[20px] rounded-md mt-1" />
        </div>
        <div className="flex flex-col gap-1 font-normal">
          <Skeleton className="w-[120px] h-[20px] rounded-sm" />
          <div className="flex flex-wrap">
            <span className="whitespace-nowrap">
              <Skeleton className="w-[75px] h-[20px] rounded-sm" />
            </span>{" "}
            <span className="px-2">|</span>
            <span className="whitespace-nowrap">
              <Skeleton className="w-[75px] h-[20px] rounded-sm" />
            </span>{" "}
            <span className="px-2">|</span>
            <span className="whitespace-nowrap">
              <Skeleton className="w-[75px] h-[20px] rounded-sm" />
            </span>
          </div>
        </div>
      </section> */}
    </div>
  );
}
