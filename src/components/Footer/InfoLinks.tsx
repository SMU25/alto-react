import React, { FC } from "react";

interface infoLinksProps {
  infoLinks: string[];
}

export const InfoLinks: FC<infoLinksProps> = ({ infoLinks }) => {
  return (
    <ul className="flex flex-wrap 628:flex-nowrap 628:mx-2.5 904:mx-0 904:ml-5">
      {infoLinks.map((item) => (
        <li className="mr-4" key={item}>
          <a className="transition hover:text-black" href={"#" + item}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
