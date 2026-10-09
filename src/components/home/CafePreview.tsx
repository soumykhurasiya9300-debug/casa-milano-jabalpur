import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, Coffee, Utensils, Sparkles } from 'lucide-react';
import { cafeCategories } from '../../data/mockData';

export const CafePreview: React.FC = () => {
  const { navigate } = useRouter();
  const { language, t } = useLanguage();

  return (
    <section className="bg-[#111315] py-24 md:py-36 relative overflow-hidden border-t border-[#202428]">
      {/* Warm Copper ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C58B58]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            <span>{t.chapters.c7_kicker}</span>
            <span aria-hidden="true">·</span>
            <span>IN-VENUE LOUNGE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {t.chapters.c7_title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.chapters.c7_subtitle}
          </p>

          <div className="mt-4 p-3.5 bg-[#202428]/60 border-l-2 border-[#C58B58] text-xs text-[#EDE9DF]/80">
            {t.cafe.notice}
          </div>
        </div>

        {/* 3 Editorial Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cafeCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-[#202428] border border-[#2A3036] overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title_en}
                    className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202428] via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-[#C58B58]">
                    {idx === 0 && <Coffee className="w-4 h-4" />}
                    {idx === 1 && <Utensils className="w-4 h-4" />}
                    {idx === 2 && <Sparkles className="w-4 h-4" />}
                    <span className="text-[11px] font-sans font-semibold tracking-wider uppercase">
                      {idx === 0 ? "Cold & Hot Brews" : idx === 1 ? "Gamer Fuel" : "Lounge Specials"}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#EDE9DF]">
                    {language === 'hi' ? cat.title_hi : cat.title_en}
                  </h3>

                  <p className="text-xs text-[#EDE9DF]/70 font-sans leading-relaxed">
                    {language === 'hi' ? cat.description_hi : cat.description_en}
                  </p>

                  <div className="pt-2 border-t border-[#2A3036] space-y-1">
                    {cat.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-[#EDE9DF]/60 flex items-center space-x-1.5">
                        <span className="w-1 h-1 bg-[#C58B58] rounded-full" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate('/cafe')}
                  className="w-full text-center py-2.5 bg-[#111315] hover:bg-[#111315]/80 text-[#EDE9DF] text-xs font-semibold tracking-wider uppercase border border-[#2A3036] transition-colors"
                >
                  View Café Offerings
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
