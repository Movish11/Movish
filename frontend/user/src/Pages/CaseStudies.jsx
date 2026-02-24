import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  TrendingUp,
  Rocket,
  Loader2,
} from "lucide-react";
import CaseStudyCard from "../Components/CaseStudyCard";
import CaseStudyModal from "../Components/CaseStudyModal";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudy, setSelectedStudy] = useState(null);

  const fetchStudies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blog/list`);
      if (response.data.success) {
        setStudies(response.data.blogs);
      }
    } catch (error) {
      console.error("Error fetching case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#f7f4ee]">
        <Loader2 className="h-8 w-8 text-[#c59a2a] animate-spin" />
        <p className="text-gray-500 font-medium">Loading success stories...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#f7f4ee] py-14 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-sm tracking-widest text-[#c59a2a] font-semibold mb-4">
            PROVEN RESULTS
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2a2a2a]">
            Transformation Stories That{" "}
            <span className="text-[#c59a2a]">Speak for Themselves</span>
          </h2>
          <p className="mt-6 text-[#6b6b6b] text-lg">
            Real restaurants. Real challenges. Real results. Explore how we’ve
            helped hospitality businesses across India achieve operational
            excellence and measurable growth through our systematic “Luxury
            Machine” approach.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {studies.length > 0 ? (
            studies.map((item, i) => (
              <CaseStudyCard 
                key={item.id || i}
                study={item}
                onViewDetails={setSelectedStudy}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
                <p className="text-gray-400">No case studies published yet.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto mt-8 sm:mt-32">
          <div className="flex justify-center mb-6">
            <Rocket className="h-12 w-12 text-[#c59a2a]" />
          </div>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-[#6b6b6b] mb-10 text-lg">
            Join the growing list of hospitality businesses that have
            transformed their operations with Movish. Let’s discuss how we can
            help you achieve similar results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
            <button className="bg-[#c59a2a] hover:bg-[#b38b24] text-white px-10 py-5 rounded-2xl font-medium shadow-lg shadow-[#c59a2a]/20 flex items-center gap-2 justify-center transition-all hover:-translate-y-1 cursor-pointer">
              Schedule Strategic Discussion <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/services">
            <button className="border-2 border-[#2a2a2a] px-10 py-5 rounded-2xl font-medium flex items-center gap-2 justify-center hover:bg-[#2a2a2a] hover:text-white transition-all hover:-translate-y-1 cursor-pointer">
              Explore Our Services ✨
              </button>
              </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
        <CaseStudyModal 
            isOpen={!!selectedStudy}
            study={selectedStudy}
            onClose={() => setSelectedStudy(null)}
        />
    </section>
  );
}
