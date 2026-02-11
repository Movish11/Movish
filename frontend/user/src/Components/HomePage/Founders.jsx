import React from "react";
import founderImg from "../../assets/founders/f1.png";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Founder = () => {
  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={founderImg}
              alt="Founder"
              className="rounded-2xl w-full object-cover shadow-sm"
            />

            {/* Image Overlay Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-serif font-semibold">
                Hospitality Heritage Meets Business Precision
              </h4>
              <p className="text-sm opacity-90 mt-1">
                IHM Kolkata · Masters’ Union · Ex-Taj Hotels
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 text-sm text-[#4b5563] mb-4">
              <ShieldCheck size={20} />
              <span className="font-medium">Founder Credentials</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#120f07d4]">
              Built by Someone Who&apos;s
              <br />
              Been in Your Kitchen
            </h2>

            {/* Description */}
            <p className="text-[#555] font-sans mt-6 max-w-lg leading-relaxed">
              Not a consultant who learned from textbooks. A hospitality
              professional who&apos;s worked the floor, managed teams, and
              scaled operations at India&apos;s most prestigious hotels.
            </p>

            {/* Credential Cards */}
        <div className="mt-10 space-y-4">
              {/* Card 1 */}
            <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
                <div className="text-[#c89b3c] text-xl">🏛️</div>
                    <div>
                        <h4 className="font-semibold text-[#2b2b2b]">
                            IHM Kolkata Graduate
                        </h4>
                        <p className="text-sm text-[#666] mt-1">
                            India&apos;s premier hospitality institute, foundation of
                            operational excellence
                        </p>
                    </div>
                </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
                <div className="text-[#c89b3c] text-xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-[#2b2b2b]">
                    Masters&apos; Union Alumni
                  </h4>
                  <p className="text-sm text-[#666] mt-1">
                    Business strategy and entrepreneurship from India&apos;s top
                    business school
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
                <div className="text-[#c89b3c] text-xl">🏨</div>
                <div>
                  <h4 className="font-semibold text-[#2b2b2b]">
                    Ex-Taj Hotels
                  </h4>
                  <p className="text-sm text-[#666] mt-1">
                    Luxury hospitality operations experience at India&apos;s
                    most prestigious hotel chain
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl p-5 flex gap-4 shadow-sm">
                <div className="text-[#c89b3c] text-xl">📊</div>
                <div>
                  <h4 className="font-semibold text-[#2b2b2b]">
                    50+ Restaurants Transformed
                  </h4>
                  <p className="text-sm text-[#666] mt-1">
                    Proven track record of operational excellence across diverse
                    F&B formats
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="text-[#c89b3c] font-medium hover:underline flex items-center gap-2">
                <Link to="/about">Read Full Founder Story </Link><ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
