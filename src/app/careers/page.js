import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import hero_image from "/./public/images/careers_page/mimi-thian-lp1AKIUV3yo-unsplash.jpg";

import image_1 from "/./public/images/landing_page/austin-distel-h1RW-NFtUyc-unsplash.jpg";
import image_2 from "/./public/images/landing_page/austin-distel-rxpThOwuVgE-unsplash.jpg";
import image_3 from "/./public/images/landing_page/jason-goodman-Oalh2MojUuk-unsplash.jpg";

import arrow from "/./public/images/landing_page/arrow.png";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Careers",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className=" transition-all w-full lg:h-[90vh] px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col gap-10 lg:gap-20 py-8 items-center lg:flex-row-reverse lg:justify-between">
        <div className="relative">
          <Image
            src={hero_image}
            alt=""
            className="max-w-[550px] max-h-[550px] grayscale h-full w-full object-cover rounded-xl"
          ></Image>

          <div className="top-0 left-0 absolute h-full w-[20%] bg-[rgb(245,138,7,75%)] rounded-l-xl"></div>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start w-full max-w-md">
          <h1 className="text-[#1D3444] text-[35px] font-bold">
            We hired people who are very passionate about what they do
          </h1>
          <p className="leading-7 text-[#5B5B5B]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            odio, sagittis quis ornare quis.
          </p>
          <button className="px-7 py-2 rounded-full hover:scale-95 duration-200 bg-[#F58A07] text-white">
            Work With Us
          </button>
        </div>
      </section>

      <section className=" px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center flex flex-col items-center gap-8 lg:items-start lg:text-start">
        <h2 className="text-[25px] font-semibold text-[#0D1317]">
          See our open positions
        </h2>

        <div className="flex flex-col items-center gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 w-full">
          <div className="p-5 flex flex-col items-center gap-2 lg:items-start bg-[rgb(193,228,255,30%)] rounded-xl">
            <span className="text-[#0D1317] font-medium">
              Full Stack Developer
            </span>
            <p className="text-[#394149]">Bengaluru · Full Time </p>
            <Link href="/career" className="text-[#F58A07] mt-1">
              Apply Now
            </Link>
          </div>

          <div className="p-5 flex flex-col items-center gap-2 lg:items-start bg-[rgb(193,228,255,30%)] rounded-xl">
            <span className="text-[#0D1317] font-medium">Testing Engineer</span>
            <p className="text-[#394149]">Bengaluru · Full Time </p>
            <Link href="/career" className="text-[#F58A07] mt-1">
              Apply Now
            </Link>
          </div>

          <div className="p-5 flex flex-col items-center gap-2 lg:items-start bg-[rgb(193,228,255,30%)] rounded-xl">
            <span className="text-[#0D1317] font-medium">Hr Manager+</span>
            <p className="text-[#394149]">Bengaluru · Full Time </p>
            <Link href="/career" className="text-[#F58A07] mt-1">
              Apply Now
            </Link>
          </div>

          <div className="p-5 flex flex-col items-center gap-2 lg:items-start bg-[rgb(193,228,255,30%)] rounded-xl">
            <span className="text-[#0D1317] font-medium">
              Full Stack Developer
            </span>
            <p className="text-[#394149]">Bengaluru · Full Time </p>
            <Link href="/career" className="text-[#F58A07] mt-1">
              Apply Now
            </Link>
          </div>

          <div className="p-5 flex flex-col items-center gap-2 lg:items-start bg-[rgb(193,228,255,30%)] rounded-xl">
            <span className="text-[#0D1317] font-medium">Testing Engineer</span>
            <p className="text-[#394149]">Bengaluru · Full Time </p>
            <Link href="/career" className="text-[#F58A07] mt-1">
              Apply Now
            </Link>
          </div>
        </div>
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

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
