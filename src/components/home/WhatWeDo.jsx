import React, { useRef, useState } from "react";
import { VideoBg, PlayIcon } from "../../assets/images";

const WhatWeDo = () => {
  const iframeRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    iframeRef.current.src += "?autoplay=1";
  };

  return (
    <section id="what-we-do">
      <div className="xl:py-20 py-10 xl:px-[60px] px-4 flex flex-col items-center xl:space-y-0 space-y-4">
        <h2 className="xl:text-5xl md:text-3xl text-2xl font-bold font-primary text-white xl:leading-[62.88px] leading-[31.44px] text-center uppercase">
          DEVELOP THE NEXT SUPERSTARS
        </h2>
        <p className="xl:mt-1 font-secondary xl:text-base text-sm font-normal xl:leading-[26px] text-white text-center lg:w-[997px] xl:!mb-10">
          Our artificial intelligence analytics helps evaluates player's
          performance, progress assessment, and individualized development plans
          that helps to build a stronger partnership focused on the player's
          overall growth.
        </p>
        <div
          className="rounded-2xl w-full relative aspect-video overflow-hidden"
          onClick={handlePlay}
        >
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UiEjzpDvxTc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            muted
          ></iframe>
          <div className={`absolute inset-0 ${isPlaying ? "hidden" : "block"}`}>
            <img src={VideoBg} alt="" className="h-full" />
            <img
              src={PlayIcon}
              alt=""
              className="md:min-w-[130px] md:min-h-[130px] w-[48px] h-[48px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
