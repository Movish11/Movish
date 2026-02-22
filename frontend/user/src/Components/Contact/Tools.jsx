import React, { useState, useMemo } from "react";

const questions = [
  {
    q: "How consistent is your service quality across different shifts?",
    options: [
      "Highly inconsistent - varies significantly",
      "Somewhat inconsistent - noticeable variations",
      "Mostly consistent - minor variations",
      "Very consistent - standardized across all shifts",
    ],
  },
  {
    q: "Do you have documented Standard Operating Procedures (SOPs)?",
    options: [
      "No documented SOPs",
      "Basic SOPs but not comprehensive",
      "Comprehensive SOPs but not regularly updated",
      "Complete, updated SOPs with regular training",
    ],
  },
  {
    q: "How effective is your staff training program?",
    options: [
      "No formal training program",
      "Basic on-the-job training only",
      "Structured training but inconsistent",
      "Comprehensive, ongoing training program",
    ],
  },
  {
    q: "What is your average staff turnover rate?",
    options: [
      "Over 50% annually",
      "30–50% annually",
      "15–30% annually",
      "Below 15% annually",
    ],
  },
  {
    q: "How do you track operational performance metrics?",
    options: [
      "No systematic tracking",
      "Basic manual tracking",
      "Digital tracking but limited analysis",
      "Comprehensive digital tracking with regular analysis",
    ],
  },
];

const Tools = ({ answers, setAnswers, onSubmit, isSubmitting }) => {
  const [step, setStep] = useState(0);

  // ROI Calculator State
  const [revenue, setRevenue] = useState(500000);
  const [staff, setStaff] = useState(15);
  const [ticket, setTicket] = useState(800);
  const [customers, setCustomers] = useState(625);

  const annualRevenue = revenue * 12;

  const projectedImpact = useMemo(() => {
    const revenueIncrease = annualRevenue * 0.18;
    const costSavings = annualRevenue * 0.1025;
    return {
      revenueIncrease,
      costSavings,
      total: revenueIncrease + costSavings,
      roi: Math.round(((revenueIncrease + costSavings) / annualRevenue) * 100),
    };
  }, [annualRevenue]);

  return (
    <section id="assessment-tools" className="w-full bg-[#f7f4ee] py-8 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#120f07d4] mb-3">
            Free Tools & Resources
          </h2>
          <p className="text-gray-600">
            Explore our interactive tools to understand your operational
            potential
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Assessment Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-playfair font-bold">
                Free Operational Assessment
              </h3>
              <span className="text-sm text-gray-500">
                {step + 1} of {questions.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-[#d6ad3d] rounded-full transition-all"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h4 className="font-medium mb-4 text-gray-900">
              {questions[step].q}
            </h4>

            <div className="space-y-3 font-sans">
              {questions[step].options.map((opt, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl border cursor-pointer transition ${
                    answers[step] === idx
                      ? "border-[#d6ad3d] bg-[#fdf8ec]"
                      : "border-[#eadfcd] bg-[#fffdf9]"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q-${step}`}
                    checked={answers[step] === idx}
                    onChange={() => {
                      const copy = [...answers];
                      copy[step] = idx;
                      setAnswers(copy);
                    }}
                    className="hidden"
                  />

                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                      answers[step] === idx
                        ? "border-[#d6ad3d]"
                        : "border-[#eadfcd]"
                    }`}
                  >
                    {answers[step] === idx && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#d6ad3d]" />
                    )}
                  </div>

                  <span className="text-gray-700">{opt}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                ← Previous
              </button>

              {step < questions.length - 1 ? (
                <button
                  disabled={answers[step] === null}
                  onClick={() =>
                    setStep((s) => Math.min(questions.length - 1, s + 1))
                  }
                  className="px-6 py-3 rounded-xl bg-[#d6ad3d] text-white font-semibold disabled:opacity-60"
                >
                  Next Question →
                </button>
              ) : (
                <button 
                  onClick={onSubmit}
                  disabled={isSubmitting || answers.includes(null)}
                  className="px-6 py-3 rounded-xl bg-[#c99712] text-white font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request →"}
                </button>
              )}
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-playfair font-bold mb-2">
              ROI Calculator
            </h3>
            <p className="text-md font-sans text-gray-600 mb-6">
              Estimate the potential impact of operational transformation on
              your business
            </p>

            <div className="space-y-4 font-sans">
              <Input
                label="Monthly Revenue (₹)"
                value={revenue}
                onChange={setRevenue}
              />
              <Input
                label="Number of Staff Members"
                value={staff}
                onChange={setStaff}
              />
              <Input
                label="Average Ticket Size (₹)"
                value={ticket}
                onChange={setTicket}
              />
              <Input
                label="Monthly Customers"
                value={customers}
                onChange={setCustomers}
              />
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-600">Projected Annual Impact</p>
              <h4 className="text-3xl font-semibold text-[#d6ad3d] mt-1">
                ₹{Math.round(projectedImpact.total).toLocaleString("en-IN")}
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Stat
                title="Revenue Increase"
                value={`+₹${Math.round(projectedImpact.revenueIncrease).toLocaleString("en-IN")}`}
                valueClass="text-green-800"
                sub="18% average growth"
              />
              <Stat
                title="Cost Savings"
                value={`₹${Math.round(projectedImpact.costSavings).toLocaleString("en-IN")}`}
                valueClass="text-green-800"
                sub="Efficiency improvements"
              />
              <Stat
                title="Current Annual Revenue"
                value={`₹${annualRevenue.toLocaleString("en-IN")}`}
              />
              <Stat
                title="Projected ROI"
                value={`${projectedImpact.roi}%`}
                sub="Within 12 months"
              />
            </div>

            <p className="text-xs text-gray-500 mt-6">
              <span className="font-medium">Based on Industry Benchmarks:</span>{" "}
              These projections are based on average results from our client
              transformations. Actual results may vary based on your specific
              operational context and implementation commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm text-gray-700 mb-1">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#d6ad3d]"
    />
  </div>
);

const Stat = ({ title, value, sub, valueClass = "text-gray-900" }) => (
  <div className="bg-[#f7f4ee] rounded-xl p-4">
    <p className="text-xs text-gray-600">{title}</p>
    <h5 className={`text-lg font-sans font-bold ${valueClass} mt-1`}>
      {value}
    </h5>
    {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
  </div>
);

export default Tools;
