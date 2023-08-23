import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import hero_image from "/./public/images/about_page/brooke-cagle-JBwcenOuRCg-unsplash.jpg";
import image_1_1 from "/./public/images/about_page/brooke-cagle--uHVRvDr7pg-unsplash.jpg";

import profile_1 from "/./public/images/about_page/albert-dera-ILip77SbmOE-unsplash.jpg";
import profile_2 from "/./public/images/about_page/brivel-bariki-W12rukDSuxc-unsplash.jpg";
import profile_3 from "/./public/images/about_page/mitchell-luo-ymo_yC_N_2o-unsplash.jpg";
import profile_4 from "/./public/images/about_page/vicky-hladynets-uyaTT9u6AvI-unsplash.jpg";

import image_1 from "/./public/images/landing_page/austin-distel-h1RW-NFtUyc-unsplash.jpg";
import image_2 from "/./public/images/landing_page/austin-distel-rxpThOwuVgE-unsplash.jpg";
import image_3 from "/./public/images/landing_page/jason-goodman-Oalh2MojUuk-unsplash.jpg";

import image_9 from "/./public/images/landing_page/icons8-team-yTwXpLO5HAA-unsplash.jpg";
import profile from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import arrow from "/./public/images/landing_page/arrow.png";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "About Us",
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
            We value human, organizational, and operational intelligence, not
            just artificial
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

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center lg:items-start gap-10">
        <div className="flex flex-col items-center gap-3 w-full lg:flex-row lg:items-start lg:justify-between">
          <h2 className="text-[#1D3444] text-[30px] font-semibold max-w-md">
            The energy of a start-up combined with 30 years of experience
          </h2>
          <p className="leading-7 text-[#5B5B5B] max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="flex flex-col items-center mt-3 gap-3 lg:gap-7 lg:flex-row lg:items-start w-full lg:justify-between">
          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-[#F58A07] font-bold  text-[30px]">15+</h3>
            <span className="font-bold">Awards received</span>
            <p className="text-[#5B5B5B] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
              amet eros elit et.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-[#F58A07] font-bold text-[30px]">500+</h3>
            <span className="font-bold">Clients served</span>
            <p className="text-[#5B5B5B] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
              amet eros elit et.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-[#F58A07] font-bold text-[30px]">34</h3>
            <span className="font-bold">Employees</span>
            <p className="text-[#5B5B5B] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
              amet eros elit et.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-[#F58A07] font-bold text-[30px]">130+</h3>
            <span className="font-bold">Custom solutions</span>
            <p className="text-[#5B5B5B] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit
              amet eros elit et.
            </p>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-10 lg:flex-row lg:justify-between w-full">
        <div className="max-w-lg flex flex-col items-center gap-3 lg:items-start">
          <h2 className="text-[25px] font-semibold text-[#0D1317]">
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h2>
          <p className="text-[#5B5B5B] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>

        <div className="relative ">
          <Image
            src={image_1_1}
            alt=""
            className="max-w-[450px] max-h-[450px] grayscale h-full w-full object-cover rounded-xl"
          ></Image>

          <div className="top-0 left-0 absolute h-full w-[20%] bg-[rgb(245,138,7,75%)] rounded-l-xl"></div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center gap-10 lg:items-start">
        <div className="flex flex-col items-center gap-2 lg:items-start max-w-md">
          <h2 className="text-[25px] font-semibold text-[#0D1317]">
            Teamwork is the only way we work
          </h2>
          <p className="text-[#5B5B5B] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:place-items-center lg:flex lg:flex-row flex-wrap lg:justify-between w-full">
          <div className="group transition-all cursor-pointer	 relative w-44">
            <Image
              src={profile_1}
              alt=""
              className="w-44 h-72 rounded-xl object-cover grayscale"
            ></Image>

            <div className="left-0 bottom-[-120px] hidden absolute w-full ease-in rounded-xl group-hover:flex group-hover:bottom-0 duration-300  text-white p-4 bg-[rgb(0,0,0,70%)]  flex-col items-center lg:items-start gap-1">
              <span className="text-[12px] text-[#8e8e8e] font-medium">
                Support Assist
              </span>
              <h4>Selby Stuart</h4>
              <p className="text-[13px] text-[#8e8e8e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros.
              </p>
            </div>
          </div>

          <div className="group transition-all cursor-pointer	 relative w-44">
            <Image
              src={profile_2}
              alt=""
              className="w-44 h-72 rounded-xl object-cover grayscale"
            ></Image>

            <div className="left-0 bottom-[-120px] hidden absolute w-full ease-in rounded-xl group-hover:flex group-hover:bottom-0 duration-300  text-white p-4 bg-[rgb(0,0,0,70%)]  flex-col items-center lg:items-start gap-1">
              <span className="text-[12px] text-[#8e8e8e] font-medium">
                Designer
              </span>
              <h4>Alexander Boud</h4>
              <p className="text-[13px] text-[#8e8e8e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros.
              </p>
            </div>
          </div>

          <div className="group transition-all cursor-pointer	 relative w-44">
            <Image
              src={profile_3}
              alt=""
              className="w-44 h-72 rounded-xl object-cover grayscale"
            ></Image>

            <div className="left-0 bottom-[-120px] hidden absolute w-full ease-in rounded-xl group-hover:flex group-hover:bottom-0 duration-300  text-white p-4 bg-[rgb(0,0,0,70%)]  flex-col items-center lg:items-start gap-1">
              <span className="text-[12px] text-[#8e8e8e] font-medium">
                Founder
              </span>
              <h4>John can</h4>
              <p className="text-[13px] text-[#8e8e8e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros.
              </p>
            </div>
          </div>

          <div className="group transition-all cursor-pointer	 relative w-44">
            <Image
              src={profile_4}
              alt=""
              className="w-44 h-72 rounded-xl object-cover grayscale"
            ></Image>

            <div className="left-0 bottom-[-120px] hidden absolute w-full ease-in rounded-xl group-hover:flex group-hover:bottom-0 duration-300  text-white p-4 bg-[rgb(0,0,0,70%)]  flex-col items-center lg:items-start gap-1">
              <span className="text-[12px] text-[#8e8e8e] font-medium">
                Product Designer
              </span>
              <h4>David Stuart</h4>
              <p className="text-[13px] text-[#8e8e8e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros.
              </p>
            </div>
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

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
