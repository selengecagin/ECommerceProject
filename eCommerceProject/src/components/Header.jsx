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
  const socialMediaLinks = [
    {
      icon: faInstagram,
      url: "https://www.instagram.com/",
      label: "Instagram",
    },
    { icon: faYoutube, url: "https://www.youtube.com/", label: "YouTube" },
    { icon: faFacebook, url: "https://www.facebook.com/", label: "Facebook" },
    { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <header className="flex flex-col justify-start w-full ">
      <section className="flex justify-between items-center h-[58px]  px-[10%] text-lightTextColor font-bold bg-darkBackgroundColor">
        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "lightTextColor" }}
            />
            <p>(225) 555-0118</p>
          </div>

          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "lightTextColor" }}
            />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-4">
          <p>Follow Us</p>
          <p>:</p>
          {socialMediaLinks.map((link, index) => {
            return (
              <a
                href={link.url}
                key={index}
                target="_blank"
                aria-label={`Follow us on ${link.label}`}
                rel="noopener noreferrer"
                className="text-lightTextColor"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  style={{ color: "lightTextColor" }}
                />
              </a>
            );
          })}
        </div>
      </section>

      <nav className="flex  justify-between h-[76px] px-[10%] py-2.5 items-center bg-white ">
        <div>
          <Link to="/" className="text-darkTextColor text-2xl font-bold pt-0">
            BrandName
          </Link>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center">
            <Link to="/" className="text-secondTextColor text-sm font-bold">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/shop" className="text-secondTextColor text-sm font-bold">
              Shop
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/about"
              className="text-secondTextColor text-sm font-bold"
            >
              About
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/blog" className="text-secondTextColor text-sm font-bold">
              Blog
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/contact"
              className="text-secondTextColor text-sm font-bold"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/pages"
              className="text-secondTextColor text-sm font-bold"
            >
              Pages
            </Link>
          </div>
        </div>

        <div className="flex  gap-6 text-primaryColor items-center">
          <div className="flex gap-2 text-primaryColor">
            <Link to="/profile">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "primaryColor" }}
              />
            </Link>
            <Link to="/sign-ip" className="text-primaryColor">
              Login
            </Link>
            <p className="text-primaryColor">/</p>
            <Link to="/sign-up" className="text-primaryColor">
              Register
            </Link>
          </div>

          <div className="flex gap-5 ">
            <div className="flex gap-2">
              <Link to="/search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "primaryColor" }}
                />
              </Link>
            </div>

            <div className="flex gap-2">
              <Link to="/basket">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "primaryColor" }}
                />
              </Link>
              <p className="text-primaryColor">1</p>
            </div>

            <div className="flex gap-2">
              <Link to="/favorites">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "primaryColor" }}
                />
              </Link>
              <p className="text-primaryColor">1</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
