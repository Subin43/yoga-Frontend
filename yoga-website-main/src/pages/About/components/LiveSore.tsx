import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function LiveSore() {
  const [progressValue, setProgressValue] = useState<number | string>(0);

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 100,
  });

  useEffect(() => {
    motionValue.set(50);

    springValue.on("change", (latest) => {
      const value = Intl.NumberFormat("en-US").format(latest.toFixed(0));

      setProgressValue(value);
    });
  }, []);

  //console.log(progressValue);

  return <div className="container ">{progressValue}</div>;
}