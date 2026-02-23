import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { toast } from "react-toastify";

const Forms = ({ formData, onChange }) => {
  const [step, setStep] = useState(1);

  const handleNextToAssessment = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.challenges) {
      toast.error("Please fill all required fields before proceeding.");
      return;
    }
    // Scroll to Tools section
    const toolsSection = document.getElementById("assessment-tools");
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT FORM */}
        <div className="bg-white font-sans rounded-2xl shadow-sm p-6 sm:p-10">
          <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#120f07d4]">
            Schedule Strategic Discussion
          </h2>
          <p className="text-neutral-600 font-sans mt-2 text-sm sm:text-base">
            Let's discuss how we can transform your restaurant operations
          </p>

          {/* Steps */}
          <div className="flex items-center gap-2 sm:gap-4 mt-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-center gap-2 sm:gap-4">
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium
                  ${
                    step >= n
                      ? "bg-[#c99712] text-white"
                      : "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {n}
                </div>
                {n !== 3 && (
                  <div
                    className={`w-10 sm:w-20 h-[2px] ${
                      step > n ? "bg-[#c99712]" : "bg-neutral-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="mt-10 space-y-6">
              <div>
                <label className="text-sm font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={onChange}
                  placeholder="Enter your full name"
                  className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#c99712]/40"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={onChange}
                  placeholder="your.email@example.com"
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={onChange}
                  placeholder="9876543210"
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div className="flex justify-end pt-6">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#c99712] text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="mt-10 space-y-6">
              <div>
                <label className="text-sm font-medium">
                  Company / Restaurant Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company || ""}
                  onChange={onChange}
                  placeholder="Your restaurant or company name"
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Number of Locations
                </label>
                <select 
                  name="locations"
                  value={formData.locations || "1-2 Locations"}
                  onChange={onChange}
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                >
                  <option value="1–2 Locations">1–2 Locations</option>
                  <option value="3–5 Locations">3–5 Locations</option>
                  <option value="6+ Locations">6+ Locations</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Service Interest
                </label>
                <select 
                  name="serviceInterest"
                  value={formData.serviceInterest || "Operational SOPs – Digital Operations Bible"}
                  onChange={onChange}
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                >
                  <option value="Operational SOPs – Digital Operations Bible">
                    Operational SOPs – Digital Operations Bible
                  </option>
                  <option value="Training & Team Systems">Training & Team Systems</option>
                  <option value="Full Operations Consulting">Full Operations Consulting</option>
                </select>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={() => setStep(1)}
                  className="border px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <ArrowLeft size={16} /> Previous
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="bg-[#c99712] text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="mt-10 space-y-6">
              <div>
                <label className="text-sm font-medium">
                  Describe Your Operational Challenges *
                </label>
                <textarea
                  name="challenges"
                  value={formData.challenges || ""}
                  onChange={onChange}
                  rows={5}
                  placeholder="Tell us about your current operational challenges, growth goals, and what you're looking to achieve..."
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                />
                <p className="text-sm text-red-500 mt-1">
                  Please describe your operational challenges
                </p>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={() => setStep(2)}
                  className="border px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <ArrowLeft size={16} /> Previous
                </button>

                <button 
                  onClick={handleNextToAssessment}
                  className="bg-[#c99712] text-white px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  Proceed to Assessment <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          <p className="text-xs text-neutral-500 mt-10">
            By submitting this form, you agree to receive communications from
            Movish Hospitality. We respect your privacy and will never share
            your information with third parties.
          </p>
        </div>

        {/* RIGHT CONTACT CARD */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 h-fit">
          <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-[#120f07d4]">
            Get in Touch
          </h3>
          <p className="text-neutral-600 font-sans mt-2 text-sm sm:text-base">
            Ready to transform your restaurant operations? Reach out
            through any of these channels.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4 items-start">
              <Mail className="text-[#c99712]" />
              <div>
                <p className="text-sm text-neutral-500">Email</p>
                <p className="font-medium">connect@movish.in</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone className="text-[#c99712]" />
              <div>
                <p className="text-sm text-neutral-500">Phone</p>
                <p className="font-medium">+91 7091659700</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MapPin className="text-[#c99712]" />
              <div>
                <p className="text-sm text-neutral-500">Office</p>
                <p className="font-medium">
                  International Financial Centre, Gurgaon, Haryana
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mt-10 bg-[#f7f4ee]  rounded-xl p-6">
            <h4 className="font-medium mb-3">Office Hours</h4>
            <p className="text-sm text-neutral-600">
              Monday – Friday: 9:00 AM – 6:00 PM IST
            </p>
            <p className="text-sm text-neutral-600">
              Saturday: 10:00 AM – 2:00 PM IST
            </p>
            <p className="text-sm text-neutral-600">Sunday: Closed</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Forms;
