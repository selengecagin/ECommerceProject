import React from "react";
import { Link } from "react-router-dom";

import rightArrow from "../assets/images/rightArrowIconAboutPage.svg";
import aboutUsHero from "../assets/images/aboutUsHero.png";

import TeamCard from "../components/TeamCard";
import Client from "../components/Client";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import VideoCard from "../components/VideoCard";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center w-full ">
      <section className="NavBar&hero flex h-[91px] w-full max-w-[1322px] py-4 px-36 items-start gap-10 shrink-0 ">
        <div className="flex h-[58px] pr-16 py-3.5 items-center  ">
          <p className="text-2xl font-bold text-darkTextColor">Bandage</p>
        </div>

        <div className="flex justify-center items-center gap-60 py-1">
          <nav className="flex gap-4 items-center">
            <div className="flex items-center">
              <Link to="/" className="text-secondTextColor text-sm font-bold">
                Home
              </Link>
            </div>

            <div className="flex items-center">
              <Link to="/" className="text-secondTextColor text-sm font-bold">
                Product
              </Link>
            </div>

            <div className="flex items-center">
              <Link to="/" className="text-secondTextColor text-sm font-bold">
                Pricing
              </Link>
            </div>

            <div className="flex items-center">
              <Link to="/" className="text-secondTextColor text-sm font-bold">
                Contact
              </Link>
            </div>
          </nav>

          <div className="flex flex-row gap-11 items-center ">
            <button className="text-sm text-primaryColor font-bold text-center">
              Login
            </button>
            <div className="flex">
              <button className="items-center gap-3.5 px-6 py-4 bg-primaryColor text-white rounded">
                Become a member
              </button>
              <img src={rightArrow} alt="Right Arrow Icon" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="hero">
        <div className="flex flex-wrap flex-col justify-center start">
          <p className="text-[#252B42] font-bold hidden sm:block md:block xl:block">
            ABOUT COMPANY
          </p>
          <h1 className="text-[#252B42] text-[58px] font-bold pt-8">
            ABOUT US
          </h1>
          <p className="text-[#737373] text-xl pt-8">
            We know how large objects will act, but things on a small scale
          </p>

          <div>
            <img
              src={aboutUsHero}
              alt="aboutUsHero"
              className="cursor-pointer pt-8 hover:scale-110 transition duration-200"
            />
          </div>
        </div>
      </section> */}

      <section className="flex flex-col items-center shrink-0 py-6  ">
        <div className="flex justify-center items-center gap-14">
          <div className="flex flex-col items-start gap-6 w-[394px]">
            <p className="text-sm font-normal text-dangerTextColor">
              Problems trying
            </p>
            <h2 className="text-2xl font-bold text-darkTextColor">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </div>
          <p className="text-sm font-normal text-secondTextColor w-[545px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center bg-ightTextColor py-20 w-full">
        <div className="flex flex-row items-start gap-8 ">
          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              15K
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Happy Customers
            </h5>
          </div>

          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              150K
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Monthly Visitors
            </h5>
          </div>

          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              15
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Countries Worldwide
            </h5>
          </div>

          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              100+
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Top Partners
            </h5>
          </div>
        </div>
      </section>

      <VideoCard />
      <TeamCard />
      <Client />
      <Testimonials />
      <Footer />
    </main>
  );
}
