import Container from "@/components/Container";
import Heading from "@/components/Heading";
import PricingCardsList from "./PricingCardsList";

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="section-heading-wrraper">
          <Heading
            level={2}
            center
            size="lg"
            className="tracking-tighter md:leading-[60px]"
          >
            Pricing
          </Heading>
          <p className="section-description mt-5">
            Face forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        <PricingCardsList />
      </Container>
    </section>
  );
};
