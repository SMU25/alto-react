import React from "react";

import { Item } from "./Item";

export const LayoutSectionInfo = ({ title, items }) => {
  return (
    <section className="py-18 850:pt-34 px-5 850:pb-28 text-center">
      <h3 className="max-w-137.5 mx-auto text-dark-blue text-3xl leading-9 460:text-4xl 460:leading-10 545:text-5xl 545:leading-[60px] tracking-[0.75px] ">
        {title}
      </h3>
      <ul className="flex-col 850:flex-row items-center flex justify-center 850:items-baseline mt-5 460:mt-12 850:mt-24">
        {items.map((item) => (
          <Item {...item} />
        ))}
      </ul>
    </section>
  );
};
