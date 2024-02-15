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

        <div className="productCard flex flex-col flex-wrap gap-y-20 justify-center  pt-14">
          <div className="flex gap-8">
            <div>
              <img src={img1} alt="Description of image 1"></img>
              <ProductCard />
            </div>

            <div>
              <img src={img2} alt="Description of image 2"></img>
              <ProductCard />
            </div>

            <div>
              <img src={img3} alt="Description of image 3"></img>
              <ProductCard />
            </div>

            <div>
              <img src={img4} alt="Description of image 4"></img>
              <ProductCard />
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <img src={img5} alt="Description of image 5"></img>
              <ProductCard />
            </div>
            <div>
              <img src={img6} alt="Description of image 6"></img>
              <ProductCard />
            </div>
            <div>
              <img src={img7} alt="Description of image 7"></img>
              <ProductCard />
            </div>
            <div>
              <img src={img8} alt="Description of image 8"></img>
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  // const productImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  /* {productImages.map((img, index) => {
            return (
              <div key={index}>
                <img src={img} alt={`Product ${index + 1}`} />
                <ProductCard />
              </div>
            );
          })} */
}
