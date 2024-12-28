"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import ArrowRight from "@/assets/arrow-right.svg";

import Image from "next/image";
import { useRef } from "react";

export const CallToAction = () => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={secRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <Container>
        <div className="section-heading-wrraper relative">
          <Heading level={2} center className="leading-normal">
            Sign up for free today
          </Heading>
          <p className="section-description mt-5">
            Celeprate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.div
            className="absolute -left-[360px] -top-[137px] hidden md:block"
            style={{
              translateY: translateY,
            }}
          >
            <Image src={starImage} alt="Star image" width={360} />
          </motion.div>

          <motion.div
            className="absolute -right-[331px] -top-[19px] hidden md:block"
            style={{
              translateY: translateY,
            }}
          >
            <Image src={springImage} alt="Star image" width={360} />
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          <Button>Get for free</Button>
          <Button variant="secondary" className="gap-1">
            <span>Learn more</span>
            <ArrowRight className="h5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
};
