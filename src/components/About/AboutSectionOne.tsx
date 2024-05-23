import SectionTitle from "../Common/SectionTitle";
const AboutSectionOne = () => {
  return (
    <section id="about" className="">
      <div className="container mx-auto px-4">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <SectionTitle
              title="HOW IT WORKS"
              paragraph=""
              mb="44px"
            />
          </div>
          <div className="mb-20">
            <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center flex flex-col items-center">
                <img className="h-20 w-20 mb-4" src="../images/SVGs/.png" alt="Logo 1" />
                <h1 className="bg-blue-950 text-3xl font-bold pt-5 pb-5 w-full">Site Audit</h1>
              </div>
              <div className="text-center flex flex-col items-center">
                <img className="h-20 w-20 mb-4" src="../images/SVGs/a1.png" alt="Logo 2" />
                <h1 className="bg-blue-900 text-3xl font-bold pt-5 pb-5 w-full">Automation</h1>
              </div>
              <div className="text-center flex flex-col items-center">
                <img className="h-20 w-20 mb-4" src="../logo/logo.svg" alt="Logo 3" />
                <h1 className="bg-blue-800 text-3xl font-bold pt-5 pb-5 w-full">Saving Money</h1>
              </div>
            </div>
          </div>



        



          <div className="mb-20">
            <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/4.png" alt="Logo 1" />
                <h1>Total no. of high energy <br />consumption devices</h1>
              </div>
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/6.png" alt="Logo 2" />
                <h1>Energy track based energy saving</h1>
              </div>
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/5.png" alt="Logo 3" />
                <h1>Consumer is saving money</h1>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/11.png" alt="Logo 4" />
                <h1>Apply sensors & controllers<br />[device ON/OFF history]<br />which will be added in switch<br />boards in analog world</h1>
              </div>
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/8.png" alt="Logo 5" />
                <h1>Uses commercial<br /> (anecdotal)</h1>
              </div>
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/7.png" alt="Logo 6" />
                <h1>Consumer is saving money</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/9.png" alt="Logo 7" />
                <h1>And device healths also is also provided.<br />(fitness certificate of devices)</h1>
              </div>
              <div className="text-center">
                <img className="h-20 w-20 mx-auto mb-4" src="../images/SVGs/10.png" alt="Logo 8" />
                <h1>And device healths also is also provided.<br />(fitness certificate of devices)</h1>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

  );
};

export default AboutSectionOne;
