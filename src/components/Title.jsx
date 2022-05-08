import React from "react";

export const Title = ({ className, children }) => {
  return (
    <h2
      className={`text-center text-7xl leading-[80px] tracking-[2.5px] ${className}`}
    >
      {children}
    </h2>
  );
};
