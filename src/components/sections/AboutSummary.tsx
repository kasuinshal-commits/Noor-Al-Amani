
import { motion } from 'framer-motion';

import { ShieldCheck, MapPin, Package } from 'lucide-react';

export function AboutSummary() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                alt="Global Logistics and Wholesale Trade" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10 opacity-20"></div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">About Our Company</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 leading-tight">
              Excellence in General Trading & Wholesale
            </h3>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Nöör Al Amàni Goods Wholesaler L.L.C is a premier general trading and wholesale company based in Dubai. We specialize in the import, export, and distribution of fast-moving consumer goods (FMCG), leveraging our robust network to deliver quality to wholesale buyers regionally.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              <strong className="text-neutral-dark font-semibold">Specialties:</strong> Rice, Turmeric, Organic Spices & Masalas, Honey, Tiles, Cosmetics, and Perfumes.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-neutral-light border border-neutral-200 flex items-center justify-center text-primary flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">Trusted Supply Network</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Reliable sourcing partnerships across key FMCG categories.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-neutral-light border border-neutral-200 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">Dubai-Based Distribution</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Strategically positioned to serve businesses across the UAE and regional markets.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-neutral-light border border-neutral-200 flex items-center justify-center text-primary flex-shrink-0">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-dark mb-1">Wholesale & Bulk Supply</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Flexible sourcing solutions for retailers, distributors and commercial buyers.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
