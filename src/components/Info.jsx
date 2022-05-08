import React from "react";

import { Title, LinkItem } from "components";

export const Info = ({
  className,
  classNameTitle,
  classNameLink,
  title,
  link,
  children,
}) => {
  return (
    <div
      className={`max-w-[774px] mx-auto text-[#0B4A72] text-center ${className}`}
    >
      <Title className={`${classNameTitle}`}>{title}</Title>
      {children}
      <LinkItem
        href="#"
        className={`pr-[73px] pl-[30px] leading-6 ${classNameLink}`}
      >
        {link}
      </LinkItem>
    </div>
  );
};
