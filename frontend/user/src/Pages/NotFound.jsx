import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ee] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full text-center">
        {/* Decorative Element */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#c59a2a]/10 blur-3xl rounded-full scale-150"></div>
            <div className="relative bg-white p-6 rounded-full shadow-xl shadow-[#c59a2a]/5 border border-[#c59a2a]/10">
              <AlertCircle className="h-16 w-16 text-[#c59a2a]" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="font-playfair text-9xl font-black text-[#2a2a2a] mb-4 opacity-10">
          404
        </h1>
        
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2a2a2a] mb-6 -mt-16 relative">
          Page <span className="text-[#c59a2a]">Not Found</span>
        </h2>

        <p className="text-[#6b6b6b] text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The sanctuary you are looking for has moved or no longer exists. 
          Let's guide you back to our main path.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto bg-[#c59a2a] hover:bg-[#b38b24] text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-[#c59a2a]/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
          >
            <Home className="h-5 w-5" />
            Return to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border-2 border-[#2a2a2a] px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#2a2a2a] hover:text-white transition-all hover:-translate-y-1"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>

        {/* Bottom Brands Decor */}
        <div className="mt-20 pt-10 border-t border-[#2a2a2a]/5">
           <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold mb-6">
            Movish Hospitality
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
