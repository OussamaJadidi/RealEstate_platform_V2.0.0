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
    <footer className=" bg-slate-900 text-white Container  ">
      <div className="wrapper | flex flex-wrap max-sm:flex-col justify-around gap-x-20 items-start px-8 pb-8">
        
      <FooterPart1 />
      <div className="sm:max-lg:text-center">
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
      </div>
     
    </footer>
  );
}
