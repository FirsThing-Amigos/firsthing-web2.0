import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full ">
      <div className="wow min-h-96 p-[24px] fadeInUp hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark text-center" data-wow-delay=".15s">
        <div className="mb-10 mt-10 mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-md bg-[#ffffff]  text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-l font-bold text-black dark:text-white sm:text-xl lg:text-l xl:text-xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
