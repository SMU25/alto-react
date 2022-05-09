import React from "react";
import classNames from "classnames";

import { Title, LinkItem } from "components";

export const Info = ({
  className,
  titleClassName,
  linkClassName,
  title,
  link,
  children,
}) => {
  return (
    <div
      className={classNames(
        "max-w-[48.375rem] mx-auto text-dark-blue text-center",
        className
      )}
    >
      <Title className={classNames(titleClassName)}>{title}</Title>
      {children}
      <LinkItem
        href="#"
        className={classNames("pr-[5.5rem] pl-8 leading-6", linkClassName)}
      >
        {link}
      </LinkItem>
    </div>
  );
};
