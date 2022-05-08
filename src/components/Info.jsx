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
      className={`max-w-[48.375rem] mx-auto text-dark-blue text-center ${className}`}
    >
      <Title className={`${classNameTitle}`}>{title}</Title>
      {children}
      <LinkItem
        href="#"
        className={`pr-[5.5rem] pl-8 leading-6 ${classNameLink}`}
      >
        {link}
      </LinkItem>
    </div>
  );
};
