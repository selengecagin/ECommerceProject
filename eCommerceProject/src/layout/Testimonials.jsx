import React from "react";
import testimonial from "../assets/images/testimonial.png";

export default function Testimonials() {
  return (
    <section className="flex flex-col lg:flex-row justify-between bg-hoverColor w-full">
      <div className="basis-1/2 flex flex-col items-center justify-center py-28">
        <div className="flex items-center gap-7.5 flex-col gap-9 text-center md:text-start justify-center md:items-start">
          <p className="text-base font-bold text-white">WORK WITH US</p>
          <h2 className="text-[40px] font-bold text-white">
            Now Let’s grow Yours
          </h2>
          <p className="text-sm font-normal text-white w-[440px]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button className="flex flex-col rounded border border-solid border-lightGray1 items-center gap-2.5 px-10 py-4 text-sm font-bold text-white bg-[#2DC071]">
            Button
          </button>
        </div>
      </div>
      <div className="basis-1/2 hidden lg:flex justify-end items-center shrink-0 overflow-hidden">
        <img
          src={testimonial}
          className="max-w-full h-auto shrink-0"
          alt="About Us"
        />
      </div>
    </section>
  );
}
