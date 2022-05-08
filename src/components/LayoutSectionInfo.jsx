import React from "react";

export const LayoutSectionInfo = ({ title, items }) => {
  return (
    <section className="py-[4.5rem] 850:pt-[8.5rem] px-5 850:pb-28 text-center">
      <h3 className="max-w-[550px] mx-auto text-dark-blue text-3xl leading-9 460:text-4xl 460:leading-10 545:text-5xl 545:leading-[60px] tracking-[0.75px] ">
        {title}
      </h3>
      <ul className="flex-col 850:flex-row items-center flex justify-center 850:items-baseline mt-5 460:mt-12 850:mt-24">
        {items.map(({ img, title, description }) => (
          <li
            key={title + description}
            className="max-w-[34.375rem] mb-10 850:mb-0 850:mx-8"
          >
            <img className="inline " src={img} alt={title} />
            <h4 className="text-dark-blue text-2xl leading-9 tracking-[0.35px]">
              {title}
            </h4>
            <p className="max-w-[19.375rem] mt-4 mx-auto text-opacity70-black text-lg leading-7 tracking-[0.84px]">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
