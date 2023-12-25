import FilterForm from "@/components/FilterForm";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <main className=" w-full flex max-lg:flex-col">
      <div className="w-1/2 first-let max-lg:w-full max-lg:px-[2rem]  max-lg:py-[1rem]   max-lg:aspect-square lg:h-[100vh] lg:sticky top-0   ">
      <Skeleton className="w-full h-full" />
    </div>
    <div className=" propertiesResults  lg:w-1/2 p-[.75rem] max-lg:px-[2rem] flex flex-col gap-y-4  ">
      <div >
        <h1 className="font-semibold text-black font-rubik text-[2rem] max-lg:hidden ">
          Properties for Sell
        </h1>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-400 font-rubic flex gap-2 items-center">
           <Skeleton className="w-[2rem] h-[1.5rem]" /> Location
          </span>
          <div className="flex gap-2 justify-end">
            <div className="flex gap-5 items-center">
                <select className="border border-gray-500 rounded-md px-4 py-2 w-[8rem] h-[2.5rem] bg-white  text-gray-500 outline-none">
                  <option value="">Sorted by</option>
                  <option value="ascending price">ascending price</option>
                  <option value="descending price">descending price</option>
                  <option value="recent posts">Recent Posts</option>
                  <option value="rldest posts">Old Posts</option>
                </select>
              </div>
            <FilterForm />
          </div>
        </div>
      </div>
      {/* <Card TailwindCSS="flex max-lg:flex-col" /> */}
      <div className="gridF">
      
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
        <div>
          <CardSkelaton />
        </div>
      </div>
    </div>
  </main>
  );
}

export default loading;

function CardSkelaton() {
  return (
    <div
      className={` rounded-lg overflow-hidden group/card border `}
    >
      <div>
        <Skeleton className="h-[13.5rem] w-full " />
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
            </span>
            <span className="px-2">|</span>
            <span className="whitespace-nowrap">
              <Skeleton className="w-[75px] h-[20px] rounded-sm" />
            </span>
            <span className="px-2">|</span>
            <span className="whitespace-nowrap">
              <Skeleton className="w-[75px] h-[20px] rounded-sm" />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
