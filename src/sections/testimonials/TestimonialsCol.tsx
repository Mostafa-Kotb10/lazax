"use client";
import TestimonialCard from "./TestimonialCard";

import { motion } from "framer-motion";

type TestimonialItem = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

type TestimonialColProps = {
  data: TestimonialItem[];
  className?: string;
  duration?: number;
};

const TestimonialsCol = ({ className, data, duration }: TestimonialColProps) => {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {data.map((testimonial) => (
          <TestimonialCard key={testimonial.name} data={testimonial} />
        ))}
        
        {data.map((testimonial) => (
          <TestimonialCard key={testimonial.name} data={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsCol;
