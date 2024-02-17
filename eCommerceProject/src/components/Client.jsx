import React from "react";

import hooli from "../assets/images/hooli.png";
import lyft from "../assets/images/lyft.png";
import vector from "../assets/images/vector.png";
import stripe from "../assets/images/stripe.png";
import aws from "../assets/images/aws.png";
import reddit from "../assets/images/reddit.png";

export default function Client() {
  const clientData = [
    { img: hooli, clientName: "hooli", id: "1", url: "http://www.hooli.xyz/" },
    { img: lyft, clientName: "lyft", id: "2", url: "https://www.lyft.com/" },
    {
      img: vector,
      clientName: "vector",
      id: "3",
      url: "https://vectortechnologies.com/",
    },
    { img: stripe, clientName: "stripe", id: "4", url: "https://stripe.com/" },
    {
      img: aws,
      clientName: "aws",
      id: "5",
      url: "https://aws.amazon.com/",
    },
    {
      img: reddit,
      clientName: "reddit",
      id: "6",
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
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={data.img}
                    alt={`${data.clientName} logo`}
                    className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
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
