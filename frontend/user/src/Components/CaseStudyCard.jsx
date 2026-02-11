import React from "react";
import { ArrowRight, TrendingUp, Users, Star, BarChart3, Clock } from "lucide-react";

const iconMap = {
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Clock,
};

const CaseStudyCard = ({ study, onViewDetails }) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#c59a2a] shadow-sm uppercase tracking-wider">
           VIEW STUDY
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#c59a2a] font-bold uppercase tracking-wider mb-4">
          {(study.tags || []).map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>

        <h3 
          className="font-playfair text-xl font-bold mb-3 text-gray-900 line-clamp-2 [&>p]:inline [&>p]:m-0"
          dangerouslySetInnerHTML={{ __html: study.title }}
        />

        <div className="text-sm text-gray-400 flex gap-4 mb-4 font-medium">
          {(study.meta || []).map((m, idx) => (
            <span key={idx} className="flex items-center gap-2">
              {idx > 0 && <span className="w-1 h-1 rounded-full bg-gray-200"></span>}
              {m}
            </span>
          ))}
        </div>

        <div 
          className="text-[#6b6b6b] text-sm mb-6 line-clamp-3 prose prose-sm max-w-none prose-p:m-0 prose-headings:m-0"
          dangerouslySetInnerHTML={{ __html: study.description }}
        />

        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-6 border-t pt-6 mb-8">
            {(study.stats || []).slice(0, 2).map((stat, idx) => {
              const Icon = iconMap[stat.icon] || TrendingUp;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#c59a2a]" />
                  <div>
                    <p className="font-bold text-gray-900">{stat.value}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => onViewDetails(study)}
            className="w-full bg-[#2a2a2a] hover:bg-black text-white py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-bold text-sm tracking-wide group"
          >
            View Full Case Study
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
