import founderImg from "../../assets/founders/f2.png";

const Hero = () => {
  return (
    <section className="bg-[#fdfcf9] py-16 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-[#c9a24d] mb-4">
            Founder Story
          </p>

          <h1 className="text-5xl font-playfair font-bold text-[#120f07d4] mb-6">
            Ankita Kumari
          </h1>

          <p className="text-xl font-sans text-[#ba974d] mb-6">
            Hospitality-bred. Business-driven.
          </p>

          <p className="text-gray-600 font-sans leading-relaxed max-w-xl">
            From the corridors of India's most prestigious hospitality
            institutions to building systematic excellence for scaling
            restaurants, this is the story of turning luxury service principles
            into operational machinery.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="relative rounded-2xl shadow-2xl">
            {/* Image */}
            <img
              src={founderImg}
              alt="Founder"
              className="w-[420px] h-[520px] object-cover overflow-hidden rounded-2xl "
            />

            {/* Overlay Card */}
            <div className="absolute -bottom-6 -right-5 sm:-right-8 bg-white/95 backdrop-blur rounded-xl px-6 py-4 shadow-lg border border-gray-100">
              <p className="text-3xl font-semibold text-gray-900 leading-none">
                8+
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Years in Luxury Hospitality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
