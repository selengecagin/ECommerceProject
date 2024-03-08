import React, { useEffect } from "react";

import Client from "../components/Client";
import Pagination from "../components/Pagination";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

import squares from "../assets/images/squares.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/globalActions";
import { fetchProducts } from "../store/actions/productActions";

export default function ProductListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  return (
    <main>
      {/* TODO grid icon- pro feature - solution cannot be found */}
      <section className="flex flex-col md:flex-row flex-wrap gap-3.5 items-center px-[15%] py-6 justify-between">
        <div className=" flex ">
          <h2 className="text-center text-2xl font-bold text-[#252B42] bg-[#FAFAFA]">
            Shop
          </h2>
        </div>
        <div className="centered flex flex-row gap-4 ">
          <p className="text-center text-sm font-bold text-[#252B42]">Homes</p>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: "#c0c1c4" }} />
          <p className="text-center text-sm font-bold text-[#BDBDBD]">Shop</p>
        </div>
      </section>
      <CategoryCard />

      <section className="filter-row flex items-center justify-center self-stretch bg-[#FFF] ">
        <div className="flex flex-col py-6 gap-20 w-[1050px] ">
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 md:justify-between">
            <div className="flex px-px items-center text-[#737373]">
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
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>

            <div className="flex flex-row gap-4">
              <div className="popularityButton  flex w-[141px] h-[50px] items-center gap-1.5 py-4 pr-[18px] border border-gray-300 pl-[30px] rounded bg-gray-100">
                <p className="text-sm text-[#737373] font-normal text-center">
                  Popularity
                </p>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{ color: "#97999b" }}
                />
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
        <div className="flex flex-col py-12 items-center">
          <div className="flex flex-row flex-wrap gap-8 items-start justify-center">
            <ProductCard />
          </div>

          <Pagination />
        </div>
      </section>
      <Client />
    </main>
  );
}
