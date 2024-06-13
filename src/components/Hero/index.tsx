'use client'
import React, { useState,useEffect } from "react";
import Link from "next/link";
import LottieImage from "@/components/Common/LottieImage";
import animationData from '../../../public/images/lottie/light.json';

const Hero = () => {
  const messages = [
    "FIRST THING IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.",
    "EMBRACE SUSTAINABILITY FOR A BETTER TOMORROW.",
    "JOIN US IN PRESERVING NATURE FOR FUTURE GENERATIONS.",
    "ACT NOW FOR A GREENER, CLEANER PLANET.",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFade(false);
      }, 500); // Wait for the fade-out animation duration before changing the message
    }, 2000); // Change text every 4 seconds (2s fade-in + 2s fade-out)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [messages.length]);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark md:pb-[120px] md:pt-[150px] sm:pt-7 xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container h-full">
          <div className="-mx-4 flex flex-wrap h-full">
            <div className="w-full px-5 h-full">
              {/* Video for desktop */}
              <video
                className="absolute left-0 top-0 w-full h-full object-cover opacity-30"
                src={'/images/video/videoplayback.mp4'}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="relative pt-20 pb-12 sm:pt-0 mx-auto max-w-[100%] sm:max-w-[800px] text-center h-full flex flex-col justify-center sm:justify-center">
                <h1 className={`text-xl font-semibold leading-tight text-white dark:text-white md:text-3xl md:leading-tight transition-opacity ${fade ? 'opacity-0' : 'opacity-100'}`}>
                  {messages[currentMessageIndex]}
                </h1>
                <LottieImage className={"m-auto heroBannerBlink w-12 h-12 sm:w-36 sm:h-36"} src={animationData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
