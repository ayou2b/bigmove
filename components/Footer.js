import React, { Fragment } from "react";
import Link from "next/link";
import {
  UilFacebook,
  UilYoutube,
  UilInstagramAlt,
  UilTwitter,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <Fragment>
      <footer className="bg-[#063255] relative text-center lg:text-start text-white px-14 sm:px-16 md:px-20 py-14 lg:px-24 xl:px-28 w-full flex flex-col gap-5 items-center lg:items-start lg:gap-10">
        <div className="flex flex-col items-center gap-7 lg:items-start w-full lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h1 className="text-[20px] font-bold">
              <Link href="/">BIGMOVE</Link>
            </h1>

            <h3 className="text-[18px] font-semibold">
              Bespoke software
              <br /> solutions
            </h3>

            <div className="flex items-center gap-4">
              <UilFacebook className="hover:text-[#F58A07] cursor-pointer"></UilFacebook>
              <UilYoutube className="hover:text-[#F58A07] cursor-pointer"></UilYoutube>
              <UilInstagramAlt className="hover:text-[#F58A07] cursor-pointer"></UilInstagramAlt>
              <UilTwitter className="hover:text-[#F58A07] cursor-pointer"></UilTwitter>
            </div>
          </div>

          <ul className="flex flex-col items-center gap-4 lg:items-start">
            <li className="font-semibold text-white">Company</li>
            <li className="hover:underline cursor-pointer">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/careers">Careers</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          <ul className="flex flex-col items-center gap-4 lg:items-start">
            <li className="font-semibold text-white">Connect</li>
            <li className="hover:underline cursor-pointer">hi@bigmove.com</li>
            <li className="hover:underline cursor-pointer">+(123) 456-7890</li>
          </ul>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <h3 className="text-[18px] font-semibold">Join Newsletter</h3>
            <form className="flex flex-col items-center gap-3 lg:items-start">
              <input
                placeholder="Type email here"
                className="px-10 py-4 rounded-full bg-white text-black outline-none placeholder:text-center lg:placeholder:text-start"
              ></input>
              <button className="px-6 py-3 rounded-full hover:bg-white hover:text-[#F58A07] bg-[#F58A07] text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-4 lg:flex-row lg:justify-between w-full">
          <p>© All rights reserved – bigmove</p>
          <ul className="flex flex-col items-center gap-3 lg:flex-row ">
            <li className="hover:underline cursor-pointer">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="/privacy-policy">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="right-0 top-7 absolute w-[40px] hidden lg:block rounded-l-xl h-[50%] bg-[#F58A07]"></div>
        <div className="left-0 bottom-0 absolute w-[40px] hidden lg:block rounded-tr-xl h-[30%] bg-[#F58A07]"></div>
      </footer>
    </Fragment>
  );
}

export default Footer;
