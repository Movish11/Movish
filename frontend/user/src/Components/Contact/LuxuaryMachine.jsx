import React from "react";

const LuxuryMachine = () => {
  return (
    <section className="w-full py-8 sm:py-24 bg-gradient-to-br from-[#444343] via-[#686666] to-[#d9d7d2]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
          Ready to Build Your Luxury Machine?
        </h2>

        <p className="text-base font-sans md:text-lg text-black/80 max-w-3xl mx-auto mb-10">
          Join successful restaurant owners who transformed their operations with Movish. Schedule your strategic
          discussion today and discover how we can help you achieve operational excellence.
        </p>

        <div className="flex flex-col font-sans sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-xl bg-[#ddb52f] text-black font-semibold shadow-md hover:brightness-95 transition">
            Email Us Directly
          </button>

          <button className="px-8 py-4 rounded-xl border-2 border-white/70 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryMachine;
