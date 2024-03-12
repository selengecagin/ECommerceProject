import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DropDownMenu() {
  const categoryData = useSelector((store) => store.global.categories);

  return (
    <div className="dropdown">
      <button className="dropbtn text-secondTextColor text-xl font-normal sm:text-sm sm:font-bold align-top">
        Shop
      </button>
      <div className="dropdown-content">
        {categoryData.map((item, index) => {
          return (
            <div key={index}>
              <Link
                to={`/shopping/${
                  item.gender === "k" ? "kadın" : "erkek"
                }/${item.title.toLowerCase()}`}
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              >
                {item.gender === "k" ? "Kadın" : "Erkek"} {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
