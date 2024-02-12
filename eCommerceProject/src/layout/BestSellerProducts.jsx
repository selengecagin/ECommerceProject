import React from "react";
import ProductCard from "../components/ProductCard";
import img1 from "../assets/images/bestSellerProducts1.png";
import img2 from "../assets/images/bestSellerProducts2.png";
import img3 from "../assets/images/bestSellerProducts3.png";
import img4 from "../assets/images/bestSellerProducts4.png";
import img5 from "../assets/images/bestSellerProducts5.png";
import img6 from "../assets/images/bestSellerProducts6.png";
import img7 from "../assets/images/bestSellerProducts7.png";
import img8 from "../assets/images/bestSellerProducts8.png";

export default function BestSellerProducts() {
  return (
    <main className="flex justify-center items-center px-48 ">
      <div className="flex flex-col py-20 gap-20 ">
        <div className="textArea flex flex-col gap-2.5">
          <p className="text-xl font-normal leading-7 text-center text-[#737373]">
            Featured Products
          </p>
          <h2 className="text-2xl font-bold leading-8 text-center text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>
          <h6 className="text-sm font-normal leading-5 text-center text-[#737373]">
            Problems trying to resolve the conflict between
          </h6>
        </div>

        <div className="productCard flex flex-row flex-wrap gap-x-8 gap-y-20 justify-center  pt-14">
          <div>
            <img src={img1}></img>
            <ProductCard />
          </div>

          <div>
            <img src={img2}></img>
            <ProductCard />
          </div>

          <div>
            <img src={img3}></img>
            <ProductCard />
          </div>

          <div>
            <img src={img4}></img>
            <ProductCard />
          </div>

          <div>
            <img src={img5}></img>
            <ProductCard />
          </div>
          <div>
            <img src={img6}></img>
            <ProductCard />
          </div>
          <div>
            <img src={img7}></img>
            <ProductCard />
          </div>
          <div>
            <img src={img8}></img>
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
}
