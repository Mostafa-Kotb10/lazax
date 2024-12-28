import ArrowRight from "@/assets/arrow-right.svg";

const Banner = () => {
  return (
    <div className="flex items-center justify-center gap-3 bg-black py-3 text-sm text-white">
      <div className="inline-flex items-center gap-1">
        <p className="hidden text-white/60 md:block">
          Stream Line your work flow and boost your productivity
        </p>
        <p>Get Started for free</p>
        <ArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
      </div>
    </div>
  );
};

export default Banner;
