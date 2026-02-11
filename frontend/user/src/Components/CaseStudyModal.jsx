import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudyModal = ({ isOpen, onClose, study }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !study) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-500 hover:text-gray-900 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {(study.tags || []).map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#c59a2a] text-white text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 
                className="text-3xl md:text-4xl font-playfair font-bold [&>p]:inline [&>p]:m-0"
                dangerouslySetInnerHTML={{ __html: study.title }}
              />
            </div>
          </div>

          <div className="p-8 sm:p-10">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium mb-8 border-b pb-6">
              {(study.meta || []).map((m, i) => (
                 <div key={i} className="flex items-center gap-2">
                    {m}
                 </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {(study.stats || []).map((stat, i) => (
                <div key={i} className="text-center p-4 bg-[#f8f5ef] rounded-xl">
                  <p className="text-2xl font-bold text-[#c59a2a] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-gray-600 mb-10">
                 {/*  Use only description as requested */}
                <div 
                    className="whitespace-pre-line leading-relaxed prose prose-lg max-w-none text-gray-600 prose-p:text-gray-600 prose-headings:font-serif prose-headings:text-[#2b2b2b] prose-a:text-[#c59a2a] prose-li:marker:text-[#c59a2a]"
                    dangerouslySetInnerHTML={{ __html: study.description }}
                />
            </div>


            {/* CTA Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center border-t pt-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#c59a2a] hover:bg-[#b38b24] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Schedule Strategic Discussion
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
