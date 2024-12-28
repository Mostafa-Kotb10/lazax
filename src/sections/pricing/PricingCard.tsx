"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

import CheckIcon from "@/assets/check.svg";

import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";

type PricingCardProps = {
  tear: {
    title: string;
    monthlyPrice: number;
    buttonText: string;
    popular: boolean;
    inverse: boolean;
    features: string[];
  };
};

const PricingCard = ({ tear }: PricingCardProps) => {
  const { buttonText, inverse, monthlyPrice, popular, title, features } = tear;

  return (
    <div
      className={twMerge(
        "card",
        inverse && "border border-black bg-black text-white",
      )}
    >
      <div className="flex justify-between">
        <Heading
          level={3}
          variant="secondary"
          className={inverse ? "text-white/60" : ""}
          size="md"
        >
          {title}
        </Heading>

        {popular && (
          <div className="inline-flex rounded-xl border border-white/20 px-4 py-1.5 text-sm">
            <motion.span 
            animate={{
              backgroundPositionX: "-100%"
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="bg-gradient-popular bg-clip-text font-medium text-transparent [background-size:200%]">
              Popular
            </motion.span>
          </div>
        )}
      </div>

      <div className="mt-[30px] flex items-baseline gap-1">
        <span className="text-4xl font-bold leading-none tracking-tighter">
          {monthlyPrice}
        </span>
        <span
          className={twMerge(
            "traking-tight font-bold text-black/50",
            inverse && "text-whtie/50",
          )}
        >
          /month
        </span>
      </div>

      <Button
        className={twMerge(
          "mt-[30px] w-full",
          inverse && "bg-white text-black",
        )}
      >
        {buttonText}
      </Button>
      <ul className="mt-8 flex flex-col gap-5">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-4 text-sm">
            <CheckIcon className="h-6 w-6" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
