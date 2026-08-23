import { SectionHeading } from '../ui/SectionHeading';
import { IconCard } from '../ui/IconCard';
import { whyChooseUs } from '../../data/siteContent';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F4EFE6]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="We are committed to delivering the highest standards of service and product quality to our partners."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {whyChooseUs.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.icon] || Icons.CheckCircle;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <IconCard
                  title={feature.title}
                  description={feature.description}
                  Icon={IconComponent}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
