import React from "react";

export const SpriteLinks = ({ spriteLinks }) => {
  return (
    <ul className="flex">
      {spriteLinks.map((item, index) => (
        <li key={item.item + "_" + index} className="mr-5">
          <a href={"#" + item.name}>
            <img src={item} alt={item} />
          </a>
        </li>
      ))}
    </ul>
  );
};
