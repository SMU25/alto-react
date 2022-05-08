import React from "react";

import { LayoutSectionInfo } from "components";
import theExtraordinaryCareImg_1 from "assets/theExtraordinaryCareImg_1.png";
import theExtraordinaryCareImg_2 from "assets/theExtraordinaryCareImg_2.png";
import theExtraordinaryCareImg_3 from "assets/theExtraordinaryCareImg_3.png";
const items = [
  {
    img: theExtraordinaryCareImg_1,
    title: "Low prices",
    description:
      "We’ve saved our users more than $40 million on their medications.",
  },
  {
    img: theExtraordinaryCareImg_2,
    title: "Free same-day delivery",
    description:
      "Before work, in the evening, or right to your office. The same day, and it’s free.",
  },
  {
    img: theExtraordinaryCareImg_3,
    title: "Chat with a pharmacist",
    description:
      "Worried about side effects? Something else? Chat with a pharmacist anytime.",
  },
];

export const TheExtraordinaryCare = () => {
  return (
    <LayoutSectionInfo
      title="The extraordinary care you deserve."
      items={items}
    />
  );
};
