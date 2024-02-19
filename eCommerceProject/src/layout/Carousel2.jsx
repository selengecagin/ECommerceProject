import { Carousel, Typography } from "@material-tailwind/react";
import React from "react";
import carouselImg2 from "../assets/images/carouselImg2.png";

export default function Carousel1() {
  return (
    <main>
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <section className=" relative  bg-[#23856D]">
          <div className="absolute left-[600px] right-[646px] top-[50px] flex flex-col items-start py-28 gap-20">
            <div className="flex items-center gap-7.5">
              <div className=" flex flex-col  gap-9 flex-start">
                <p className="text-base font-bold text-white ">SUMMER 2020</p>
                <h1 className="text-[58px] font-bold text-white ">
                  Vita Classic Product
                </h1>
                <p className="text-xl font-normal text-white w-[315px]">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </p>
                <div className=" flex flex-row justify-start items-center gap-8 flex-start">
                  <p className="text-2xl text-center text-white font-bold">
                    $16.48
                  </p>

                  <button className="py-4 px-10 items-center gap-2.5 bg-primaryColor text-white font-bold text-sm rounded hover:scale-110 transition duration-200">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center bg-cover bg-no-repeat pr-[600px] pt-[121px]">
            <img src={carouselImg2} />
          </div>
        </section>

        <section className=" relative  bg-[#23856D]">
          <div className="absolute left-[600px] right-[646px] top-[50px] flex flex-col items-start py-28 gap-20">
            <div className="flex items-center gap-7.5">
              <div className=" flex flex-col  gap-9 flex-start">
                <p className="text-base font-bold text-white ">SUMMER 2020</p>
                <h1 className="text-[58px] font-bold text-white ">
                  Vita Classic Product
                </h1>
                <p className="text-xl font-normal text-white w-[315px]">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </p>
                <div className=" flex flex-row justify-start items-center gap-8 flex-start">
                  <p className="text-2xl text-center text-white font-bold">
                    $16.48
                  </p>

                  <button className="py-4 px-10 items-center gap-2.5 bg-primaryColor text-white font-bold text-sm rounded hover:scale-110 transition duration-200">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center bg-cover bg-no-repeat pr-[600px] pt-[121px]">
            <img src={carouselImg2} />
          </div>
        </section>
      </Carousel>
    </main>
  );
}

//  <section className="border border-solid bg-[#23856D] w-full h-[709px]">
//    <div className="flex flex-col items-start gap-20 shrink-0 py-28 ">
//      <div clasName="flex items-start gap-8 shrink-0">
//        <div className="flex flex-col items-start gap-8 pt-15 w-[509px] ">
//          <p>SUMMER 2020</p>
//          <h2>Vita Classic Product</h2>
//          <p>
//            We know how large objects will act, We know how are objects will
//            act, We know
//          </p>
//          <div>
//            <p>$16.48</p>
//            <div className="bg-[#2DC071] cursor-pointer flex justify-center gap-2 py-4 px-10 rounded-md hover:scale-110 transition duration-200">
//              <Link
//                to="/product-list-page"
//                className="flex text-white text-sm font-bold items-center"
//                target="_blank"
//                rel="noopener noreferrer"
//              >
//                BUY NOW
//              </Link>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div>
//        <img src={carouselImg2} />
//      </div>
//    </div>
//  </section>;
