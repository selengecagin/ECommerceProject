import React from "react";
import ProductCard from "../components/ProductCard";

export default function BestSellerProducts() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col py-20 gap-20 ">
        <div className="flex flex-col gap-2.5">
          <p className="text-xl font-normal leading-7 text-center text-secondTextColor">
            Featured Products
          </p>
          <h2 className="text-2xl font-bold leading-8 text-center text-darkTextColor">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-sm font-normal leading-5 text-center text-secondTextColor">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="productCard flex flex-col flex-wrap gap-y-20 justify-center">
          <div className="flex gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}
