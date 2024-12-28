import ArrowIcon from "@/assets/arrow-right.svg";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Tag from "@/components/Tag";

const HeroContent = () => {
  return (
    <div className="md:w-[29.875rem]">
      <Tag label="Version 2.0 is here" />
      <Heading level={1} size="xl" className="mt-12">
        Pathway to productivity
      </Heading>

      <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your success.
      </p>
      <div className="mt-[30px] flex items-center gap-1">
        <Button>Get for free</Button>
        <Button variant="secondary" className="gap-1">
          <span>Learn more</span>
          <ArrowIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
