"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import useHandlePopUp from "@/lib/useHandlePopUp";

// onBlur={(e)=>{e.currentTarget.open= false}}


export default function SearchForm() {
  const surfacePopUptrigger = useRef<HTMLButtonElement | null>(null)
  const sufacePopUp = useRef<HTMLUListElement | null>(null)

  const pricePopUptrigger = useRef<HTMLButtonElement | null>(null)
  const pricePopUp = useRef<HTMLUListElement | null>(null)

  const bedsAndBathsPopUptrigger = useRef<HTMLButtonElement | null>(null)
  const bedsAndBaths = useRef<HTMLUListElement | null>(null)

  const [surfacePopUpIsOpen,handleSurfacePopUp] = useHandlePopUp(surfacePopUptrigger,sufacePopUp)
  const [PricePopUpIsOpen,handlePricePopUp] = useHandlePopUp(pricePopUptrigger,pricePopUp)
  const [bedsAndBathsPopUpIsOpen,handleBedsAndBathsPopUp] = useHandlePopUp(bedsAndBathsPopUptrigger,bedsAndBaths)
  return (
    <>
      <form action="" >
        <ul className="flex flex-wrap">
          <li>
            <input className="Input" list="country" placeholder="Country" />
            <datalist className="marker:text-red-600" id="country">
              <option value="morroco">morroco</option>
              <option value="USA">USA</option>
              <option value="Europe">Europe</option>
            </datalist>
          </li>
          <li>
            <input className="Input" list="city" placeholder="City" />
            <datalist id="city">
              <option value="oujda">oujda</option>
              <option value="taourirt">taourirt</option>
              <option value="tghit">tghit</option>
            </datalist>
          </li>
          <li>
            <select className="Input" name="" id="" >
              <option value="">Property type</option>
              <option value="">Apartment</option>
              <option value="">Villa</option>
              <option value="">House</option>
              <option value="">Duplex</option>
              <option value="">Building</option>
              <option value="">Ground</option>
              <option value="">Bungalow</option>
              <option value="">Cottage</option>
              <option value="">Factory</option>
              <option value="">Riad</option>
              <option value="">Triplex</option>
              <option value="">Studio</option>
              <option value="">PentHouse</option>
              <option value="">Hangar</option>
            </select>
          </li>
          <li>
            <div className="relative"   >
              <button  type="button" className="Input cursor-pointer" onClick={handleBedsAndBathsPopUp} ref={bedsAndBathsPopUptrigger}>Beds & Baths</button>
              {bedsAndBathsPopUpIsOpen && <ul ref={bedsAndBaths} className="border rounded-md px-4 absolute z-10 top-[105%]   bg-white w-max h-40">
                <li className="">
                  <h3 className="p-2">Beds</h3>
                  <ul className="flex flex-wrap gap-2 gap-y-2">
                    <li>
                        <input type="checkbox" id="0" autoComplete="off" value="0" className="hidden"/>
                        <label htmlFor="0" className="box"><span>Studio</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="1" autoComplete="off" value="1" className="hidden"/>
                        <label htmlFor="1" className="box"><span>1</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="2" autoComplete="off" value="2" className="hidden"/>
                        <label htmlFor="2" className="box"><span>2</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="3" autoComplete="off" value="3" className="hidden"/>
                        <label htmlFor="3" className="box"><span>3</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="4" autoComplete="off" value="4" className="hidden"/>
                        <label htmlFor="4" className="box"><span>4</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="5" autoComplete="off" value="5" className="hidden"/>
                        <label htmlFor="5" className="box"><span>5</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="6" autoComplete="off" value="6" className="hidden"/>
                        <label htmlFor="6" className="box"><span>6</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="7" autoComplete="off" value="7" className="hidden"/>
                        <label htmlFor="7" className="box"><span>7</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="8" autoComplete="off" value="8" className="hidden"/>
                        <label htmlFor="8" className="box"><span>7+</span></label>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <h3 className="p-2">Baths</h3>
                  <ul className="flex flex-wrap gap-2 gap-y-2">
                    <li>
                        <input type="checkbox" id="11" autoComplete="off" value="11" className="hidden"/>
                        <label htmlFor="11" className="box"><span>1</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="12" autoComplete="off" value="12" className="hidden"/>
                        <label htmlFor="12" className="box"><span>2</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="13" autoComplete="off" value="13" className="hidden"/>
                        <label htmlFor="13" className="box"><span>3</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="14" autoComplete="off" value="14" className="hidden"/>
                        <label htmlFor="14" className="box"><span>4</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="15" autoComplete="off" value="15" className="hidden"/>
                        <label htmlFor="15" className="box"><span>5</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="16" autoComplete="off" value="16" className="hidden"/>
                        <label htmlFor="16" className="box"><span>6</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="17" autoComplete="off" value="17" className="hidden"/>
                        <label htmlFor="17" className="box"><span>7</span></label>
                    </li>
                    <li>
                        <input type="checkbox" id="18" autoComplete="off" value="18" className="hidden"/>
                        <label htmlFor="18" className="box"><span>7+</span></label>
                    </li>
                  </ul>
                </li>
              </ul>}
            </div>
          </li>
          <li>
            <div className="relative" >
              <button type="button" ref={pricePopUptrigger} className="Input" onClick={handlePricePopUp} >Price</button>
             { PricePopUpIsOpen && <ul ref={pricePopUp} className="border-2  gap-2 rounded-md absolute z-10 top-[105%]  bg-white  px-4 h-44" >
                <li >
                    <h3 className="py-2">Price</h3>
                    <ul className="flex gap-2">
                        <li><input  type="number" placeholder="Min Price $" className="box" /></li>
                        <li><input  type="number" placeholder="Max Price $" className="box" /></li>
                    </ul>
                  
                </li>
                
                <li>
                    <h3 className="py-2">Rental Period</h3>
                    <ul className="flex gap-2">
                        <li><input type="radio" name="rentalPeriod" placeholder="Per Day" id="PerDay" className="hidden"/>
                        <label htmlFor="PerDay" className="box"><span>Per Day</span></label></li>
                        <li><input type="radio" name="rentalPeriod" placeholder="Per Month" id="PerMonth" className="hidden"/>
                        <label htmlFor="PerMonth" className="box"><span>Per Month</span></label></li>
                        <li><input type="radio" name="rentalPeriod" placeholder="Per Year" id="PerYear" className="hidden"/>
                        <label htmlFor="PerYear" className="box"><span>Per Year</span></label></li>
                    </ul>
                </li>
              </ul>}
            </div>
          </li>
          <li>
            <select className="Input" name="" id="">
              <option value="meuble">meuble</option>
              <option value="meuble">meuble</option>
              <option value="non-meuble">non-meuble</option>
              <option value="partiellment meuble">partiellment meuble</option>
            </select>
          </li>
          <li>
            <div className="Input relative" >
  <button type="button" ref={surfacePopUptrigger} onClick={handleSurfacePopUp}>Surface (m²)</button>
  {surfacePopUpIsOpen && 
    <ul ref={sufacePopUp} className="border-2 gap-2 rounded-md absolute z-10 top-[105%] left-0 bg-white p-4"> 
      <li className=""> 
        <ul className="flex 850px:flex-col flex-row gap-2"> 
          <li><input type="number" placeholder="Min surface $" className="box" /></li> 
          <li><input type="number" placeholder="Max surface $" className="box" /></li> 
        </ul> 
      </li> 
    </ul>
  } 
</div>
          </li>
          <li>
            <div className="Input flex items-center">
              <span className="pr-4">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ width: "1rem" }}
                />
              </span>
              <div>
                <input type="text" placeholder='Key-Words: pisicne,centre ville' />
              </div>
            </div>
          </li>
        </ul>
        <button className="bg-blue-800 text-white flex items-center p-2 rounded-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ width: "1rem", color: "white" }}
          />
          <span className="px-2">Search</span>
        </button>
      </form>
    </>
  );
}
