const Journey = () => {
  return (
    <section className="bg-[#f7f4ee] py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-[#120f07d4]">
            The Journey
          </h2>
          <p className="mt-2 md:mt-4 font-sans text-sm md:text-md text-gray-600">
            From hospitality heritage to operational excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - Hidden on mobile, visible on md and above */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300 -translate-x-1/2" />

          {/* Item 1 */}
          <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right order-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 md:inline-block md:text-right max-w-lg mx-auto md:mx-0">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900">
                  Foundation in Luxury Hospitality
                </h3>
                <p className="mt-1 md:mt-2 font-sans font-medium text-[#9c7c4a] text-sm md:text-base">
                  Institute of Hotel Management, Kolkata
                </p>
                <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  Graduated with honors from India's premier hospitality
                  institution. Specialized in luxury service standards and
                  operational excellence. Developed deep understanding of guest
                  experience architecture.
                </p>
              </div>
            </div>

            {/* Dot Container */}
            <div className="relative w-full md:w-auto flex justify-center order-2 my-4 md:my-0">
              {/* Mobile: Simple dot */}
              <div className="md:hidden w-4 h-4 bg-[#ebc167] rounded-full border-4 border-white" />

              {/* Desktop: Centered dot with absolute positioning */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
            </div>

            {/* Empty space for right side items on desktop */}
            <div className="hidden md:block md:w-1/2 order-3"></div>
          </div>

          {/* Item 2 */}
          <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row md:items-center">
            {/* Empty space for left side on desktop */}
            <div className="hidden md:block md:w-1/2 order-1"></div>

            {/* Dot Container */}
            <div className="relative w-full md:w-auto flex justify-center order-2 my-4 md:my-0">
              {/* Mobile: Simple dot */}
              <div className="md:hidden w-4 h-4 bg-[#ebc167] rounded-full border-4 border-white" />

              {/* Desktop: Centered dot with absolute positioning */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
            </div>

            <div className="md:w-1/2 md:pl-12 order-1 md:order-3">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 max-w-lg mx-auto md:mx-0">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900">
                  Taj Pedigree From Management Trainee to Head of Food &
                  Beverage
                </h3>
                <p className="mt-1 md:mt-2 font-sans font-medium text-[#9c7c4a] text-sm md:text-base">
                  Taj Hotels, Mumbai, Delhi, Bangalore, Bhopal, Gwalior, Jim
                  Corbett
                </p>
                <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  Led F&B operations across multiple luxury properties. Managed
                  teams of 50+ staff. Implemented systematic processes that
                  improved efficiency by 40% while maintaining five-star service
                  standards.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative mb-12 md:mb-24 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right order-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 md:inline-block md:text-right max-w-lg mx-auto md:mx-0">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900">
                  Business Strategy & Systems
                </h3>
                <p className="mt-1 md:mt-2 font-sans font-medium text-[#9c7c4a] text-sm md:text-base">
                  Masters' Union School of Business
                </p>
                <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  Pursued advanced business education focusing on operations
                  strategy and scaling frameworks. Developed the Luxury Machine
                  methodology combining hospitality excellence with business
                  systems.
                </p>
              </div>
            </div>

            {/* Dot Container */}
            <div className="relative w-full md:w-auto flex justify-center order-2 my-4 md:my-0">
              {/* Mobile: Simple dot */}
              <div className="md:hidden w-4 h-4 bg-[#ebc167] rounded-full border-4 border-white" />

              {/* Desktop: Centered dot with absolute positioning */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
            </div>

            {/* Empty space for right side items on desktop */}
            <div className="hidden md:block md:w-1/2 order-3"></div>
          </div>

          {/* Item 4 */}
          <div className="relative flex flex-col md:flex-row md:items-center">
            {/* Empty space for left side on desktop */}
            <div className="hidden md:block md:w-1/2 order-1"></div>

            {/* Dot Container */}
            <div className="relative w-full md:w-auto flex justify-center order-2 my-4 md:my-0">
              {/* Mobile: Simple dot */}
              <div className="md:hidden w-4 h-4 bg-[#ebc167] rounded-full border-4 border-white" />

              {/* Desktop: Centered dot with absolute positioning */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ebc167] rounded-full border-6 border-white" />
            </div>

            <div className="md:w-1/2 md:pl-12 order-1 md:order-3">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 max-w-lg mx-auto md:mx-0">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-900">
                  Building Movish Hospitality
                </h3>
                <p className="mt-1 md:mt-2 font-sans font-medium text-[#9c7c4a] text-sm md:text-base">
                  Founder & Chief Operations Architect
                </p>
                <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                  Founded Movish to bring systematic operational excellence to
                  scaling restaurants. Transforming establishments across India.
                  Created proprietary frameworks for staff training, SOP
                  development, and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
