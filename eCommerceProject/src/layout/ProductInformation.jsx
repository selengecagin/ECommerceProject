import React from "react";
import pInfo from "../assets/images/productInformation.png";
import buyNow from "../assets/images/buyNowButton.svg";
import readMore from "../assets/images/readMoreButton.svg";
import { Link } from "react-router-dom";

export default function ProductInformation() {
  return (
    <main className="flex flex-col lg:flex-row gap-8 lg:px-48 py-12">
      <section className="flex justify-center basis-1/2 order-1 lg:order-0 h-auto shrink-0 ">
        <img
          src={pInfo}
          alt="Product image description"
          className="shrink-0 w-[450px] lg:w-full"
        />
      </section>

      <section className="flex flex-col gap-8 basis-1/2 justify-center items-center lg:items-start order-0 lg:order-1 shrink-0 h-auto">
        <h3 className="text-base font-bold text-mutedColor">SUMMER 2020</h3>
        <h1 className="text-4xl font-bold text-darkTextColor w-[250px] text-center lg:w-[500px] lg:text-start">
          Part of the Neural Universe
        </h1>
        <p className="flex flex-wrap text-xl font-normal text-secondTextColor w-[210px] text-center lg:w-[325px] lg:text-start">
          We know how large objects will act, but things on a small scale.
        </p>


        <div className="flex flex-col lg:flex-row gap-2.5 ">
          <div className="bg-[#2DC071] cursor-pointer flex justify-center gap-2 py-4 px-10 rounded-md hover:scale-110 transition duration-200">
            <Link
              to="/product-list-page"
              className="flex text-white text-sm font-bold items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              SHOP NOW
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
