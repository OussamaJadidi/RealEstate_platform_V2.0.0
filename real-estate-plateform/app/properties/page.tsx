import FilterForm from "@/components/FilterForm";
import Card from "@/components/Card";
import Map from "@/components/Map";
export default function page() {
  return (
    <div className=" "> 
      <div className="  flex max-lg:flex-col">
        <div className="w-full border-2 border-green-500 max-lg:w-full  p-[.5rem]  max-lg:aspect-square lg:h-[100vh] lg:sticky top-0   ">
          {/* <Map /> */}
        </div>
          <div className="max-w-[1px]  border-2 border-red-700   flex flex-col gap-y-4  ">
            <div className="max-lg:hidden">
              <h1 className="font-semibold text-black font-rubik text-[2rem] ">
                Properties for Sell
              </h1>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-400 font-rubic">
                  15 Results
                </span>
                <div className="flex">
                  <div className="flex gap-5 items-center">
                    <select className="border border-gray-500 rounded-md px-4 py-2 bg-white  text-gray-500 outline-none">
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
            <div className="grid grid-cols-3 border-2  border-red-600">
            
              <div className="w-full">
                <Card TailwindCSS="" />
              </div>
              <div className="w-full">
                <Card TailwindCSS="" />
              </div>
              <div className="w-full">
                <Card TailwindCSS="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
