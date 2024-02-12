import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="flex flex-col px-48">
      <div className="footer-1 flex flex-row h-[142px] bg-[#FAFAFA] justify-between items-center px-48 gap-[305px]">
        <div className="flex flex-col 10px gap-2.5">
          <h3 className="text-[#252B42] font-bold text-2xl pb-2.5">
            Consulting Agency For Your Business
          </h3>
          <p className="text-[#737373] text-sm	font-normal">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <div className="btn">
          <button className="bg-[#23A6F0] text-sm font-bold text-[#FFF] px-10	py-4	">
            Contact Us
          </button>
        </div>
      </div>

      <div className="footer-2 h-[272px] w-[1050pxpx] py-12 bg-[#FFFFFF] items-center px-48">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-start gap-5">
            <h5 className="text-[#252B42] text-base font-bold">Company Info</h5>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[#737373] text-sm font-bold">
                About Us
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Carrier
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                We are hiring
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Blog
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h5 className="text-[#252B42] text-base font-bold">Legal</h5>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[#737373] text-sm font-bold">
                About Us
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Carrier
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                We are hiring
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Blog
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h5 className="text-[#252B42] text-base font-bold">Features</h5>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[#737373] text-sm font-bold">
                Business Marketing
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                User Analytic
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Live Chat
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Unlimited Support
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h5 className="text-[#252B42] text-base font-bold">Resources</h5>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[#737373] text-sm font-bold">
                IOS & Android
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Watch a Demo
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                Customers
              </a>
              <a href="#" className="text-[#737373] text-sm font-bold">
                API
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <h5 className="text-[#252B42] text-base font-bold">Get In Touch</h5>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-row gap-2.5">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#23a6f0" }}
                  size="lg"
                />
                <h6 className="text-[#737373] text-sm font-bold">
                  (480) 555-0103
                </h6>
              </div>
              <div className="flex flex-row gap-2.5">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#23a6f0" }}
                  size="lg"
                />
                <h6 className="text-[#737373] text-sm font-bold">
                  4517 Washington Ave.{" "}
                </h6>
              </div>
              <div className="flex flex-row gap-2.5 ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#23a6f0" }}
                  size="lg"
                />
                <h6 className="text-[#737373] text-sm font-bold">
                  debra.holt@example.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-3 h-[74px] bg-[#FAFAFA] px-48 items-start py-6 ">
        <div className="flex flex-row justify-between items-center">
          <div className="text-[#737373] text-sm font-bold">
            <p>Made With Love By Figmaland All Right Reserved </p>
          </div>

          <div className=" flex flex-row  gap-2.5">
            <a href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#23a6f0" }}
                size="lg"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#23a6f0" }}
                size="lg"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#23a6f0" }}
                size="lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
