import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyModal from "../CaseStudyModal";

const iconMap = {
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Clock,
};

const Article = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState(null);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/blog/list");
        if (response.data.success) {
          setStudies(response.data.blogs.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudies();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % studies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + studies.length) % studies.length);
  };

  const currentStudy = studies[currentIndex];

  return (
    <section className="bg-[#f7f4ee] py-10 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center text-[#2b2b2b]">
          Real Results. Real Restaurants.
        </h2>

        <p className="text-center text-[#555] mt-4 max-w-2xl mx-auto mb-16">
          From struggling operations to scalable success stories.
        </p>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 text-[#c59a2a] animate-spin" />
          </div>
        ) : studies.length > 0 ? (
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]"
              >
                {/* LEFT IMAGE */}
                <div className="h-64 md:h-full relative overflow-hidden">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="p-8 md:p-12 flex flex-col">
                  {/* MAIN CONTENT */}
                  <div className="flex-1">
                    <h3 
                        className="text-2xl md:text-3xl font-serif font-bold text-[#2b2b2b] mb-6 sm:pt-10 [&>p]:inline [&>p]:m-0"
                        dangerouslySetInnerHTML={{ __html: currentStudy.title }}
                    />

                    <div className="flex flex-wrap gap-3 mb-6 sm:pt-4">
                      {(currentStudy.tags || []).map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#f0e9d8] text-[#b68c2d] px-3 py-1 rounded-full font-bold text-xs uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div 
                        className="text-[#555] leading-relaxed line-clamp-9 mb-15 sm:pt-4 prose prose-sm max-w-none prose-p:m-0 prose-headings:m-0"
                        dangerouslySetInnerHTML={{ __html: currentStudy.description }}
                    />

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 py-4">
                      {(currentStudy.stats || [])
                        .map((stat, idx) => {
                          const Icon = iconMap[stat.icon] || TrendingUp;
                          return (
                            <div key={idx} className="text-center flex flex-col items-center gap-1">
                              <Icon className="h-5 w-5 text-[#c59a2a]" />
                              <div>
                                <p className="text-lg font-bold text-[#2b2b2b]">
                                  {stat.value}
                                </p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">
                                  {stat.label}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* FOOTER — FIXED AT BOTTOM */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to="/case-studies"
                      className="text-[#b68c2d] font-bold text-sm flex items-center gap-2 group"
                    >
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
                      >
                        <ArrowLeft size={18} />
                      </button>

                      <div className="flex gap-1">
                        {studies.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all ${
                              idx === currentIndex
                                ? "w-6 bg-[#b68c2d]"
                                : "w-1.5 bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No case studies available.
          </div>
        )}
      </div>

      <CaseStudyModal
        isOpen={!!selectedStudy}
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </section>
  );
};

export default Article;
