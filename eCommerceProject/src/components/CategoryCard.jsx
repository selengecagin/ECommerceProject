import React from "react";
import { Link } from "react-router-dom";
import plcard1 from "../assets/images/pl-card1.png";
import plcard2 from "../assets/images/pl-card2.jpg";
import plcard3 from "../assets/images/pl-card3.jpg";
import plcard4 from "../assets/images/pl-card4.jpg";
import plcard5 from "../assets/images/pl-card5.jpg";
export default function CategoryCard() {
  return (
    <section className="flex gap-2 flex-row pb-8 justify-center bg-[#FAFAFA]">
      <Link to={`/shopping/`} className="relative block">
        <img
          src={plcard1}
          alt="Cloths"
          className="cursor-pointer duration-200 transition opacity-100 hover:opacity-60 w-[205px] shrink-0"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-base font-bold text-white ">CLOTHS</p>
          <p className="text-base font-bold">5 Items</p>
        </div>
      </Link>

      <Link to={`/shopping/`} className="relative block">
        <img
          src={plcard2}
          className="cursor-pointer duration-200 transition opacity-100 hover:opacity-60 w-[205px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-base font-bold text-white ">CLOTHS</p>
          <p className="text-base font-bold">5 Items</p>
        </div>
      </Link>

      <Link to={`/shopping/`} className="relative block">
        <img
          src={plcard3}
          className="cursor-pointer duration-200 transition opacity-100 hover:opacity-60 w-[205px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-base font-bold text-white ">CLOTHS</p>
          <p className="text-base font-bold">5 Items</p>
        </div>
      </Link>

      <Link to={`/shopping/`} className="relative block">
        <img
          src={plcard4}
          className="cursor-pointer duration-200 transition opacity-100 hover:opacity-60 w-[205px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-base font-bold text-white ">CLOTHS</p>
          <p className="text-base font-bold">5 Items</p>
        </div>
      </Link>

      <Link to={`/shopping/`} className="relative block">
        <img
          src={plcard5}
          className="cursor-pointer duration-200 transition opacity-100 hover:opacity-60 w-[205px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="text-base font-bold text-white ">CLOTHS</p>
          <p className="text-base font-bold">5 Items</p>
        </div>
      </Link>
    </section>
  );
}
