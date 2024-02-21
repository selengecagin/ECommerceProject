import React from "react";
import EditorPick from "../layout/EditorPick";
import BestSellerProducts from "../layout/BestSellerProducts";
import ProductInformation from "../layout/ProductInformation";
import FeaturedPosts from "../layout/FeaturedPosts";
import Carousel1 from "../layout/Carousel1";
import Carousel2 from "../layout/Carousel2";
export default function HomePage() {
  return (
    <main /*className=" font-montserrat"*/>
      <Carousel1 />
      <EditorPick />
      <BestSellerProducts />
      <Carousel2 />
      <ProductInformation />
      <FeaturedPosts />
    </main>
  );
}
