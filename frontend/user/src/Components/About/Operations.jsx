import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Operations = () => {
  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#120f07d4] leading-tight">
          Ready to Transform Your <br className="hidden md:block" />
          Operations?
        </h2>

        {/* Subtext */}
        <p className="mt-6 font-sans text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Let's discuss how the Luxury Machine methodology can systematize your
          restaurant operations and accelerate your growth.
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <Link to="/contact">
            <button className="inline-flex items-center gap-3 bg-[#c99712] text-white font-medium px-8 py-4 rounded-xl shadow-md hover:bg-[#b5890f] transition cursor-pointer">
              Schedule Strategic Discussion
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Operations;
