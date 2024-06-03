import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import LottieImage from "@/components/Common/LottieImage";
import animationData from '../../../public/images/lottie/graph-1.json';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionTwo = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section id='works' className="sm:py-16 md:py-20 lg:py-0">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <LottieImage className={" m-auto max-w-full h-auto max-h-full sm:max-h-fit sm:h-auto sm:max-w-xl"} src={animationData} width={600} height={600} />

            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title="How It works"
              paragraph="At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly in co-living spaces and real estate, with the tools to achieve unparalleled energy efficiency and sustainability."
              mb="44px"
            />
            {/* <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div>
            </div> */}
            <div
              className="mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              <div className="mx-[-12px] flex flex-wrap">
                {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Site Audit" />
                    <List text="Automation" />
                    <List text="Saving Money" />
                  </div> */}
                <div className="">
                  <div className="text-3xl opacity-70">
                    <div className="flex items-center">
                      <img className=" h-[10vh] p-5" src="../images/logo/audit.png"></img>
                      <h1 className="p-5">Site Audit</h1>
                    </div>
                    <br />
                    <div className="flex items-center">
                      <img className=" h-[10vh] p-5" src="../images/logo/agreement.svg"></img>
                      <h1 className="p-5">Automation</h1>
                    </div>
                    <br />
                    <div className="flex items-center">
                      <img className=" h-[10vh] p-5" src="../images/logo/sustainability.png"></img>
                      <h1 className="p-5">Saving Money</h1>
                    </div>
                    <br />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
