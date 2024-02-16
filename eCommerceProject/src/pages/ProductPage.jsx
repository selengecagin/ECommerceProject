import React from "react";
import Header from "../components/Header";
import RightArrow from "../assets/images/rightArrowXs.png";
import star from "../assets/images/star.svg";

import blackEllipse from "../assets/images/blackEllipse.svg";
import orangeEllipse from "../assets/images/orangeEllipse.svg";
import greenEllipse from "../assets/images/greenEllipse.svg";
import blueEllipse from "../assets/images/blueEllipse.svg";
import pImg from "../assets/images/productPageProductImg.png";

import pDescp from "../assets/images/productPageDescription.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import Client from "../components/Client";
import Footer from "../components/Footer";

export default function ProductPage() {
  return (
    <main>
      <Header />
      <section className="navBar flex flex-row flex-wrap py-6 items-center justify-center">
        <div className="flex flex-row gap-4 w-[1033px]">
          <p className="text-center text-sm font-bold text-[#252B42]">Home</p>
          <img src={RightArrow} alt="right-arrow-image"></img>
          <p className="text-center text-sm font-bold text-[#BDBDBD]">Shop</p>
        </div>
      </section>

      <section className="productCards flex px-48 justify-center items-center self-stretch bg-lightGray1">
        <div className="flex flex-col pb-12 items-start">
          <div className="flex items-start gap-8">
            <div className="flex"> Carosel</div>

            <div className=" flex flex-col max-w-[510px] h-[471px] gap-6">
              <h4 className="text-xl font-normal text-darkTextColor">
                Floating Phone
              </h4>

              <div className="inline-flex items-start gap-2.5">
                <div className="flex">
                  <img src={star}></img>
                  <img src={star}></img>
                  <img src={star}></img>
                  <img src={star}></img>
                  <img src={star}></img>
                </div>
                <p>10 Reviews</p>
              </div>

              <h5 className="text-2xl font-bold text-darkTextColor">
                $1,139.33
              </h5>

              <div className="inline-flex items-center gap-1">
                <p className="text-sm font-bold text-secondTextColor">
                  Availability :
                </p>
                <p className="text-sm font-bold text-primaryColor">In Stock </p>
              </div>

              <p className="text-sm font-normal text-secondTextColor">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>

              <hr className="bg-mutedColor h-[1px]" />

              <div className="inline-flex items-center gap-2.5">
                <img src={blueEllipse}></img>
                <img src={greenEllipse}></img>
                <img src={orangeEllipse}></img>
                <img src={blackEllipse}></img>
              </div>

              <div className="flex items-start gap-2.5 pt-8">
                <button className="py-4 px-7 items-center gap-2.5 bg-primaryColor text-white font-bold text-sm rounded">
                  Select Options
                </button>

                <button className="flex w-[40px] h-[40px] p-2.5 justify-center items-center rounded-[45px] border border-solid border-borderColor bg-white ">
                  <FontAwesomeIcon icon={faHeart} />
                </button>

                <button className="flex w-[40px] h-[40px] p-2.5 justify-center items-center rounded-[45px] border border-solid border-borderColor bg-white ">
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <button className="flex w-[40px] h-[40px] p-2.5 justify-center items-center rounded-[45px] border border-solid border-borderColor bg-white ">
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="productDescription flex flex-col justify-end items-center gap-4 self-stretch">
        <div className="flex flex-row items-center gap-1 pt-2 px-48 pb-1">
          <div className="flex p-6 justify-center items-center gap-2">
            <a href="#" className="text-sm font-semibold text-secondTextColor">
              Description
            </a>
          </div>
          <div className="inline-flex p-6 justify-center items-center gap-2">
            <a href="#" className="text-sm font-semibold text-secondTextColor">
              Additional Information
            </a>
          </div>
          <div className="inline-flex p-6 justify-center items-center gap-2">
            <a href="#" className="text-sm font-semibold text-secondTextColor">
              Reviews
            </a>
            <p className="text-sm font-semibold text-secondTextColor">(0)</p>
          </div>
        </div>

        <div className="flex flex-col py-6 px-12 gap-8">
          <div className="flex max-w-[1056px] items-start gap-8">
            <div className="flex flex-col items-start shrink-0 w-[332px] h-[392px]">
              <img src={pDescp} className="shrink-0 rounded" />
            </div>
            <div className="flex flex-col items-start w-[332px] pb-6 gap-8">
              <h5 className="text-2xl font-bold text-darkTextColor">
                the quick fox jumps over{" "}
              </h5>

              <p className="text-sm font-normal text-secondTextColor">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="flex flex-col w-[332px] items-start gap-5 shrink-0">
              <div className="flex flex-col items-start gap-5">
                <h5 className="text-2xl font-bold text-darkTextColor">
                  the quick fox jumps over
                </h5>
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-5">
                <h5 className="text-2xl font-bold text-darkTextColor">
                  the quick fox jumps over
                </h5>
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-5">
                    <img src={RightArrow}></img>
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bestSellerProducts flex px-48 items-center bg-lightGray1">
        <div className="flex flex-col max-w-[1124px] py-12 gap-6">
          <div className="flex flex-col items-start max-w[1040px] text-darkTextColor">
            <h3 className="text-2xl font-bold text-center ">
              BESTSELLER PRODUCTS
            </h3>
          </div>

          <div className="flex items-start gap-8">
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
          </div>
          <div className="flex items-start gap-8">
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
            <div>
              <img src={pImg}></img>
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <Client/>
      <Footer/>
    </main>
  );
}
