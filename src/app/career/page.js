import React, { Fragment } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Career",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="px-14 mt-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 flex flex-col items-center text-center lg:text-start lg:items-start gap-6 mb-12">
        <h1 className="text-[35px] font-bold text-[#1D3444]">
          Testing Engineer
        </h1>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start w-full lg:justify-between">
          <div className="max-w-md">
            <span className="text-[#1D3444] font-semibold">
              Job Discription
            </span>
            <p className="teaxt-[#5B5B5B] leading-7">
              Remote, India , 4 to 5 Years Of Experience Department: Website
              Design 5 Positions Available.
            </p>
          </div>

          <div className="max-w-md">
            <span className="text-[#1D3444] font-semibold">Salary</span>
            <p className="teaxt-[#5B5B5B] leading-7">$30000 Per Anum</p>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center lg:text-start mb-12">
        <div className="bg-[rgb(193,228,255,30%)] rounded-xl p-10 flex flex-col items-center gap-8 lg:gap-16 lg:flex-row lg:items-start">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <span className="font-semibold text-[#F58A07]">Details</span>
            <span className="font-semibold text-[#0D1317]">Requirements</span>
            <span className="font-semibold text-[#0D1317]">
              Responsibilities
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <p className="text-[#5B5B5B] leading-7">
              Design & Create highly engaging industry-related content in both
              photo, gif & video format
            </p>
            <p className="text-[#5B5B5B] leading-7">
              Publish Posts on various social media channels
            </p>
            <p className="text-[#5B5B5B] leading-7">
              Promote content on social networks and monitor engagement (e.g.
              comments and shares)
            </p>
            <p className="text-[#5B5B5B] leading-7">
              Research industry-related topics
            </p>
            <p className="text-[#5B5B5B] leading-7">
              Editing audio and sound design on projects
            </p>
            <p className="text-[#5B5B5B] leading-7">
              Engage in opportunities to develop original content and concepts
              for web and mobile
            </p>
            <p className="text-[#5B5B5B] leading-7">
              Create motion graphics and animations using 2D and 3D applications
              for marketing and promotional usage.
            </p>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 mb-20 xl:px-28 w-full flex flex-col items-center gap-8 lg:items-start">
        <h1 className="text-[25px] font-bold text-[#0D1317]">Apply Now</h1>
        <form className="w-full flex flex-col items-center lg:items-start gap-4">
          <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-6">
            <input
              placeholder="First Name"
              className="px-10 w-full py-4 rounded-xl outline-none bg-[rgb(212,218,237,17%)] placeholder:text-center lg:placeholder:text-start"
            ></input>

            <input
              placeholder="Last Name"
              className="px-10 w-full py-4 rounded-xl outline-none bg-[rgb(212,218,237,17%)] placeholder:text-center lg:placeholder:text-start"
            ></input>
          </div>

          <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-6">
            <input
              placeholder="Email"
              className="px-10 w-full py-4 rounded-xl outline-none bg-[rgb(212,218,237,17%)] placeholder:text-center lg:placeholder:text-start"
            ></input>

            <input
              placeholder="Mobile Number"
              className="px-10 w-full py-4 rounded-xl outline-none bg-[rgb(212,218,237,17%)] placeholder:text-center lg:placeholder:text-start"
            ></input>
          </div>
          <textarea
            placeholder="Why do you thing you are good fit for Ether?"
            className="px-10 w-full py-4 rounded-xl outline-none bg-[rgb(212,218,237,17%)] placeholder:text-center lg:placeholder:text-start"
          ></textarea>
          <button className="px-7 py-3 rounded-full bg-[#F58A07] text-white">
            Submit
          </button>
        </form>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
