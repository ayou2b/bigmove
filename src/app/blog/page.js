import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import hero_image from "/./public/images/blog_page/annie-spratt-hCb3lIB8L8E-unsplash.jpg";
import arrow from "/./public/images/landing_page/arrow.png";

import profile from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";

import image_1 from "/./public/images/landing_page/austin-distel-h1RW-NFtUyc-unsplash.jpg";
import image_2 from "/./public/images/landing_page/austin-distel-rxpThOwuVgE-unsplash.jpg";
import image_3 from "/./public/images/landing_page/jason-goodman-Oalh2MojUuk-unsplash.jpg";
import image_4 from "/./public/images/blog_page/brooke-cagle-xcgh5_-QIXc-unsplash.jpg";
import image_5 from "/./public/images/blog_page/christin-hume-mfB1B1s4sMc-unsplash.jpg";
import image_6 from "/./public/images/blog_page/simon-abrams-k_T9Zj3SE8k-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Blog",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="bg-[#DCEAF5] transition-all w-full lg:h-[90vh] px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col gap-10 lg:gap-20 py-8 items-center lg:flex-row-reverse lg:justify-between">
        <div className="relative">
          <Image
            src={hero_image}
            alt=""
            className="max-w-[550px] max-h-[550px] grayscale h-full w-full object-cover rounded-xl"
          ></Image>

          <div className="top-0 left-0 absolute h-full w-[20%] bg-[rgb(245,138,7,75%)] rounded-l-xl"></div>
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start w-full max-w-md">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between w-full">
            <div className="flex flex-col items-center gap-3 lg:flex-row">
              <Image
                src={profile}
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              ></Image>
              <p className="text-[15px] text-[#394149]">Andrew Jonson</p>
            </div>
            <p className="text-[15px] text-[#394149]">
              Posted on 27th January 2021
            </p>
          </div>
          <h1 className="text-[#1D3444] text-[35px] font-bold">
            Our internal process and longerm vision
          </h1>
          <p className="leading-7 text-[#5B5B5B]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the
          </p>
          <Link
            href="/blog-post"
            className="flex items-center gap-3 hover:gap-4 duration-200 text-[#F58A07]"
          >
            Read More <Image src={arrow} alt="" width={20}></Image>
          </Link>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 py-10 lg:px-24 xl:px-28 text-center lg:text-start flex flex-col gap-8 items-center lg:items-start">
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

            <div className="bg-[#DCEAF5]  p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
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

            <div className="bg-[#DCEAF5]  p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
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

            <div className="bg-[#DCEAF5]  p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
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

          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={image_4}
              alt=""
              priority={true}
              className="h-40 object-cover rounded-t-xl "
            ></Image>

            <div className="bg-[#DCEAF5]  p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
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
                src={image_5}
                priority={true}
                alt=""
                className="h-40 object-cover rounded-t-xl"
              ></Image>
            </div>

            <div className="bg-[#DCEAF5]  p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
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
                src={image_6}
                priority={true}
                alt=""
                className="h-40 object-cover rounded-t-xl"
              ></Image>
            </div>

            <div className="bg-[#DCEAF5]  p-4 rounded-b-xl flex flex-col items-center lg:items-start gap-3">
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
