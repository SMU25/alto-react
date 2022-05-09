import React from "react";

import { Info } from "components";

export const Banner = () => {
  return (
    <section className="bg-[url('assets/banner-bg.jpg')] bg-no-repeat bg-cover bg-center pt-24 pb-[12.5rem]  840:pt-[12.5rem] px-5 840:pb-[25rem] ">
      <Info
        title="The neighborhood pharmacy that comes to you."
        link="Transfer in seconds"
        linkClassName="bg-gray-white"
      >
        <p className="max-w-[21.375rem] mt-2.5 545:mt-7 mb-9 545:mb-11 mx-auto text-black leading-6 tracking-[0.75px]">
          We're your #1 rated pharmacy with free same-day delivery and
          extraordinary care.
        </p>
      </Info>
    </section>
  );
};
