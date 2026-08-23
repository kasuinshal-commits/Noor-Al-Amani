import { Helmet } from 'react-helmet-async';
import { ProductCategories } from '../components/sections/ProductCategories';
import { CTASection } from '../components/sections/CTASection';
import { companyDetails } from '../data/siteContent';

export function Products() {
  return (
    <>
      <Helmet>
        <title>Our Products | {companyDetails.name}</title>
        <meta name="description" content="Explore our extensive range of wholesale general goods, FMCG, household items, and more." />
      </Helmet>

      <section className="bg-primary pt-32 pb-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Premium wholesale goods sourced to meet the demands of your retail business.</p>
        </div>
      </section>

      <ProductCategories />

      <CTASection />
    </>
  );
}
