"use client";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";

import hero_image from "/./public/images/landing_page/hero.jpg";

import logo_1 from "/./public/images/landing_page/Logo.svg";
import logo_2 from "/./public/images/landing_page/Logo_1.svg";
import logo_3 from "/./public/images/landing_page/Logo_2.svg";

import image_1 from "/./public/images/landing_page/austin-distel-h1RW-NFtUyc-unsplash.jpg";
import image_2 from "/./public/images/landing_page/austin-distel-rxpThOwuVgE-unsplash.jpg";
import image_3 from "/./public/images/landing_page/jason-goodman-Oalh2MojUuk-unsplash.jpg";

import arrow from "/./public/images/landing_page/arrow.png";

import icon_1 from "/./public/images/landing_page/Icon.png";
import icon_2 from "/./public/images/landing_page/Icon_1.png";
import icon_3 from "/./public/images/landing_page/Icon_2.png";

import image_4 from "/./public/images/landing_page/microsoft-365-d3nKNw1ILdM-unsplash.jpg";
import image_5 from "/./public/images/landing_page/linkedin-sales-solutions-46bom4lObsA-unsplash.jpg";
import image_6 from "/./public/images/landing_page/microsoft-edge-fb_wM334yYQ-unsplash.jpg";
import image_7 from "/./public/images/landing_page/microsoft-365-oUbzU87d1Gc-unsplash.jpg";
import image_8 from "/./public/images/landing_page/microsoft-edge-6CNB3iD8M4E-unsplash.jpg";
import image_9 from "/./public/images/landing_page/icons8-team-yTwXpLO5HAA-unsplash.jpg";
import profile from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";

import {
  UilFacebook,
  UilYoutube,
  UilInstagramAlt,
  UilTwitter,
} from "@iconscout/react-unicons";

export default function Home() {
  const [strategy, setstrategy] = useState(true);
  const [Digitalization, setDigitalization] = useState(false);
  const [assessment, setassessment] = useState(false);

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

      <section className="bg-[#DCEAF5] transition-all w-full lg:h-[90vh] px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col gap-10 lg:gap-20 py-8 items-center lg:flex-row-reverse lg:justify-between">
        <Image
          src={hero_image}
          alt=""
          className="max-w-[540px] w-full object-cover rounded-xl"
        ></Image>

        <div className="flex flex-col items-center gap-4 lg:items-start w-full max-w-lg">
          <h1 className="text-[#1D3444] text-[35px] font-bold">
            Prosper with our bespoke solutions
          </h1>
          <p className="leading-7 text-[#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </p>

          <Link
            href="/services"
            className="px-8 py-3 bg-[#F58A07] text-white rounded-full hover:scale-95 duration-200"
          >
            See our services
          </Link>

          <span className="text-[14px] text-[rgb(57,63,73,50%)]">
            Worked with 100+ Companies
          </span>
          <div className="flex flex-col items-center gap-5 lg:flex-row">
            <Image src={logo_1} alt="" width={90}></Image>
            <Image src={logo_2} alt="" width={90}></Image>
            <Image src={logo_3} alt="" width={90}></Image>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-10 lg:items-start">
        <div className="flex flex-col items-center gap-2 lg:items-start max-w-lg">
          <h2 className="text-[#1D3444] text-[30px] font-semibold">
            We help more than 1500 companies from all sectors
          </h2>
          <p className="leading-7 text-[#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="flex flex-col transition-all items-center gap-8 md:grid md:grid-cols-2 md:place-content-center lg:grid-cols-3 lg:place-content-between w-full lg:gap-14">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Image
              src={image_1}
              alt=""
              className="h-40 object-cover rounded-xl"
            ></Image>

            <h3 className="text-[20px] font-semibold text-[#0D1317]">
              Business strategy
            </h3>

            <p className="leading-7 text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et.
            </p>

            <Link
              href="/blog-post"
              className="flex text-[13px] font-medium items-center hover:gap-4 duration-200 gap-3 text-[#F58A07]"
            >
              Learn More <Image src={arrow} alt="" width={20}></Image>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Image
              src={image_2}
              alt=""
              className="h-40 object-cover rounded-xl"
            ></Image>

            <h3 className="text-[20px] font-semibold text-[#0D1317]">
              Digitalization
            </h3>

            <p className="leading-7 text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et.
            </p>

            <Link
              href="/blog-post"
              className="flex text-[13px] font-medium hover:gap-4 duration-200 items-center gap-3 text-[#F58A07]"
            >
              Learn More <Image src={arrow} alt="" width={20}></Image>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Image
              src={image_3}
              alt=""
              className="h-40 object-cover rounded-xl"
            ></Image>

            <h3 className="text-[20px] font-semibold text-[#0D1317]">
              Risk assessment
            </h3>

            <p className="leading-7 text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et.
            </p>

            <Link
              href="/blog-post"
              className="flex text-[13px] font-medium hover:gap-4 duration-200 items-center gap-3 text-[#F58A07]"
            >
              Learn More <Image src={arrow} alt="" width={20}></Image>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EDF7FF] px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 py-10 mb-20 text-center lg:text-start flex flex-col gap-10 items-center lg:items-start">
        <div className="flex flex-col items-center gap-3 w-full lg:flex-row lg:items-start lg:justify-between">
          <h2 className="text-[#1D3444] text-[30px] font-semibold max-w-md">
            We are building software solution that solves your business
            challenges
          </h2>
          <p className="leading-7 text-[#5B5B5B] max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-3">
          <div className="bg-white p-4 flex flex-col items-center gap-3 lg:items-start rounded-lg">
            <Image src={icon_1} alt="" width={20}></Image>
            <h4 className="text-[18px] font-bold text-[#0D1317]">Invoicing</h4>
            <p className="text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et.
            </p>
          </div>

          <div className="bg-white p-4 flex flex-col items-center gap-3 lg:items-start rounded-lg">
            <Image src={icon_2} alt="" width={20}></Image>
            <h4 className="text-[18px] font-bold text-[#0D1317]">Support</h4>
            <p className="text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et.
            </p>
          </div>

          <div className="bg-white p-4 flex flex-col items-center gap-3 lg:items-start rounded-lg">
            <Image src={icon_3} alt="" width={20}></Image>
            <h4 className="text-[18px] font-bold text-[#0D1317]">Surveying</h4>
            <p className="text-[#5B5B5B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et.
            </p>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-20 w-full">
        <div className="flex flex-col items-center lg:items-start gap-2 max-w-md">
          <h2 className="text-[25px] font-semibold text-[#0D1317]">
            The energy of a start-up combined with 30 years of experience.
          </h2>
          <p className="text-[#5B5B5B] leading-7 text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
          <div className="flex flex-col items-center mt-3 gap-3 lg:gap-7 lg:flex-row lg:items-start w-full lg:justify-between">
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h3 className="text-[#F58A07] font-bold  text-[20px]">15+</h3>
              <span className="font-bold">Awards received</span>
              <p className="text-[#5B5B5B] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h3 className="text-[#F58A07] font-bold text-[20px]">500+</h3>
              <span className="font-bold">Clients served</span>
              <p className="text-[#5B5B5B] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
                amet eros elit et.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={image_4}
            alt=""
            className="max-w-[550px] grayscale object-cover w-full rounded-xl"
          ></Image>

          <div className="top-0 left-0 absolute h-full w-[20%] bg-[rgb(245,138,7,75%)] rounded-l-xl"></div>
        </div>
      </section>

      <section className=" px-14 py-10 sm:px-16 transition-all md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start ">
        <div className="bg-[#EDF7FF] p-5 rounded-xl flex flex-col items-center lg:items-start gap-9">
          <div className="flex flex-col items-center gap-8 md:flex-row flex-wrap">
            <button
              onClick={() => {
                setstrategy(true);
                setDigitalization(false);
                setassessment(false);
              }}
              className={`${
                strategy === true
                  ? "bg-white text-[#F58A07] border-none"
                  : "bg-transparent border-[1px] 	 border-[rgb(6,50,85,30%)]"
              } px-7 py-2 rounded-full h-10 hover:bg-white hover:text-[#F58A07] duration-200 hover:border-none`}
            >
              Business strategy
            </button>

            <button
              onClick={() => {
                setstrategy(false);
                setDigitalization(true);
                setassessment(false);
              }}
              className={`${
                Digitalization === true
                  ? "bg-white text-[#F58A07] border-none"
                  : "bg-transparent border-[1px]  border-[rgb(6,50,85,30%)]"
              } px-7 py-2 h-10 rounded-full hover:bg-white hover:text-[#F58A07] duration-200 hover:border-none`}
            >
              Digitalization
            </button>

            <button
              onClick={() => {
                setstrategy(false);
                setDigitalization(false);
                setassessment(true);
              }}
              className={`${
                assessment === true
                  ? "bg-white text-[#F58A07] border-none"
                  : "bg-transparent border-[1px]  border-[rgb(6,50,85,30%)]"
              } px-7 py-2 h-10 rounded-full hover:bg-white hover:text-[#F58A07] duration-200 hover:border-none`}
            >
              Risk assessment
            </button>
          </div>

          {strategy === true && (
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between w-full">
              <div className="flex flex-col items-center gap-3 lg:items-start max-w-md transition-all">
                <h2 className="text-[20px] font-semibold text-[#0D1317]">
                  Helping clients with research and strategy for their business
                </h2>
                <p className="text-[14px] text-[#5B5B5B]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et, mattis
                  purus. Vivamus commodo suscipit tellus et pellentesque.
                </p>
                <p className="text-[14px] text-[#5B5B5B]">
                  Mattis purus. Vivamus commodo suscipit tellus et pellent.
                  Curabitur sit amet eros blan esque.
                </p>
                <Link
                  href="/services"
                  className="text-[#F58A07] font-medium hover:gap-4 duration-200 flex items-center gap-3"
                >
                  See all services <Image src={arrow} alt="" width={20}></Image>
                </Link>
              </div>

              <div className=" relative">
                <Image
                  src={image_5}
                  alt=""
                  className="max-w-[500px] rounded-lg w-full object-cover grayscale"
                ></Image>

                <div className="top-0 left-0 absolute h-full w-[20%] bg-[rgb(245,138,7,75%)] rounded-l-xl"></div>
              </div>
            </div>
          )}

          {Digitalization === true && (
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between w-full">
              <div className="flex flex-col items-center gap-3 lg:items-start max-w-md transition-all">
                <h2 className="text-[20px] font-semibold text-[#0D1317]">
                  Helping clients with research and strategy for their business
                </h2>
                <p className="text-[14px] text-[#5B5B5B]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et, mattis
                  purus. Vivamus commodo suscipit tellus et pellentesque.
                </p>
                <p className="text-[14px] text-[#5B5B5B]">
                  Mattis purus. Vivamus commodo suscipit tellus et pellent.
                  Curabitur sit amet eros blan esque.
                </p>
                <Link
                  href="/services"
                  className="text-[#F58A07] font-medium hover:gap-4 duration-200 flex items-center gap-3"
                >
                  See all services <Image src={arrow} alt="" width={20}></Image>
                </Link>
              </div>

              <div className=" relative">
                <Image
                  src={image_6}
                  alt=""
                  className="max-w-[500px] rounded-lg w-full object-cover grayscale"
                ></Image>

                <div className="top-0 left-0 absolute h-full w-[20%] bg-[rgb(245,138,7,75%)] rounded-l-xl"></div>
              </div>
            </div>
          )}

          {assessment === true && (
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between w-full">
              <div className="flex flex-col items-center gap-3 lg:items-start max-w-md transition-all">
                <h2 className="text-[20px] font-semibold text-[#0D1317]">
                  Helping clients with research and strategy for their business
                </h2>
                <p className="text-[14px] text-[#5B5B5B]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sit amet eros blandit, hendrerit elit et, mattis
                  purus. Vivamus commodo suscipit tellus et pellentesque.
                </p>
                <p className="text-[14px] text-[#5B5B5B]">
                  Mattis purus. Vivamus commodo suscipit tellus et pellent.
                  Curabitur sit amet eros blan esque.
                </p>
                <Link
                  href="/services"
                  className="text-[#F58A07] font-medium hover:gap-4 duration-200 flex items-center gap-3"
                >
                  See all services <Image src={arrow} alt="" width={20}></Image>
                </Link>
              </div>

              <div className=" relative">
                <Image
                  src={image_7}
                  alt=""
                  className="max-w-[500px] rounded-lg w-full object-cover grayscale"
                ></Image>

                <div className="top-0 left-0 absolute h-full w-[20%] bg-[rgb(245,138,7,75%)] rounded-l-xl"></div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="w-full transition-all mb-20 text-center lg:text-start flex flex-col items-center h-full lg:flex-row">
        <Image
          src={image_8}
          alt=""
          className="h-64 w-full object-cover grayscale lg:w-[50%]"
        ></Image>

        <div className="w-full lg:w-[50%] bg-[#F58A07] h-64 text-white flex items-center justify-center p-5">
          <div className="flex flex-col items-center gap-3 lg:items-start max-w-md">
            <h3 className="text-[20px] font-semibold">
              Energy of a start-up combined with 30 years of experience.
            </h3>
            <button className="bg-white text-[#F58A07] hover:scale-95 duration-200 rounded-full px-7 py-3">
              See Job Vacancies
            </button>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-10 lg:flex-row lg:justify-between w-full">
        <div className="max-w-md flex flex-col items-center gap-3 lg:items-start">
          <h2 className="text-[#0D1317] font-semibold text-[25px]">
            BigMove was a dream to work with
          </h2>
          <p className="text-[#5B5B5B]">
            Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel.
            Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus
            eleifend nec felis vel auctor.
          </p>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <Image
              src={profile}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            ></Image>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-[#063255] font-medium">Chikelu Neo</span>
              <p className="text-[#F58A07]">CEO at MazeAI</p>
            </div>
          </div>
        </div>

        <Image
          src={image_9}
          alt=""
          className="max-w-[500px] grayscale w-full object-cover rounded-xl"
        ></Image>
      </section>

      <section className="bg-[#DCEAF5] px-14 sm:px-16 md:px-20 py-10 lg:px-24 xl:px-28 text-center lg:text-start flex flex-col gap-8 items-center lg:items-start">
        <h2 className="text-[25px] font-semibold text-[#0D1317]">
          Latest Blog & News
        </h2>

        <div className="flex flex-col transition-all items-center gap-8 md:grid md:grid-cols-2 md:place-content-center lg:grid-cols-3 lg:place-content-between w-full lg:gap-14">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={image_1}
              alt=""
              priority={true}
              className="h-40 object-cover rounded-t-xl "
            ></Image>

            <div className="bg-white p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
              <h3 className="text-[20px] font-semibold text-[#0D1317]">
                Why you have to digitalize in 2021
              </h3>

              <p className="leading-7 text-[#5B5B5B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>

              <Link
                href="/blog-post"
                className="flex text-[13px] font-medium items-center hover:gap-4 duration-200 gap-3 text-[#F58A07]"
              >
                Learn More{" "}
                <Image src={arrow} priority={true} alt="" width={20}></Image>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div>
              <Image
                src={image_2}
                priority={true}
                alt=""
                className="h-40 object-cover rounded-t-xl"
              ></Image>
            </div>

            <div className="bg-white p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
              <h3 className="text-[20px] font-semibold text-[#0D1317]">
                Our internal process and longerm vision
              </h3>

              <p className="leading-7 text-[#5B5B5B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>

              <Link
                href="/blog-post"
                className="flex text-[13px] font-medium items-center hover:gap-4 duration-200 gap-3 text-[#F58A07]"
              >
                Learn More{" "}
                <Image src={arrow} priority={true} alt="" width={20}></Image>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div>
              <Image
                src={image_3}
                priority={true}
                alt=""
                className="h-40 object-cover rounded-t-xl"
              ></Image>
            </div>

            <div className="bg-white p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
              <h3 className="text-[20px] font-semibold text-[#0D1317]">
                Helping the next generation of leaders
              </h3>

              <p className="leading-7 text-[#5B5B5B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>

              <div
                href="/blog-post"
                className="flex text-[13px] font-medium items-center hover:gap-4 duration-200 gap-3 text-[#F58A07]"
              >
                Learn More{" "}
                <Image src={arrow} priority={true} alt="" width={20}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

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
