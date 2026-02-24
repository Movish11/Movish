import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const TransformOperations = () => {
  return (
    <section
      className="py-8 sm:py-28 text-white"
      style={{
        background:
          "linear-gradient(160deg, #3a342d 0%, #5a4f40 45%, #8a775d 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-playfair font-bold">
          Ready to Transform Your Operations?
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl mx-auto font-sans text-[#e5e5e5] leading-relaxed">
          Whether you're struggling with inconsistent quality, planning
          expansion, or seeking investor confidence—we have the systematic
          solutions you need.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-[#2b2b2b] rounded-2xl p-10 text-left shadow-lg">
            <div className="text-[#c28f1d] text-xl mb-4">📅</div>

            <h3 className="text-2xl font-playfair font-bold">
              Schedule Strategic Discussion
            </h3>

            <p className="mt-3 font-sans text-[#555] leading-relaxed">
              Book a 30-minute consultation to discuss your operational
              challenges and explore how we can help transform your restaurant
              business.
            </p>

            <Link to="/contact">
            <button className="mt-8 w-full bg-[#b8890c] hover:bg-[#a87e0a] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition cursor-pointer">
              Book Consultation →
              </button>
              </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-[#2b2b2b] rounded-2xl p-10 text-left shadow-lg">
            <div className="text-[#c28f1d] text-xl mb-4">📝</div>

            <h3 className="text-2xl font-playfair font-bold">
              Free Operational Assessment
            </h3>

            <p className="mt-3 font-sans text-[#555] leading-relaxed">
              Take our comprehensive 10-minute assessment to identify efficiency
              gaps, revenue leakage, and growth opportunities in your
              operations.
            </p>

            <Link to="/contact">
            <button className="mt-8 w-full border border-[#2b2b2b] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#f6f6f6] transition cursor-pointer">
              Start Assessment →
              </button>
              </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-3xl font-playfair font-bold text-[#d1a93c]">
              14days
            </p>
            <p className="text-sm text-[#e5e5e5] mt-1">Profit Gap Audit</p>
          </div>

          <div>
            <p className="text-3xl font-playfair font-bold text-[#d1a93c]">
              ₹2.3L+
            </p>
            <p className="text-sm text-[#e5e5e5] mt-1">
              Average monthly recovery
            </p>
          </div>

          <div>
            <p className="text-3xl font-playfair font-bold text-[#d1a93c]">
              40%
            </p>
            <p className="text-sm text-[#e5e5e5] mt-1">Better Retention</p>
          </div>
        </div>

        {/* Footer text */}
        <p className="mt-10 text-sm text-[#e5e5e5]">
          Join India's leading restaurant operators who've transformed their
          businesses with systematic operational excellence.
        </p>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[#e5e5e5]">
          <span className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
              <Check size={12} className="text-white" />
            </span>{" "}
            No long-term contracts
          </span>
          <span className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
              <Check size={12} className="text-white" />
            </span>{" "}
            Results-focused approach
          </span>
          <span className="flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
              <Check size={12} className="text-white" />
            </span>{" "}
            Hospitality-bred expertise
          </span>
        </div>
      </div>
    </section>
  );
};

export default TransformOperations;
