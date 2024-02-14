import React from "react";
import pInfo from "../assets/images/productInformation.png";
import buyNow from "../assets/images/buyNowButton.svg";
import readMore from "../assets/images/readMoreButton.svg";

export default function ProductInformation() {
  return (
    <main className="flex flex-row justify-center items-center gap-8 px-48">
      <section className="flex justify-center">
        <img
          src={pInfo}
          alt="Product image description"
          className="flex-shrink-0"
        />
      </section>

      <section className="flex flex-col gap-8">
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
          <button
            className="hover:scale-110 hover:drop-shadow-lg transition duration-300"
            aria-label="Buy now"
          >
            <img src={buyNow} alt="Click here to buy" />
          </button>
          <button
            className="hover:scale-110 hover:drop-shadow-lg transition duration-300"
            aria-label="Read more"
          >
            <img src={readMore} alt="Read more" />
          </button>
        </div>
      </section>
    </main>
  );
}
