import { Carousel, Typography } from "@material-tailwind/react";
import React from "react";
import carosel3 from "../assets/images/carosel3.jpg";
export default function Carousel3() {
  return (
    <main>
      <Carousel
        className="w-[506px] h-[450px]"
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
        <div className="shrink-0 ">
          <img
            src={carosel3}
            alt="image 1"
            className=" transition-transform duration-300 ease-in-out transform sm:hover:scale-110"
          />
        </div>

        <div className="img2 ">
          <img src={carosel3} alt="image 2" className="" />
        </div>

        <div className="img3  ">
          <img src={carosel3} alt="image 3" className=" " />
        </div>
      </Carousel>
    </main>
  );
}
