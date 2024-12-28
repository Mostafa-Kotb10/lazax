"use client";

import Image from "next/image";

import { tickerImages } from "@/constants/constants";
import Container from "@/components/Container";

import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <Container>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]" >
          <motion.div 
          className="flex flex-none gap-14 pr-14"
          animate={{
            translateX: "-50%"
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          >
            {tickerImages.map(({ id, src, alt }) => (
              <Image key={id} src={src} alt={alt} className="h-8 w-auto" />
            ))}

            {/* Secset for animation */}

            {tickerImages.map(({ id, src, alt }) => (
              <Image key={id} src={src} alt={alt} className="h-8 w-auto" />
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
