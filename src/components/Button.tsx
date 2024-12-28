import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = ({ variant, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium tracking-tight",
  {
    variants: {
      variant: {
        primary: "bg-black text-white",
        secondary: "text-black bg-transparent",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export default Button;
