import { ArrowRight, Calendar, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Transform() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2b2b2b] via-[#4a4a4a] to-[#d9d7d2]">
      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-32 text-center">
        {/* Top badge */}
        <div className="flex justify-center items-center gap-2 text-sm tracking-widest text-[#d0a22f] font-semibold mb-6">
          <Sparkles size={16} />
          READY TO TRANSFORM?
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Let&apos;s Build Your Operational Excellence
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-[#e5e5e5]">
          Schedule a strategic discussion to explore how our services can
          transform your restaurant operations. No generic pitches—just honest
          conversation about your challenges and our proven solutions.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-[#d0a22f] hover:bg-[#b89028] text-black px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition">
            Schedule Strategic Discussion
            <Calendar size={18} />
          </Link>
          <Link to="/case-studies">
          <button className="border border-white/60 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-white hover:text-black transition cursor-pointer">
            View Case Studies
            <ArrowRight size={18} />
            </button>
            </Link>
        </div>

        {/* Replaced bottom stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-lg text-[#e5e5e5]">
          <span className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
              <Check size={12} className="text-white" />
            </span>
            No long-term contracts
          </span>
          <span className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
              <Check size={12} className="text-white" />
            </span>
            Results-focused approach
          </span>
          <span className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
              <Check size={12} className="text-white" />
            </span>
            Hospitality-bred expertise
          </span>
        </div>
      </div>
    </section>
  );
}
