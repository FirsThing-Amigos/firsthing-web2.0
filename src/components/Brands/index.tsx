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
          <SectionTitle
          title="Our clients"
          paragraph="From commercial buildings and residential complexes to industrial facilities, Firsthing serves a wide range of sectors looking for
          smart energy solutions."
          center
          mb="80px"
        />
            <div className="flex flex-wrap items-center justify-between rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[30px] 2xl:py-[20px]">
           
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
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

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden m-auto  dark:block h-auto sw-auto max-w-36" />
        <Image src={image} alt={name} fill className="block dark:hidden m-auto h-auto w-auto max-w-36" />
      </a>
    </div>
  );
};
