"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import useHandlePopUp from "@/lib/useHandlePopUp";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false; /* eslint-disable import/first */


export default function SearchForm() {
  const [extraOptions, setExtraOptions] = useState(false);

  const propertyTypePopUptrigger = useRef<HTMLButtonElement | null>(null);
  const propertyTypePopUp = useRef<HTMLUListElement | null>(null);

  const meublePopUptrigger = useRef<HTMLButtonElement | null>(null);
  const meublePopUp = useRef<HTMLUListElement | null>(null);

  const surfacePopUptrigger = useRef<HTMLButtonElement | null>(null);
  const sufacePopUp = useRef<HTMLUListElement | null>(null);

  const pricePopUptrigger = useRef<HTMLButtonElement | null>(null);
  const pricePopUp = useRef<HTMLUListElement | null>(null);

  const bedsAndBathsPopUptrigger = useRef<HTMLButtonElement | null>(null);
  const bedsAndBathsPopUp = useRef<HTMLUListElement | null>(null);

  const [surfacePopUpIsOpen, handleSurfacePopUp] = useHandlePopUp(
    surfacePopUptrigger,
    sufacePopUp
  );
  const [PricePopUpIsOpen, handlePricePopUp] = useHandlePopUp(
    pricePopUptrigger,
    pricePopUp
  );
  const [bedsAndBathsPopUpIsOpen, handleBedsAndBathsPopUp] = useHandlePopUp(
    bedsAndBathsPopUptrigger,
    bedsAndBathsPopUp
  );
  const [meublePopUpIsOpen, handleMeublePopUp] = useHandlePopUp(
    meublePopUptrigger,
    meublePopUp
  );
  const [propertyTypePopUpIsOpen, handlePropertyTypePopUp] = useHandlePopUp(
    propertyTypePopUptrigger,
    propertyTypePopUp
  );

  function handleExtraOptions() {
    setExtraOptions((state) => !state);
  }
  return (
    <>
      <form action="" className="">
        <ul className="flex  flex-col gap-1 ">
          <div className="flex flex-wrap gap-1  ">
            <li>
              <input className="Input w-[8rem]" list="country" placeholder="Country" />
              <datalist className="marker:text-red-600" id="country">
                <option value="morroco">morroco</option>
                <option value="USA">USA</option>
                <option value="Europe">Europe</option>
              </datalist>
            </li>
            <li>
              <input className="Input w-[8rem]" list="city" placeholder="City" />
              <datalist id="city">
                <option value="oujda">oujda</option>
                <option value="taourirt">taourirt</option>
                <option value="tghit">tghit</option>
              </datalist>
            </li>
            
          <li>
            <button
              type="button"
              className="Input cursor-pointer whitespace-nowrap "
              onClick={handlePropertyTypePopUp}
              ref={propertyTypePopUptrigger}
            >
              Property type <FontAwesomeIcon icon={faChevronDown}  style={{width: "1rem"}}/>
            </button>
            {propertyTypePopUpIsOpen && (
              <ul
                ref={propertyTypePopUp}
                className="border absolute rounded-md px-4 mt-[2px] pt-6 pb-6 z-10  bg-white  flex max-lg:justify-center flex-wrap gap-x-1 gap-y-4 max-w-[29rem]"
              >
                <li>
                  <input
                    type="checkbox"
                    id="Apartment"
                    autoComplete="off"
                    value="Apartment"
                    className="hidden"
                  />
                  <label htmlFor="Apartment" className="box">
                    <span>Apartment</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Villa"
                    autoComplete="off"
                    value="Villa"
                    className="hidden"
                  />
                  <label htmlFor="Villa" className="box">
                    <span>Villa</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="House"
                    autoComplete="off"
                    value="House"
                    className="hidden"
                  />
                  <label htmlFor="House" className="box">
                    <span>House</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Duplex"
                    autoComplete="off"
                    value="Duplex"
                    className="hidden"
                  />
                  <label htmlFor="Duplex" className="box">
                    <span>Duplex</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Building"
                    autoComplete="off"
                    value="Building"
                    className="hidden"
                  />
                  <label htmlFor="Building" className="box">
                    <span>Building</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Ground"
                    autoComplete="off"
                    value="Ground"
                    className="hidden"
                  />
                  <label htmlFor="Ground" className="box">
                    <span>Ground</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Bungalow"
                    autoComplete="off"
                    value="Bungalow"
                    className="hidden"
                  />
                  <label htmlFor="Bungalow" className="box">
                    <span>Bungalow</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Cottage"
                    autoComplete="off"
                    value="Cottage"
                    className="hidden"
                  />
                  <label htmlFor="Cottage" className="box">
                    <span>Cottage</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Factory"
                    autoComplete="off"
                    value="Factory"
                    className="hidden"
                  />
                  <label htmlFor="Factory" className="box">
                    <span>Factory</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Riad"
                    autoComplete="off"
                    value="Riad"
                    className="hidden"
                  />
                  <label htmlFor="Riad" className="box">
                    <span>Riad</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Triplex"
                    autoComplete="off"
                    value="Triplex"
                    className="hidden"
                  />
                  <label htmlFor="Triplex" className="box">
                    <span>Triplex</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Studio"
                    autoComplete="off"
                    value="Studio"
                    className="hidden"
                  />
                  <label htmlFor="Studio" className="box">
                    <span>Studio</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="PentHouse"
                    autoComplete="off"
                    value="PentHouse"
                    className="hidden"
                  />
                  <label htmlFor="PentHouse" className="box">
                    <span>PentHouse</span>
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Hangar"
                    autoComplete="off"
                    value="Hangar"
                    className="hidden"
                  />
                  <label htmlFor="Hangar" className="box">
                    <span>Hangar</span>
                  </label>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              type="button"
              ref={pricePopUptrigger}
              className="Input whitespace-nowrap"
              onClick={handlePricePopUp}
            >
              Price <FontAwesomeIcon icon={faChevronDown}  style={{width: "1rem"}} />
            </button>
            <div>
              {PricePopUpIsOpen && (
                <ul
                  ref={pricePopUp}
                  className="border-2  gap-2 rounded-md absolute max-lg:right-[0] mx-[5px] mt-[2px] z-10 pt-2 pb-6  bg-white  px-4 w-fit"
                >
                  <li>
                    <h3 className="py-2">Price</h3>
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
                      <li>
                        <input
                          type="number"
                          placeholder="Min Price $"
                          className="box w-[13rem] "
                        />
                      </li>
                      <li>
                        <input
                          type="number"
                          placeholder="Max Price $"
                          className="box w-[13rem] "
                        />
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h3 className="py-2">Rental Period</h3>
                    <ul className="flex flex-wrap gap-x-2 gap-y-4 justify-center">
                      <li>
                        <input
                          type="radio"
                          name="rentalPeriod"
                          placeholder="Per Day"
                          id="PerDay"
                          className="hidden"
                        />
                        <label htmlFor="PerDay" className="box">
                          <span>Per Day</span>
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="rentalPeriod"
                          placeholder="Per Month"
                          id="PerMonth"
                          className="hidden"
                        />
                        <label htmlFor="PerMonth" className="box">
                          <span>Per Month</span>
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="rentalPeriod"
                          placeholder="Per Year"
                          id="PerYear"
                          className="hidden"
                        />
                        <label htmlFor="PerYear" className="box">
                          <span>Per Year</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
          </li>
          
          </div>
          <div className="flex  flex-wrap items-center gap-1">
          {extraOptions && (
            <li>
              <button
                type="button"
                className="Input cursor-pointer whitespace-nowrap"
                onClick={handleBedsAndBathsPopUp}
                ref={bedsAndBathsPopUptrigger}
              >
                Beds & Baths <FontAwesomeIcon icon={faChevronDown}  style={{width: "1rem"}} />
              </button>
              <div>
                {bedsAndBathsPopUpIsOpen && (
                  <ul
                    ref={bedsAndBathsPopUp}
                    className="border absolute rounded-md px-4 mt-[2px] pt-2 pb-6 z-10  bg-white w-fit"
                  >
                    <li className="">
                      <h3 className="p-2">Beds</h3>
                      <ul className="flex flex-wrap gap-y-4 gap-x-1">
                        <li>
                          <input
                            type="checkbox"
                            id="0"
                            autoComplete="off"
                            value="0"
                            className="hidden"
                          />
                          <label htmlFor="0" className="box">
                            <span>Studio</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="1"
                            autoComplete="off"
                            value="1"
                            className="hidden"
                          />
                          <label htmlFor="1" className="box">
                            <span>1</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="2"
                            autoComplete="off"
                            value="2"
                            className="hidden"
                          />
                          <label htmlFor="2" className="box">
                            <span>2</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="3"
                            autoComplete="off"
                            value="3"
                            className="hidden"
                          />
                          <label htmlFor="3" className="box">
                            <span>3</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="4"
                            autoComplete="off"
                            value="4"
                            className="hidden"
                          />
                          <label htmlFor="4" className="box">
                            <span>4</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="5"
                            autoComplete="off"
                            value="5"
                            className="hidden"
                          />
                          <label htmlFor="5" className="box">
                            <span>5</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="6"
                            autoComplete="off"
                            value="6"
                            className="hidden"
                          />
                          <label htmlFor="6" className="box">
                            <span>6</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="7"
                            autoComplete="off"
                            value="7"
                            className="hidden"
                          />
                          <label htmlFor="7" className="box">
                            <span>7</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="8"
                            autoComplete="off"
                            value="8"
                            className="hidden"
                          />
                          <label htmlFor="8" className="box">
                            <span>7+</span>
                          </label>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <h3 className="p-2">Baths</h3>
                      <ul className="flex flex-wrap gap-y-4 gap-x-1 ">
                        <li>
                          <input
                            type="checkbox"
                            id="11"
                            autoComplete="off"
                            value="11"
                            className="hidden"
                          />
                          <label htmlFor="11" className="box">
                            <span>1</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="12"
                            autoComplete="off"
                            value="12"
                            className="hidden"
                          />
                          <label htmlFor="12" className="box">
                            <span>2</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="13"
                            autoComplete="off"
                            value="13"
                            className="hidden"
                          />
                          <label htmlFor="13" className="box">
                            <span>3</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="14"
                            autoComplete="off"
                            value="14"
                            className="hidden"
                          />
                          <label htmlFor="14" className="box">
                            <span>4</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="15"
                            autoComplete="off"
                            value="15"
                            className="hidden"
                          />
                          <label htmlFor="15" className="box">
                            <span>5</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="16"
                            autoComplete="off"
                            value="16"
                            className="hidden"
                          />
                          <label htmlFor="16" className="box">
                            <span>6</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="17"
                            autoComplete="off"
                            value="17"
                            className="hidden"
                          />
                          <label htmlFor="17" className="box">
                            <span>7</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="18"
                            autoComplete="off"
                            value="18"
                            className="hidden"
                          />
                          <label htmlFor="18" className="box">
                            <span>7+</span>
                          </label>
                        </li>
                      </ul>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          )}
         
          {extraOptions && (
            <li>
              <button
                type="button"
                ref={meublePopUptrigger}
                className="Input whitespace-nowrap"
                onClick={handleMeublePopUp}
              >
                Meublement <FontAwesomeIcon icon={faChevronDown}  style={{width: "1rem"}} />
              </button>
              <div>
                {meublePopUpIsOpen && (
                  <ul
                    ref={meublePopUp}
                    className="border-2  flex  flex-wrap gap-x-2 gap-y-4 rounded-md absolute max-sm:right-0 mx-[5px] justify-center mt-[2px] z-10 py-5  bg-white  px-4 w-fit"
                  >
                    <li>
                      <input
                        type="checkbox"
                        id="mebule"
                        autoComplete="off"
                        value="mebule"
                        className="hidden"
                      />
                      <label htmlFor="mebule" className="box">
                        <span>Meuble</span>
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="not-meuble"
                        autoComplete="off"
                        value="not-meuble"
                        className="hidden"
                      />
                      <label htmlFor="not-meuble" className="box">
                        <span className=" whitespace-nowrap">Not Meuble</span>
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="partiellement-meuble"
                        autoComplete="off"
                        value="partiellement-meuble"
                        className="hidden"
                      />
                      <label htmlFor="partiellement-meuble" className="box">
                        <span className=" whitespace-nowrap">partiellemnt meuble</span>
                      </label>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          )}
          {extraOptions && ( 
          <li>
            
              <div className="">
                <button
                  type="button"
                  ref={surfacePopUptrigger}
                  onClick={handleSurfacePopUp}
                  className="Input whitespace-nowrap"
                >
                  Surface (m²) <FontAwesomeIcon icon={faChevronDown}  style={{width: "1rem"}} />
                </button>
                {surfacePopUpIsOpen && (
                  <ul
                    ref={sufacePopUp}
                    className="border-2 flex flex-wrap justify-center max-lg:right-0 gap-2 mx-[5px] rounded-md absolute z-10  bg-white p-4 "
                  >
                    <li>
                      <input
                        type="number"
                        placeholder="Min surface $"
                        className="box "
                      />
                    </li>
                    <li>
                      <input
                        type="number"
                        placeholder="Max surface $"
                        className="box "
                      />
                    </li>
                  </ul>
                )}
              </div>
           
          </li> 
          )}
          </div >
          <div className="flex">
            <li>
              {extraOptions && (
                <div className="Input flex items-center">
                  <span className="pr-4">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ width: "1rem" }}
                    />
                  </span>
                  <div>
                    <input
                      type="text"
                      placeholder="Key-Words: pisicne,centre ville"
                    />
                  </div>
                </div>
              )}
            </li>
          </div>
        </ul>
        <span className=" flex flex-wrap-reverse ml-auto w-fit justify-center  items-center gap-2 text-xs text-gray-400  ">
          <button
            type="button"
            className="text-left  underline outline-none" 
            onClick={handleExtraOptions}
          >
            Show {extraOptions ? "less" : "more"} options search <FontAwesomeIcon icon={faChevronDown}  style={{width: "1rem",transform: extraOptions ? "rotate(180deg)" : ""}} />
          </button>
          <button type="button" className=" bg-blue-800 text-white flex items-center p-2 rounded-md px-4 mt-2">
            <span className="w-4 text-white px-1">
               <FontAwesomeIcon
              icon={faMagnifyingGlass}
              // style={{ width: "1rem", color: "white", paddingInline: ".3rem" }}
            />
            </span>
           
            <span className="px-2 ">Search</span>
          </button>
        </span>
      </form>
    </>
  );
}
