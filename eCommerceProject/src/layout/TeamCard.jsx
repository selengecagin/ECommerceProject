import React from "react";
import teamCardImg from "../assets/images/teamCardImg.jpg";
import SocialMediaContainer from "../components/SocialMediaContainer";

export default function TeamCard() {
  const teamData = [
    {
      img: teamCardImg,
      userName: "Username 1",
      profession: "Profession 1",
    },
    {
      img: teamCardImg,
      userName: "Username 2",
      profession: "Profession 2",
    },
    {
      img: teamCardImg,
      userName: "Username 3",
      profession: "Profession 3",
    },
  ];

  return (
    <div className="flex gap-8">
      {teamData.map((data, index) => (
        <div key={index}>
          <img src={data.img} alt={`Team member ${index + 1}`} />
          <div className="flex flex-col items-center gap-2.5 p-7">
            <h5 className="text-base font-bold text-darkTextColor">
              {data.userName}
            </h5>
            <p className="text-sm font-bold text-secondTextColor">
              {data.profession}
            </p>
            <div className="flex gap-5">
              <SocialMediaContainer />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
