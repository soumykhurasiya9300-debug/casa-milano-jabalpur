import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { packageOffers } from '../../data/mockData';

export const EventsOffersPreview: React.FC = () => {
  const { navigate } = useRouter();
  const { language, t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#111315] via-[#202428] to-[#111315] py-24 md:py-36 relative overflow-hidden border-t border-[#202428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            {t.chapters.c8_kicker}
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {t.chapters.c8_title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.chapters.c8_subtitle}
          </p>

          <div className="mt-3 text-xs text-[#EDE9DF]/60 font-sans">
            Rates and slots customized based on squad size and gaming duration. Advance enquiry recommended.
          </div>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageOffers.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#111315] border border-[#2A3036] hover:border-[#EDE9DF]/40 transition-colors p-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#C58B58] mb-2">
                    {language === 'hi' ? pkg.badge_hi : pkg.badge_en}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#EDE9DF]">
                    {language === 'hi' ? pkg.title_hi : pkg.title_en}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#EDE9DF]/70 font-sans leading-relaxed">
                  {language === 'hi' ? pkg.desc_hi : pkg.desc_en}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#202428]">
                  {(language === 'hi' ? pkg.benefits_hi : pkg.benefits_en).map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-[#EDE9DF]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#C58B58] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => navigate('/book', { focus: pkg.id })}
                  className="w-full bg-[#202428] hover:bg-[#2A3036] text-[#EDE9DF] text-xs font-bold tracking-wider uppercase py-3 border border-[#2A3036] flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Enquire This Plan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
