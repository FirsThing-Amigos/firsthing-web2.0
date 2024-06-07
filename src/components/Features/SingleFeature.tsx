import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full ">
       <div className=" dark:shadow-three text-center items-center justify-center">
      <div className="wow fadeInUp  text-center" data-wow-delay=".15s items-center justify-center">
        <div className="mb-10 mx-auto flex h-[150px] w-[150px] items-center justify-center rounded-lg border-4 border-white text-primary ">
          {icon}
        </div>
        <h3 className="text-l font-bold text-black dark:text-white sm:text-l lg:text-l xl:text-l">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
      </div>
    </div>
  );
};

export default SingleFeature;
