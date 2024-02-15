import React from 'react'
import playIcon from "../assets/images/playIcon.png";
import videoImage from "../assets/images/videoImage.png";
export default function VideoCard() {
  return (
    <section className="relative flex justify-center py-28">
      <img
        src={videoImage}
        alt="img2"
        className="rounded-3xl w-[307px] xl:w-auto h-[307px] xl:h-auto"
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2">
        <img
          src={playIcon}
          alt="svg2"
          className="cursor-pointer pt-8 hover:scale-110 transition duration-150 w-[80px] xl:w-full h-[80px] xl:h-full"
        />
      </div>
    </section>
  );
}
