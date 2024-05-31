import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | FIRSTHING IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.",
  description: "FIRSTHING IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At Firsthing, we pioneer IoT-based energy management solutions to empower businesses, particularly in co-living spaces and real estate, with the tools to achieve unparalleled energy efficiency and sustainability."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
