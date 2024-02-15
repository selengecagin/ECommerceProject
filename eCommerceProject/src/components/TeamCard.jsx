import React from "react";
import teamCard1 from "../assets/images/teamCard1.jpg";
import teamCard2 from "../assets/images/teamCard2.jpg";
import teamCard3 from "../assets/images/teamCard3.jpg";
import SocialMediaContainer from "./SocialMediaContainer";

export default function TeamCard() {
  return (
    <div className="flex">
      <div>
        <img src={teamCard1}></img>
        <div className="flex flex-col items-center gap-2.5 p-7">
          <h5 className="text-base font-bold text-darkTextColor">Username</h5>
          <p className="text-sm font-bold text-secondTextColor">Profession</p>
          <div className="flex gap-5">
            <SocialMediaContainer />
          </div>
        </div>
      </div>

      <div>
        <img src={teamCard2}></img>
        <div className=" flex flex-col items-center gap-2.5 p-7">
          <h5 className="text-base font-bold text-darkTextColor">Username</h5>
          <p className="text-sm font-bold text-secondTextColor">Profession</p>
          <div className="flex gap-5">
            <SocialMediaContainer />
          </div>
        </div>
      </div>

      <div>
        <img src={teamCard3}></img>
        <div className=" flex flex-col items-center gap-2.5 p-7">
          <h5 className="text-base font-bold text-darkTextColor">Username</h5>
          <p className="text-sm font-bold text-secondTextColor">Profession</p>

          <div className="flex gap-5">
            <SocialMediaContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
