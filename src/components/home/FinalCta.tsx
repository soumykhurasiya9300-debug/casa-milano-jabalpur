import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="bg-[#111315] py-28 md:py-40 relative overflow-hidden border-t border-[#202428]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#C58B58]/10 via-transparent to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-xs font-sans tracking-[0.3em] text-[#C58B58] uppercase font-semibold">
            NOT JUST A PLACE. YOUR SPACE.
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#EDE9DF] leading-[1.05]">
            {t.chapters.c11_title}
          </h2>

          <p className="text-base sm:text-xl text-[#EDE9DF]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            {t.chapters.c11_subtext}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => navigate('/book')}
              className="w-full sm:w-auto bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-[0.98] cursor-pointer"
            >
              <span>{t.chapters.c11_cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/experiences')}
              className="w-full sm:w-auto border border-[#EDE9DF]/30 hover:border-[#EDE9DF] text-[#EDE9DF] hover:bg-[#EDE9DF]/5 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore All 5 Gaming Zones</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
