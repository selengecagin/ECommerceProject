import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../layout/Carousel";
import EditorPick from "../layout/EditorPick";
import BestSellerProducts from "../layout/BestSellerProducts";
import ProductInformation from "../layout/ProductInformation";
import ContentCard from "../components/ContentCard";
export default function HomePage() {
  return (
    <main /*className=" font-montserrat"*/>
      {/* <Header />
      <Carousel />
      <EditorPick />
      <BestSellerProducts />
      <ProductInformation />
      <Footer /> */}
      <ContentCard/>
    </main>
  );
}
