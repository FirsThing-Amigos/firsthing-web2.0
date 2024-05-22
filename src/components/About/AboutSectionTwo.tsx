import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <div className="about-section-two">
      <div className="pt-16 md:pt-20 lg:pt-28 container mx-auto flex flex-wrap items-center">
        <SectionTitle
          title="THE PRODUCT"
          paragraph=""
          mb="44px"
        />
      </div>
      <div className="flex font-extrabold">
        <img className="h-[15%] w-[15%] ml-[10%]" src="../images/SVGs/2.png"></img>
        <h1 className="font-extrabold text-3xl ml-10">Energy Track:</h1>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
