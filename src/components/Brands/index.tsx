import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section id="out-clients" className="pt-12 pb-0 sm:pb-12 sm:pt-24">
      <div className="container">


        <div className="-mx-4 flex flex-wrap">
          <div className="w-full ">
            <div className="m-5">
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[40px]">Our Clients</h1>
              <p className="text-base !leading-relaxed text-body-color md:text-lg mb-10">From commercial buildings and residential complexes to industrial facilities, FirsThing serves a wide range of sectors looking for
                smart energy solutions.</p>
            </div>
            <div className="flex flex-wrap items-center justify-between rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[30px] 2xl:py-[20px]">

              {/* {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))} */}

              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <img className="w-auto h-16" src="/images/partner/settl.svg" alt="Partner Logo 1"></img>
                </div>
                <div className="flex justify-center">
                  <img className="w-auto h-16" src="/images/partner/asf3.png" alt="Partner Logo 2"></img>
                </div>
                <div className="flex justify-center">
                  <img className="w-auto h-16" src="/images/partner/1.png" alt="Partner Logo 3"></img>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  // return (
  //   <div className="flex w-1/2 px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="nofollow noreferrer"
  //       className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
  //     >
  //       <Image src={imageLight} alt={name} fill className="hidden m-auto  dark:block h-auto" />
  //     </a>
  //   </div>
  // );
};
