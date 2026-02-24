import { Search, Settings, Rocket, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export default function Methodology() {
  return (
    <section className="bg-[#2b2b2b] text-white py-8 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-sm tracking-widest text-[#d4af37] uppercase mb-4">
          Our Methodology
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
          The Luxury Machine Framework
        </h2>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
          A systematic approach combining hospitality heritage with modern business precision.
          Every engagement follows our proven four-phase methodology.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Card 01 */}
          <div className="bg-white text-black rounded-2xl p-8 text-left shadow-lg">
            <Search className="w-6 h-6 text-[#d4af37] mb-6" />
            <h3 className="text-3xl font-serif mb-4">01</h3>
            <h4 className="text-xl font-semibold mb-3">Discovery & Diagnosis</h4>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive operational audit identifying bottlenecks, inefficiencies, and
              growth barriers across all touchpoints.
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-white text-black rounded-2xl p-8 text-left shadow-lg">
            <Settings className="w-6 h-6 text-[#d4af37] mb-6" />
            <h3 className="text-3xl font-serif mb-4">02</h3>
            <h4 className="text-xl font-semibold mb-3">System Design</h4>
            <p className="text-gray-600 leading-relaxed">
              Custom framework development tailored to your brand DNA, operational reality,
              and growth ambitions.
            </p>
          </div>

          {/* Card 03 */}
          <div className="bg-white text-black rounded-2xl p-8 text-left shadow-lg">
            <Rocket className="w-6 h-6 text-[#d4af37] mb-6" />
            <h3 className="text-3xl font-serif mb-4">03</h3>
            <h4 className="text-xl font-semibold mb-3">Implementation</h4>
            <p className="text-gray-600 leading-relaxed">
              Hands-on deployment with your team, ensuring seamless integration and immediate
              operational impact.
            </p>
          </div>

          {/* Card 04 */}
          <div className="bg-white text-black rounded-2xl p-8 text-left shadow-lg">
            <TrendingUp className="w-6 h-6 text-[#d4af37] mb-6" />
            <h3 className="text-3xl font-serif mb-4">04</h3>
            <h4 className="text-xl font-semibold mb-3">Optimization & Scale</h4>
            <p className="text-gray-600 leading-relaxed">
              Continuous refinement and expansion support as you grow from single location
              to multi-unit success.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <Lightbulb className="w-8 h-8 text-[#d4af37] mx-auto mb-6" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Our methodology isn’t theoretical. It’s battle-tested across luxury hotels, QSR
            chains, and fine dining establishments. We build the systems that run your business
            and the teams that grow your brand.
          </p>

          <Link to="/about">
          <button className="mt-8 inline-flex items-center gap-2 text-[#d4af37] font-medium hover:gap-3 transition-all cursor-pointer">
            Learn About Our Founder’s Journey <span>→</span>
            </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
