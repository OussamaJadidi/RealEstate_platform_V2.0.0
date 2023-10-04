"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown ,faUserPlus, faUser, faHeart,faBell ,faRightFromBracket, faBars} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement | null>(null);
  const popupTriggerRef = useRef<HTMLDivElement | null>(null);

  const togglePopup = () => {
    setTimeout(() => setOpen(state => !state), 0);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node) && !popupTriggerRef.current.contains(event.target as Node) ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  return (
    <header className="Container  |  h-16 bg-sky-50 font-medium | flex justify-between items-center font-san">
      <span className="relative text-4xl text-blue-800 ">logo</span>
      <ul className="flex gap-4  max-sm:hidden">
        <li>Buy</li>
        <li>Rent</li>
        <li>Post my Home</li>
        <li >
          <div className="">
            <span className="text-xl flex gap-2 relative">
              <span onClick={togglePopup} ref={popupTriggerRef} className=" cursor-pointer">
                <FontAwesomeIcon icon={faCircleUser} style={{ width: "1.5rem" }} />
                <FontAwesomeIcon icon={faChevronDown} style={{ width: ".75rem" }} />
              </span>
              <div ref={popupRef} className={`${open ? "block": "hidden"} absolute top-[2rem] right-0 left-[-9rem] | w-40 h-60`}  >
                <ul className="w-[12rem] bg-white rounded-xl  font-roboto font-sm cursor-pointer border border-gray-400 overflow-hidden py-2">
                  <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 "><FontAwesomeIcon style={{paddingInline:".7rem",}} icon={faBell} />Notification</li>
                  <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 "><FontAwesomeIcon style={{paddingInline:".7rem",}} icon={faHeart} />Saves</li>
                  <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 "><FontAwesomeIcon style={{paddingInline:".7rem",}} icon={faUserPlus} />Sign up</li>
                  <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 "> <FontAwesomeIcon style={{paddingInline:".7rem",}} icon={faRightFromBracket} />Sign out</li>
                  <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 "> <FontAwesomeIcon style={{paddingInline:".7rem",}} icon={faUser} />Sign in</li>
                </ul>
              </div>
            </span>
          </div>
        </li>
      </ul>
      <div className="relative ">
        <FontAwesomeIcon style={{fontSize: "1.5rem"}} icon={faBars} /> 
        <div className="">

        </div>
      </div>
    </header>
  );
}
