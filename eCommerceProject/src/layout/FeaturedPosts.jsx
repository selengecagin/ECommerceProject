import React from "react";
import ContentCard from "../components/ContentCard";
import FP1 from "../assets/images/featuredPosts1.png";
import FP2 from "../assets/images/featuredPosts2.png";
import FP3 from "../assets/images/featuredPosts3.png";
export default function FeaturedPosts() {
  return (
    <main className="flex flex-col items-center py-28 w-full gap-20">
      <section className="flex flex-col gap-2.5 items-center flex-wrap">
        <h6 className="text-sm font-bold text-center text-primaryColor">
          Practice Advice
        </h6>
        <h3 className="text-[40px] font-bold text-darkTextColor text-center">
          Featured Posts
        </h3>
        <p className="text-sm font-normal text-secondTextColor text-center ">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </section>

      <section className="flex flex-row gap-8 flex-wrap">
        <div>
          <img src={FP1} alt="Featured Posts Image 1" />
          <ContentCard />
        </div>

        <div>
          <img src={FP2} alt="Featured Posts Image 2" />
          <ContentCard />
        </div>
        <div>
          <img src={FP3} alt="Featured Posts Image 3" />
          <ContentCard />
        </div>
      </section>
    </main>
  );
}
