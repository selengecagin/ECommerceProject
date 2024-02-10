import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../layout/Carousel";
import EditorPick from "../layout/EditorPick";
export default function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Footer /> */}
      <Carousel />
      <EditorPick/>
    </div>
  );
}
