import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" bg-slate-900 text-white ">
      <div className="wrapper | flex flex-wrap max-sm:flex-col justify-center gap-x-20 items-start px-8 pb-8">

        <div className="max-w-[25rem] ">
          <span className="text-4xl text-blue-800 font-sans font-semibold py-6 block">
            EstateElite
          </span>
          <p >
            Looking to buy, sell, or rent property?<br />Your search ends here.<br />
            {/* <br /> */}
            Explore our groundbreaking real estate platform that seamlessly
            connects buyers and sellers, revolutionizing the property market
            experience.
          </p>
        </div>
        <div >
          <h2 className="font-semibold text-3xl py-6">Links</h2>
          <div className="flex flex-col gap-y-3  ">
            <span>
              <FontAwesomeIcon icon={faPhone} /> 0611241065
            </span>
            <span className=" whitespace-nowrap">
              <FontAwesomeIcon icon={faEnvelope} /> oussamajadidi2020@gmail.com
            </span>
            <span className="flex justify-between text-2xl  ">
              <Link href="https://www.facebook.com/jadidi.oussama.1" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
              <Link href="https://www.instagram.com/jadidi_oussama/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="https://twitter.com/jadidi_oussama" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></Link>
            </span>
          </div>
        </div>
        <div >
          <form action="" className="flex flex-col gap-y-1 justify-center ">
          <h2 className="font-semibold text-3xl py-6">Contact us</h2>
            <input type="text" className="bg-sky-50 rounded-sm text-black" placeholder=" email" />
            <textarea  id="" cols={30} rows={10}  className="bg-sky-50 rounded-sm h-[4rem] text-black" placeholder=" what do you want">

            </textarea>
            <button className='px-2 py-1 font-rubik rounded-md bg-blue-800 text-white  font-base'>Explore now</button>
          </form>
        </div>
      </div>
        <div className=" bg-gray-950 text-white text-center ">© 2023<span className=" whitespace-nowrap"> JADIDI Oussama,</span> All Rights Reserved</div>
    </footer>
  );
}
