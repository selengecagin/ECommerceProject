import React from "react";
import ContactHero from "../assets/images/contactHero.png";

import phone from "../assets/images/contactPagePhone.svg";
import mail from "../assets/images/contactPageMail.svg";
import arrow from "../assets/images/contactPageArrow.svg";
import location from "../assets/images/contactPageLocation.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/Footer";
import Header from "../components/Header";
export default function ContactPage() {
  return (
    <main className="flex flex-col items-center w-full">
      <Header/>
      <section className=" relative bg-white">
     

        <div className="inline-flex top-[117px] right-[66px] bottom-[124px] left-[742px] justify-end items-center bg-cover bg-no-repeat">
          <img src={ContactHero} />
        </div>

        <div className="absolute left-[195px] right-[646px] top-[100px] flex flex-col py-28 gap-20 items-center">
          <div className=" flex flex-col w-[600px] gap-9 flex-start">
            <p className="text-base font-bold text-darkTextColor ">
              CONTACT US
            </p>
            <h1 className="text-[58px] font-bold text-darkTextColor ">
              Get in touch today!
            </h1>
            <p className="text-xl font-normal text-secondTextColor w-[315px]">
              We know how large objects will act, but things on a small scale
            </p>
            <p className="text-2xl font-bold text-darkTextColor">
              Phone ; +451 215 215
            </p>
            <p className="text-2xl font-bold text-darkTextColor">
              Fax : +451 215 215
            </p>

            <div className="flex p-2.5 items-start gap-8">

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className="flex px-48 justify-center items-center self-stretch ">
        <div className="flex flex-col items-center gap-10 py-28 ">
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-sm font-bold text-darkTextColor text-center">
              VISIT OUR OFFICE
            </p>
            <h2 className="text-[40px] font-bold text-darkTextColor text-center">
              We help small businesses with big ideas
            </h2>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center gap-8 w-[328px] py-12 px-10 bg-white">
              <img src={phone}></img>
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-bold text-darkTextColor">
                  georgia.young@example.com
                </p>
                <p className="text-sm font-bold text-darkTextColor">
                  georgia.young@ple.com
                </p>
              </div>
              <p className="text-base font-bold text-darkTextColor">
                Get Support
              </p>
              <button className="py-4 px-9 items-center gap-2.5 rounded-[37px] border border-solid border-primaryColor text-primaryColor">
                Submit Request
              </button>
            </div>

            <div className="flex flex-col items-center gap-8 w-[328px] py-20 px-10 bg-darkTextColor">
              <img src={location}></img>
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-bold text-white">
                  georgia.young@example.com
                </p>
                <p className="text-sm font-bold text-white">
                  georgia.young@ple.com
                </p>
              </div>
              <p className="text-base font-bold text-white">Get Support</p>
              <button className="py-4 px-9 items-center gap-2.5 rounded-[37px] border border-solid border-primaryColor text-primaryColor">
                Submit Request
              </button>
            </div>

            <div className="flex flex-col items-center gap-8 w-[328px] py-12 px-10 bg-white">
              <img src={mail}></img>
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-bold text-darkTextColor">
                  georgia.young@example.com
                </p>
                <p className="text-sm font-bold text-darkTextColor">
                  georgia.young@ple.com
                </p>
              </div>
              <p className="text-base font-bold text-darkTextColor">
                Get Support
              </p>
              <button className="py-4 px-9 items-center gap-2.5 rounded-[37px] border border-solid border-primaryColor text-primaryColor">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col py-20 items-center gap-24">
          <div className="flex flex-col items-center gap-9 w-[607px] ">
            <img src={arrow}></img>
            <p className="text-base font-bold text-darkTextColor text-center">
              WE Can't WAIT TO MEET YOU
            </p>
            <h2 className="text-[58px] font-bold text-darkTextColor text-center">
              Let’s Talk
            </h2>
            <button className="flex flex-col rounded h-[52px] py-4 px-10 items-center gap-2.5 bg-primaryColor text-white">
              Try it free now
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
