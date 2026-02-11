import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const Forms = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="bg-[#fdfcf9] py-8 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT FORM */}
        <div className="bg-white font-sans rounded-2xl shadow-sm p-10">
          <h2 className="font-playfair font-bold text-3xl text-[#120f07d4]">
            Schedule Strategic Discussion
          </h2>
          <p className="text-neutral-600 font-sans mt-2">
            Let's discuss how we can transform your restaurant operations
          </p>

          {/* Steps */}
          <div className="flex items-center gap-4 mt-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-center gap-4">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium
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
                    className={`w-20 h-[2px] ${
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
                  placeholder="Your restaurant or company name"
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Number of Locations
                </label>
                <select className="mt-2 w-full border rounded-lg px-4 py-3">
                  <option>1–2 Locations</option>
                  <option>3–5 Locations</option>
                  <option>6+ Locations</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Service Interest
                </label>
                <select className="mt-2 w-full border rounded-lg px-4 py-3">
                  <option>
                    Operational SOPs – Digital Operations Bible
                  </option>
                  <option>Training & Team Systems</option>
                  <option>Full Operations Consulting</option>
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
                  rows={5}
                  placeholder="Tell us about your current operational challenges, growth goals, and what you're looking to achieve..."
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                />
                <p className="text-sm text-red-500 mt-1">
                  Please describe your operational challenges
                </p>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg flex gap-3">
                <input type="checkbox" />
                <div>
                  <p className="font-medium">
                    Include Free Operational Assessment
                  </p>
                  <p className="text-sm text-neutral-600">
                    Complimentary 30-minute assessment to identify
                    immediate improvement opportunities
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={() => setStep(2)}
                  className="border px-6 py-3 rounded-lg flex items-center gap-2"
                >
                  <ArrowLeft size={16} /> Previous
                </button>

                <button className="bg-[#c99712] text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  Submit Request <ArrowRight size={16} />
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
        <div className="bg-white rounded-2xl shadow-sm p-10 h-fit">
          <h3 className="font-playfaair font-bold text-3xl text-[#120f07d4]">
            Get in Touch
          </h3>
          <p className="text-neutral-600 font-sans mt-2">
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
