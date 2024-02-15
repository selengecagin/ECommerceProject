import React from 'react'

export default function Stats() {
  return (
    <>
      <section className="flex flex-col items-center shrink-0 py-6  ">
        <div className="flex justify-center items-center gap-14">
          <div className="flex flex-col items-start gap-6 w-[394px]">
            <p className="text-sm font-normal text-dangerTextColor">
              Problems trying
            </p>
            <h2 className="text-2xl font-bold text-darkTextColor">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </div>
          <p className="text-sm font-normal text-secondTextColor w-[545px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center bg-ightTextColor py-20 w-full">
        <div className="flex flex-row items-start gap-8 ">
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
      </section>
    </>
  );
}
