import React, { FC } from "react";

interface itemProps {
  img: string;
  title: string;
  description: string;
}

export const Item: FC<itemProps> = ({ img, title, description }) => {
  return (
    <li
      key={title + description}
      className="max-w-137.5 mb-10 850:mb-0 850:mx-8"
    >
      <img className="inline " src={img} alt={title} />
      <h4 className="text-dark-blue text-2xl leading-9 tracking-[0.35px]">
        {title}
      </h4>
      <p className="max-w-77.5 mt-4 mx-auto text-opacity70-black text-lg leading-7 tracking-[0.84px]">
        {description}
      </p>
    </li>
  );
};
