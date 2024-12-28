import { pricingTiers } from "@/constants/constants";
import PricingCard from "./PricingCard";

const PricingCardsList = () => {
  return (
    <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
      {pricingTiers.map((tear) => (
        <PricingCard key={tear.title} tear={tear} />
      ))}
    </div>
  );
};

export default PricingCardsList;
