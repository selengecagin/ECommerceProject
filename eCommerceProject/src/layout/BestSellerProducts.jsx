import React from "react";
import ProductCard from "../components/ProductCard";

export default function BestSellerProducts() {
  return (
    <main className="flex justify-center items-center px-48">
      <div className="flex flex-col py-20 gap-20 ">
        
        <div className="textArea flex flex-col gap-2.5">
          <p className="text-xl font-normal leading-7 text-center text-[#737373]">
            Featured Products
          </p>
          <h2 className="text-2xl font-bold leading-8 text-center text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>
          <h6 className="text-sm font-normal leading-5 text-center text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </h6>
        </div>

        <div className="productCard flex flex-row"></div>
        <div className="productCard flex flex-row"></div>
      </div>
    </main>
  );
}
