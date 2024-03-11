import React from "react";
import ProductCard from "../components/ProductCard";

export default function BestSellerProducts() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col py-20 gap-20 ">
        <div className="flex items-center flex-col gap-2.5">
          <p className="text-xl font-normal text-center text-secondTextColor">
            Featured Products
          </p>
          <h2 className="w-[150px] sm:w-full text-2xl font-bold text-center text-darkTextColor">
            BESTSELLER PRODUCTS
          </h2>
          <p className="w-[200px] sm:w-full text-sm font-normal text-center text-secondTextColor">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="productCard flex flex-col flex-wrap gap-y-20 justify-center  items-center lg:flex-row  gap-8">
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
