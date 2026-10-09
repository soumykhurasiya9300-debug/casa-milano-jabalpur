import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { galleryItems } from '../../data/mockData';

export const GalleryPreview: React.FC = () => {
  const { navigate } = useRouter();
  const { language, t } = useLanguage();

  return (
    <section className="bg-[#111315] py-24 md:py-36 relative overflow-hidden border-t border-[#202428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
              {t.chapters.c9_kicker}
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#EDE9DF]">
              {t.chapters.c9_title}
            </h2>
            <p className="mt-3 text-base text-[#EDE9DF]/70 font-sans max-w-xl">
              {t.chapters.c9_subtitle}
            </p>
          </div>

          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider uppercase text-[#EDE9DF] hover:text-[#C58B58] py-2 transition-colors shrink-0"
          >
            <span>{t.chapters.c9_cta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetrical Editorial Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Item 1: Wide Simulator Rig (7 cols) */}
          <div
            onClick={() => navigate('/gallery')}
            className="md:col-span-7 group relative aspect-[16/10] overflow-hidden border border-[#2A3036] cursor-pointer"
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title_en}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.15] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-[#EDE9DF]">
              {language === 'hi' ? galleryItems[0].title_hi : galleryItems[0].title_en}
            </div>
          </div>

          {/* Item 2: Snooker Ball & Cloth (5 cols) */}
          <div
            onClick={() => navigate('/gallery')}
            className="md:col-span-5 group relative aspect-[16/10] md:aspect-auto md:h-full overflow-hidden border border-[#2A3036] cursor-pointer"
          >
            <img
              src={galleryItems[1].image}
              alt={galleryItems[1].title_en}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-[#EDE9DF]">
              {language === 'hi' ? galleryItems[1].title_hi : galleryItems[1].title_en}
            </div>
          </div>

          {/* Item 3: PS5 Station (4 cols) */}
          <div
            onClick={() => navigate('/gallery')}
            className="md:col-span-4 group relative aspect-[4/3] overflow-hidden border border-[#2A3036] cursor-pointer"
          >
            <img
              src={galleryItems[2].image}
              alt={galleryItems[2].title_en}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-[#EDE9DF]">
              {language === 'hi' ? galleryItems[2].title_hi : galleryItems[2].title_en}
            </div>
          </div>

          {/* Item 4: Foosball (4 cols) */}
          <div
            onClick={() => navigate('/gallery')}
            className="md:col-span-4 group relative aspect-[4/3] overflow-hidden border border-[#2A3036] cursor-pointer"
          >
            <img
              src={galleryItems[3].image}
              alt={galleryItems[3].title_en}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-[#EDE9DF]">
              {language === 'hi' ? galleryItems[3].title_hi : galleryItems[3].title_en}
            </div>
          </div>

          {/* Item 5: Café & Lounge (4 cols) */}
          <div
            onClick={() => navigate('/gallery')}
            className="md:col-span-4 group relative aspect-[4/3] overflow-hidden border border-[#2A3036] cursor-pointer"
          >
            <img
              src={galleryItems[5].image}
              alt={galleryItems[5].title_en}
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-[#EDE9DF]">
              {language === 'hi' ? galleryItems[5].title_hi : galleryItems[5].title_en}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
