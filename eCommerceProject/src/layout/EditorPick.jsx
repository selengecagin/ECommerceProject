import React from "react";
import { Link } from "react-router-dom";
import editorsPick1 from "../assets/images/editorsPick1.png";
import editorsPick2 from "../assets/images/editorsPick2.png";
import editorsPick3 from "../assets/images/editorsPick3.png";
import editorsPick4 from "../assets/images/editorsPick4.png";


export default function EditorPick() {
  return (
    <main className="flex flex-col  py-20 gap-12 bg-[#FAFAFA] items-center justify-center ">
      <section className="flex flex-col items-center gap-2.5 ">
        <h2 className="text-2xl font-bold text-darkTextColor">EDITOR’S PICK</h2>
        <p className="text-sm font-normal text-secondTextColor">
          Problems trying to resolve the conflict between
        </p>
      </section>

      <section className="flex gap-8 justify-center">
        <div className="relative">
          <img
            src={editorsPick1}
            alt="Editors pick for mens"
            className="w-full"
          />
          <div className="absolute bottom-0 transform -translate-x-1/2  w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
            <div className="text-center">
              <Link to="/men" className="text-darkTextColor font-bold ">
                MEN
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={editorsPick2} alt="Editors pick for women" />
          <div className="absolute flex items-center justify-center bg-white w-[136px]">
            <div className="text-center">
              <Link
                to="/women"
                className="text-darkTextColor font-bold text-base"
              >
                WOMEN
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={editorsPick3}
              alt="Editors pick for accessories"
              className="w-full"
            />
            <div className=" absolute w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <Link
                  to="/accessories"
                  className="text-darkTextColor font-bold "
                >
                  ACCESSORIES
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={editorsPick4}
              alt="Editors pick for kids"
              className="w-full"
            />
            <div className=" absolute  w-[170px] h-12 inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <Link to="/kids" className="text-darkTextColor font-bold ">
                  KIDS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
