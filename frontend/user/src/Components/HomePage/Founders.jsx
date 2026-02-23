import React, { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Founder = () => {
  const [image, setImage] = useState(
    "https://placehold.co/600x600/ebebeb/a3a3a3?text=Home+Founder",
  );

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/founder`,
        );
        if (response.data.success && response.data.data.homeImage) {
          setImage(response.data.data.homeImage);
        }
      } catch (error) {
        console.error("Failed to fetch founder image", error);
      }
    };
    fetchImage();
  }, []);
  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={image}
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
              Human Lead. Backed By Structure
              <br />
              Built By an Industry Insider
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
                <div className="text-[#c89b3c] text-xl">🏨</div>
                <div>
                  <h4 className="font-semibold text-[#2b2b2b]">
                    Former Taj Head of Department
                  </h4>
                  <p className="text-sm text-[#666] mt-1">
                    Luxury hospitality operations experience at India&apos;s
                    most prestigious hotel chain
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
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="text-[#c89b3c] font-medium hover:underline flex items-center gap-2">
                <Link to="/about">Read Full Founder Story </Link>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
