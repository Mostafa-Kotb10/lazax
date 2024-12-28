import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Tag from "@/components/Tag";

import { testimonials } from "@/constants/constants";
import TestimonialsCol from "./TestimonialsCol";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <Container>
        <div className="flex justify-center">
          <Tag label="Testimonials" />
        </div>

        <div className="section-heading-wrraper">
          <Heading level={2} size="lg" className="mt-5 leading-tight" center>
            What our users say
          </Heading>
          <p className="section-description mt-5">
            From intutive design to powerful features, our app become an
            essential tool for users around the world.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsCol duration={15} data={firstColumn} />
          <TestimonialsCol duration={19} data={secondColumn} className="hidden md:block" />
          <TestimonialsCol duration={17} data={thirdColumn} className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
};
