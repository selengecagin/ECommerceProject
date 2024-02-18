import React from "react";
import ContentCard from "../components/ContentCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <main className="flex flex-col justify-center items-center w-full px-48 bg-white m-auto">
      <Header />
      <section className="flex flex-col items-center gap-20 py-36 ">
        <div className="flex justify-center items-center gap-8">
          <ContentCard />
          <ContentCard />
        </div>
        <div className="flex justify-center items-center gap-8">
          <ContentCard />
          <ContentCard />
        </div>
        <div className="flex justify-center items-center gap-8">
          <ContentCard />
          <ContentCard />
        </div>
      </section>
      <Footer />
    </main>
  );
}
