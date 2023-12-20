"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useRef, useState } from "react";
import useHandlePopUp from "@/hooks/useHandlePopUp";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false; /* eslint-disable import/first */
import getCountries from "@/utils/getCountries";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FilterForm({ lgScreen = false }) {
// Start handle PopUp appearence
  const FilterPopUpTrigger = useRef<HTMLButtonElement | null>(null);
  const FilterPopUp = useRef<HTMLDivElement | null>(null);
  const [filterPopUpIsOpen, handleFilterPopUp] = useHandlePopUp(
    FilterPopUpTrigger,
    FilterPopUp
  );
  const propertyTypePopUptrigger = useRef<HTMLButtonElement | null>(null);
  const propertyTypePopUp = useRef<HTMLUListElement | null>(null);

  const furniturePopUptrigger = useRef<HTMLButtonElement | null>(null);
  const furniturePopUp = useRef<HTMLUListElement | null>(null);

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
  const [furniturePopUpIsOpen, handleFurniturePopUp] = useHandlePopUp(
    furniturePopUptrigger,
    furniturePopUp
  );
  const [propertyTypePopUpIsOpen, handlePropertyTypePopUp] = useHandlePopUp(
    propertyTypePopUptrigger,
    propertyTypePopUp
  );
  // End handle PopUp appearence

  const router = useRouter()

  // Start get all countries
  const countries = getCountries();
  // End get all countries

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // plain object:
    const formJson = Object.fromEntries(formData.entries()) as Record<string, string>;
    console.log(formJson);

    router.push("/properties"+"?" + new URLSearchParams(Object.entries(formJson)));
  }
  return (
    <div className="">
      <button
        ref={FilterPopUpTrigger}
        onClick={handleFilterPopUp}
        className={`${!lgScreen ? "border border-gray-500 rounded-md px-4 py-2 text-gray-500 outline-none flex justify-between items-center gap-x-2" : "hidden"} `}
      >
        <Image
          src="/assets/filters.png"
          width="20"
          height="20"
          alt="filter icon"
        />
        <span className="max-400px:hidden">
          Filters
        </span>
      </button>
        <div
          ref={FilterPopUp}
          className={`${filterPopUpIsOpen || lgScreen ? "" : "hidden"} ${!lgScreen ? "absolute right-0 min-w-0  max-w-max z-30 bg-white p-4 border border-gray-500 mt-1 rounded-md" : ""} `}
        >
          <form action="" className=" w-full" onSubmit={handleSubmit}>
            <ul className=" w- full flex flex-wrap  gap-1 ">
              <li>
                <input
                  className="Input w-[8rem]"
                  list="country"
                  placeholder="Country"
                  name="country"
                />
                <datalist className="marker:text-red-600" id="country">
                  {countries.map((country) => {
                    return (
                      <option value={country.name}>{country.label}</option>
                    );
                  })}
                </datalist>
              </li>
              <li>
                <input
                  className="Input w-[8rem]"
                  type="text"
                  placeholder="City"
                  autoComplete="address-level2"
                  name="city"
                />
              </li>

              <li>
                <button
                  type="button"
                  className="Input cursor-pointer whitespace-nowrap "
                  onClick={handlePropertyTypePopUp}
                  ref={propertyTypePopUptrigger}
                >
                  Property type
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: "1rem" }}
                  />
                </button>
                <ul
                  ref={propertyTypePopUp}
                  className={`${propertyTypePopUpIsOpen ? "" : "hidden"}
                    border absolute  rounded-md px-4 mt-[2px] pt-6 pb-6 z-10  bg-white  flex max-lg:justify-center flex-wrap gap-x-1 gap-y-4 max-w-[29rem]`}
                >
                  <li>
                    <input
                      type="checkbox"
                      id="Apartment"
                      autoComplete="off"
                      name="Apartment"
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
                      name="Villa"
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
                      name="House"
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
                      name="Duplex"
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
                      name="Building"
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
                      name="Ground"
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
                      name="Bungalow"
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
                      name="Cottage"
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
                      name="Factory"
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
                      name="Riad"
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
                      name="Triplex"
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
                      name="Studio"
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
                      name="PentHouse"
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
                      name="Hangar"
                      className="hidden"
                    />
                    <label htmlFor="Hangar" className="box">
                      <span>Hangar</span>
                    </label>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  ref={pricePopUptrigger}
                  className="Input whitespace-nowrap"
                  onClick={handlePricePopUp}
                >
                  Price
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: "1rem" }}
                  />
                </button>
                <div>
                  <ul
                    ref={pricePopUp}
                    className={`${PricePopUpIsOpen ? "" : "hidden"}
                      border-2  gap-2 rounded-md absolute  mt-[2px] z-10 pt-2 pb-6  bg-white  px-4 w-fit`}
                  >
                    <li>
                      <h3 className="py-2">Price</h3>
                      <ul className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
                        <li>
                          <input
                            type="number"
                            placeholder="Min Price $"
                            className="box w-[13rem] "
                            name="minPrice"
                          />
                        </li>
                        <li>
                          <input
                            type="number"
                            placeholder="Max Price $"
                            className="box w-[13rem] "
                            name="maxprice"
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
                            value="PerDay"
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
                            value="PerMonth"
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
                            value="PerYear"
                            className="hidden"
                          />
                          <label htmlFor="PerYear" className="box">
                            <span>Per Year</span>
                          </label>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  type="button"
                  className="Input cursor-pointer whitespace-nowrap"
                  onClick={handleBedsAndBathsPopUp}
                  ref={bedsAndBathsPopUptrigger}
                >
                  Beds & Baths{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: "1rem" }}
                  />
                </button>
                <div>
                  <ul
                    ref={bedsAndBathsPopUp}
                    className={`${bedsAndBathsPopUpIsOpen ? "" : "hidden"}
                      border absolute rounded-md px-4 mt-[2px] pt-2 pb-6 z-10  bg-white w-fit`}
                  >
                    <li className="">
                      <h3 className="p-2">Beds</h3>
                      <ul className="flex flex-wrap gap-y-4 gap-x-1">
                        <li>
                          <input
                            type="checkbox"
                            id="0"
                            autoComplete="off"
                            name="beds0"
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
                            name="beds1"
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
                            name="beds2"
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
                            name="beds3"
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
                            name="beds4"
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
                            name="beds5"
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
                            name="beds6"
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
                            name="beds7"
                            className="hidden"
                          />
                          <label htmlFor="7" className="box">
                            <span>7</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="7+"
                            autoComplete="off"
                            name="beds7+"
                            className="hidden"
                          />
                          <label htmlFor="7+" className="box">
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
                            name="baths11"
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
                            name="baths12"
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
                            name="baths13"
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
                            name="baths14"
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
                            name="baths15"
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
                            name="baths16"
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
                            name="baths17"
                            className="hidden"
                          />
                          <label htmlFor="17" className="box">
                            <span>7</span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            id="17+"
                            autoComplete="off"
                            name="baths17+"
                            className="hidden"
                          />
                          <label htmlFor="17+" className="box">
                            <span>7+</span>
                          </label>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  type="button"
                  ref={furniturePopUptrigger}
                  className="Input whitespace-nowrap"
                  onClick={handleFurniturePopUp}
                >
                  Furniture
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: "1rem" }}
                  />
                </button>
                <div>
                  <ul
                    ref={furniturePopUp}
                    className={`${furniturePopUpIsOpen ? "" : "hidden"}
                      border-2  flex  flex-wrap gap-x-2 gap-y-4 rounded-md absolute max-sm:right-0 mx-[5px] justify-center mt-[2px] z-10 py-5  bg-white  px-4 w-fit`}
                  >
                    <li>
                      <input
                        type="checkbox"
                        id="furnished"
                        autoComplete="off"
                        name="furnished"
                        className="hidden"
                      />
                      <label htmlFor="furnished" className="box">
                        <span>furnished</span>
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="unfurnished"
                        autoComplete="off"
                        name="unfurnished"
                        className="hidden"
                      />
                      <label htmlFor="unfurnished" className="box">
                        <span className=" whitespace-nowrap">Unfurnished</span>
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="semi-furnished"
                        autoComplete="off"
                        name="semi-furnished"
                        className="hidden"
                      />
                      <label htmlFor="semi-furnished" className="box">
                        <span className=" whitespace-nowrap">
                          Semi-furnished
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="">
                  <button
                    type="button"
                    ref={surfacePopUptrigger}
                    onClick={handleSurfacePopUp}
                    className="Input whitespace-nowrap"
                  >
                    Surface (m²){" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ width: "1rem" }}
                    />
                  </button>
                    <ul
                      ref={sufacePopUp}
                      className={`${surfacePopUpIsOpen ? "flex" : "hidden" } 
                        border-2  flex-wrap justify-center max-lg:right-0 gap-2 mx-[5px] rounded-md absolute z-10  bg-white p-4 `}
                    >
                      <li>
                        <input
                          type="number"
                          placeholder="Min surface $"
                          className="box"
                          name="minSurface"
                        />
                      </li>
                      <li>
                        <input
                          type="number"
                          placeholder="Max surface $"
                          className="box"
                          name="maxSurface"
                        />
                      </li>
                    </ul>
                </div>
              </li>
              <li className="">
                <button
                  type="submit"
                  className=" bg-blue-800 text-white flex items-center p-2 rounded-md px-4 "
                >
                  <span className="w-4 text-white px-1">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                    />
                  </span>

                  <span className="px-2 "> Filter</span>
                </button>
              </li>
            </ul>
          </form>
        </div>
    </div>
  );
}
