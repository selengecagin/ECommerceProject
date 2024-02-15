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
      

      


      <Stats />
      <VideoCard />
      <TeamCard />
      <Client />
      <Testimonials />
      <Footer />
    </main>
  );
}
