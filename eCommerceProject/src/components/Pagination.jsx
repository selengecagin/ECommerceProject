import React from "react";

export default function Pagination() {
  return (
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
  );
}
