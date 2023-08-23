import React, { Fragment } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Contact",
};

function page() {
  return (
    <Fragment>
      <Header></Header>
      <section className="mt-14 px-14 sm:px-16 md:px-20 py-10 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col gap-8 items-center lg:items-start w-full">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:items-start w-full">
          <div className="flex flex-col items-center gap-2 lg:items-start max-w-md">
            <h2 className="text-[25px] font-semibold text-[#1D3444]">
              Have a question ? Let’s get in touch with us.
            </h2>
            <p className="text-[#5B5B5B]">
              Fill up the Form and ou team will get back to within 24 hrs
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-8 lg:flex-row max-w-lg">
            <div className="flex flex-col items-center lg:items-start gap-1">
              <span className=" font-medium text-[#0D1317]">Location</span>
              <p className="text-[#5B5B5B]">
                DLF Cybercity, Bhubaneswar,
                <br />
                India, &52050
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-1">
              <span className=" font-medium text-[#0D1317]">Contact Us</span>
              <p className="text-[#5B5B5B]">
                020 7993 2905
                <br />
                hi@bigmove.com
              </p>
            </div>
          </div>
        </div>

        <form className="max-w-md w-full flex flex-col items-center lg:items-start gap-4">
          <input
            placeholder="First Name"
            className="px-10 py-4 w-full rounded-lg bg-[rgb(210,218,237,17%)] placeholder:text-center lg:placeholder:text-start outline-none"
          ></input>

          <input
            placeholder="Last Name"
            className="px-10 py-4 w-full rounded-lg bg-[rgb(210,218,237,17%)] placeholder:text-center lg:placeholder:text-start outline-none"
          ></input>

          <input
            placeholder="Email address"
            className="px-10 py-4 w-full rounded-lg bg-[rgb(210,218,237,17%)] placeholder:text-center lg:placeholder:text-start outline-none"
          ></input>
          <textarea
            placeholder="Type message"
            className="px-10 py-4 w-full rounded-lg bg-[rgb(210,218,237,17%)] placeholder:text-center lg:placeholder:text-start outline-none"
          ></textarea>
          <button className="px-7 py-3 rounded-lg bg-[#F58A07] text-white">
            Submit
          </button>
        </form>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
