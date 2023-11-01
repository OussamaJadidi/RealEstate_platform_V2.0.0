import Locations from "./components/Locations";
import PropertyInfo from "./components/PropertyInfo";

export default function page() {
  return (
    <>
      <div className=" w-full text-center">
          <span className="border rounded-full text-blue-800">1</span>
          <span className="border rounded-full text-blue-800">2</span>
          <span className="border rounded-full text-blue-800">3</span>
          <span className="border rounded-full text-blue-800">4</span>
      </div>
      {/* <Locations /> */}
      <PropertyInfo />
    </>
  )
}
