import FilterForm from "@/components/FilterForm";
import Card from "@/components/Card";
import Map from "@/components/Map"
export default function page() {
  return (
    <div className="Container wrapper">
        <div className="max-lg:hidden">
          <FilterForm lgScreen={true} />
        </div>
        <div className="lg:hidden">
          <div>
            <h1 className="font-semibold text-black font-rubik text-[2rem] ">
              Properties for Sell
            </h1>
            <div className="flex flex-wrap justify-between items-center">
              <span className="font-semibold text-gray-400 font-rubic whitespace-nowrap">
                15 Results
              </span>
              <div className="flex gap-[.5rem]  ">
                <div className="flex gap-5 items-center">
                  <select className="border border-gray-500 rounded-md px-4 h-[2.5rem]  bg-white  text-gray-500 outline-none">
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
        </div>
        <div className=" flex justify-between max-lg:flex-col">
          <div className="w-full max-w-[500rem] p-[.5rem]  max-lg:aspect-square lg:h-[100vh] lg:sticky top-0  ">
            <Map />
          </div>
          <div className="relative flex flex-col gap-y-4 lg:w-[100rem]  py-4 max-lg:order-1">
            <div className="max-lg:hidden">
              <h1 className="font-semibold text-black font-rubik text-[2rem] ">
                Properties for Sell
              </h1>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-400 font-rubic">
                  15 Results
                </span>
                <div className="flex gap-5 items-center">
                  <select className="border border-gray-500 rounded-md px-4 py-2 bg-white  text-gray-500 outline-none">
                    <option value="">Sorted by</option>
                    <option value="ascending price">ascending price</option>
                    <option value="descending price">descending price</option>
                    <option value="recent posts">Recent Posts</option>
                    <option value="rldest posts">Old Posts</option>
                  </select>
                </div>
              </div>
            </div>
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
            <Card TailwindCSS="flex max-lg:flex-col" />
          </div>
        </div>
    </div>
  );
}
