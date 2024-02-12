import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faHeart,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <main className="flex flex-col justify-start">
      <header className=" flex flex-wrap justify-between h-[58px] px-[3%] items-center text-[#FFFFFF] font-bold bg-[#3C403D]">
        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
            <p>(225) 555-0118</p>
          </div>

          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-4">
          <p>Follow Us</p>
          <p>:</p>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
          </a>

          <a href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
          </a>
        </div>
      </header>
      <nav className="flex flex-wrap justify-between h-[76px] px-[3%] py-2.5 items-center bg-white ">
        <div className="text-[#252B42] text-2xl font-bold pt-0">
          <h3>BrandName </h3>
        </div>

        <div className="flex flex-wrap gap-4  ">
          <div className="flex items-center">
            <Link to="/" className="text-[#737373] text-sm font-bold">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/shop" className="text-[#737373] text-sm font-bold">
              Shop
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/about" className="text-[#737373] text-sm font-bold">
              About
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/blog" className="text-[#737373] text-sm font-bold">
              Blog
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/contact" className="text-[#737373] text-sm font-bold">
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/pages" className="text-[#737373] text-sm font-bold">
              Pages
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-[#23A6F0] items-center">
          <div className="flex gap-2 text-[#23A6F0]">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} style={{ color: "#23a6f0" }} />
            </Link>
            <Link to="/sign-ip" className="text-[#23A6F0]">
              Login
            </Link>
            <p className="text-[#23A6F0]">/</p>
            <Link to="/sign-up" className="text-[#23A6F0]">
              Register
            </Link>
          </div>

          <div className="flex gap-5 ">
            <div className="flex gap-2">
              <Link to="/search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#23a6f0" }}
                />
              </Link>
            </div>

            <div className="flex gap-2">
              <Link to="/basket">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#23a6f0" }}
                />
              </Link>
              <p className="text-[#23A6F0]">1</p>
            </div>

            <div className="flex gap-2">
              <Link to="/favorites">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#23a6f0" }} />
              </Link>
              <p className="text-[#23A6F0]">1</p>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
