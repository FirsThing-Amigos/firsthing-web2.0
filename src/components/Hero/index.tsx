import Link from "next/link";
import LottieImage from "@/components/Common/LottieImage";
import animationData from '../../../public/images/lottie/light.json';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 h-screen  overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        
  <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
            <video className="absolute left-0 top-0 w-full"  src={'/images/video/videoplayback.mp4'} autoPlay loop muted />
              <div className="relative mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                  Free and Open-Source Next.js Template for Startup & SaaS sadas
                </h1>
       
         <LottieImage className={"m-auto heroBannerBlink"} src={animationData} width={150} height={150} />
                {/* <p className="mb-12 text-base !leading-relaxed text-body-color text-white dark:text-white sm:text-lg md:text-xl">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
                </p> */}
                {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
         
      </section>
    </>
  );
};

export default Hero;
