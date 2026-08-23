
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="py-20 relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-[100px] opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Partner with Us?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Get in touch today to discuss your wholesale requirements and discover how we can help your business grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
              Contact Sales Team
            </Button>
          </a>
          <a href="#products">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
              View Product Catalog
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
