import { cn } from "@/utils/cn";

type TagProps = {
  className?: string;
  label: string;
};

const Tag = ({ className, label }: TagProps) => {
  return (
    <div
      className={cn(
        "inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm tracking-tight",
        className,
      )}
    >
      {label}
    </div>
  );
};

export default Tag;
