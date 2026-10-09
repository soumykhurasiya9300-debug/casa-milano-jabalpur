import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { experiencesData } from '../../data/mockData';

export const ExperiencesGrid: React.FC = () => {
  const { navigate } = useRouter();
  const { language, t } = useLanguage();

  const racing = experiencesData.find(e => e.slug === 'racing')!;
  const snooker = experiencesData.find(e => e.slug === 'snooker')!;
  const ps5 = experiencesData.find(e => e.slug === 'ps5')!;
  const arcade = experiencesData.find(e => e.slug === 'arcade')!;
  const foosball = experiencesData.find(e => e.slug === 'foosball')!;

  return (
    <section className="bg-gradient-to-b from-[#111315] via-[#202428] to-[#111315] py-24 md:py-32 border-t border-[#202428]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            {t.chapters.c2_kicker}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EDE9DF] leading-tight">
            {t.chapters.c2_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.chapters.c2_subtitle}
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1: Racing Simulator - Large Landscape (8 cols) */}
          <div
            onClick={() => navigate('/experiences/racing')}
            className="md:col-span-8 group relative bg-[#111315] overflow-hidden border border-[#2A3036] hover:border-[#69C7E8]/60 transition-all duration-300 cursor-pointer min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-10"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={racing.hero_image}
                alt={racing.title_en}
                className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-sans tracking-widest text-[#69C7E8] uppercase font-semibold">
                <span>PRO SIMULATOR COCKPIT</span>
                <span aria-hidden="true">·</span>
                <span>FORCE FEEDBACK</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#EDE9DF]">
                {language === 'hi' ? racing.title_hi : racing.title_en}
              </h3>
              <p className="text-sm sm:text-base text-[#EDE9DF]/80 font-sans max-w-xl">
                {language === 'hi' ? racing.short_desc_hi : racing.short_desc_en}
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-[#EDE9DF] group-hover:text-[#69C7E8] transition-colors">
                <span>Explore Cockpit Rig</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: Snooker & Billiards - Tall Cinematic (4 cols) */}
          <div
            onClick={() => navigate('/experiences/snooker')}
            className="md:col-span-4 group relative bg-[#111315] overflow-hidden border border-[#2A3036] hover:border-[#7F9B89]/60 transition-all duration-300 cursor-pointer min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={snooker.hero_image}
                alt={snooker.title_en}
                className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-sans tracking-widest text-[#7F9B89] uppercase font-semibold">
                <span>CUE SPORTS</span>
                <span aria-hidden="true">·</span>
                <span>TOURNAMENT FELT</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE9DF]">
                {language === 'hi' ? snooker.title_hi : snooker.title_en}
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE9DF]/80 font-sans">
                {language === 'hi' ? snooker.short_desc_hi : snooker.short_desc_en}
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-[#EDE9DF] group-hover:text-[#7F9B89] transition-colors">
                <span>View Snooker Lounge</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 3: PS5 Lounge - Balanced (4 cols) */}
          <div
            onClick={() => navigate('/experiences/ps5')}
            className="md:col-span-4 group relative bg-[#111315] overflow-hidden border border-[#2A3036] hover:border-[#69C7E8]/60 transition-all duration-300 cursor-pointer min-h-[340px] flex flex-col justify-end p-6 sm:p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={ps5.hero_image}
                alt={ps5.title_en}
                className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="text-xs font-sans tracking-widest text-[#69C7E8] uppercase font-semibold">
                SONY PLAYSTATION 5 · 4K HDR
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#EDE9DF]">
                {language === 'hi' ? ps5.title_hi : ps5.title_en}
              </h3>
              <p className="text-xs text-[#EDE9DF]/80 font-sans">
                {language === 'hi' ? ps5.short_desc_hi : ps5.short_desc_en}
              </p>
              <div className="pt-1 flex items-center space-x-2 text-xs font-semibold text-[#EDE9DF] group-hover:text-[#69C7E8] transition-colors">
                <span>View PS5 Lounge</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 4: Arcade Games - Dynamic Cropped (4 cols) */}
          <div
            onClick={() => navigate('/experiences/arcade')}
            className="md:col-span-4 group relative bg-[#111315] overflow-hidden border border-[#2A3036] hover:border-[#C58B58]/60 transition-all duration-300 cursor-pointer min-h-[340px] flex flex-col justify-end p-6 sm:p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={arcade.hero_image}
                alt={arcade.title_en}
                className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="text-xs font-sans tracking-widest text-[#C58B58] uppercase font-semibold">
                ARCADE UNITS · INSTANT ACTION
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#EDE9DF]">
                {language === 'hi' ? arcade.title_hi : arcade.title_en}
              </h3>
              <p className="text-xs text-[#EDE9DF]/80 font-sans">
                {language === 'hi' ? arcade.short_desc_hi : arcade.short_desc_en}
              </p>
              <div className="pt-1 flex items-center space-x-2 text-xs font-semibold text-[#EDE9DF] group-hover:text-[#C58B58] transition-colors">
                <span>View Arcade Zone</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 5: Foosball Arena - Supporting Social (4 cols) */}
          <div
            onClick={() => navigate('/experiences/foosball')}
            className="md:col-span-4 group relative bg-[#111315] overflow-hidden border border-[#2A3036] hover:border-[#EDE9DF]/60 transition-all duration-300 cursor-pointer min-h-[340px] flex flex-col justify-end p-6 sm:p-8"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={foosball.hero_image}
                alt={foosball.title_en}
                className="w-full h-full object-cover object-center filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="text-xs font-sans tracking-widest text-[#EDE9DF]/80 uppercase font-semibold">
                SOCIAL TABLE · TOURNAMENT RODS
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#EDE9DF]">
                {language === 'hi' ? foosball.title_hi : foosball.title_en}
              </h3>
              <p className="text-xs text-[#EDE9DF]/80 font-sans">
                {language === 'hi' ? foosball.short_desc_hi : foosball.short_desc_en}
              </p>
              <div className="pt-1 flex items-center space-x-2 text-xs font-semibold text-[#EDE9DF] group-hover:text-[#EDE9DF] transition-colors">
                <span>View Foosball</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
