import React from "react";
import teamCard1 from "../assets/images/teamCard1.jpg";
import teamCard2 from "../assets/images/teamCard2.jpg";
import teamCard3 from "../assets/images/teamCard3.jpg";
import SocialMediaContainer from "./SocialMediaContainer";

export default function TeamCard() {
  return (
    <main className="flex w-full max-w-[1440px] px-48 items-center justify-center bg-lightTextColor">
      <section className="flex flex-col py-28 gap-28 shrink-0">
        <div className="flex flex-col items-center justify-center gap-2.5 width-[607px]">
          <h2 className="text-4xl font-bold text-darkTextColor ">
            Meet Our Team
          </h2>
          <p className="text-sm font-normal text-secondTextColor text-center">
            Problems trying to resolve the conflict between
            <br /> the two major realms of Classical physics: Newtonian
            mechanics
          </p>
        </div>

        <div className="flex">
          <div>
            <img src={teamCard1}></img>
            <div>
              <h5>Username</h5>
              <p>Profession</p>
              <SocialMediaContainer/>
            </div>
          </div>

          <div>
            <img src={teamCard2}></img>
            <div>
              <h5></h5>
              <p></p>
              <div>icons</div>
            </div>
          </div>

          <div>
            <img src={teamCard3}></img>
            <div>
              <h5></h5>
              <p></p>
              <div>icons</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
