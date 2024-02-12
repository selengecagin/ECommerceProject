import React from "react";
import productColors from "../assets/images/product-colors.png";
export default function ProductCard() {
  return (
    <main className="flex flex-wrap py-6 pb-9 items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center gap-2.5">
        <h2 className="text-base font-bold leading-3 text-[#252B42] text-center">
          Graphic Design
        </h2>
        <p className="text-sm font-bold text-[#737373] text-center">English Department</p>
        <div className="flex flex-row text-base font-bold justify-around gap-2">
          <p className="text-[#BDBDBD] text-sm">$16.48</p>
          <p className="text-[#23856D] text-sm">$6.48</p>
        </div>
        <img
          src={productColors}
          alt="product-colors-ellipses"
          className=""
        ></img>
      </div>
    </main>
  );
}

// belki maine max-width vermek gerekebilir?