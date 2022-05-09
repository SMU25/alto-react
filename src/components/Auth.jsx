import React from "react";

export const Auth = ({ links }) => {
  return (
    <div className="mx-auto px-4 545:px-0 545:mx-0 545:ml-7 text-lg  ml:mx-0">
      {links.map((item, index) => (
        <a
          key={item}
          className={
            (index !== 0 ? "ml-11" : "") +
            " text-dark-blue leading-5 hover:text-light-blue"
          }
          href="# "
        >
          {item}
        </a>
      ))}
    </div>
  );
};
