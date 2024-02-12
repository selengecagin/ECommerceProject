import React from "react";
import clock from "../assets/images/clock.svg";
import rightArrow from "../assets/images/rightArrow.svg";
import statistics from "../assets/images/statistics.svg";
export default function ContentCard() {
  return (
    <main className="flex flex-col flex-wrap px-6 pt-6 pb-8 justify-center w-[348px] gap-2.5">
      <div className="flex flex-row justify-start gap-3.5">
        <p className="text-[#8EC2F2] text-xs font-normal">Google</p>
        <p className="text-[#737373] text-xs font-normal">Trending</p>
        <p className="text-[#737373] text-xs font-normal">New</p>
      </div>

      <div className="flex flex-col gap-2.5">
        <h4 className="text-[#252B42] text-xl font-normal w-[247px]">
          Loudest à la Madison #1 (L'integral)
        </h4>
        <p className="text-[#737373] text-sm font-normal w-[280px]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className="flex flex-row justify-between py-3.5 items-center">
        <div className="flex flex-row gap-1.5">
          <img src={clock} />
          <p className="text-xs font-normal text-[#737373]">22 April 2021</p>
        </div>

        <div className="flex flex-row gap-1.5">
          <img src={statistics} />
          <p className="text-xs font-normal text-[#737373]">10 comments</p>
        </div>
      </div>

      <div className="flex flex-row gap-2.5">
        <h6 className=" text-[#737373] text-sm font-bold ">Learn More</h6>
        <img src={rightArrow} />
      </div>
    </main>
  );
}
