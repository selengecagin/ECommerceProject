import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";

export default function Client() {
  const clientData = [
    { logoId: faHooli, url: "http://www.hooli.xyz/" },
    { logoId: faLyft, url: "https://www.lyft.com/" },
    {
      logoId: faPiedPiperHat,
      url: "https://vectortechnologies.com/",
    },
    { logoId: faStripe, url: "https://stripe.com/" },
    {
      logoId: faAws,

      url: "https://aws.amazon.com/",
    },
    {
      logoId: faRedditAlien,
      url: "https://www.reddit.com/",
    },
  ];
  return (
    <section className="flex flex-col gap-6 px-48 w-full justify-center items-center bg-lightGray1">
      <div className="flex flex-col gap-6 py-20 shrink-0 items-center">
        <h2 className="text-4xl font-bold text-darkTextColor">
          Big Companies Are Here
        </h2>
        <p className="text-sm font-normal text-center text-secondTextColor w-[547px]">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>

        <div className="flex py-12 items-center gap-7">
          {clientData.map((data, index) => {
            return (
              <div className="flex flex-col w-[146px] items-center" key={index}>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:drop-shadow-xl hover:scale-105 text-7xl"
                >
                  <FontAwesomeIcon
                    icon={data.logoId}
                    style={{ color: "#737373" }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
