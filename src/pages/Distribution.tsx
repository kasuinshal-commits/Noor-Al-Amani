import { Helmet } from 'react-helmet-async';
import { CTASection } from '../components/sections/CTASection';
import { companyDetails, distributionServices } from '../data/siteContent';
import { Truck, Globe2, PackageOpen, Building2 } from 'lucide-react';

export function Distribution() {
  const icons = [Building2, Globe2, PackageOpen, Truck];

  return (
    <>
      <Helmet>
        <title>Distribution & Services | {companyDetails.name}</title>
        <meta name="description" content="Discover our robust B2B distribution network, logistics, and wholesale services across the Middle East." />
      </Helmet>

      <section className="bg-primary pt-32 pb-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Distribution & Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Seamless logistics and supply chain solutions for your business.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {distributionServices.map((service, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start mb-12 p-8 rounded-2xl bg-neutral-light border border-neutral-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-secondary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
