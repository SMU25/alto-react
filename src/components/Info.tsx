import React, { FC } from "react";
import classNames from "classnames";

import { Title, LinkItem } from "components";

interface infoProps {
  className?: string;
  titleClassName?: string;
  linkClassName?: string;
  title: string;
  link: string;
  children?: JSX.Element | JSX.Element[];
}

export const Info: FC<infoProps> = ({
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
        "max-w-193.5 mx-auto text-dark-blue text-center",
        className
      )}
    >
      <Title className={classNames(titleClassName)}>{title}</Title>
      {children}
      <LinkItem
        href="#"
        className={classNames("pr-22 pl-8 leading-6", linkClassName)}
      >
        {link}
      </LinkItem>
    </div>
  );
};
