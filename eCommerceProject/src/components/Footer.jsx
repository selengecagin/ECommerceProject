import React from "react";
import SocialMediaContainer from "./SocialMediaContainer";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerData = [
    {
      key: "Company Info",
      opts: ["Legal", "Features", "Resources", "Get In Touch"],
    },
    {
      key: "Legal",
      opts: ["Legal", "Features", "Resources", "Get In Touch"],
    },
    {
      key: "Features",
      opts: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      key: "Resources",
      opts: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <footer className="flex flex-col w-full">
      <section className="footer-1 flex flex-col py-20 justify-start lg:flex-row  lg:justify-between lg:items-center px-48 lg:gap-[305px]">
        <Link
          to="/"
          className="text-darkTextColor text-2xl font-bold pb-2.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          BrandName
        </Link>

        <div className="flex flex-row gap-2.5">
          <SocialMediaContainer />
        </div>
      </section>

      <section className="footer-2 py-12 bg-white items-center px-48">
        <div className="flex flex-col md:flex-row flex-wrap gap-12 lg:gap-20">
          {footerData.map((data, index) => {
            return (
              <div className="flex flex-col items-start gap-5" key={index}>
                <h5 className="text-darkTextColor text-base font-bold">
                  {data.key}
                </h5>
                {data.opts.map((opt, index) => {
                  return (
                    <div className="flex flex-col gap-2.5" key={index}>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondTextColor text-sm font-bold"
                      >
                        {opt}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}

          <div className="flex flex-col items-start gap-5 ">
            <h5 className="text-darkTextColor font-bold ">Get In Touch</h5>

            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className=" px-[12px] h-[57px] rounded-l-md border border-solid border-lightBorderColor bg-lightBgColor"
              />
              <button className="bg-primaryColor text-white px-6 py-4  rounded-r-md  items-center shrink-0 border border-solid border-lightBorderColor">
                Subscribe
              </button>
            </div>

            <p className="text-secondTextColor text-xs font-normal mt-[-12px] ">
              Lore impsum dolor Amit
            </p>
          </div>
        </div>
      </section>

      <section className="footer-3 bg-lightGray1 px-48 justify-start md:items-start py-6  md:w-full">
        <p className="text-secondTextColor text-sm font-bold w-[210px] md:w-full text-center md:text-start">
          Made With Love By Figmaland All Right Reserved
        </p>
      </section>
    </footer>
  );
}
