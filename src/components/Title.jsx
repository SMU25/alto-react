import React from "react";

export const Title = ({ className, children }) => {
  return (
    <h2
      className={`text-3xl leading-9 text-center 545:text-5xl 545:leading-[3.75rem] 840:text-7xl 840:leading-[5rem] tracking-[1.5px] 360:tracking-[2.5px] ${className}`}
    >
      {children}
    </h2>
  );
};
