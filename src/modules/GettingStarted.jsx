import React from "react";

import { LayoutSectionInfo } from "components";
import gettingStartedImg_1 from "assets/gettingStartedImg_1.png";
import gettingStartedImg_2 from "assets/gettingStartedImg_2.png";
import gettingStartedImg_3 from "assets/gettingStartedImg_3.png";

const items = [
  {
    img: gettingStartedImg_1,
    title: "Send in a prescription",
    description:
      "Transfer your existing prescription or ask your doctor to send a new prescription to Alto.",
  },
  {
    img: gettingStartedImg_2,
    title: "See your savings",
    description:
      "We'll search for savings on your medication and show you delivery options. We accept most major insurance plans.",
  },
  {
    img: gettingStartedImg_3,
    title: "Receive your delivery",
    description:
      "You pick the day and time and we'll deliver it by hand, for free. No delivery or hidden fees.",
  },
];

export const GettingStarted = () => {
  return <LayoutSectionInfo title="Getting started is easy" items={items} />;
};
