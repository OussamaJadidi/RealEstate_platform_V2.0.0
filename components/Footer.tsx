import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import FooterPart1 from "./FooterPart1";
export default function Footer() {
  return (
    <footer className=" bg-slate-900 text-white Container  | flex flex-wrap max-sm:flex-col justify-center gap-x-20 items-start px-8 pb-8">
      <FooterPart1 />
      <div>
        <h2 className="font-semibold text-3xl py-6">Links</h2>
        <div className="flex flex-col gap-y-3  ">
          <span>
            <FontAwesomeIcon icon={faPhone} /> 0611241065
          </span>
          <span className=" whitespace-nowrap">
            <FontAwesomeIcon icon={faEnvelope} /> oussamajadidi2020@gmail.com
          </span>
          <span className="flex justify-between text-2xl  ">
            <Link
              href="https://www.facebook.com/jadidi.oussama.1"
              target="_blank"
              aria-label="link for my facebook"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </Link>
            <Link
              href="https://www.instagram.com/jadidi_oussama/"
              target="_blank"
              aria-label="link for my instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://twitter.com/jadidi_oussama" target="_blank" aria-label="link for my twitter">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </span>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col gap-y-1 justify-center ">
          <h2 className="font-semibold text-3xl py-6">Contact us</h2>
          <input
            type="text"
            className="bg-sky-50 rounded-sm text-black"
            placeholder=" email"
          />
          <textarea
            id=""
            cols={30}
            rows={10}
            className="bg-sky-50 rounded-sm h-[4rem] text-black"
            placeholder=" what do you want"
          ></textarea>
          <button className="px-2 py-1 font-rubik rounded-md bg-blue-800 text-white  font-base">
            Explore now
          </button>
        </form>
      </div>
    </footer>
  );
}
