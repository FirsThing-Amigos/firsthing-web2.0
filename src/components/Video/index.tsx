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
        <div className=" text-4xl font-bold justify-center items-center flex">PRODUCTS</div>
        <div className=" items-center justify-center">
          <div className=" justify-center items-center">
            <div
              className=" overflow-hidden rounded-md justify-center items-center"
              data-wow-delay=".15s"
            >

              <h1 className="flex text-xl font-medium items-center justify-start m-[30px] translate-x-10">Energy Track Device</h1>
              <br />
              <img className="h-60 w-60 translate-x-[50px] -translate-y-1/4" src="../images/logo/prod1.png"></img>
              <br />
              <p className="-translate-y-10">This device is use to Monitor the Energy Consumption on Appliance Level Energy Saving Device </p>
              <div className="flex-1 xl:border-r border-white"></div>
              <h1 className="text-xl font-medium m-[30px] translate-x-10">Energy Saving Device </h1>
              <br />
              <img className="h-60 w-60 translate-x-[50px]" src="../images/logo/prod2.png"></img>
              <br />
              <p>This device is use to Reduce  the Energy Consumption on Appliance Level Upto 35%</p>
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
