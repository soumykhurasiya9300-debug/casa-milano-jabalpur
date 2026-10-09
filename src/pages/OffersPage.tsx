import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { packageOffers } from '../data/mockData';

export const OffersPage: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[#202428]">
        <div className="max-w-3xl">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            VERIFIED PACKAGES & PASSES
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {language === 'hi' ? 'गेमिंग पैकेज और पासेस' : 'Gaming Packages & Passes'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {language === 'hi'
              ? 'ग्रुप हैंगआउट्स, रेसिंग सिमुलेशन सत्र और निजी उत्सवों के लिए तैयार किए गए विशेष पैकेज। अपनी आवश्यकताओं के अनुसार स्लॉट पूछताछ भेजें।'
              : 'Tailored gaming sessions designed for friend squads, focused racing practice, and milestone celebrations. Enquire with your squad size to receive custom slot availability.'}
          </p>

          <div className="mt-4 flex items-center space-x-2 text-xs text-[#EDE9DF]/60">
            <ShieldAlert className="w-4 h-4 text-[#C58B58]" />
            <span>Honest policy: No artificial countdown timers or hidden fees. Final rates confirmed directly with venue crew.</span>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageOffers.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#202428] border border-[#2A3036] overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title_en}
                    className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
                  />
                  <div className="absolute top-4 left-4 text-[10px] font-sans font-bold tracking-wider text-[#111315] bg-[#EDE9DF] px-2.5 py-1 uppercase">
                    {language === 'hi' ? pkg.badge_hi : pkg.badge_en}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h2 className="font-display text-2xl font-bold text-[#EDE9DF]">
                    {language === 'hi' ? pkg.title_hi : pkg.title_en}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#EDE9DF]/70 font-sans leading-relaxed">
                    {language === 'hi' ? pkg.desc_hi : pkg.desc_en}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#2A3036]">
                    <div className="text-[11px] font-semibold text-[#C58B58] uppercase tracking-wider">
                      Included Highlights:
                    </div>
                    {(language === 'hi' ? pkg.benefits_hi : pkg.benefits_en).map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[#EDE9DF]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#C58B58] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => navigate('/book', { package_id: pkg.id })}
                  className="w-full bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase py-3.5 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Enquire This Package</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
