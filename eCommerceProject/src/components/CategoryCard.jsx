import React from "react";
import { Link } from "react-router-dom";
import categoryCardImg from "../assets/images/categoryCardImg.png";
export default function CategoryCard() {
  const categoryData = [
    { img: categoryCardImg, catName: "CLOTHS", itemNum: "5 items" },
    { img: categoryCardImg, catName: "CLOTHS", itemNum: "5 items" },
    { img: categoryCardImg, catName: "CLOTHS", itemNum: "5 items" },
    { img: categoryCardImg, catName: "CLOTHS", itemNum: "5 items" },
    { img: categoryCardImg, catName: "CLOTHS", itemNum: "5 items" },
  ];

  return (
    <section className="flex lg:flex-row sm:flex-col flex-wrap gap-2 pb-8 justify-center bg-[#FAFAFA]">
      {categoryData.map((data, index) => {
        return (
          <Link
            to={`/pages`}
            className=" flex relative "
            key={index}
          >
            <img
              src={data.img}
              alt="Category Image"
              className="cursor-pointer duration-200 transition opacity-100 hover:opacity-60 w-[205px] shrink-0"
            />
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <p className="text-base font-bold text-white ">{data.catName}</p>
              <p className="text-base font-bold">{data.itemNum}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
