
import { MapPin, Phone, Mail } from "lucide-react";
import { companyDetails } from "../../data/siteContent";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6 inline-flex group">
              <img src="/logo-mark-clean.png" alt="Noor Al Amani Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col justify-center">
                <img src="/logo-text-clean.png" alt="Noor Al Amani" className="h-9 md:h-10 object-contain origin-left brightness-0 invert" />
                <span className="text-[0.65rem] text-gray-400 font-semibold tracking-widest uppercase mt-0.5">Goods Wholesaler L.L.C</span>
              </div>
            </a>
            <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
              Premium general trading and wholesale company in Dubai, specializing in the import, export, and distribution of FMCG globally.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-display relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors text-sm">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary transition-colors text-sm">Products</a></li>
              <li><a href="#distribution" className="text-gray-400 hover:text-secondary transition-colors text-sm">Distribution</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-display relative inline-block">
              Product Categories
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-secondary transition-colors text-sm">Groceries & Packaged Foods</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary transition-colors text-sm">Beverages & Drinks</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary transition-colors text-sm">Household & Cleaning</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary transition-colors text-sm">Personal Care & Hygiene</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary transition-colors text-sm">Spices & Bulk Commodities</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-secondary transition-colors text-sm">Non-Food FMCG</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-display relative inline-block">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">{companyDetails.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href={`tel:${companyDetails.phone}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {companyDetails.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  {companyDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} {companyDetails.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
