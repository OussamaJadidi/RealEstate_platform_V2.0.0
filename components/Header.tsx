"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUserPlus,
  faUser,
  faHeart,
  faCalendarDays,
  faRightFromBracket,
  faBars,
  faCircleDown,
  faHouseChimneyWindow,
  faHouseSignal,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import useHandlePopUp from "@/hooks/useHandlePopUp";
import { Container } from "@/components";
import SignIn from "./SignIn";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function Header() {
  // const [open, setOpen] = useState(false)
  const menuPopupRef = useRef<HTMLDivElement | null>(null);
  const menuPopupTriggerRef = useRef<HTMLSpanElement | null>(null);
  const [menuPopupIsOpen, handleMenuPopup] = useHandlePopUp(
    menuPopupTriggerRef,
    menuPopupRef
  );

  const signInPopupRef = useRef<HTMLDivElement | null>(null);
  const signInPopupTriggerRef = useRef<HTMLLIElement | null>(null);
  const [SignInPopupIsOpen, handleSignInPopup] = useHandlePopUp(
    signInPopupTriggerRef,
    signInPopupRef
  );
  const { data: session, status } = useSession();
  // if user already have account accountState=true
  const [accountState, setAccountState] = useState(false);
  function handleAccountState() {
    setAccountState((state) => !state);
  }
  // background of header will be sky-50 just if we are in the home page
  const [inTheHomePage, setInTheHomePage] = useState(false)
  useEffect(()=>{
    if (window.location.pathname == "/") {
       setInTheHomePage(true)
    } else {
       setInTheHomePage(false)
    }
  })
  return (
    <header className={`Container ${inTheHomePage == true ? "bg-sky-50" : ""}`}>
      <Container className="h-20 max-sm:h-22 font-medium |  flex justify-between items-center font-sans">
        {/* Logo  */}
        <span className="text-4xl text-blue-800 font-sans ">EstateElite</span>
        <ul className="flex gap-4  font-rubik">
          {/* Start links for desktop screen */}
          <li className="max-sm:hidden cursor-pointer hover:text-blue-800 transition-all ">
            Buy
          </li>
          <li className="max-sm:hidden cursor-pointer hover:text-blue-800 transition-all">
            Rent
          </li>
          <li className="max-sm:hidden cursor-pointer hover:text-blue-800 transition-all">
            <Link href="/addProperty">Add Property</Link>
          </li>
          {/* End links for desktop screen */}
          {/* Start PopUp menu  */}
          <li>
            <div className="text-xl flex gap-2 relative ">
              <span
                onClick={handleMenuPopup}
                ref={menuPopupTriggerRef}
                className=" cursor-pointer"
              >
                <span className="hidden sm:block">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ width: "1.5rem" }}
                  />
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ width: ".75rem" }}
                  />
                </span>
                <span className="sm:hidden block ">
                  <FontAwesomeIcon
                    style={{ fontSize: "1.5rem" }}
                    icon={faBars}
                  />
                </span>
              </span>
              {menuPopupIsOpen && (
                <div
                  ref={menuPopupRef}
                  className="z-20 absolute top-[2rem] right-0 left-[-9.5rem] | w-40 h-60"
                >
                  <ul className="w-[12rem] bg-white rounded-xl font-sans font-sm cursor-pointer border border-gray-400 overflow-hidden py-2">
                    <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 block sm:hidden ">
                      <FontAwesomeIcon
                        style={{ paddingInline: ".7rem" }}
                        icon={faHouseChimneyWindow}
                      />
                      Buy
                    </li>
                    <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300  sm:hidden">
                      <FontAwesomeIcon
                        style={{ paddingInline: ".7rem" }}
                        icon={faHouseSignal}
                      />
                      Rent
                    </li>
                    <li className=" text-[1rem] hover:bg-slate-300 sm:hidden ">
                      <Link
                        className="w-full h-full block py-2 px-4 text-left"
                        href="/addProperty"
                      >
                        <FontAwesomeIcon
                          style={{ paddingInline: ".7rem" }}
                          icon={faCircleDown}
                        />
                        Add Property
                      </Link>
                    </li>
                    <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                      <FontAwesomeIcon
                        style={{ paddingInline: ".7rem" }}
                        icon={faCalendarDays}
                      />
                      Bookings
                    </li>
                    <li className=" py-2 px-4 text-[1rem] hover:bg-slate-300 ">
                      <FontAwesomeIcon
                        style={{ paddingInline: ".7rem" }}
                        icon={faHeart}
                      />
                      Favorites
                    </li>
                    {status !== "authenticated" && (
                      <>
                        <li
                          ref={signInPopupTriggerRef}
                          className="text-[1rem] hover:bg-slate-300 "
                        >
                          <button
                            className="w-full h-full py-2 px-4 text-left"
                            onClick={() => {
                              setAccountState(false);
                              handleMenuPopup();
                              handleSignInPopup();
                            }}
                          >
                            <FontAwesomeIcon
                              style={{ paddingInline: ".7rem" }}
                              icon={faUserPlus}
                            />
                            Sign up
                          </button>
                        </li>
                        <li
                          ref={signInPopupTriggerRef}
                          className="text-[1rem] hover:bg-slate-300 "
                        >
                          <button
                            onClick={() => {
                              setAccountState(true);
                              handleMenuPopup();
                              handleSignInPopup();
                            }}
                            className="w-full h-full py-2 px-4 text-left "
                          >
                            <FontAwesomeIcon
                              style={{ paddingInline: ".7rem" }}
                              icon={faUser}
                            />
                            Sign in
                          </button>
                        </li>
                      </>
                    )}

                    {status == "authenticated" && (
                      <li className="  text-[1rem] hover:bg-slate-300 ">
                        <button
                          className="w-full h-full py-2 px-4 text-left"
                          onClick={() => signOut()}
                        >
                          <FontAwesomeIcon
                            style={{ paddingInline: ".7rem" }}
                            icon={faRightFromBracket}
                          />
                          Sign out
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </li>
          {/* End PopUp menu  */}
        </ul>
      </Container>
      {SignInPopupIsOpen && (
        <div ref={signInPopupRef}>
          <SignIn
            togglePopUp={handleSignInPopup}
            alreadyHaveAccount={accountState}
            toggleAccountState={handleAccountState}
          />
        </div>
      )}
    </header>
  );
}
