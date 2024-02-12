import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditorPick from "../layout/EditorPick";
import BestSellerProducts from "../layout/BestSellerProducts";
import ProductInformation from "../layout/ProductInformation";
import FeaturedPosts from "../layout/FeaturedPosts";
import Carousel1 from "../layout/Carousel1";
import Carousel2 from "../layout/Carousel2";
export default function HomePage() {
  return (
    <main /*className=" font-montserrat"*/>
      {/* <Header />

      <EditorPick />
      <BestSellerProducts />
      <ProductInformation />
      <FeaturedPosts />
      <Footer />
      */}
      <Carousel1 />
      <br />
      <br />
      <br />
      <Carousel2 />
    </main>
  );
}
