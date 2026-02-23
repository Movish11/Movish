import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Movish Logo" className="w-10 h-10 object-contain" />
              <div>
                <h2 className="text-xl font-semibold text-white font-['Yeseva_One']">Movish</h2>
                <p className="text-[10px] tracking-widest text-gray-400">
                  HOSPITALITY
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-md">
              India&apos;s premier restaurant operations consultancy. We build
              the systems that run your business and the teams that grow your
              brand.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>connect@movish.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 7091659700</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>International Financial Centre, Gurgaon, Haryana</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider">
              SERVICES
            </h3>
            <ul className="space-y-4 text-sm">
              <li>Digital Operations Bible</li>
              <li>Staff Training Modules</li>
              <li>Performance Audits</li>
              <li>Consultation Packages</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider">
              COMPANY
            </h3>
            <ul className="space-y-4 text-sm">
              <li>About Movish</li>
              <li>Founder Story</li>
              <li>Case Studies</li>
              <li>Insights Hub</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider">
              RESOURCES
            </h3>
            <ul className="space-y-4 text-sm">
              <li>Free Assessment</li>
              <li>Operational Templates</li>
              <li>Industry Benchmarks</li>
              <li>Blog & Articles</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider">
              CONNECT
            </h3>
            <ul className="space-y-4 text-sm">
              <li>Schedule Consultation</li>
              <li>Contact Us</li>
              <li>LinkedIn</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <p>© 2026 Movish Hospitality. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
