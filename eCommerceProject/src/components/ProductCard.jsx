import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


export default function ProductCard({ data }) {
  //  TODO images should be aligned and sized the same regarding their unique features
  //  TODO add other UI elements of the product card- rating, stock etc.
  //  TODO make color selection clickable and add cursor pointer

  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-12">
      <div className="w-[240px]">
        <div className="">
          <img src={data?.images?.[0]?.url} alt="product image" />
        </div>

        <div className="flex flex-wrap py-6 pb-9 items-center justify-center w-full">
          
          <div className="flex flex-col justify-center items-center gap-2.5">
            <h2 className="text-base font-bold leading-3 text-darkTextColor text-center">
              {data?.name}
            </h2>
            <p className="text-sm font-bold text-secondTextColor text-center h-[75px]">
              {data?.description}
            </p>
            <div className="flex flex-row text-base font-bold justify-around gap-2">
              <p className="text-mutedColor text-sm">{data?.price}</p>
              <p className="text-secondaryColor text-sm">{data?.stock}</p>
            </div>

            <div className="icons flex flex-row items-center justify-center gap-2">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#24a6f0" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#2cc071" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#e77b40" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#252b42" }}
                size="lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
