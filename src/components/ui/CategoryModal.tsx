import { X, Mail } from 'lucide-react';
import { useEffect } from 'react';
import { companyDetails } from '../../data/siteContent';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: any;
}

export function CategoryModal({ isOpen, onClose, category }: CategoryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !category) return null;

  const whatsappUrl = `https://wa.me/${companyDetails.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in bulk ordering from the ${category.title} category. Could you provide a catalog and pricing?`)}`;
  const mailUrl = `mailto:${companyDetails.email}?subject=${encodeURIComponent(`Wholesale Enquiry: ${category.title}`)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-fade-in">
      <div className="absolute inset-0 bg-neutral-dark/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-[#FAFAFA] w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative flex-shrink-0">
          <img 
            src={category.image} 
            alt={category.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">{category.title}</h2>
            <p className="text-white/90 text-base leading-relaxed">{category.description}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">Interested in {category.title}?</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Our B2B sales team is ready to assist you with bulk orders, container shipments, and specialized sourcing for this category. Contact us directly to receive competitive wholesale pricing and product catalogs.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 px-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            
            <a 
              href={mailUrl}
              className="w-full flex items-center justify-center gap-3 bg-neutral-light border border-neutral-200 text-neutral-dark font-semibold py-4 px-6 rounded-xl hover:bg-neutral-100 hover:border-neutral-300 transition-all"
            >
              <Mail className="w-6 h-6 text-gray-600" />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
