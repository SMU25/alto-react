import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as MenuBtn } from "assets/menu-btn.svg";
import { ReactComponent as Logo } from "assets/logo.svg";

const links = ["For Providers", "Sign In"];

export const Header = () => {
  return (
    <header className="h-[93px] flex justify-between items-center relative mx-[67px]">
      <menu>
        <button className="cursor-pointer">
          <MenuBtn />
        </button>
      </menu>
      <Link to="/" className="absolute left-1/2 translate-x-[-50%]">
        <Logo />
      </Link>
      <div className="text-lg">
        {links.map((item, index) => (
          <a
            key={item}
            className={
              (index !== 0 ? "ml-[45px]" : "") +
              " text-[#0B4A72] leading-[18px] hover:text-[#37c4c8]"
            }
            href="# "
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};
