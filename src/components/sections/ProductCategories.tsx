import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { productCategories } from '../../data/siteContent';
import { Card, CardContent } from '../ui/Card';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CategoryModal } from '../ui/CategoryModal';

export function ProductCategories({ limit }: { limit?: number }) {
  const displayCategories = limit ? productCategories.slice(0, limit) : productCategories;
  
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Product Categories" 
          subtitle="A comprehensive range of wholesale goods sourced globally to meet your business needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayCategories.map((category, index) => {
            const IconComponent = (Icons as any)[category.icon] || Icons.Box;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  onClick={() => setSelectedCategory(category)}
                  className="h-full group hover:shadow-xl transition-all duration-300 border-neutral-100 cursor-pointer overflow-hidden hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:text-secondary transition-colors">
                      View Category <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CategoryModal 
        isOpen={!!selectedCategory} 
        onClose={() => setSelectedCategory(null)} 
        category={selectedCategory} 
      />
    </section>
  );
}
