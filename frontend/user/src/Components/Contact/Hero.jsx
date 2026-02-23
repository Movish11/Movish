import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#f7f4ee] pt-24 pb-8 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="font-playfair font-bold text-4xl md:text-6xl text-[#120f07d4] leading-tight">
          Let's Transform Your
          <br className="hidden md:block" />
          Operations
        </h2>

        {/* Subtext */}
        <p className="mt-6 font-sans text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto">
          Schedule a strategic discussion to explore how Movish can help you
          achieve operational excellence and sustainable growth
        </p>
      </div>
    </section>
  );
};

export default Hero;
