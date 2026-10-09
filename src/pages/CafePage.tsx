import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Coffee, Utensils, Sparkles, MessageSquare } from 'lucide-react';
import { cafeCategories } from '../data/mockData';

export const CafePage: React.FC = () => {
  const { navigate } = useRouter();
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[#202428]">
        <div className="max-w-3xl">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            {t.cafe.badge}
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {t.cafe.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.cafe.subtitle}
          </p>

          <div className="mt-6 p-4 bg-[#202428] border-l-2 border-[#C58B58] text-xs text-[#EDE9DF]/80">
            {t.cafe.notice}
          </div>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative border border-[#2A3036] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80"
            alt="Casa Milano Lounge Café Interior"
            className="w-full aspect-[21/9] object-cover filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#C58B58] font-semibold">
                ARTISANAL SOCIAL EXPERIENCE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE9DF]">
                Play Hard. Savor the Break.
              </h3>
            </div>
            <button
              onClick={() => navigate('/book', { activity: 'cafe-party' })}
              className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 transition-all flex items-center space-x-2 shrink-0"
            >
              <span>Enquire Group Café Slot</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {cafeCategories.map((cat, idx) => (
          <div
            key={cat.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#202428]/50 border border-[#2A3036] p-6 sm:p-10"
          >
            <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden border border-[#2A3036]">
              <img
                src={cat.image}
                alt={cat.title_en}
                className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1]"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2 text-[#C58B58] text-xs font-semibold uppercase tracking-wider">
                {idx === 0 && <Coffee className="w-4 h-4" />}
                {idx === 1 && <Utensils className="w-4 h-4" />}
                {idx === 2 && <Sparkles className="w-4 h-4" />}
                <span>Category 0{idx + 1}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#EDE9DF]">
                {language === 'hi' ? cat.title_hi : cat.title_en}
              </h2>

              <p className="text-sm sm:text-base text-[#EDE9DF]/80 font-sans leading-relaxed">
                {language === 'hi' ? cat.description_hi : cat.description_en}
              </p>

              <div className="pt-3 border-t border-[#2A3036] space-y-2">
                <div className="text-xs font-semibold text-[#EDE9DF]/60 uppercase tracking-wider">
                  Popular Highlights:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#EDE9DF]/80">
                  {cat.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C58B58]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-[#EDE9DF]/50">
                Counter Ordering · Ask the barista for seasonal syrups and pairing suggestions.
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Group Food Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-8 bg-[#202428] border border-[#2A3036] text-center space-y-4 max-w-3xl mx-auto">
          <MessageSquare className="w-8 h-8 text-[#C58B58] mx-auto" />
          <h3 className="font-display text-2xl font-bold text-[#EDE9DF]">
            Hosting a Birthday or Group Gathering?
          </h3>
          <p className="text-xs sm:text-sm text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.cafe.contact_note}
          </p>
          <button
            onClick={() => navigate('/book', { activity: 'group-event' })}
            className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-7 py-3.5 transition-all inline-flex items-center space-x-2"
          >
            <span>Coordinate Group Refreshments</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
