import {
  Lightbulb,
  Heart,
  Trophy,
  Handshake,
} from "lucide-react";

const missions = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Constantly evolving our methodologies based on real-world results and industry trends.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Honest assessments, realistic timelines, and transparent communication in every engagement.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    desc: "Five-star standards applied to every system, every training module, every client interaction.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "We succeed when you succeed. Your growth is our measure of impact.",
  },
];

const Mission = () => {
  return (
    <section className="bg-[#2f2f2f] py-8 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-18">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#f5f5f5]">
            Our Mission
          </h2>
          <p className="mt-6 font-sans text-lg text-[#cfcfcf] leading-relaxed">
            To build the systems that run your business and the teams that grow
            your brand. We transform restaurant operations from chaotic to
            systematic, enabling sustainable scaling without compromising on
            quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="border border-[#8f8f8f]/60 rounded-2xl p-8 bg-[#2f2f2f] hover:border-[#d4a64f] transition"
              >
                <Icon className="w-6 h-6 text-[#d4a64f] mb-6" />

                <h3 className="font-playfair font-bold text-xl text-[#f1f1f1] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#bdbdbd] font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
