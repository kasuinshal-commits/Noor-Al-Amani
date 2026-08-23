import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/sections/CTASection';
import { companyDetails, aboutContent, stats } from '../data/siteContent';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | {companyDetails.name}</title>
        <meta name="description" content={`Learn about ${companyDetails.name}'s history, mission, and vision in the wholesale trading industry.`} />
      </Helmet>

      <section className="bg-primary pt-32 pb-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About Our Company</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Discover our journey, our values, and the people behind our success.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Our History</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {aboutContent.history}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-neutral-100 pt-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-32 h-32 text-primary" />
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                {aboutContent.mission}
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Lightbulb className="w-32 h-32 text-secondary" />
              </div>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                {aboutContent.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading title="Leadership" subtitle="Guiding our company towards excellence and sustainable growth." />
          
          <div className="max-w-sm mx-auto mt-12 bg-neutral-light rounded-2xl overflow-hidden border border-neutral-200">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-primary/30" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">{companyDetails.contactPerson}</h3>
              <p className="text-secondary font-medium mb-4">Key Contact / Representative</p>
              <p className="text-gray-600">
                Driving our vision forward and ensuring the highest standards of service for all our wholesale and B2B partners across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
