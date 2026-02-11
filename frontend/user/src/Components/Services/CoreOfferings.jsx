import { Check, ArrowRight } from "lucide-react";

import c1 from "../../assets/coreofferings/c1.png";
import c2 from "../../assets/coreofferings/c2.png";
import c3 from "../../assets/coreofferings/c3.png";
import { Link } from "react-router-dom";

export default function CoreOfferings() {
  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-widest text-[#c59a2a] font-semibold mb-4">
            OUR SERVICES
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#120f07d4]">
            Three Core Offerings
          </h2>
          <p className="mt-6 text-[#6b6b6b]">
            Each service designed to address specific operational challenges
            while building toward systematic excellence.
          </p>
        </div>

        {/* Top large card */}
        <div className="group bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl mb-8 sm:mb-16">
          <img
            src={c1}
            alt="Operational SOPs"
            className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="p-10">
            <p className="text-xs tracking-widest text-[#c59a2a] font-semibold mb-3">
              DIGITAL OPERATIONS BIBLE
            </p>
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Operational SOPs
            </h3>
            <p className="text-[#6b6b6b] max-w-3xl mb-6">
              Transform tribal knowledge into systematic excellence.
              Comprehensive standard operating procedures that ensure
              consistency across locations, shifts, and staff changes.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 items-start">
                <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                <span>
                  Complete operational documentation covering all service
                  touchpoints
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                <span>
                  Digital-first format accessible on mobile devices for
                  real-time reference
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                <span>
                  Role-specific checklists and workflows for every position
                </span>
              </li>
            </ul>

            <div className="bg-[#f7f4ee] rounded-xl p-6 flex flex-col md:flex-row justify-between gap-6 mb-8">
              <div>
                <p className="text-xs text-[#6b6b6b]">TYPICAL ROI</p>
                <p className="font-semibold">25–40%</p>
              </div>
              <div>
                <p className="text-xs text-[#6b6b6b]">TIMELINE</p>
                <p className="font-semibold">4–6 Weeks</p>
              </div>
            </div>

            <Link to="/contact">
              <button className="w-full bg-[#c59a2a] hover:bg-[#b38b24] text-white py-4 rounded-xl font-medium flex justify-center items-center gap-2 transition">
                Explore This Service <ArrowRight className="h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 2 */}
          <div className="group bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={c2}
              alt="Performance Audits"
              className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="p-8">
              <p className="text-xs tracking-widest text-[#c59a2a] font-semibold mb-3">
                LUXURY GRADE DEVELOPMENT
              </p>
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Staff Training Modules
              </h3>
              <p className="text-[#6b6b6b] mb-6">
                Build teams that embody your brand promise. Comprehensive
                training programs that transform good staff into exceptional
                hospitality professionals.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 items-start">
                  <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                  <span>
                    Hospitality fundamentals rooted in luxury hotel standards
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                  <span>
                    Service excellence training with emotional intelligence
                    focus
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                  <span>
                    Technical skills development for all operational roles
                  </span>
                </li>
              </ul>

              <div className="bg-[#f7f4ee] rounded-xl p-6 flex justify-between mb-8">
                <div>
                  <p className="text-xs text-[#6b6b6b]">TYPICAL ROI</p>
                  <p className="font-semibold">30–50%</p>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b]">TIMELINE</p>
                  <p className="font-semibold">6–8 Weeks</p>
                </div>
              </div>

              <Link to="/contact">
                <button className="w-full bg-[#c59a2a] hover:bg-[#b38b24] text-white py-4 rounded-xl font-medium flex justify-center items-center gap-2 transition">
                  Explore This Service <ArrowRight className="h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <img
              src={c3}
              alt="Performance Audits"
              className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="p-8">
              <p className="text-xs tracking-widest text-[#c59a2a] font-semibold mb-3">
                72-HOUR REVENUE RECOVERY
              </p>
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Performance Audits
              </h3>
              <p className="text-[#6b6b6b] mb-6">
                Identify and fix revenue leaks fast. Comprehensive operational
                audits that uncover hidden opportunities and deliver immediate
                impact.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 items-start">
                  <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                  <span>
                    Complete operational assessment across all revenue centers
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                  <span>Mystery dining experiences with detailed feedback</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Check className="text-[#c59a2a] h-5 w-5 mt-1" />
                  <span>
                    Staff performance evaluation and skill gap analysis
                  </span>
                </li>
              </ul>

              <div className="bg-[#f7f4ee] rounded-xl p-6 flex justify-between mb-8">
                <div>
                  <p className="text-xs text-[#6b6b6b]">TYPICAL ROI</p>
                  <p className="font-semibold">15–35%</p>
                </div>
                <div>
                  <p className="text-xs text-[#6b6b6b]">TIMELINE</p>
                  <p className="font-semibold">2–3 Weeks</p>
                </div>
              </div>

              <Link to="/contact">
                <button className="w-full bg-[#c59a2a] hover:bg-[#b38b24] text-white py-4 rounded-xl font-medium flex justify-center items-center gap-2 transition">
                  Explore This Service <ArrowRight className="h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
