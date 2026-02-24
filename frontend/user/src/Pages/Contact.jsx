import React, { useState } from 'react'
import Hero from '../Components/Contact/Hero'
import Forms from '../Components/Contact/Forms'
import Stats from '../Components/Contact/Stats'
import LuxuryMachine from '../Components/Contact/LuxuaryMachine'
import Tools from '../Components/Contact/Tools'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { CheckCircle2, AlertTriangle } from 'lucide-react'

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { width, height } = useWindowSize();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showValidationErrorPopup, setShowValidationErrorPopup] = useState(false);

  React.useEffect(() => {
    if (location.hash === "#assessment") {
      const element = document.getElementById("assessment");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    locations: "1–2 Locations",
    serviceInterest: "Operational SOPs – Digital Operations Bible",
    challenges: ""
  });
  
  // We'll pass the 5 default empty answers down to Tools
  const [assessmentAnswers, setAssessmentAnswers] = useState(Array(5).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitContactWrapper = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.challenges) {
      setShowValidationErrorPopup(true);
      return;
    }

    if (assessmentAnswers.includes(null)) {
      toast.error("Please answer all 5 questions in the Operational Assessment.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Map standard questions array to match the submitted answers
      const questionsData = [
        "How consistent is your service quality across different shifts?",
        "Do you have documented Standard Operating Procedures (SOPs)?",
        "How effective is your staff training program?",
        "What is your average staff turnover rate?",
        "How do you track operational performance metrics?",
      ];

      const mappedAnswers = assessmentAnswers.map((answerIndex, qIndex) => ({
        question: questionsData[qIndex],
        answerIndex // Backend can determine string value, or we can send string if we replicate the options array
      }));

      // Let's send the raw indices to backend, and we'll map them there or format them simply 
      // Actually, passing strings is simpler for the backend since it doesn't need to know the question details
      const optionsArrays = [
        [
          "Highly inconsistent - varies significantly",
          "Somewhat inconsistent - noticeable variations",
          "Mostly consistent - minor variations",
          "Very consistent - standardized across all shifts",
        ],
        [
          "No documented SOPs",
          "Basic SOPs but not comprehensive",
          "Comprehensive SOPs but not regularly updated",
          "Complete, updated SOPs with regular training",
        ],
        [
          "No formal training program",
          "Basic on-the-job training only",
          "Structured training but inconsistent",
          "Comprehensive, ongoing training program",
        ],
        [
          "Over 50% annually",
          "30–50% annually",
          "15–30% annually",
          "Below 15% annually",
        ],
        [
          "No systematic tracking",
          "Basic manual tracking",
          "Digital tracking but limited analysis",
          "Comprehensive digital tracking with regular analysis",
        ]
      ];

      const stringAnswers = assessmentAnswers.map((ansIdx, i) => ({
        question: questionsData[i],
        answer: optionsArrays[i][ansIdx]
      }));


      const payload = {
        ...formData,
        assessmentData: stringAnswers
      };

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact/submit`, payload);
      
      if (response.data.success) {
        setShowSuccessPopup(true);
        // Reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          locations: "1–2 Locations",
          serviceInterest: "Operational SOPs – Digital Operations Bible",
          challenges: ""
        });
        setAssessmentAnswers(Array(5).fill(null));

        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate('/');
        }, 4000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit request.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 shadow-xl backdrop-blur-sm">
          <Confetti width={width} height={height} numberOfPieces={400} recycle={false} />
          <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 text-center max-w-sm mx-4 transform scale-100 transition-all">
            <CheckCircle2 className="w-20 h-20 text-[#c99712]" />
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Successfully<br/>Submitted!</h2>
            <p className="text-gray-600 font-sans">Thank you for reaching out to Movish Hospitality. We will be in touch with you shortly.</p>
          </div>
        </div>
      )}

      {showValidationErrorPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 shadow-xl backdrop-blur-sm">
          <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 text-center max-w-sm mx-4 transform scale-100 transition-all">
            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-3xl font-playfair font-bold text-gray-900">Wait a Moment!</h2>
            <p className="text-gray-600 font-sans">Please fill out the main contact form details (Name, Email, Phone, and Challenges) before submitting your operational assessment.</p>
            <button 
              onClick={() => {
                setShowValidationErrorPopup(false);
                const formElement = document.getElementById("main-form");
                if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-[#c99712] transition-colors"
            >
              Okay, I'll fill it
            </button>
          </div>
        </div>
      )}
      <div>
        <Hero />
      <div id="main-form">
        <Forms 
          formData={formData} 
          onChange={handleFormChange} 
        />
      </div>
      <div id="assessment">
        <Tools 
          answers={assessmentAnswers}
          setAnswers={setAssessmentAnswers}
          onSubmit={handleSubmitContactWrapper}
          isSubmitting={isSubmitting}
        />
      </div>
      <Stats />
      <LuxuryMachine/>
    </div>
    </>
  )
}

export default Contact