import React from "react";

export const LayoutSectionInfo = ({ title, items }) => {
  return (
    <section className="pt-[137px] px-[20px] pb-[117px] text-center">
      <h3 className="max-w-[550px] mx-[auto] text-[#0B4A72] text-5xl leading-[60px] tracking-[0.75px] ">
        {title}
      </h3>
      <ul className="flex justify-center items-baseline mt-[98px]">
        {items.map(({ img, title, description }) => (
          <li key={title + description} className="w-[325px] mx-[30px]">
            <img className="inline " src={img} alt={title} />
            <h4 className="text-[#0B4A72] text-2xl leading-9 tracking-[0.35px]">
              {title}
            </h4>
            <p className="max-w-[310px] mt-[17px] mx-auto text-[#000000b3] text-lg leading-[26px] tracking-[0.84px]">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
