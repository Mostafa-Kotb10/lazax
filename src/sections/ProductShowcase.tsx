"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

import Tag from "@/components/Tag";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

export const ProductShowcase = () => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={secRef} className="bg-gradient-product overflow-x-clip py-24">
      <Container>
        <div className="section-heading-wrraper">
          <div className="flex justify-center">
            <Tag label="Boost your productivity" />
          </div>

          <Heading
            level={2}
            className="mt-5 tracking-tighter md:leading-[60px]"
            center
          >
            A more effective way to track progress
          </Heading>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minutes with this template
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="Prodcut image" className="mt-10" />

          <motion.div className="absolute -right-36 -top-32 hidden md:block"
          style={{
            translateY: translateY
          }}
          >
            <Image
              src={pyramidImage}
              alt="Pyramid image"
              width={262}
              height={262}
            />
          </motion.div>

          <motion.div className="absolute -left-36 bottom-24 hidden md:block" style={{
            translateY: translateY
          }}>
            <Image src={tubeImage} alt="Tube image" width={248} height={248} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
