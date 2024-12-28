"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

import Image from "next/image";

//md:-left-6 old-val | new: md:

type HeroImagesProps = {
  secRef: React.MutableRefObject<null>;
};

const HeroImages = ({ secRef }: HeroImagesProps) => {
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div className="relative mt-20 md:mt-0 md:h-[40.5rem] md:flex-1">
      <motion.div
        className="md:absolute md:-left-6 md:h-full lg:left-auto lg:right-0"
        animate={{
          translateY: [-30, 30],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 3,
        }}
      >
        <Image
          src={cogImage}
          className="md:h-full md:w-auto md:max-w-none"
          alt="Cog image"
        />
      </motion.div>

      <motion.div
        className="-left-32 -top-8 hidden md:absolute md:block"
        style={{
          translateY: translateY,
        }}
      >
        <Image
          src={cylinderImage}
          width={220}
          height={220}
          alt="cylinder image"
        />
      </motion.div>

      <motion.div className="absolute left-[448px] top-[524px] w-[220px] rotate-[30deg] lg:left-[524px]" style={{
        rotate: 30,
        translateY: translateY
      }}>
        <Image
          src={noodleImage}
          alt="Noodle image"
          className="hidden lg:block"
        />
      </motion.div>
    </div>
  );
};

export default HeroImages;
