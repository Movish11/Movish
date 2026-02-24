import { GraduationCap, Building2, ShieldCheck, BarChart3 } from "lucide-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Hotels = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/brand`);
        if (response.data.success) {
          // Sort redundantly for safety: latest at the end (Ascending)
          const sorted = [...response.data.data].sort((a, b) => {
            const getT = (v) => {
              if (!v) return 0;
              if (typeof v === 'number') return v;
              if (v.seconds !== undefined) return v.seconds * 1000 + (v.nanoseconds ? v.nanoseconds / 1000000 : 0);
              const d = new Date(v);
              return isNaN(d.getTime()) ? 0 : d.getTime();
            };
            return getT(a.createdAt) - getT(b.createdAt);
          });
          setBrands(sorted);
        }
      } catch (error) {
        console.error("Failed to fetch brands", error);
      }
    };
    fetchBrands();
  }, []);

  return (
    <section className="bg-[#f7f4ee] py-8 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-playfair font-bold text-[#120f07d4] ">
          Trusted by India&apos;s Leading Hospitality Brands
        </h2>

        <p className="text-center font-sans max-w-2xl mx-auto mt-6 text-gray-600">
          We establish robust systems and trained teams to streamline operations, enhance guest connection, and successfully scale hospitality brands.
        </p>

        {/* Logos */}
        {brands.length > 0 && (
          <div className="mt-15 flex flex-wrap justify-center gap-4 items-center">
            {brands.map((brand, index) => (
              <div
                key={brand.id || index}
                className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-md transition w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(14.28%-1rem)] min-w-[140px]"
              >
                <img
                  src={brand.image}
                  alt={`Hotel ${index + 1}`}
                  className="h-25 w-25 rounded-xl object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* Credentials label */}
        <div className="mt-8 sm:mt-28 flex items-center justify-center gap-2 text-md text-gray-600">
          <ShieldCheck size={20} />
          <span>Credentials & Recognition</span>
        </div>

        {/* Second heading */}
        <h3 className="text-center text-4xl font-playfair font-bold text-[#120f07d4] mt-2 sm:mt-6">
          Built on Hospitality Excellence
        </h3>

        {/* Credentials grid */}
        <div className=" mt-8 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
              <GraduationCap size={34} className="text-[#d4af37]" />
            </div>
            <h4 className="font-bold font-sans text-gray-900">
              Operational Excellence
            </h4>
            <p className="text-sm text-gray-600 mt-2 mx-4">
              Lean Six Sigma Certified (Green & Yellow Belt) DMAIC-led
              optimisation across hospitality ecosystems, eliminating waste,
              tightening kitchen-to-table workflows, and improving ROI with
              measurable impact.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
              <Building2 size={34} className="text-[#d4af37]" />
            </div>
            <h4 className="font-bold font-sans text-gray-900">Legacy Leadership</h4>
            <p className="text-sm text-gray-600 mt-2 mx-4">
              Leading Premier Luxury F&B Portfolio Hands-on experience managing
              multi-crore P&Ls and designing service models for premium and
              ultra-high-net-worth clientele.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
              <ShieldCheck size={34} className="text-[#d4af37]" />
            </div>
            <h4 className="font-bold font-sans text-gray-900">Strategic Scale</h4>
            <p className="text-sm text-gray-600 mt-2 mx-4">
              Business Strategist & Advanced Management Training Moving beyond
              “management” into “architecting.” We design systems that allow
              founders to step out of daily firefighting and focus on growth.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
              <BarChart3 size={34} className="text-[#d4af37]" />
            </div>
            <h4 className="font-bold font-sans text-gray-900">
              Human Capital Strategy
            </h4>
            <p className="text-sm text-gray-600 mt-2 mx-4">
              Organisational Culture & Experience Design Transforming
              labour-heavy operations into high-retention, high-performance
              teams through structured SOPs and executive-grade training
              frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotels;
