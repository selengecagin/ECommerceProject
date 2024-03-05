import React from "react";

import aboutUsHero from "../assets/images/aboutUsHero.png";
import TeamCard from "../layout/TeamCard";
import Client from "../components/Client";
import Testimonials from "../layout/Testimonials";
import VideoCard from "../components/VideoCard";

export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col items-center px-[10%]">
        <section className="flex flex-col lg:flex-row justify-between bg-white w-full">
          <div className="basis-1/2 flex flex-col items-center justify-center py-28">
            <div className="flex items-center gap-7.5">
              <div className="flex flex-col gap-9 text-center md:text-start justify-center items-center md:items-start">
                <p className="hidden md:flex text-base font-bold text-darkTextColor">
                  ABOUT COMPANY
                </p>
                <h1 className="text-6xl font-bold text-darkTextColor ">
                  ABOUT US
                </h1>
                <div className="w-[315px] md:w-[400px] text-center md:text-start">
                  <p className="text-xl font-normal text-secondTextColor ">
                    We know how large objects will act, but things on a small
                    scale just do not act that way.
                  </p>
                </div>

                <div className="gap-2.5">
                  <button className="py-4 px-10 items-center gap-2.5 bg-primaryColor text-white font-bold text-sm rounded">
                    Get Quote Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/2 flex justify-center items-center shrink-0 overflow-hidden">
            <img
              src={aboutUsHero}
              className="max-w-full h-auto shrink-0"
              alt="About Us"
            />
          </div>
        </section>

        <section className="flex flex-col w-full">
          <div className="flex flex-col flex-wrap lg:flex-row justify-around items-center gap-14 shrink-0 py-12 basis-1/2 md:pl-[7%]">
            <div className="flex flex-col gap-6 md:text-start text-center">
              <p className="text-sm font-normal text-dangerTextColor">
                Problems trying
              </p>
              <h2 className="text-2xl font-bold text-darkTextColor ">
                Met minim Mollie non desert <br /> Alamo est sit cliquey dolor
                do met sent.
              </h2>
            </div>

            <div className="basis-1/2 shrink-0 md:text-start text-center">
              <p className="text-sm font-normal text-secondTextColor w-[350px] md:w-[545px]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center bg-lightTextColor py-20 ">
            <div className="flex flex-col flex-wrap items-center justify-center lg:justify-start md:flex-row md:items-start gap-8 lg:gap-8 ">
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
          </div>
        </section>

        <VideoCard />

        <section className="flex max-w-[1440px] px-48 items-center justify-center bg-lightTextColor">
          <div className="flex flex-col py-28 gap-28 shrink-0">
            <div className="flex flex-col items-center justify-center gap-2.5 width-[607px]">
              <h2 className="text-4xl font-bold text-darkTextColor ">
                Meet Our Team
              </h2>
              <p className="text-sm font-normal text-secondTextColor text-center">
                Problems trying to resolve the conflict between
                <br /> the two major realms of Classical physics: Newtonian
                mechanics
              </p>
            </div>

            <TeamCard />
          </div>
        </section>
      </div>
      <Client />
      <Testimonials />
    </main>
  );
}
