import dynamic from 'next/dynamic';

const DynamicIframe = dynamic(() => import('./Iframe'), { ssr: false });

const Hero = () => {
  return (
    <>
      <section
      
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <DynamicIframe/>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center py-20">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                FIRSTHING IS TO MAKE OUR EARTH GREENER FOR OUR FUTURE GENERATIONS.
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Did you know that every year, buildings waste enough energy to power an entire small country?<br/>Now,imagine if we could capture just a fraction of that lost energy.<br/>Need some numbers for content
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
