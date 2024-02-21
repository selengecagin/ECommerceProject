import React from "react";
import ContentCard from "../components/ContentCard";

export default function FeaturedPosts() {
  return (
    <main className="flex flex-col items-center py-28 w-full gap-20 ">
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
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </section>
    </main>
  );
}
