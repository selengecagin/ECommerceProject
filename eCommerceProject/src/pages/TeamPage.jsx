import React from "react";

import teamHero1 from "../assets/images/teamHero1.png";
import teamHero2 from "../assets/images/teamHero2.png";
import teamHero3 from "../assets/images/teamHero3.png";
import teamHero4 from "../assets/images/teamHero4.png";
import teamHero5 from "../assets/images/teamHero5.png";

import teamFacebookLogo from "../assets/images/teamFacebookLogo.svg";
import teamTwitterLogo from "../assets/images/teamTwitterLogo.svg";
import teamInstagramLogo from "../assets/images/teamInstagramLogo.svg";
import teamLinkedinLogo from "../assets/images/teamLinkedinLogo.svg";
import greyRightArrow from "../assets/images/greyRightArrow.svg";

import TeamCard from "../layout/TeamCard";

export default function TeamPage() {
  const socialMediaData = [
    {
      logo: teamTwitterLogo,
      url: "https://twitter.com",
    },
    {
      logo: teamFacebookLogo,
      url: "https://facebook.com",
    },
    {
      logo: teamInstagramLogo,
      url: "https://instagram.com",
    },
    {
      logo: teamLinkedinLogo,
      url: "https://linkedin.com",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full">
      <section className="bg-white ">
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

          <div className="flex flex-col items-center gap-10">
            <TeamCard />
            <TeamCard />
            <TeamCard />
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
            {socialMediaData.map((data, index) => {
              return (
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <img src={data.logo}></img>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
