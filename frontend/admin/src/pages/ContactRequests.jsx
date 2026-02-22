import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin, Briefcase, Trash2, ChevronDown, ChevronUp, Clock, HelpCircle } from "lucide-react";

const ContactRequests = ({ token }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null); // To track which assessment is expanded

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/contact/`, {
        headers: { token },
      });
      if (response.data.success) {
        setRequests(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch contact requests");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact request?")) return;
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact/delete`,
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        fetchRequests(); // Refresh list after deletion
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to delete request");
      console.error(error);
    }
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-pulse space-y-4 w-full max-w-3xl">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-40 bg-gray-200 rounded-2xl w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-gray-900 tracking-tight">
            Contact Requests & Leads
          </h1>
          <p className="text-gray-500 mt-2 font-sans text-sm">
            Manage inquiries and operational assessments from prospective clients.
          </p>
        </div>
        <div className="bg-[#f0ece1] text-[#b88a1e] px-4 py-2 rounded-xl text-sm font-semibold">
          Total Requests: {requests.length}
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
          <Mail className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No Contact Requests</h3>
          <p className="text-gray-500">When users submit the contact form, they will appear here.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header & Main Info */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  {/* Left Column: Personal Info */}
                  <div className="space-y-4 sm:max-w-[50%]">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 font-playfair">
                        {request.name}
                      </h2>
                      {request.createdAt && (
                        <div className="flex items-center text-xs text-gray-400 mt-1 gap-1">
                          <Clock className="w-3 h-3" />
                          <span>
                            {new Date(
                              request.createdAt.seconds
                                ? request.createdAt.seconds * 1000
                                : request.createdAt
                            ).toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4 text-[#b88a1e]" />
                          <a href={`mailto:${request.email}`} className="hover:text-[#b88a1e] transition-colors">
                            {request.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4 text-[#b88a1e]" />
                          <a href={`tel:${request.phone}`} className="hover:text-[#b88a1e] transition-colors">
                            {request.phone}
                          </a>
                        </div>
                    </div>
                  </div>

                  {/* Right Column: Business Info */}
                  <div className="bg-gray-50 rounded-2xl p-4 sm:w-[45%] flex flex-col justify-center space-y-3 border border-gray-100">
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Company</p>
                        <p className="text-sm font-medium text-gray-800">{request.company || 'Not Provided'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Locations</p>
                        <p className="text-sm font-medium text-gray-800">{request.locations || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Primary Interest: <span className="text-[#b88a1e] normal-case bg-[#fdf8ec] px-3 py-1 rounded-full">{request.serviceInterest}</span></p>
                    <div className="mt-4">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Operational Challenges</p>
                      <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
                        {request.challenges}
                      </p>
                    </div>
                </div>

                {/* Actions & Assessment Toggle */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
                  <button
                    onClick={() => toggleExpand(request.id)}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-[#b88a1e] bg-[#fdf8ec] hover:bg-[#b88a1e] hover:text-white transition-all w-full sm:w-auto border border-[#f0ece1]"
                  >
                    <HelpCircle className="w-4 h-4" />
                    {expandedId === request.id ? 'Hide Assessment Data' : 'View Assessment Data'}
                    {expandedId === request.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => handleDelete(request.id)}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-red-600 bg-white border border-gray-200 hover:bg-red-50 hover:border-red-100 hover:text-red-700 transition-all w-full sm:w-auto group"
                  >
                    <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Delete Request
                  </button>
                </div>
              </div>

              {/* Assessment Accordion */}
              {expandedId === request.id && (
                <div className="bg-white border-t border-gray-100 p-6 sm:p-8 animate-in fade-in block">
                  <h4 className="text-lg font-playfair font-semibold mb-6 flex items-center gap-2 text-gray-900 border-b border-gray-400 pb-2">
                    <HelpCircle className="w-5 h-5 text-[#b88a1e]" /> Detailed Operational Assessment
                  </h4>
                  
                  {request.assessmentData && request.assessmentData.length > 0 ? (
                    <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
                      {request.assessmentData.map((item, index) => (
                        <div key={index} className="flex flex-col h-full">
                           <div className="border border-gray-300 border-b-0 rounded-t-xl p-4 sm:p-5 flex-grow">
                             <p className="text-[#b88a1e] text-[10px] font-bold tracking-widest uppercase mb-1">Question {index + 1}</p>
                             <p className="text-sm font-semibold text-gray-900 leading-snug">{item.question}</p>
                           </div>
                           <div className="border border-[#b88a1e] rounded-xl px-4 sm:px-5 py-3 relative bg-white -mt-3 z-10 shrink-0 shadow-sm">
                             <p className="text-[#b88a1e] text-sm font-bold">
                                {item.answer}
                             </p>
                           </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No assessment data was saved with this request.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactRequests;
