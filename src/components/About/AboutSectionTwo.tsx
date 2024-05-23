import SectionTitle from "../Common/SectionTitle";
const AboutSectionTwo = () => {
  return (
    <div className="about-section-two">
      <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="pt-16 md:pt-20 lg:pt-28 container mx-auto flex flex-wrap items-center">
          <SectionTitle
            title="THE PRODUCT"
            paragraph=""
            mb="44px"
          />
        </div>
        <div className="container mx-auto p-5">
          <div className="flex flex-col md:flex-row font-extrabold mb-20">
            <div className="flex-shrink-0">
              <img className="h-[20vh] mx-auto md:ml-[10%] md:mr-20" src="../images/SVGs/2.png" alt="Energy Track" />
            </div>
            <div className="mt-5 md:mt-0 md:ml-20">
              <h1 className="text-4xl font-bold mb-5">Energy Track:</h1>
              <p className="font-light text-4xl mt-5 md:mt-0">
                Emphasizing the tracking and <br />management of energy consumption.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-5 md:mt-0 md:ml-20">
              <h1 className="text-blue-500 text-5xl md:mr-5">WHAT</h1>
              <h1 className="text-blue-600 text-9xl">?</h1>
            </div>
          </div>



          <div>
            <div className="bg-blue-500 w-full md:w-[40%] p-5 rounded-xl md:ml-auto">
              <div className="flex items-center mb-5">
                <img src="../images/SVGs/12.png" alt="Icon" />
                <h3 className="ml-5 font-normal">
                  Entering Track Devices [H/W] Which Will Provide <br />Monitoring
                </h3>
              </div>
              <div className="flex items-center mb-5">
                <img src="../images/SVGs/13.png" alt="Icon" />
                <h3 className="ml-8 font-normal">
                  Sensors & Controllers [H/W] To Control Those Retrofit <br />Devices
                </h3>
              </div>
              <div className="flex items-center mb-5">
                <img src="../images/SVGs/14.png" alt="Icon" />
                <h3 className="ml-8 font-normal">
                  ECMD [Energy Consumption Monitoring Device[H/W]]<br /> to provide the Right Measurement
                </h3>
              </div>
              <div className="flex items-center">
                <img src="../images/SVGs/15.png" alt="Icon" />
                <h3 className="ml-5 font-normal">
                  Power Factor Ratio[H/W] to setup and reduce <br />electricity wastage
                </h3>
              </div>
            </div>
            <br />
            <div className="bg-blue-400 w-full md:w-[40%] p-5 rounded-xl md:ml-auto">
              <div className="flex items-center mb-5">
                <img src="../images/SVGs/16.png" alt="Icon" />
                <h3 className="ml-5 font-normal">
                  Will provide real-time monitoring dashboards [S/w] <br /> which will provide detailed info about the consumption
                </h3>
              </div>
              <div className="flex items-center mb-5">
                <img src="../images/SVGs/17.png" alt="Icon" />
                <h3 className="ml-5 font-normal">
                  Will provide App/Web to control the devices using AI<br /> based Devices[S/w]
                </h3>
              </div>
            </div>
          </div>





        </div>
      </div>
    </div>
  );
};
export default AboutSectionTwo;
