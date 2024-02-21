import React from "react";
import productColors from "../assets/images/product-colors.png";
import productImg from "../assets/images/productImg.png";
export default function ProductCard() {
  return (
    <section className="flex flex-col items-start w-[240px]">
      <div>
        <img src={productImg} alt="product image" />
      </div>

      <div className="flex flex-wrap py-6 pb-9 items-center justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-2.5">
          <h2 className="text-base font-bold leading-3 text-darkTextColor text-center">
            Graphic Design
          </h2>
          <p className="text-sm font-bold text-secondTextColor text-center">
            English Department
          </p>
          <div className="flex flex-row text-base font-bold justify-around gap-2">
            <p className="text-mutedColor text-sm">$16.48</p>
            <p className="text-secondaryColor text-sm">$6.48</p>
          </div>
          <img src={productColors} alt="product-colors-ellipses"></img>
        </div>
      </div>
    </section>
  );
}
