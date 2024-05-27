'use client';

import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieComponentProps {
  animationData: any; // Use 'any' type for animation data or provide a specific type if available
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  height?: number | string;
  width?: number | string;
  className?: string;
}

const LottieComponent: React.FC<LottieComponentProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  speed = 1,
  height,
  width,
  className,
}) => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  if (!animationData) {
    console.error('Lottie animation data is undefined or invalid.');
    return null; // Render nothing if animationData is invalid
  }

  return (
    <div className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ height, width }}
      />
    </div>
  );
};

export default LottieComponent;
