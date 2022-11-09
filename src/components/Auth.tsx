import React, { FC } from "react";
import classNames from "classnames";

interface AuthProps {
  links: string[];
}

export const Auth: FC<AuthProps> = ({ links }) => {
  return (
    <div className="mx-auto px-4 545:px-0 545:mx-0 545:ml-7 text-lg ml:mx-0">
      {links.map((item, index) => (
        <a
          key={item}
          className={classNames(
            "text-dark-blue leading-5 hover:text-light-blue",
            {
              "ml-11": index !== 0,
            }
          )}
          href="# "
        >
          {item}
        </a>
      ))}
    </div>
  );
};
