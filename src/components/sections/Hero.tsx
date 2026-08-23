
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { companyDetails } from '../../data/siteContent';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="w-full lg:max-w-6xl animate-fade-in-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 text-white border border-secondary/30 font-semibold text-xs md:text-sm mb-6">
              Welcome to {companyDetails.name}
            </span>
            <h1 className="text-[2rem] leading-[1.2] md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Your Trusted <span className="text-secondary">Wholesale</span><br className="hidden lg:block"/> <span className="text-secondary">Trading</span> Partner in Dubai
            </h1>
            <p className="text-base md:text-xl text-white mb-8 md:mb-10 max-w-2xl leading-relaxed">
              Reliable FMCG sourcing, import, export and wholesale distribution across the UAE and the Middle East.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products">
                <Button size="lg" className="w-full sm:w-auto gap-2 group border border-white">
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                  Get in Touch
                </Button>
              </a>
            </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-secondary/10 rounded-tl-full hidden lg:block" />
    </section>
  );
}
