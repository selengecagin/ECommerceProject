import React from "react";
import SocialMediaContainer from "./SocialMediaContainer";

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
      <section className="footer-1 flex flex-row h-[142px] justify-between items-center px-48 gap-[305px]">
        <h3 className="text-darkTextColor font-bold text-2xl pb-2.5">
          Bandage
        </h3>

        <div className="flex flex-row gap-2.5">
          <SocialMediaContainer />
        </div>
      </section>

      <section className="footer-2 h-[272px] py-12 bg-white items-center px-48">
        <div className="flex flex-row gap-20">
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

      <section className="footer-3 h-[74px] bg-lightGray1 px-48 items-start py-6">
        <p className="text-secondTextColor text-sm font-bold">
          Made With Love By Figmaland All Right Reserved
        </p>
      </section>
    </footer>
  );
}
