import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | FIRSTHING IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.",
  description: "FIRSTHING IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
