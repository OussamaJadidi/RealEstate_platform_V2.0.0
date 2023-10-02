import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="Container |  h-16 bg-sky-100 font-medium | flex justify-between items-center">
      <span className="relative text-4xl text-blue-800">logo</span>
      <ul className="flex gap-4">
        <li>Buy</li>
        <li>Rent</li>
        <li>Recomendations</li>
        <li>Saves</li>
        <li >
          <div className="relative">
            <span className="text-xl flex gap-2">
              <FontAwesomeIcon icon={faCircleUser} style={{ width: "1.5rem" }} />
              <FontAwesomeIcon icon={faChevronDown} style={{ width: ".75rem" }} />
            </span>
            <div className="hidden absolute top-[2rem] right-0 | w-40 h-60 border-black border-2 rounded">
              hi
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
}
