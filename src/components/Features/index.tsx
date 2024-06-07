import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="our-solutions" className="py-12 pb-0 sm:pb-16 sm:py-16 md:py-0 lg:pt-28  lg:pb-0 ">
        <div className="container">
          <SectionTitle
            title="Our Solutions"
            paragraph="Our flagship product, EnergiTrack, harnesses the power of RetroFit Smart Switch Modules and Motion Sensors, combined with our cutting edge software for real-time monitoring and control, saving up to 50% of electricity."
            center
          />

          <div className="border-b border-body-color/[.15] dark:border-white/[.15] pb-12 sm:pb-16 md:pb-20 lg:pb-28 grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-14 md:grid-cols-2 lg:grid-cols-5">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
