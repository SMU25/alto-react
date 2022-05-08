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
    <footer className="relative bg-light-rose px-5 360:px-10 628:px-[4.5rem]">
      <Info
        title="Believe in a better pharmacy."
        link="Transfer in seconds"
        className="pb-16 628:pb-28"
        classNameTitle="mb-12 628:mb-[4.5rem]"
        classNameLink="bg-light-green"
      />
      <div>
        <Link to="/">
          <Logo className="w-[5.5rem] h-8" />
        </Link>
        <div className="flex justify-between flex-wrap mt-9">
          <ul className="flex flex-wrap 918:max-w-[45rem]">
            {links.map((item) => (
              <li key={item} className="mr-12">
                <a
                  href={item}
                  className="text-dark-blue leading-[3rem] tracking-[0.75px] transition hover:text-light-blue"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {spriteLinks.map((item, index) => (
              <li key={item.item + "_" + index} className="mr-5">
                <a href={"#" + item.name}>
                  <img src={item} alt={item} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between flex-wrap-reverse my-10 628:mt-24 628:mb-20 text-gray-blue text-sm leading-7 tracking-[0.44px]">
          <div className="628:mx-2.5 904:mx-0">
            ©2020 Alto Pharmacy. All rights reserved.
          </div>
          <ul className="flex flex-wrap 628:flex-nowrap 628:mx-2.5 904:mx-0 904:ml-5">
            {infoLinks.map((item) => (
              <li className="mr-4" key={item}>
                <a className="transition hover:text-black" href={"#" + item}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white flex items-center 628:justify-around flex-col 628:flex-row 840:justify-start flex-wrap-reverse 840:flex-nowrap pb-9">
        <img src={urac} alt="urac" />
        <div className="max-w-[10.375rem] text-center 628:text-start 628:ml-5 text-opacity70-black leading-6 tracking-[0.84px]">
          Specialty Pharmacy{" "}
          <span className="text-gray-blue text-sm leading-5 tracking-[0.75px]">
            Expires 04/01/2021
          </span>
        </div>
        <img src={vipps} alt="vipps" className="my-5 628:my-0 628:ml-14" />
        <div className="flex 460:flex-wrap 840:h-24 628:mb-10 840:mt-0">
          {storeLinks.map((item, index) => (
            <a key={item + "_" + index} href={"#" + item} className="840:ml-16">
              <img src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
