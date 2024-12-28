import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg" | "xl";
  center?: boolean;
}

const Heading = ({
  level,
  variant,
  size,
  center,
  children,
  className,
  ...props
}: HeadingProps) => {
  const HeadingComponent = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingComponent
      className={cn(
        headingVariants({ variant, size }),
        className,
        `${center ? "text-center" : ""}`,
      )}
      aria-label={`Heading level ${level}: ${children}`}
      {...props}
    >
      {children}
    </HeadingComponent>
  );
};

const headingVariants = cva(
  "font-bold tracking-tighter text-black leading-tight",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-black to-[#001E80] bg-clip-text  text-transparent",
        secondary: "text-black/50",
      },
      size: {
        md: "text-lg",
        xl: "text-5xl md:text-7xl",
        lg: "text-3xl md:text-[54px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export default Heading;
