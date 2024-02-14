import React from "react";
import hooli from "../assets/images/hooli.png";
import lyft from "../assets/images/lyft.png";
import vector from "../assets/images/vector.png";
import stripe from "../assets/images/stripe.png";
import aws from "../assets/images/aws.png";
import reddit from "../assets/images/reddit.png";

export default function Client() {
  return (
    <section className="bg-[#FAFAFA] flex pt-[72px] pb-32 items-center justify-evenly flex-col xl:flex-row gap-[43px] xl:gap-0">
      <div>
        <img
          src={hooli}
          alt="svg5"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div>
        <img
          src={lyft}
          alt="svg6"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div>
        <img
          src={vector}
          alt="svg7"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div>
        <img
          src={stripe}
          alt="svg8"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div>
        <img
          src={aws}
          alt="svg9"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div>
        <img
          src={reddit}
          alt="svg10"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
    </section>
  );
}
