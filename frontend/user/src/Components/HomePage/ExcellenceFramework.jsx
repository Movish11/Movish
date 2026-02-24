import {
  FileText,
  GraduationCap,
  BarChart3,
  Check,
  ArrowRight,
  Box,
} from "lucide-react";
import { Link } from "react-router-dom";

const ExcellenceFramework = () => {
  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Label */}
        <div className="flex items-center justify-center gap-2 text-md text-gray-600 mb-6">
          <Box className="text-[#96733d]" />
          <span className="text-[#96733d]">
            The Standardized Excellence Framework
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-playfair font-bold text-[#120f07d4]">
          Hospitality-Bred. Business-Driven.
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-6 text-gray-600">
          Three core services that transform restaurant operations from reactive
          firefighting to proactive excellence.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-10 relative">
            <span className="absolute -top-4 left-6 bg-[#ddbc52] text-xs font-medium px-4 py-1 rounded-full">
              Most Popular
            </span>

            <FileText className="text-[#d4af37] mb-8" size={28} />

            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Digital Operations Bible
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Comprehensive SOPs that transform chaos into systematic
              excellence. Every process documented, every standard defined,
              every team member aligned.
            </p>

            <ul className="space-y-4 text-sm text-gray-700">
              {[
                "Complete operational documentation",
                "Role-specific process guides",
                "Quality control checklists",
                "Crisis management protocols",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/services">
            <button className="mt-10 text-sm font-medium text-[#b9982b] flex items-center gap-2">
              Explore SOPs <ArrowRight size={16} />
              </button>
              </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-10 relative">
            <span className="absolute -top-4 left-6 bg-[#ddbc52] text-xs font-medium px-4 py-1 rounded-full">
              Industry Approved
            </span>

            <GraduationCap className="text-[#d4af37] mb-8" size={28} />

            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Luxury-Grade Staff Training
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Premium hotels inspired training modules that elevate your team from service providers to hospitality professionals
            </p>

            <ul className="space-y-4 text-sm text-gray-700">
              {[
                "Hospitality excellence programs",
                "Service standards training",
                "Leadership development",
                "Performance tracking systems",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/services">
            <button className="mt-10 text-sm font-medium text-[#b9982b] flex items-center gap-2">
              View Training <ArrowRight size={16} />
              </button>
              </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-10 relative">
            <span className="absolute -top-4 left-6 bg-[#ddbc52] text-xs font-medium px-4 py-1 rounded-full">
              ₹2.3L+ Avg. Recovery
            </span>

            <BarChart3 className="text-[#d4af37] mb-8" size={28} />

            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              14days Profit Gap Audit
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Rapid operational assessment that identifies revenue leakage,
              efficiency gaps, and growth opportunities within 14 days.
            </p>

            <ul className="space-y-4 text-sm text-gray-700">
              {[
                "Complete operations analysis",
                "Revenue recovery identification",
                "Team performance evaluation",
                "Actionable improvement roadmap",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-green-800 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/contact">
            <button className="mt-10 text-sm font-medium text-[#b9982b] flex items-center gap-2">
              Request Audit <ArrowRight size={16} />
              </button>
              </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-5 sm:mt-20">
          <Link to="/services">
          <button className="border border-gray-900 px-8 py-4 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-900 hover:text-white transition cursor-pointer">
            View All Services<ArrowRight size={16} />
            </button>
            </Link> 
        </div>
      </div>
    </section>
  );
};

export default ExcellenceFramework;
