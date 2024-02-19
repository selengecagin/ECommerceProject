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

  const routeData = [
    { key: "Home", linkTo: "/" },
    { key: "Shop", linkTo: "/product-list-page" },
    { key: "About", linkTo: "/about-page" },
    { key: "Blog", linkTo: "/blog-page" },
    { key: "Team", linkTo: "/team-page" },
    { key: "Contact", linkTo: "/contact-page" },
    { key: "Pages", linkTo: "/pages" },
  ];

  
  return (
    <header className="flex flex-col justify-start">
      
      <section className="flex justify-between items-center h-[58px] px-[10%] text-lightTextColor font-bold bg-darkBackgroundColor sm:hidden md:text-xs">
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
                className="text-lightTextColor hover:scale-110 transition duration-200"
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

      <nav className="flex sm:flex-col justify-between h-[76px] px-[10%] py-2.5 items-center bg-white ">

        <div className="sm:pr-60 sm:pb-8 hover:scale-110 transition duration-200">
          <Link to="/" className="text-darkTextColor lg:text-2xl sm:text-sm font-bold" >
            BrandName
          </Link>
        </div>

        <div className="flex sm:flex-col gap-4">
          {routeData.map((data, index) => {
            return (
              <div className="flex items-center" key={index}>
                <Link
                  to={data.linkTo}
                  className="text-secondTextColor lg:text-sm lg:font-bold sm:text-sm sm:font-normal"
                >
                  {data.key}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex sm:flex-col sm:pt-4 gap-6 text-primaryColor items-center">
          <div className="flex gap-2 text-primaryColor">

            <Link to="/profile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "primaryColor" }}
              />
            </Link>
            <Link to="/sign-in" className="text-primaryColor">
              Login
            </Link>
            <p className="text-primaryColor">/</p>
            <Link to="/sign-up" className="text-primaryColor">
              Register
            </Link>
          </div>

          <div className="flex sm:flex-col gap-5 ">

            <div className="flex gap-2">
              <Link to="/search-page">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "primaryColor" }}
                />
              </Link>
            </div>

            <div className="flex gap-2">
              <Link to="/basket-page">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "primaryColor" }}
                />
              </Link>
              <p className="text-primaryColor">1</p>
            </div>

            <div className="flex gap-2">
              <Link to="/favorites-page">
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
