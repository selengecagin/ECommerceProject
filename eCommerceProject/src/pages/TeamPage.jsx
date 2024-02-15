import React from "react";
import { Link } from "react-router-dom";
import teamHero1 from "../assets/images/teamHero1.png";
import teamHero2 from "../assets/images/teamHero2.png";
import teamHero3 from "../assets/images/teamHero3.png";
import teamHero4 from "../assets/images/teamHero4.png";
import teamHero5 from "../assets/images/teamHero5.png";

import teamBody1 from "../assets/images/teamBody1.jpg";
import teamBody2 from "../assets/images/teamBody2.jpg";
import teamBody3 from "../assets/images/teamBody3.jpg";
import teamBody4 from "../assets/images/teamBody4.jpg";
import teamBody5 from "../assets/images/teamBody5.jpg";
import teamBody6 from "../assets/images/teamBody6.jpg";
import teamBody7 from "../assets/images/teamBody7.jpg";
import teamBody8 from "../assets/images/teamBody8.jpg";
import teamBody9 from "../assets/images/teamBody9.jpg";

import teamFacebookLogo from "../assets/images/teamFacebookLogo.svg";
import teamTwitterLogo from "../assets/images/teamTwitterLogo.svg";
import teamInstagramLogo from "../assets/images/teamInstagramLogo.svg";
import teamLinkedinLogo from "../assets/images/teamLinkedinLogo.svg";
import greyRightArrow from "../assets/images/greyRightArrow.svg";
import SocialMediaContainer from "../components/SocialMediaContainer";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <main className="flex flex-col items-center w-full">
      <section className="bg-white ">
        <div className="flex w-full max-w-[1322px] py-4 px-36 items-start gap-10 shrink-0 ">
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
                <img src={greyRightArrow} alt="Right Arrow Icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12 gap-4">
          <div className="flex flex-col items-center gap-4">
            <p className=" text-base font-bold text-center text-secondTextColor">
              WHAT WE DO
            </p>
            <h2 className="text-[58px] font-bold text-darkTextColor text-center ">
              Innovation tailored for you
            </h2>
            <div className="centered flex flex-row gap-4 ">
              <p className="text-center text-sm font-bold text-[#252B42]">
                Home
              </p>
              <img src={greyRightArrow} alt="right-arrow-image"></img>
              <p className="text-center text-sm font-bold text-[#BDBDBD]">
                Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center shrink-0 gap-2.5">
        <div>
          <img src={teamHero1} className="shrink-0"></img>
        </div>
        <div className="flex flex-col gap-2.5">
          <img src={teamHero2} className="shrink-0"></img>
          <img src={teamHero3} className="shrink-0 "></img>
        </div>

        <div className="flex flex-col gap-2.5">
          <img src={teamHero4} className="shrink-0"></img>
          <img src={teamHero5} className="shrink-0"></img>
        </div>
      </section>

      <section className="flex flex-col flex-wrap px-48 items-center justify-center bg-lightTextColor">
        <div className="flex flex-col items-center py-28 gap-28">
          <h2 className="text-4xl font-bold text-darkTextColor ">
            Meet Our Team
          </h2>

          <div>
            <div className="flex items-center gap-10">
              <div>
                <img src={teamBody1}></img>
                <div className="flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>
                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>

              <div>
                <img src={teamBody2}></img>
                <div className=" flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>
                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>

              <div>
                <img src={teamBody3}></img>
                <div className=" flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>

                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div>
                <img src={teamBody4}></img>
                <div className="flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>
                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>

              <div>
                <img src={teamBody5}></img>
                <div className=" flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>
                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>

              <div>
                <img src={teamBody6}></img>
                <div className=" flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>

                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div>
                <img src={teamBody7}></img>
                <div className="flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>
                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>

              <div>
                <img src={teamBody8}></img>
                <div className=" flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>
                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>

              <div>
                <img src={teamBody9}></img>
                <div className=" flex flex-col items-center gap-2.5 p-7">
                  <h5 className="text-base font-bold text-darkTextColor">
                    Username
                  </h5>
                  <p className="text-sm font-bold text-secondTextColor">
                    Profession
                  </p>

                  <div className="flex gap-5">
                    <SocialMediaContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex px-48 justify-center align-center shrink-0">
        <div className="flex flex-col py-20 items-center gap-9 ">
          <h2 className="text-[40px] font-bold text-center text-darkTextColor">
            Start your 14 days free trial
          </h2>
          <p className="text-sm font-normal text-center text-secondTextColor">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="flex flex-col py-4 px-10 items-center gap-2.5 bg-primaryColor text-white font-bold text-sm rounded">
            Try it free now
          </button>
          <div className="flex p-2.5 items-start gap-8">
            <img src={teamTwitterLogo}></img>
            <img src={teamFacebookLogo}></img>
            <img src={teamInstagramLogo}></img>
            <img src={teamLinkedinLogo}></img>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
