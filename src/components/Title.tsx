import React, { FC } from "react";
import classNames from "classnames";

interface titleProps {
  className: string;
  children?: string | JSX.Element | JSX.Element[];
}

export const Title: FC<titleProps> = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        "text-3xl leading-9 text-center tracking-[1.5px]",
        "360:tracking-[2.5px]",
        "545:text-5xl 545:leading-15",
        "840:text-7xl 840:leading-20",
        className
      )}
    >
      {children}
    </h2>
  );
};
