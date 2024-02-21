import React from "react";

import aboutUsHero from "../assets/images/aboutUsHero.png";
import TeamCard from "../layout/TeamCard";
import Client from "../components/Client";
import Testimonials from "../layout/Testimonials";
import VideoCard from "../layout/VideoCard";
import Stats from "../components/Stats";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center ">
      <section className="relative bg-white">
        <div>
          <div className="absolute left-[195px] right-[646px] top-[50px] flex flex-col items-start py-28 gap-20">
            <div className="flex justify-start items-center gap-7.5">
              <div className="flex flex-col w-[600px] gap-9">
                <p className="text-base font-bold text-darkTextColor ">
                  ABOUT COMPANY
                </p>
                <h1 className="text-[58px] font-bold text-darkTextColor ">
                  ABOUT US
                </h1>
                <p className="text-xl font-normal text-secondTextColor w-[315px]">
                  We know how large objects will act, but things on a small
                  scale
                </p>
                <div className="gap-2.5">
                  <button className="py-4 px-10 items-center gap-2.5 bg-primaryColor text-white font-bold text-sm rounded">
                    Get Quote Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex pl-[850px] justify-end items-center bg-cover bg-no-repeat">
            <img src={aboutUsHero} />
          </div>
        </div>
      </section>
      <Stats />
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

      <Client />
      <Testimonials />
    </main>
  );
}
