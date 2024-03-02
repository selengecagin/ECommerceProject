import { Carousel, Typography } from "@material-tailwind/react";
import React from "react";
import carouselImg2 from "../assets/images/carouselImg2.png";

//TODO fix writing and picture oriantation
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
        <section className="flex flex-col items-center lg:items-end lg:flex-row lg:justify-between pt-[121px] bg-[#23856D]">
          <div className="flex flex-col items-center justify-center py-8 lg:py-28 gap-20 basis-1/2">
            <div className="flex flex-col gap-9 items-center lg:items-start">
              <p className="text-base font-bold text-white text-center lg:text-start ">
                SUMMER 2020
              </p>
              <h1 className="text-[58px] w-[509px] font-bold text-white text-center lg:text-start">
                Vita Classic Product
              </h1>
              <p className="text-xl font-normal text-white w-[315px] text-center lg:text-start ">
                We know how large objects will act, We know how are objects will
                act, We know
              </p>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <p className="text-2xl text-center text-white font-bold">
                  $16.48
                </p>

                <button className="py-4 px-10 items-center gap-2.5 bg-[#2DC071] text-white font-bold text-sm rounded hover:scale-110 transition duration-200">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="basis-1/2 bg-cover bg-no-repeat">
            <img src={carouselImg2} />
          </div>
        </section>

        <section className="flex flex-col items-center lg:items-end lg:flex-row lg:justify-between pt-[121px] bg-[#23856D]">
          <div className="flex flex-col items-center justify-center py-8 lg:py-28 gap-20 basis-1/2">
            <div className="flex flex-col gap-9 items-center lg:items-start">
              <p className="text-base font-bold text-white text-center lg:text-start ">
                SUMMER 2020
              </p>
              <h1 className="text-[58px] w-[509px] font-bold text-white text-center lg:text-start">
                Vita Classic Product
              </h1>
              <p className="text-xl font-normal text-white w-[315px] text-center lg:text-start ">
                We know how large objects will act, We know how are objects will
                act, We know
              </p>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <p className="text-2xl text-center text-white font-bold">
                  $16.48
                </p>

                <button className="py-4 px-10 items-center gap-2.5 bg-[#2DC071] text-white font-bold text-sm rounded hover:scale-110 transition duration-200">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="basis-1/2 bg-cover bg-no-repeat">
            <img src={carouselImg2} />
          </div>
        </section>
      </Carousel>
    </main>
  );
}
