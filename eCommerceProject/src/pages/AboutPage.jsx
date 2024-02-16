import React from "react";
import { Link } from "react-router-dom";

import rightArrow from "../assets/images/rightArrowIconAboutPage.svg";
import aboutUsHero from "../assets/images/aboutUsHero.png";
import Header from "../components/Header";
import TeamCard from "../layout/TeamCard";
import Client from "../components/Client";
import Testimonials from "../layout/Testimonials";
import Footer from "../components/Footer";
import VideoCard from "../layout/VideoCard";
import Stats from "../components/Stats";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center ">
      <Header />
      <section className=" relative  bg-white">
        <div className="inline-flex pl-[850px] justify-end items-center bg-cover bg-no-repeat">
          <img src={aboutUsHero} />
        </div>

        <div className="absolute left-[195px] right-[646px] top-[50px] flex flex-col items-start py-28 gap-20">
          <div className="flex items-center gap-7.5">
            <div className=" flex flex-col w-[600px] gap-9 flex-start">
              <p className="text-base font-bold text-darkTextColor ">
                ABOUT COMPANY
              </p>
              <h1 className="text-[58px] font-bold text-darkTextColor ">
                ABOUT US
              </h1>
              <p className="text-xl font-normal text-secondTextColor w-[315px]">
                We know how large objects will act, but things on a small scale
              </p>
              <div className="gap-2.5 flex-start">
                <button className="py-4 px-10 items-center gap-2.5 bg-primaryColor text-white font-bold text-sm rounded">
                  Get Quote Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <VideoCard />
      <TeamCard />
      <Client />
      <Testimonials />
      <Footer />
    </main>
  );
}
