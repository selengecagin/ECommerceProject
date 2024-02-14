import React from "react";
import RightArrow from "../assets/images/rightArrowXs.png";

export default function FilterMenu() {
  return (
    <section className="flex flex-row flex-wrap gap-3.5 items-center py-6 justify-between">
      <div className=" flex ">
        <h2 className="text-center text-2xl font-bold text-[#252B42] bg-[#FAFAFA]">
          Shop
        </h2>
      </div>
      <div className="centered flex flex-row gap-4 ">
        <p className="text-center text-sm font-bold text-[#252B42]">Home</p>
        <img src={RightArrow} alt="right-arrow-image"></img>
        <p className="text-center text-sm font-bold text-[#BDBDBD]">Shop</p>
      </div>
    </section>
  );
}
