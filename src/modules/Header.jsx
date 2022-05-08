import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as MenuBtn } from "assets/menu-btn.svg";
import { ReactComponent as Logo } from "assets/logo.svg";

const links = ["For Providers", "Sign In"];

export const Header = () => {
  return (
    <header className="h-24 flex justify-between items-center flex-wrap relative px-8 480:px-16">
      <menu className="mr-12 md:mr-[0]">
        <button className="cursor-pointer">
          <MenuBtn />
        </button>
      </menu>
      <Link to="/" className="md:absolute md:left-1/2 md:translate-x-[-50%] ">
        <Logo />
      </Link>
      <div className="mx-auto px-4 545:px-0 545:mx-0 545:ml-7 text-lg  ml:mx-0">
        {links.map((item, index) => (
          <a
            key={item}
            className={
              (index !== 0 ? "ml-11" : "") +
              " text-[#0B4A72] leading-5 hover:text-[#37c4c8]"
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
