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
import { useRouter } from "next/navigation";

type searchFormProps = {
  isForSell: Boolean;
  handleIsForSell: () => void;
  showAllOptions?: Boolean;
};

export default function SearchForm({
  isForSell,
  handleIsForSell,
  showAllOptions = false,
}: searchFormProps) {
  const [extraOptions, setExtraOptions] = useState(showAllOptions);
  // Start handle PopUp appearence
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
  const router = useRouter();
  // Start Fetching countries Name
  const countries = getCountries();
  function handleExtraOptions() {
    setExtraOptions((state) => !state);
  }
  // End Fetching countries Name

  // Start handle Submit Form
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // plain object:
    const formJson = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
    console.log(formJson);

    router.push(
      "/properties" + "?" + new URLSearchParams(Object.entries(formJson))
    );
  }
  // End handle Submit Form
  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit} className="">
        <ul className="flex  flex-col gap-1 ">
          <li>
            <ul className="flex flex-wrap gap-1  ">
              <li key="country">
                <input
                  name="country"
                  className="Input w-[8rem] max-sm:w-[10rem]"
                  list="country"
                  placeholder="Country"
                />
                <datalist className="marker:text-red-600" id="country">
                  {countries.map((country) => {
                    return (
                      <option value={country.name} key={country.label}>
                        {country.label}
                      </option>
                    );
                  })}
                </datalist>
              </li>

              <li key="city">
                <input
                  name="city"
                  className="Input w-[8rem] max-sm:w-[10rem]"
                  type="text"
                  placeholder="City"
                  autoComplete="address-level2"
                />
              </li>

              <li key="propertyType">
                <button
                  type="button"
                  className="Input cursor-pointer whitespace-nowrap max-sm:w-[10rem]"
                  onClick={handlePropertyTypePopUp}
                  ref={propertyTypePopUptrigger}
                >
                  Property type{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: "1rem" }}
                  />
                </button>
                <ul
                  key="propertyType"
                  ref={propertyTypePopUp}
                  className={` ${propertyTypePopUpIsOpen ? "" : "hidden"}
                  border absolute rounded-md px-4 mt-[2px] pt-6 pb-6 z-10  bg-white  flex max-lg:justify-center flex-wrap gap-x-1 gap-y-4 max-w-[29rem]`}
                >
                  <li key="apprtment">
                    <input
                      type="checkbox"
                      id="Apartment"
                      name="Apartment"
                      className="hidden"
                    />
                    <label htmlFor="Apartment" className="box">
                      <span>Apartment</span>
                    </label>
                  </li>
                  <li key="villa">
                    <input
                      type="checkbox"
                      id="Villa"
                      name="Villa"
                      className="hidden"
                    />
                    <label htmlFor="Villa" className="box">
                      <span>Villa</span>
                    </label>
                  </li>
                  <li key="house">
                    <input
                      type="checkbox"
                      id="House"
                      name="House"
                      className="hidden"
                    />
                    <label htmlFor="House" className="box">
                      <span>House</span>
                    </label>
                  </li>
                  <li key="duplex">
                    <input
                      type="checkbox"
                      id="Duplex"
                      name="Duplex"
                      className="hidden"
                    />
                    <label htmlFor="Duplex" className="box">
                      <span>Duplex</span>
                    </label>
                  </li>
                  <li key="building">
                    <input
                      type="checkbox"
                      id="Building"
                      name="Building"
                      className="hidden"
                    />
                    <label htmlFor="Building" className="box">
                      <span>Building</span>
                    </label>
                  </li>
                  <li key="ground">
                    <input
                      type="checkbox"
                      id="Ground"
                      name="Ground"
                      className="hidden"
                    />
                    <label htmlFor="Ground" className="box">
                      <span>Ground</span>
                    </label>
                  </li>
                  <li key="bungalow">
                    <input
                      type="checkbox"
                      id="Bungalow"
                      name="Bungalow"
                      className="hidden"
                    />
                    <label htmlFor="Bungalow" className="box">
                      <span>Bungalow</span>
                    </label>
                  </li>
                  <li key="cottage">
                    <input
                      type="checkbox"
                      id="Cottage"
                      name="Cottage"
                      className="hidden"
                    />
                    <label htmlFor="Cottage" className="box">
                      <span>Cottage</span>
                    </label>
                  </li>
                  <li key="factory">
                    <input
                      type="checkbox"
                      id="Factory"
                      name="Factory"
                      className="hidden"
                    />
                    <label htmlFor="Factory" className="box">
                      <span>Factory</span>
                    </label>
                  </li>
                  <li key="riad">
                    <input
                      type="checkbox"
                      id="Riad"
                      name="Riad"
                      className="hidden"
                    />
                    <label htmlFor="Riad" className="box">
                      <span>Riad</span>
                    </label>
                  </li>
                  <li key="triplex">
                    <input
                      type="checkbox"
                      id="Triplex"
                      name="Triplex"
                      className="hidden"
                    />
                    <label htmlFor="Triplex" className="box">
                      <span>Triplex</span>
                    </label>
                  </li>
                  <li key="studio">
                    <input
                      type="checkbox"
                      id="Studio"
                      name="Studio"
                      className="hidden"
                    />
                    <label htmlFor="Studio" className="box">
                      <span>Studio</span>
                    </label>
                  </li>
                  <li key="penthouse">
                    <input
                      type="checkbox"
                      id="PentHouse"
                      name="PentHouse"
                      className="hidden"
                    />
                    <label htmlFor="PentHouse" className="box">
                      <span>PentHouse</span>
                    </label>
                  </li>
                  <li key="hangar">
                    <input
                      type="checkbox"
                      id="Hangar"
                      name="Hangar"
                      className="hidden"
                    />
                    <label htmlFor="Hangar" className="box">
                      <span>Hangar</span>
                    </label>
                  </li>
                </ul>
              </li>

              <li key="price">
                <button
                  type="button"
                  ref={pricePopUptrigger}
                  className="Input whitespace-nowrap max-sm:w-[10rem]"
                  onClick={handlePricePopUp}
                >
                  Price{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: "1rem" }}
                  />
                </button>
                <div>
                  <ul
                    ref={pricePopUp}
                    className={` ${PricePopUpIsOpen ? "" : "hidden"}
                    border-2  gap-2 rounded-md absolute max-lg:right-[0] mx-[5px] mt-[2px] z-10 pt-2 pb-6  bg-white  px-4 w-fit `}
                  >
                    <li key="price">
                      <h3 className="py-2">Price</h3>
                      <ul className="flex flex-wrap gap-x-2 gap-y-1 justify-center">
                        <li key="minPrice">
                          <input
                            type="number"
                            name="minPrice"
                            placeholder="Min Price $"
                            className="box w-[13rem] "
                          />
                        </li>
                        <li key="maxPrice">
                          <input
                            type="number"
                            name="maxprice"
                            placeholder="Max Price $"
                            className="box w-[13rem] "
                          />
                        </li>
                      </ul>
                    </li>

                    {!isForSell && (
                      <li key="rentPeriod">
                        <h3 className="py-2">Rental Period</h3>
                        <ul className="flex flex-wrap gap-x-2 gap-y-4 justify-center">
                          <li key="perday">
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
                          <li key="perMonth">
                            <input
                              type="radio"
                              name="rentalPeriod"
                              placeholder="Per Month"
                              id="PerMonth"
                              value="PerMonth"
                              className="hidden"
                              defaultChecked
                            />
                            <label htmlFor="PerMonth" className="box">
                              <span>Per Month</span>
                            </label>
                          </li>
                          <li key="perYear">
                            <input
                              type="radio"
                              name="rentalPeriod"
                              placeholder="Per Year"
                              id="PerYear"
                              value="perYear"
                              className="hidden"
                            />
                            <label htmlFor="PerYear" className="box">
                              <span>Per Year</span>
                            </label>
                          </li>
                        </ul>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            </ul>
          </li>

          <div
            className={`${
              extraOptions ? "flex" : "hidden"
            }  flex-wrap items-center gap-1`}
          >
            <li key="bedAndBaths">
              <button
                type="button"
                className="Input cursor-pointer whitespace-nowrap max-sm:w-[10rem]"
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
                  <li key="beds">
                    <h3 className="p-2">Beds</h3>
                    <ul className="flex flex-wrap gap-y-4 gap-x-1">
                      <li key="0">
                        <input
                          type="checkbox"
                          id="0"
                          name="beds0"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="0" className="box">
                          <span>Studio</span>
                        </label>
                      </li>
                      <li key="1">
                        <input
                          type="checkbox"
                          id="1"
                          name="beds1"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="1" className="box">
                          <span>1</span>
                        </label>
                      </li>
                      <li key="2">
                        <input
                          type="checkbox"
                          id="2"
                          name="beds2"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="2" className="box">
                          <span>2</span>
                        </label>
                      </li>
                      <li key="3">
                        <input
                          type="checkbox"
                          id="3"
                          name="beds3"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="3" className="box">
                          <span>3</span>
                        </label>
                      </li>
                      <li key="4">
                        <input
                          type="checkbox"
                          id="4"
                          name="beds4"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="4" className="box">
                          <span>4</span>
                        </label>
                      </li>
                      <li key="5">
                        <input
                          type="checkbox"
                          id="5"
                          name="beds5"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="5" className="box">
                          <span>5</span>
                        </label>
                      </li>
                      <li key="6">
                        <input
                          type="checkbox"
                          id="6"
                          name="beds6"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="6" className="box">
                          <span>6</span>
                        </label>
                      </li>
                      <li key="7">
                        <input
                          type="checkbox"
                          id="7"
                          name="beds7"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="7" className="box">
                          <span>7</span>
                        </label>
                      </li>
                      <li key="7+">
                        <input
                          type="checkbox"
                          id="7+"
                          name="beds7+"
                          autoComplete="off"
                          className="hidden"
                        />
                        <label htmlFor="7+" className="box">
                          <span>7+</span>
                        </label>
                      </li>
                    </ul>
                  </li>
                  <li key="baths" className="">
                    <h3 className="p-2">Baths</h3>
                    <ul className="flex flex-wrap gap-y-4 gap-x-1 ">
                      <li key="bath11">
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
                      <li key="bath12">
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
                      <li key="bath13">
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
                      <li key="bath14">
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
                      <li key="bath15">
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
                      <li key="bath16">
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
                      <li key="bath17">
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
                      <li key="bath17+">
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

            <li key="isFurniture">
              <button
                type="button"
                ref={furniturePopUptrigger}
                className="Input whitespace-nowrap max-sm:w-[10rem]"
                onClick={handleFurniturePopUp}
              >
                Furniture{" "}
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
                  <li key="furnished">
                    <input
                      type="checkbox"
                      id="furnished"
                      name="furnished"
                      autoComplete="off"
                      className="hidden"
                    />
                    <label htmlFor="furnished" className="box">
                      <span>Furnished</span>
                    </label>
                  </li>
                  <li key="unfurnished">
                    <input
                      type="checkbox"
                      id="unfurnished"
                      name="unfurnished"
                      autoComplete="off"
                      className="hidden"
                    />
                    <label htmlFor="unfurnished" className="box">
                      <span className=" whitespace-nowrap">Unfurnished</span>
                    </label>
                  </li>
                  <li key="semiFurnished">
                    <input
                      type="checkbox"
                      id="semi-furnished"
                      name="semi-furnished"
                      autoComplete="off"
                      className="hidden"
                    />
                    <label htmlFor="semi-furnished" className="box">
                      <span className=" whitespace-nowrap">Semi-furnished</span>
                    </label>
                  </li>
                </ul>
              </div>
            </li>

            <li key="surface">
              <div className="">
                <button
                  type="button"
                  ref={surfacePopUptrigger}
                  onClick={handleSurfacePopUp}
                  className="Input whitespace-nowrap max-sm:w-[10rem]"
                >
                  Surface (m²){" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: "1rem" }}
                  />
                </button>
                <ul
                  ref={sufacePopUp}
                  className={`${surfacePopUpIsOpen ? "" : "hidden"}
                    border-2 flex flex-wrap justify-center max-lg:right-0 gap-2 mx-[5px] rounded-md absolute z-10  bg-white p-4 `}
                >
                  <li key="minSurface">
                    <input
                      type="number"
                      placeholder="Min surface $"
                      className="box "
                      name="minSurface"
                    />
                  </li>
                  <li key="maxSurface">
                    <input
                      type="number"
                      placeholder="Max surface $"
                      className="box "
                      name="maxSurface"
                    />
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <div className="flex">
            <li key="hashtag">
              <div
                className={`Input ${
                  extraOptions ? "flex" : "hidden"
                } items-center `}
              >
                <span className="pr-4">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ width: "1rem" }}
                  />
                </span>
                <div>
                  <input
                    type="text"
                    name="hashtag"
                    placeholder="hashtags: #pisicne#centre ville"
                  />
                </div>
              </div>
            </li>
          </div>
        </ul>
        <span className=" flex flex-wrap-reverse ml-auto w-fit justify-center  items-center gap-2 text-xs text-gray-400  ">
          {showAllOptions == false && (
            <button
              type="button"
              className="text-left  underline outline-none "
              onClick={handleIsForSell}
            >
              {isForSell ? "Go Rent" : "Go Buy"}
            </button>
          )}
          {showAllOptions == false && (
            <button
              type="button"
              className="text-left  underline outline-none"
              onClick={handleExtraOptions}
            >
              Show {extraOptions ? "less" : "more"} options search{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{
                  width: "1rem",
                  transform: extraOptions ? "rotate(180deg)" : "",
                }}
              />
            </button>
          )}
          <button
            type="submit"
            className=" bg-blue-800 text-white flex items-center p-2 rounded-md px-4 mt-2"
          >
            <span className="w-4 text-white px-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                // style={{ width: "1rem", color: "white", paddingInline: ".3rem" }}
              />
            </span>

            <span className="px-2 max-sm:hidden">Search</span>
            <span className="px-2 sm:hidden ">
              Search {isForSell ? "To Buy" : "For Rent"}
            </span>
          </button>
        </span>
      </form>
    </>
  );
}
