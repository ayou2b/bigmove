import React, { Fragment } from "react";
import Image from "next/image";
import image from "/./public/images/single_blog/nguyen-dang-hoang-nhu-dYUQI3dM4R4-unsplash.jpg";
import profile from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Blog Post",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-12">
        <Image
          src={image}
          alt=""
          className="rounded-xl w-full h-80 object-cover mt-14"
        ></Image>
      </section>

      <section className="px-14 sm:px-20 md:px-36 lg:px-40 xl:px-44 flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6 w-full">
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
        <h1 className="text-[30px] font-bold text-[#1D3444]">
          Breaking the code How did we build our Figma plugin{" "}
        </h1>
        <p className="text-[#5B5B5B] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for error messages.
        </p>

        <p className="text-[#5B5B5B] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>

        <p className="text-[#5B5B5B] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice.
        </p>
        <h1 className="text-[30px] font-bold text-[#1D3444]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h1>
        <p className="text-[#5B5B5B] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>

        <p className="text-[#5B5B5B] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice.
        </p>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
