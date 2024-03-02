import { Carousel, Typography } from "@material-tailwind/react";
import React from "react";
import slide1 from "../assets/images/slide1.jpg";
import { Link } from "react-router-dom";
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
        <div className="img1 h-[720px] relative md:h-full md:w-full shrink-0 overflow-hidden">
          <img
            src={slide1}
            alt="image 1"
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform sm:hover:scale-110"
          />

          <div className="absolute pr-16 md:-left-[40%] inset-0 grid place-items-center">
            <div className="w-1/7">
              <Typography
                variant="paragraph"
                color="white"
                className="mb-9 text-base text-center sm:text-start text-[#FFFFFF] font-bold"
              >
                SUMMER 2020
              </Typography>

              <Typography
                variant="h1"
                color="white"
                className="mb-9 text-center sm:text-start text-[#FFFFFF] font-bold text-[40px] lg:text-[55px] "
              >
                NEW COLLECTION
              </Typography>

              <Typography
                variant="paragraph"
                color="white"
                className="mb-9 text-xl text-center sm:text-start text-[#FFFFFF] font-normal"
              >
                We know how large objects will act, <br /> but things on a small
                scale.
              </Typography>

              <div className="cursor-pointer flex justify-center sm:justify-start gap-2 rounded-md hover:scale-110 transition duration-200 ">
                <button className=" text-white text-2xl font-bold bg-[#2DC071] w-[221px] h-[61px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="img2 relative h-full w-full">
          <img
            src={slide1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="img3 relative h-full w-full">
          <img
            src={slide1}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </main>
  );
}
