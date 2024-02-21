import React from "react";
import testimonial from "../assets/images/testimonial.png";

export default function Testimonials() {
  return (
    <section className="relative bg-hoverColor max-w-[1440px] h-[636px]">
      <div className="inline-flex pl-[850px] justify-end items-center bg-cover bg-no-repeat">
        <img src={testimonial} />
      </div>

      <div className="absolute top-[112px] left-[195px] textArea inline-flex flex-col items-start py-28">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-[438px] items-start gap-6 shrink-0">
            <p className="text-base font-bold text-white">WORK WITH US</p>
            <h2 className="text-[40px] font-bold text-white">
              Now Let’s grow Yours
            </h2>
            <p className="text-sm font-normal text-white">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="flex flex-col rounded  border border-solid border-lightGray1 items-center gap-2.5 px-10 py-4 text-sm font-bold text-white">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
