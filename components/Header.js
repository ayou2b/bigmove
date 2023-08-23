"use client";
import { Fragment, useState, useEffect } from "react";

import Link from "next/link";

import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll	";
    }
  }, [mobileMenu]);
  return (
    <Fragment>
      <header className="flex items-center justify-between h-[10vh] w-full px-12 py-10 sm:px-14 md:px-16 lg:px-20 xl:px-24">
        <h1 className="text-[20px] font-bold text-[#F58A07]">
          <Link href="/">BIGMOVE</Link>
        </h1>

        <ul className=" items-center hidden md:flex gap-14 text-[18px] font-normal">
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-[#F58A07]" : "text-black"
              } hover:text-[#F58A07]`}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/careers"
              className={`${
                pathname === "/careers" ? "text-[#F58A07]" : "text-black"
              } hover:text-[#F58A07]`}
            >
              Careers
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className={`${
                pathname === "/services" ? "text-[#F58A07]" : "text-black"
              } hover:text-[#F58A07]`}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog" ? "text-[#F58A07]" : "text-black"
              } hover:text-[#F58A07]`}
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-[#F58A07]" : "text-black"
              } hover:text-[#F58A07]`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <UilBars
          onClick={() => {
            setMobileMenu(true);
          }}
          className="block md:hidden"
        ></UilBars>

        <div
          className={`${
            mobileMenu === true ? "test block" : "hidden"
          } w-full h-[100vh] absolute top-0 left-0  bg-white p-14 z-50`}
        >
          <ul className="flex flex-col items-start gap-14">
            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-[#F58A07]" : "text-black"
                }`}
              >
                About Us
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/careers"
                className={`${
                  pathname === "/careers" ? "text-[#F58A07]" : "text-black"
                }`}
              >
                Careers
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/services"
                className={`${
                  pathname === "/services" ? "text-[#F58A07]" : "text-black"
                }`}
              >
                Services
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog" ? "text-[#F58A07]" : "text-black"
                }`}
              >
                Blog
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-[#F58A07]" : "text-black"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <UilTimes
            onClick={() => {
              setMobileMenu(false);
            }}
            className={`right-10 top-10 absolute`}
          ></UilTimes>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
