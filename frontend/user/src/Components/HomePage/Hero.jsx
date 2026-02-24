import { ChartNoAxesColumnIncreasing } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#f7f4ee] pt-20">
      <div className="max-w-5xl mx-auto px-6 pt-5 sm:pt-20 pb-5 sm:pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-[#ca9822] text-sm mb-6">
          <span>✨</span>
          <span>Your Partner in World Class Restaurant Management</span>
        </div>

        {/* Heading */}
        <h1 className="font-playfair text-5xl text-primary sm:ml-10 lg:text-6xl xl:text-7xl max-w-4xl leading-none font-bold text-[#120f07d4] mb-6 ">
          India's First Operations & <br />
          Training Partner for <br />
          Restaurants and QSRs
        </h1>

        {/* Subheading */}
        <p className="text-black/70 text-xl mx-auto mb-10">
          We build teams that grow your brand and systems that run your business
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Link to="/services">
            <button className="bg-[#b88a1e] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition cursor-pointer">
              View Services
              <ChartNoAxesColumnIncreasing className="h-4" />
            </button>
          </Link>

          <Link to="/contact">
          <button className="border border-black/30 px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-black/5 transition cursor-pointer">
            Book Audit
            <span>→</span>
            </button>
            </Link>
        </div>

        {/* Divider */}
        <div className="w-full flex justify-center mb-8">
          <div className="w-[80%] h-px bg-[#ebe7de]" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 font-playfair text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#dfa723d4]">14days</h3>
            <p className="text-sm text-black/60 mt-1">Profit Gap Audit</p>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-4xl font-bold text-[#dfa723d4]">₹2.3L+</h3>
            <p className="text-sm text-black/60 mt-1">Avg. Monthly Savings</p>
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-4xl font-bold text-[#dfa723d4]">40%</h3>
            <p className="text-sm text-black/60 mt-1">Better Retention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
