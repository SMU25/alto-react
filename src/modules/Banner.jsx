import React from "react";

import { Info } from "components";

export const Banner = () => {
  return (
    <section className="bg-[url('assets/banner-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[200px] px-[20px] pb-[398px] ">
      <Info
        title="The neighborhood pharmacy that comes to you."
        link="Transfer in seconds"
        classNameLink="bg-[#E6F2B4]"
      >
        <p className="max-w-[342px] mt-[27px] mb-[45px] mx-auto text-black leading-6 tracking-[0.75px]">
          We're your #1 rated pharmacy with free same-day delivery and
          extraordinary care.
        </p>
      </Info>
    </section>
  );
};
