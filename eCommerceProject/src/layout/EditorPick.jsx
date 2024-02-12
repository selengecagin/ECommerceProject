import React from "react";
import editorsPick1 from "../assets/images/editorsPick1.png";
import editorsPick2 from "../assets/images/editorsPick2.png";
import editorsPick3 from "../assets/images/editorsPick3.png";
import editorsPick4 from "../assets/images/editorsPick4.png";
import { Link } from "react-router-dom";

export default function EditorPick() {
  return (
    <main className="flex flex-col px-48 py-20 gap-12 bg-[#FAFAFA] items-center justify-center ">
      <div className="flex flex-col items-center gap-2.5 ">
        <h2 className="text-2xl font-bold text-[#252B42]">EDITOR’S PICK</h2>
        <p className="text-sm font-normal text-[#737373]">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex gap-8 justify-center">
        <div className="relative">
          <img
            src={editorsPick1}
            alt="editors-pick-image-1"
            className="w-full"
          />
          <div className="absolute w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <Link to="/men" className="text-[#252B42] font-bold ">
                MEN
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={editorsPick2} alt="editors-pick-img-2" />
          <div className="absolute flex items-center justify-center bg-white w-[136px]">
            <div className="text-center">
              <Link to="/women" className="text-[#252B42] font-bold text-base">
                WOMEN
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={editorsPick3}
              alt="editors-pick-img-"
              className="w-full"
            />
            <div className=" absolute w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <Link to="/accessories" className="text-[#252B42] font-bold ">
                  ACCESSORIES
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={editorsPick4} alt="Image 4" className="w-full" />
            <div className=" absolute  w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <Link to="/kids" className="text-[#252B42] font-bold ">
                  KIDS
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
