import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | FirsThing IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.",
  description: "FirsThing IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At FirsThing, we pioneer IoT-based energy management solutions to empower businesses, particularly in co-living spaces and Commercial Infrastructure, with the tools to achieve unparalleled energy efficiency and sustainability."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
