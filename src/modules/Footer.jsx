import React from "react";
import { Link } from "react-router-dom";

import { Info } from "components";
import { ReactComponent as Logo } from "assets/logo.svg";

import Instagram from "assets/instagram.svg";
import Facebook from "assets/facebook.svg";
import Twitter from "assets/twitter.svg";
import Linkedin from "assets/linkedin.svg";
import Dot from "assets/dot.svg";

import urac from "assets/urac.svg";

import vipps from "assets/vipps.svg";

import appStore from "assets/appStore.svg";

import googlePlay from "assets/googlePlay.svg";

const links = [
  "Our Story",
  "Careers",
  "For Providers",
  "Customer Reviews",
  "FAQs",
  "Blog",
  "Locations",
  "Press",
  "care@alto.com",
  "1 (800) 874-5881",
];

const spriteLinks = [Instagram, Facebook, Twitter, Linkedin, Dot];

const infoLinks = [
  "Privacy Policy",
  "Notice of Privacy Practices",
  "Terms and Conditions",
];

const storeLinks = [
  { name: "AppStore", icon: appStore },
  { name: "GooglePlay", icon: googlePlay },
];

export const Footer = () => {
  return (
    <footer className="relative bg-[#FFFAF4] pt-[121px] px-[72px]">
      <Info
        title="Believe in a better pharmacy."
        link="Transfer in seconds"
        className="pb-[120px]"
        classNameTitle="mb-[71px]"
        classNameLink="bg-[#EAF6B9]"
      />
      <div>
        <Link to="/">
          <Logo className="w-[89px] h-[30px]" />
        </Link>
        <div className="flex justify-between mt-[38px]">
          <ul className="flex flex-wrap max-w-[727px]">
            {links.map((item) => (
              <li key={item} className="mr-[50px]">
                <a
                  href={item}
                  className="text-[#0B4A72] text-[15px] leading-[50px] tracking-[0.75px] transition hover:text-[#37c4c8]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {spriteLinks.map((item, index) => (
              <li key={item.item + "_" + index} className="mr-[20px]">
                <a href={"#" + item.name}>
                  <img src={item} alt={item} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between mt-[100px] mb-[80px] text-[#868AA2] text-[13px] leading-7 tracking-[0.44px]">
          <div>©2020 Alto Pharmacy. All rights reserved.</div>
          <ul className="flex">
            {infoLinks.map((item) => (
              <li className="mr-[15px]" key={item}>
                <a className="transition hover:text-black" href={"#" + item}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white flex items-center pb-[36px]">
        <img src={urac} alt="urac" />
        <div className="max-w-[166px] ml-[20px] text-[#000000b3] text-[17px] leading-6 tracking-[0.84px]">
          Specialty Pharmacy{" "}
          <span className="text-[#868AA2] text-[13px] leading-5 tracking-[0.75px]">
            Expires 04/01/2021
          </span>
        </div>
        <img src={vipps} alt="vipps" className="ml-[55px]" />

        <div className="flex h-[100px]">
          {storeLinks.map((item, index) => (
            <a key={item + "_" + index} href={"#" + item} className="ml-[75px]">
              <img src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
