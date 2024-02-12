import React from "react";
import pInfo from "../assets/images/productInformation.png";
import buyNow from "../assets/images/buyNowButton.svg";
import readMore from "../assets/images/readMoreButton.svg";
export default function ProductInformation() {
  return (
    <main className="flex flex-row justify-center items-center gap-8">
      <div>
        <img src={pInfo} alt="Product image description"></img>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-base font-bold text-[#BDBDBD]">SUMMER 2020</h3>
        <h1 className="text-4xl font-bold text-[#252B42]">
          Part of the Neural Universe
        </h1>
        <p className="text-xl font-normal text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="flex flex-row gap-2.5">
          <button className="hover:scale-110 hover:drop-shadow-lg transition duration-300">
            <img src={buyNow} alt="Buy now"></img>
          </button>
          <button className="hover:scale-110 hover:drop-shadow-lg transition duration-300">
            <img src={readMore} alt="Read more"></img>
          </button>
        </div>
      </div>
    </main>
  );
}
