import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { AboutSummary } from '../components/sections/AboutSummary';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ProductCategories } from '../components/sections/ProductCategories';
import { CTASection } from '../components/sections/CTASection';
import { companyDetails, distributionServices } from '../data/siteContent';
import { MapPin, Phone, Mail, Clock, Truck, Globe2, PackageOpen, Building2 } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { IconCard } from '../components/ui/IconCard';
import { motion } from 'framer-motion';

export function Home() {
  const distributionIcons = [Building2, Globe2, PackageOpen, Truck];

  return (
    <>
      <Helmet>
        <title>{companyDetails.name} | General Goods Wholesaler Dubai</title>
        <meta name="description" content={`${companyDetails.name} - ${companyDetails.tagline}. Leading general goods wholesaler and distributor in Dubai.`} />
        <meta name="keywords" content="wholesale, general goods, FMCG, import export, distribution, Dubai, UAE, bulk goods, Nöör Al Amàni" />
        <meta property="og:title" content={`${companyDetails.name} | Top Wholesaler in Dubai`} />
        <meta property="og:description" content="Premium general goods wholesale, import-export, and reliable distribution across the Middle East." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nooralamani.com" />
      </Helmet>
      
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutSummary />
      </div>

      <div id="products">
        <ProductCategories />
      </div>

      <div id="distribution">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading 
              title="Distribution & Services" 
              subtitle="Seamless logistics and supply chain solutions for your business."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
              {distributionServices.map((service, index) => {
                const Icon = distributionIcons[index % distributionIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <IconCard
                      title={service.title}
                      description={service.description}
                      Icon={Icon}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <WhyChooseUs />

      <div id="contact">
        <CTASection />
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
        
        <section className="h-[300px] md:h-[400px] w-full bg-neutral-200">
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
      </div>
    </>
  );
}
