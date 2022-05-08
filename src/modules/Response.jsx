import React from "react";

import responsePoster from "assets/responsePoster.jpg";
import { LinkItem } from "components";

export const Response = () => {
  return (
    <section className="h-[278px] mt-[153px] px-[100px] flex justify-around items-center ">
      <div className="max-w-[491px] text-center">
        <video
          src="https://www.youtube.com/watch?v=_0XQdWlDC78&ab_channel=PianoRelaxing"
          poster={responsePoster}
        />
        <div className="mt-[-15px]">
          <LinkItem
            href="https://www.youtube.com/watch?v=_0XQdWlDC78&ab_channel=PianoRelaxing"
            className="bg-[#EBF0F5] pr-[54px] pl-[34px] leading-[30px]"
          >
            Watch Lisa's story
          </LinkItem>
        </div>
      </div>
      <blockquote className="max-w-[426px] text-center">
        <q className="text-[#0B4A72] text-2xl leading-9 tracking-[0.35px]">
          It's been a life changer for me - how easy it is to use. I'll never go
          to a pharmacy again.
        </q>
        <div className="mt-[38px]">
          <cite className="text-[#868AA2] text-[13px] leading-7 tracking-[0.44px]">
            -Lisa, Alto customer
          </cite>
        </div>
      </blockquote>
    </section>
  );
};
