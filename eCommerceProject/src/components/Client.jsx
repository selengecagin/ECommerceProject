import React from "react";
import hooli from "../assets/images/hooli.png";
import lyft from "../assets/images/lyft.png";
import vector from "../assets/images/vector.png";
import stripe from "../assets/images/stripe.png";
import aws from "../assets/images/aws.png";
import reddit from "../assets/images/reddit.png";

export default function Client() {
  return (
    <section className="flex py-12 items-center gap-7">
      <div className="flex flex-col w-[146px] items-center">
        <img
          src={hooli}
          alt="svg5"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div className="flex flex-col w-[146px] items-center">
        <img
          src={lyft}
          alt="svg6"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div className="flex flex-col w-[146px] items-center">
        <img
          src={vector}
          alt="svg7"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div className="flex flex-col w-[146px] items-center">
        <img
          src={stripe}
          alt="svg8"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div className="flex flex-col w-[146px] items-center">
        <img
          src={aws}
          alt="svg9"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
      <div className="flex flex-col w-[146px] items-center">
        <img
          src={reddit}
          alt="svg10"
          className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
        />
      </div>
    </section>
  );
}
