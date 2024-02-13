import React from "react";
import clock from "../assets/images/clock.svg";
import rightArrow from "../assets/images/rightArrow.svg";
import statistics from "../assets/images/statistics.svg";
export default function ContentCard() {
  return (
    <main className="flex flex-col flex-wrap px-6 pt-6 pb-8 justify-center w-[348px] gap-2.5">
      <section className="flex flex-row justify-start gap-3.5">
        <p className="text-disabledElementColor text-xs font-normal">Google</p>
        <p className="text-secondTextColor text-xs font-normal">Trending</p>
        <p className="text-secondTextColor text-xs font-normal">New</p>
      </section>
      <section className="flex flex-col gap-2.5">
        <h4 className="text-darkTextColor text-xl font-normal w-[247px]">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-secondTextColor text-sm font-normal w-[280px]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </section>
      <section className="flex flex-row justify-between py-3.5 items-center">
        <div className="flex flex-row gap-1.5">
          <img src={clock} alt="Clock Icon" />
          <time className="text-xs font-normal text-secondTextColor">
            22 April 2021
          </time>
        </div>
        <div className="flex flex-row gap-1.5">
          <img src={statistics} alt="Statistics Icon" />
          <p className="text-xs font-normal text-secondTextColor">
            10 comments
          </p>
        </div>
      </section>
      <section className="flex flex-row gap-2.5">
        <h6 className=" text-secondTextColor text-sm font-bold ">Learn More</h6>
        <img src={rightArrow} alt="Right Arrow Icon" />
      </section>
    </main>
  );
}
