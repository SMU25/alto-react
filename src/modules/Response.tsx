import React from "react";

import responsePoster from "assets/responsePoster.jpg";
import { LinkItem } from "components";

export const Response = () => {
  return (
    <section className=" 460:mt-10 lg:mt-40 px-10 1200:px-24 flex justify-around items-center flex-wrap ">
      <div className="max-w-122.8 text-center mb-10 1017:mb-0">
        <video
          src="https://www.youtube.com/watch?v=_0XQdWlDC78&ab_channel=PianoRelaxing"
          poster={responsePoster}
        />
        <div className="mt--4">
          <LinkItem
            href="https://www.youtube.com/watch?v=_0XQdWlDC78&ab_channel=PianoRelaxing"
            className="bg-white-blue pr-14 pl-8 leading-7"
          >
            Watch Lisa's story
          </LinkItem>
        </div>
      </div>
      <blockquote className="max-w-106.5 text-center mx-2.5 1017:mx-0 1017:ml-5 1200:ml-0">
        <q className="text-dark-blue text-xl leading-7 460:text-2xl 460:leading-9 tracking-[0.35px]">
          It's been a life changer for me - how easy it is to use. I'll never go
          to a pharmacy again.
        </q>
        <div className="mt-2 460:mt-9">
          <cite className="text-gray-blue text-sm leading-7 tracking-[0.44px]">
            -Lisa, Alto customer
          </cite>
        </div>
      </blockquote>
    </section>
  );
};
