import {
  ArrowDown,
  Calendar,
  ChartNoAxesColumnIncreasing,
  FileIcon,
  Group,
  Users,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#f7f4ee] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 sm:pt-40 pb-8 sm:pb-24 text-center">
        {/* Top label */}
        <div className="flex font-sans justify-center items-center gap-2 mb-6 text-[12px] tracking-widest text-[#d0a22f] font-semibold">
          <span>✨</span>
          <span className="text-md">THE LUXURY MACHINE APPROACH</span>
        </div>

        {/* Heading */}
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#120f07d4]">
          Systems That Scale,
          <br />
          <span className="text-[#c59a2a]">Teams That Excel</span>
        </h1>

        {/* Description */}
        <p className="mt-8 font-sans max-w-3xl mx-auto text-lg text-[#6b6b6b]">
          Great food isn't enough to scale. You need systems that work when you
          aren't there. Our three core offerings transform restaurant operations
          from reactive chaos to proactive excellence.
        </p>

        {/* Buttons */}
        <div className=" mt-8 sm:mt-12 flex justify-center gap-4 flex-wrap">
          <button className="bg-[#c59a2a] hover:bg-[#b38b24] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition">
            Explore Services
            <ArrowDown className="h-5" />
          </button>
          <Link to="/contact" className="border border-[#2b2b2b] text-[#2b2b2b] px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-black hover:text-white transition">
            Schedule Discussion
            <Calendar className="h-5" />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 pb-8 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="flex justify-center mb-4">
              <FileIcon className="h-6 w-6 text-[#c59a2a]" />
            </div>
            <div className="text-4xl font-semibold text-[#2b2b2b]">500+</div>
            <div className="mt-2 text-sm text-[#6b6b6b]">SOPs Implemented</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-6 w-6 text-[#c59a2a]" />
            </div>
            <div className="text-4xl font-semibold text-[#2b2b2b]">2,000+</div>
            <div className="mt-2 text-sm text-[#6b6b6b]">Staff Trained</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="flex justify-center mb-4">
              <ChartNoAxesColumnIncreasing className="h-6 w-6 text-[#c59a2a]" />
            </div>
            <div className="text-4xl font-semibold text-[#2b2b2b]">35%</div>
            <div className="mt-2 text-sm text-[#6b6b6b]">
              Average Revenue Increase
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
