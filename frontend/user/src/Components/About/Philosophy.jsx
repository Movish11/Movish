import {
  Sparkles,
  Settings,
  BarChart3,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const philosophies = [
  {
    icon: Sparkles,
    title: "Luxury Heritage",
    desc: "Every system we build is rooted in the service excellence standards of India's finest hotels. We bring five-star operational discipline to every restaurant we touch.",
  },
  {
    icon: Settings,
    title: "Systematic Precision",
    desc: "Great food isn't enough to scale. We build the documented processes, training modules, and performance frameworks that run your business when you aren't there.",
  },
  {
    icon: BarChart3,
    title: "Evidence-Based Results",
    desc: "Every recommendation is backed by data. Every system is tested. Every transformation is measured. We speak in metrics, not promises.",
  },
  {
    icon: Users,
    title: "People-First Operations",
    desc: "Systems don't run restaurants—people do. We build frameworks that empower your team to deliver consistent excellence while growing professionally.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    desc: "Our methodologies are designed for restaurants ready to scale. From 2 locations to 20, we create the operational backbone for sustainable expansion.",
  },
  {
    icon: ShieldCheck,
    title: "Confident Competence",
    desc: "Direct without being cold. Expert without being arrogant. Premium without being pretentious. This is how we work with every client.",
  },
];

const Philosophy = () => {
  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#120f07d4] ">
            The Luxury Machine Philosophy
          </h2>
          <p className="mt-4 font-sans text-neutral-600 max-w-2xl mx-auto">
            Operational perfection wrapped in understated elegance. Where
            hospitality heritage meets modern business precision.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {philosophies.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-6 h-6 text-[#d4a436] mb-6" />
                <h3 className="font-playfair font-bold text-xl text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight Card */}
        <div className="mt-20 bg-neutral-900 rounded-2xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-playfair text-4xl font-bold text-white mb-4">
              Confident Competence
            </h3>
            <p className="text-neutral-300 text-md font-sans leading-relaxed pt-5">
              Clients feel they're accessing insider knowledge from someone
              who's been in the trenches of luxury hospitality and emerged
              with systematic solutions
            </p>
          </div>

          <div className="space-y-4 font-sans pt-8">
            {[
              "Direct without being cold",
              "Expert without being arrogant",
              "Premium without being pretentious",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span className="text-neutral-200">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
