"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section id="our-product" className=" dark:bg-bg-color-dark bg-gray-light relative z-10 py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="The Product"
          paragraph=""
          center
          mb="80px"
        />

        <div className=" items-center justify-center">
          <div className=" justify-center items-center">
            <div
              className=" overflow-hidden rounded-md justify-center items-center"
              data-wow-delay=".15s"
            >
              <div className="xl:flex justify-center items-center  bg-bg-color-dark">
                <div className="">
                  <h1 className="text-2xl xl:ml-60 font-semibold items-center justify-start m-[60px]">Energy Track Device</h1>
                  <br/>
                  <img className=" xl:h-96 xl:w-96 xl:ml-40 items-center justify-center" src="../images/logo/prod1.png"></img>
                  <br/>
                  <p className="m-10 ">This device is use to Monitor the Energy Consumption on Appliance Level Energy Saving Device </p>
                </div>
                <div className="flex-1 xl:border-r border-white"></div>
                <div className="xl:ml-60">
                  <h1 className="text-2xl xl:ml-60 font-semibold m-[60px]">Energy Saving Device </h1>
                  <br/>
                  <img className=" xl:h-96 xl:w-96 xl:ml-40" src="../images/logo/prod2.png"></img>
                  <br/>
                  <p className="m-10">This device is use to Reduce  the Energy Consumption on Appliance Level Upto 35%</p>
                </div>
                {/* <Image src="/images/video/banner2.png" alt="video image" fill /> */}
                {/* <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
