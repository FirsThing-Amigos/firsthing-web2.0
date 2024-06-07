import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full ">
       <div className="wow sm:min-h-96 p-[24px] fadeInUp hover:shadow-one  dark:shadow-three dark:hover:shadow-gray-dark text-center sm:" data-wow-delay=".15s">
      <div className="wow  p-[24px] fadeInUp hover:shadow-one  text-center" data-wow-delay=".15s">
        <div className="mb-10 mt-10 mx-auto flex h-[200px] w-[200px]  items-center justify-center rounded-md bg-[#ffffff]  text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-l font-bold text-black dark:text-white sm:text-l lg:text-l xl:text-l">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
      </div>
    </div>
  );
};

export default SingleFeature;
