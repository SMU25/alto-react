import React from "react";

import { Title, LinkItem } from "components";

export const Banner = () => {
  return (
    <section className="bg-[url('assets/banner-bg.jpg')] bg-no-repeat bg-cover bg-center pt-[200px] px-[20px] pb-[398px] ">
      <div className="max-w-[774px] mx-auto text-[#0B4A72] text-center">
        <Title>The neighborhood pharmacy that comes to you.</Title>
        <p className="max-w-[342px] mt-[27px] mb-[45px] mx-auto text-black leading-6 tracking-[0.75px]">
          We're your #1 rated pharmacy with free same-day delivery and
          extraordinary care.
        </p>
        <LinkItem
          href="#"
          className="bg-[#E6F2B4] pr-[73px] pl-[30px] leading-6"
        >
          Transfer in seconds
        </LinkItem>
      </div>
    </section>
  );
};
