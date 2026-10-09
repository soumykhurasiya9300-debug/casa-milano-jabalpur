import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, ChevronDown, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92svh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#111315]">
      {/* Background Media with Deep Charcoal & Radial Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=85"
          alt="Casa Milano Racing Simulator Cockpit and Gaming Lounge"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Layered atmospheric gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111315]/90 via-[#111315]/40 to-[#111315]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Unboxed Metadata Label (Zero-Pill Discipline) */}
          <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold">
            <span>{t.hero.badge}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center space-x-1 text-[#EDE9DF]/70">
              <MapPin className="w-3 h-3 text-[#C58B58]" />
              <span>Gwarighat Road, Jabalpur</span>
            </span>
          </div>

          {/* Main Campaign Heading: Space Grotesk (76-124px desktop, 42-60px mobile) */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#EDE9DF] leading-[1.02]">
            <span className="block">{t.hero.heading_line1}</span>
            <span className="block text-[#EDE9DF]/90">{t.hero.heading_line2}</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl font-sans text-[#EDE9DF]/80 leading-relaxed max-w-2xl">
            {t.hero.subtext}
          </p>

          {/* Campaign Tagline Subline */}
          <div className="text-xs sm:text-sm font-sans tracking-[0.2em] text-[#EDE9DF]/60 uppercase pt-1">
            "Play. Eat. Chill. Repeat."
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
            <button
              onClick={() => navigate('/experiences')}
              className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-4 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-[0.98] cursor-pointer"
            >
              <span>{t.hero.primary_cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/book')}
              className="border border-[#EDE9DF]/30 hover:border-[#EDE9DF] text-[#EDE9DF] hover:bg-[#EDE9DF]/5 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-4 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-[0.98] cursor-pointer"
            >
              <span>{t.hero.secondary_cta}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-1 text-[#EDE9DF]/40 hover:text-[#EDE9DF] transition-colors pointer-events-none">
        <span className="text-[10px] font-sans tracking-[0.25em] uppercase">
          {t.hero.scroll_down}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
