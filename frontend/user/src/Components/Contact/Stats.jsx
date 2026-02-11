import React from "react";
import { GraduationCap, Building2, BarChart3, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    title: "Operational Excellence",
    description:
      "Lean Six Sigma Certified (Green & Yellow Belt) DMAIC-led optimisation across hospitality ecosystems, eliminating waste, tightening kitchen-to-table workflows, and improving ROI with measurable impact.",
  },
  {
    icon: Building2,
    title: "Legacy Leadership",
    description:
      "Leading Premier Luxury F&B Portfolio Hands-on experience managing multi-crore P&Ls and designing service models for premium and ultra-high-net-worth clientele.",
  },
  {
    icon: BarChart3,
    title: "Strategic Scale",
    description:
      "Business Strategist & Advanced Management Training Moving beyond “management” into “architecting.” We design systems that allow founders to step out of daily firefighting and focus on growth.",
  },
  {
    icon: ShieldCheck,
    title: "Human Capital Strategy",
    description:
      "Organisational Culture & Experience Design Transforming labour-heavy operations into high-retention, high-performance teams through structured SOPs and executive-grade training frameworks.",
  },
];

const Stats = () => {
  return (
    <section className="w-full bg-[#fdfcf9] py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Icon
                  className="w-8 h-8 text-[#d4a017] mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-sm font-sans text-gray-600 max-w-[220px]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
