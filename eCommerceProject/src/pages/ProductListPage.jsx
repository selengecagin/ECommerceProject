import React from "react";

import Client from "../components/Client";
import Pagination from "../components/Pagination";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import squares from "../assets/images/squares.png";
import list from "../assets/images/list.png";
import downArrow from "../assets/images/down-arrow.svg";
import FilterMenu from "../components/FilterMenu";

export default function ProductListPage() {
  return (
    <main>
      <FilterMenu />
      <CategoryCard />

      <section className="filter-row flex items-center justify-center self-stretch bg-[#FFF] ">
        <div className="flex flex-col py-6 items-center gap-20 w-[1050px] ">
          <div className="row flex w-[1049px] justify-between items-center ">
            <div className="flex px-px items-center gap-4 text-[#737373]">
              <h2 className="text-sm font-bold text-[#737373] ">
                Showing all 12 results
              </h2>
            </div>

            <div className="flex px-px items-center gap-3.5">
              <p className="text-sm font-bold text-[#737373]">Views:</p>

              <button className="flex p-4 items-center border-2 border-solid border-[#ECECEC] rounded ">
                <img src={squares} alt="Squares" />
              </button>

              <button className="flex p-4 items-center border-2 border-solid border-[#ECECEC] rounded">
                <img src={list} alt="List" />
              </button>
            </div>

            <div className="flex flex-row gap-4">
              <div className="popularityButton  flex w-[141px] h-[50px] items-center gap-1.5 py-4 pr-[18px] border border-gray-300 pl-[30px] rounded bg-gray-100">
                <p className="text-sm text-[#737373] font-normal text-center">
                  Popularity
                </p>
                <img src={downArrow} alt="Down Arrow" />
              </div>

              <div className="filterButton flex w-[94px] flex-col items-center justify-center gap-2.5 px-5 rounded bg-[#23A6F0] ">
                <p className="text-sm font-bold text-[#FFFFFF] text-center ">
                  Filter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center items-center px-40 bg-[#fff]">
        <div className="flex flex-col py-12 gap-12 items-center">
          <div className="img-container-1 flex flex-wrap gap-8 items-start">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="img-container-2 flex flex-wrap gap-8 items-start sm:hidden">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="img-container-3 flex flex-wrap gap-8 items-start sm:hidden">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Pagination />
        </div>
      </section>
      <Client />
    </main>
  );
}
