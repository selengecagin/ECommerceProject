import React from "react";
import SocialMediaContainer from "./SocialMediaContainer";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="footer-1 flex flex-row h-[142px] bg-lightGray1 justify-between items-center px-48 gap-[305px]">
        <h3 className="text-darkTextColor font-bold text-2xl pb-2.5">
          Bandage
        </h3>

        <div className="flex flex-row gap-2.5">
          <SocialMediaContainer />
        </div>
      </section>

      <section className="footer-2 h-[272px] py-12 bg-white items-center px-48">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-start gap-5">
            <h5 className="text-darkTextColor text-base font-bold">
              Company Info
            </h5>
            <div className="flex flex-col gap-2.5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                About Us
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Carrier
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                We are hiring
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h5 className="text-darkTextColor text-base font-bold">Legal</h5>
            <div className="flex flex-col gap-2.5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                About Us
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Carrier
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                We are hiring
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Blog
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h5 className="text-darkTextColor text-base font-bold">Features</h5>
            <div className="flex flex-col gap-2.5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Business Marketing
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                User Analytic
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Live Chat
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Unlimited Support
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h5 className="text-darkTextColor text-base font-bold">
              Resources
            </h5>
            <div className="flex flex-col gap-2.5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                IOS & Android
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Watch a Demo
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                Customers
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondTextColor text-sm font-bold"
              >
                API
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 ">
            <h5 className="text-darkTextColor font-bold ">Get In Touch</h5>

            <div className="flex items-center  ">
              <input
                type="email"
                placeholder="Your Email"
                className=" px-[4%] h-[57px] rounded-l-md border border-solid border-lightBorderColor bg-lightBgColor"
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
