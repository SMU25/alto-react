import React from "react";
import { Link } from "react-router-dom";

import { Auth } from "components/Auth";
import { ReactComponent as MenuBtn } from "assets/menu-btn.svg";
import { ReactComponent as Logo } from "assets/logo.svg";
import { links } from "./constants";

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
      <Auth links={links} />
    </header>
  );
};
