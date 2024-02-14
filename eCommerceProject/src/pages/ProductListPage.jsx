import React from "react";

import Client from "../components/Client";
import Pagination from "../components/Pagination";
import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import squares from "../assets/images/squares.png";
import list from "../assets/images/list.png";
import downArrow from "../assets/images/down-arrow.svg";
import plist1 from "../assets/images/product-list-1.png";
import plist2 from "../assets/images/product-list-2.png";
import plist3 from "../assets/images/product-list-3.png";
import plist4 from "../assets/images/product-list-4.png";
import plist5 from "../assets/images/product-list-5.png";
import plist6 from "../assets/images/product-list-6.png";
import plist7 from "../assets/images/product-list-7.png";
import plist8 from "../assets/images/product-list-8.png";
import plist9 from "../assets/images/product-list-9.png";
import plist10 from "../assets/images/product-list-10.png";
import plist11 from "../assets/images/product-list-11.png";
import plist12 from "../assets/images/product-list-12.png";
import FilterMenu from "../components/FilterMenu";

export default function ProductListPage() {
  return (
    <main className="flex flex-col px-48 ">
      <Header />
      <FilterMenu />
      <CategoryCard />
      <section className="filter-row flex items-center justify-center self-stretch bg-[#FFF] ">
        <div className="container flex flex-col py-6 items-center gap-20 w-[1050px] ">
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
              <div className="flex w-[141px] h-[50px] items-center gap-1.5 py-4 pr-[18px] border border-gray-300 pl-[30px] rounded bg-gray-100">
                <p className="text-sm text-[#737373] font-normal text-center">
                  Popularity
                </p>
                <img src={downArrow} alt="Down Arrow" />
              </div>

              <div className="flex w-[94px] flex-col items-center justify-center gap-2.5 px-5 rounded bg-[#23A6F0] ">
                <p className="text-sm font-bold text-[#FFFFFF] text-center ">
                  Filter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-40 bg-[#fff]">
        <div className="flex flex-col py-12 gap-12 items-center">
          <div className="img-container-1 flex gap-8 items-start">
            <div>
              <img src={plist1}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist2}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist3}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist4}></img>
              <ProductCard />
            </div>
          </div>
          <div className="img-container-2 flex gap-8 items-start">
            <div>
              <img src={plist5}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist6}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist7}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist8}></img>
              <ProductCard />
            </div>
          </div>
          <div className="img-container-3 flex gap-8 items-start">
            <div>
              <img src={plist9}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist10}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist11}></img>
              <ProductCard />
            </div>
            <div>
              <img src={plist12}></img>
              <ProductCard />
            </div>
          </div>
          <Pagination />
        </div>
      </section>
      <Client />
      <Footer />
    </main>
  );
}
