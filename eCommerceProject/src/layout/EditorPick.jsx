import React from "react";
import { Link } from "react-router-dom";
import editorsPick1 from "../assets/images/editorsPick1.png";
import editorsPick2 from "../assets/images/editorsPick2.png";
import editorsPick3 from "../assets/images/editorsPick3.png";
import editorsPick4 from "../assets/images/editorsPick4.png";

export default function EditorPick() {
  return (
    <main className="flex flex-col items-center justify-center py-20 gap-12 bg-[#FAFAFA]">
      <section className="flex flex-col items-center gap-2.5 ">
        <h2 className="text-2xl font-bold text-darkTextColor">EDITOR’S PICK</h2>
        <p className="text-sm font-normal text-secondTextColor">
          Problems trying to resolve the conflict between
        </p>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 justify-center ">
        <div className="relative w-[320px] lg:w-[510px]">
          <img
            src={editorsPick1}
            alt="Editors pick for mens"
            className="w-full"
          />
          <div className="flex absolute top-[426px] left-[30px] bottom-[26px] right-[340px] w-[170px] h-12 items-center justify-center bg-white hover:scale-110 transition duration-200">
            <div className="text-center">
              <Link
                to="/men"
                className="text-darkTextColor font-bold "
                target="_blank"
                rel="noopener noreferrer"
              >
                MEN
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={editorsPick2} alt="Editors pick for women" />
          <div className="flex absolute top-[434px] left-[20px] bottom-[18px] right-[83px] items-center justify-center bg-white w-[136px] hover:scale-110 transition duration-200">
            <div className="text-center">
              <Link
                to="/women"
                className="text-darkTextColor font-bold text-base"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="flex absolute top-[171px] left-[13px] bottom-[23px] right-[56px]  w-[170px] h-12 items-center justify-center bg-white hover:scale-110 transition duration-200">
              <div className="text-center">
                <Link
                  to="/accessories"
                  className="text-darkTextColor font-bold "
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div className="flex absolute top-[176px] left-[17px] bottom-[18px] right-[102px] w-[120px] h-12  items-center justify-center bg-white hover:scale-110 transition duration-200">
              <div className="text-center">
                <Link
                  to="/kids"
                  className="text-darkTextColor font-bold "
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
