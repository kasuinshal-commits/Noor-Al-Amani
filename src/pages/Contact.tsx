import { Helmet } from 'react-helmet-async';

import { companyDetails } from '../data/siteContent';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | {companyDetails.name}</title>
        <meta name="description" content={`Get in touch with ${companyDetails.name} for wholesale inquiries, B2B partnerships, and distribution.`} />
      </Helmet>

      <section className="bg-primary pt-32 pb-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">We're here to answer any questions about our products and services.</p>
        </div>
      </section>

      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary mb-12 text-center">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Office Address</h4>
                  <p className="text-gray-600 leading-relaxed">{companyDetails.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Phone</h4>
                  <a href={`tel:${companyDetails.phone}`} className="text-gray-600 hover:text-secondary transition-colors">
                    {companyDetails.phoneDisplay} <br/>
                    ({companyDetails.contactPerson})
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Email</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-gray-600 hover:text-secondary transition-colors">
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-primary mb-1">Business Hours</h4>
                  <p className="text-gray-600">{companyDetails.businessHours}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="h-[400px] w-full bg-neutral-200">
        <iframe 
          src={companyDetails.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
        ></iframe>
      </section>
    </>
  );
}
