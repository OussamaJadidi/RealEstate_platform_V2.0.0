import {
  faBath,
  faBed,
  faLocationDot,
  faTentArrowLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function MiniCard() {
  return (
    <div className="flex gap-2 min-h-[8.5rem]">
      <div className="relative w-[15rem]">
        <Image
          src="/assets/c.jpg"
          width="400"
          height="150"
          alt="Main image of property"
          loading="lazy"
        />
        <div className=" text-blue-800 absolute bottom-0 left-0 font-extrabold font-roboto">
          <span>1900</span> $/<span>month</span>
        </div>
      </div>
      <div className="w-[15rem] flex flex-col justify-between gap-2 ">
        <div>
            <span>Appartement</span>
            <h3 className=" text-black text-sm ">
            Superbe appartment a louer bla blo Superbe appartment a louer bla blo
            </h3>
        </div>
        <div className="flex flex-col font-normal text-gray-500">
          <span className="h-[1rem] pb-5">
            <FontAwesomeIcon icon={faLocationDot} /> <span>Morroco, oujda</span>
          </span>

          <div className="flex flex-wrap">
            <span className="whitespace-nowrap">
              <FontAwesomeIcon icon={faBed} /> <span>3</span>
            </span>
            <span className="px-2">|</span>
            <span className="whitespace-nowrap">
              <FontAwesomeIcon icon={faBath} /> <span>2</span>
            </span>
            <span className="px-2">|</span>
            <span className="whitespace-nowrap">
              <FontAwesomeIcon icon={faTentArrowLeftRight} /> <span>120</span>m²
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard;
