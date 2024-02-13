import React from "react";
import { Form, Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import RightArrow from "../assets/images/rightArrowXs.png";
import plcard1 from "../assets/images/pl-card1.png";
import plcard2 from "../assets/images/pl-card2.jpg";
import plcard3 from "../assets/images/pl-card3.jpg";
import plcard4 from "../assets/images/pl-card4.jpg";
import plcard5 from "../assets/images/pl-card5.jpg";
import squares from "../assets/images/squares.png";
import list from "../assets/images/list.png";
import downArrow from "../assets/images/down-arrow.svg";
import ProductCard from "../components/ProductCard";

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

import hooli from "../assets/images/hooli.png";
import lyft from "../assets/images/lyft.png";
import vector from "../assets/images/vector.png";
import stripe from "../assets/images/stripe.png";
import aws from "../assets/images/aws.png";
import reddit from "../assets/images/reddit.png";

export default function ProductListPage() {
  return (
    <main className="flex flex-col px-48 ">
      <Header />

      <section className="flex flex-row flex-wrap gap-3.5 items-center py-6 justify-between">
        <div className=" flex ">
          <h2 className="text-center text-2xl font-bold text-[#252B42] bg-[#FAFAFA]">
            Shop
          </h2>
        </div>
        <div className="centered flex flex-row gap-4 ">
          <p className="text-center text-sm font-bold text-[#252B42]">Home</p>
          <img src={RightArrow} alt="right-arrow-image"></img>
          <p className="text-center text-sm font-bold text-[#BDBDBD]">Shop</p>
        </div>
      </section>

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

          <div className="paginationButton flex w-[313px] h-[74px] justify-center items-center ">
            {/* eğer first butonu disabled ise şu anki görünümünü almalı*/}
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] text-[#BDBDBD] border border-solid border-[#BDBDBD] bg-[#F3F3F3] text-center p-8 justify-center items-center rounded-s-lg hover:bg-[#23A6F0] hover:text-[#FFFFFF]"
              type="button"
            >
              <span className="absolute text-sm  text-center font-bold transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                First
              </span>
            </button>

            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] text-[#23A6F0] text-sm font-bold px-5 py-8 text-center justify-center items-center border border-solid border-[#BDBDBD] bg-[#FFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                1
              </span>
            </button>
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] text-[#23A6F0] text-sm font-bold px-5 py-8 text-center justify-center items-center border border-solid border-[#BDBDBD] bg-[#FFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                2
              </span>
            </button>
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] text-[#23A6F0] text-sm font-bold px-5 py-8 text-center justify-center items-center border border-solid border-[#BDBDBD] bg-[#FFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                3
              </span>
            </button>

            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] text-[#23A6F0] text-center align-middle border border-solid border-[#BDBDBD] rounded-r-lg p-8 hover:bg-[#23A6F0] hover:text-[#FFFFFF]"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                Next
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] flex pt-[72px] pb-32 items-center justify-evenly flex-col xl:flex-row gap-[43px] xl:gap-0">
        <div>
          <img
            src={hooli}
            alt="svg5"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={lyft}
            alt="svg6"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={vector}
            alt="svg7"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={stripe}
            alt="svg8"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={aws}
            alt="svg9"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
        <div>
          <img
            src={reddit}
            alt="svg10"
            className="cursor-pointer hover:drop-shadow-xl hover:scale-105"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
