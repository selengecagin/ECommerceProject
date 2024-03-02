import React from "react";
import clock from "../assets/images/clock.svg";
import rightArrow from "../assets/images/rightArrow.svg";
import statistics from "../assets/images/statistics.svg";
import featuredPostImg from "../assets/images/featuredPostImg.png";
import { Link } from "react-router-dom";

export default function ContentCard() {
  return (
    <section className="flex flex-col items-start w-[348px] bg-white shadow-lg hover:scale-110 transition duration-200">
      
      <div className="imgArea">
        <img src={featuredPostImg} alt="Featured Posts Image" />
      </div>

      <div className="textArea flex flex-col flex-wrap px-6 pt-6 pb-8 justify-center w-[348px] gap-2.5">
        <div className="flex flex-row justify-start gap-3.5">
          <p className="text-disabledElementColor text-xs font-normal">
            Google
          </p>
          <p className="text-secondTextColor text-xs font-normal">Trending</p>
          <p className="text-secondTextColor text-xs font-normal">New</p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h4 className="text-darkTextColor text-xl font-normal w-[247px]">
            Loudest à la Madison #1 (L'integral)
          </h4>
          <p className="text-secondTextColor text-sm font-normal w-[280px]">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="flex flex-row justify-between py-3.5 items-center">
          <div className="flex flex-row gap-1.5">
            <img src={clock} alt="clock-icon" />
            <time className="text-xs font-normal text-secondTextColor">
              22 April 2021
            </time>
          </div>
          <div className="flex flex-row gap-1.5">
            <img src={statistics} alt="statistics-icon" />
            <p className="text-xs font-normal text-secondTextColor">
              10 comments
            </p>
          </div>
        </div>
        <div className="flex ">
          <Link
            to="/blog-page"
            className="flex flex-row gap-1.5 text-secondTextColor text-sm font-bold "
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
            <img src={rightArrow} alt="right-arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
