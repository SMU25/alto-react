import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "assets/arrow-left.svg";

export const LinkItem = ({ href, className, children }) => {
  return (
    <Link
      to={href}
      className={`relative py-5 text-[#0B4A72] text-lg rounded-full hover:opacity-70 transition ${className}`}
    >
      {children}
      <ArrowLeft className="absolute top-[50%] translate-y-[-50%] right-7" />
    </Link>
  );
};
