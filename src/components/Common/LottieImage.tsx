"use client"; // Add this line at the very top

import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

type LottieImageProps = {
  src: any;
  width?: number;
  height?: number;
  className?:any;
};

const LottieImage = ({ src, width, height, className, ...props }: LottieImageProps) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (!animationContainer.current) {
      return;
    }

    const animation = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: src,
    });

    return () => {
      animation.destroy();
    };
  }, [src]);

  return <div className={className} ref={animationContainer} style={{ width, height }} {...props} />;
};

export default LottieImage;
