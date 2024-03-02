import React from "react";

export default function Stats() {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col flex-wrap lg:flex-row justify-around items-center gap-14 shrink-0 py-12 basis-1/2 md:pl-[7%]">
        <div className="flex flex-col gap-6 md:text-start text-center">
          <p className="text-sm font-normal text-dangerTextColor">
            Problems trying
          </p>
          <h2 className="text-2xl font-bold text-darkTextColor ">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do
            met sent.
          </h2>
        </div>

        <div className="basis-1/2 shrink-0 md:text-start text-center">
          <p className="text-sm font-normal text-secondTextColor w-[350px] md:w-[545px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center bg-lightTextColor py-20 ">
        <div className="flex flex-col flex-wrap items-center justify-center lg:justify-start md:flex-row md:items-start gap-8 lg:gap-8 ">
          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              15K
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Happy Customers
            </h5>
          </div>

          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              150K
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Monthly Visitors
            </h5>
          </div>

          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              15
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Countries Worldwide
            </h5>
          </div>

          <div className="flex flex-col w-[238px] items-center">
            <h2 className="text-5xl font-bold text-darkTextColor text-center">
              100+
            </h2>
            <h5 className="text-base font-bold text-secondTextColor text-center">
              Top Partners
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
