import React from "react";
import Header from "../components/Header";
import RightArrow from "../assets/images/rightArrowXs.png";
export default function ProductPage() {
  return (
    <main>
      <Header />

      <section className="flex flex-row flex-wrap py-6 items-center justify-center">
        <div className="flex flex-row gap-4 w-[1033px]">
          <p className="text-center text-sm font-bold text-[#252B42]">Home</p>
          <img src={RightArrow} alt="right-arrow-image"></img>
          <p className="text-center text-sm font-bold text-[#BDBDBD]">Shop</p>
        </div>
      </section>
    </main>
  );
}
