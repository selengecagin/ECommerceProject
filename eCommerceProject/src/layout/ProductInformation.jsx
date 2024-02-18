import React from "react";
import pInfo from "../assets/images/productInformation.png";
import buyNow from "../assets/images/buyNowButton.svg";
import readMore from "../assets/images/readMoreButton.svg";
import { Link } from "react-router-dom";

export default function ProductInformation() {
  return (
    <main className="flex flex-row w-full gap-8 px-48  ">

      <section className="flex justify-end items-start basis-1/2">
        <img
          src={pInfo}
          alt="Product image description"
          className="flex shrink-0"
        />
      </section>

      <section className="flex flex-col gap-8 basis-1/2 justify-center">
        <h3 className="text-base font-bold text-mutedColor">SUMMER 2020</h3>
        <h1 className="text-4xl font-bold text-darkTextColor">
          Part of the Neural Universe
        </h1>
        <p className="flex flex-wrap text-xl font-normal text-secondTextColor">
          We know how large objects will act,
          <br />
          but things on a small scale.
        </p>

        <div className="flex flex-row gap-2.5 ">
          <div className="bg-[#2DC071] cursor-pointer flex justify-center gap-2 py-4 px-10 rounded-md hover:scale-110 transition duration-200">
            <Link
              to="/product-list-page"
              className="flex text-white text-sm font-bold items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              BUY NOW
            </Link>
          </div>

          <div className="bg-white border border-solid border-[#2DC071] cursor-pointer flex justify-center gap-2 py-4 px-10 rounded-md hover:scale-110 transition duration-200">
            <Link
              to="/blog-page"
              className="flex text-[#2DC071] text-sm font-bold items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
