import React from "react";
import hooli from "../assets/images/hooli.png";
import lyft from "../assets/images/lyft.png";
import vector from "../assets/images/vector.png";
import stripe from "../assets/images/stripe.png";
import aws from "../assets/images/aws.png";
import reddit from "../assets/images/reddit.png";

export default function Client() {
  return (
    <section className="flex flex-col gap-6 px-48 justify-center items-center bg-lightGray1">
      <div className="flex flex-col gap-6 py-20 shrink-0 items-center">
        <h2 className="text-4xl font-bold text-darkTextColor">
          Big Companies Are Here
        </h2>
        <p className="text-sm font-normal text-center text-secondTextColor w-[547px]">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className="flex py-12 items-center gap-7">
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
        </div>
      </div>
    </section>
  );
}
