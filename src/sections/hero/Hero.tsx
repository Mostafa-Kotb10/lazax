"use client";

import React, { useRef } from "react";
import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";

import Container from "@/components/Container";

export const Hero = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef}  className="bg-gradient-hero md:pt-18 overflow-x-clip pb-20 pt-8 md:pb-10">
      <Container>
        <div className="items-center md:flex">
          <HeroContent />
            <HeroImages secRef={sectionRef} />
        </div>
      </Container>
    </section>
  );
};

