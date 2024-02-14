import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function SocialMediaContainer() {
  const socialMediaLinks = [
  
    { icon: faFacebook, url: "https://www.facebook.com/", label: "Facebook" },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/",
      label: "Instagram",
    },
    { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
  ];
  return (
    <>
      {socialMediaLinks.map((link, index) => {
        return (
          <a
            href={link.url}
            key={index}
            target="_blank"
            aria-label={`Follow us on ${link.label}`}
            rel="noopener noreferrer"
            className="text-lightTextColor "
          >
            <FontAwesomeIcon
              icon={link.icon}
           
              style={{ color: "#23A6F0" }}
            />
          </a>
        );
      })}
    </>
  );
}
