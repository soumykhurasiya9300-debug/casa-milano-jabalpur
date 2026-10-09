import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/mockData';
import { ArrowUpRight, Gauge, Trophy, Gamepad2, Sparkles, Users } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[#202428]">
        <div className="max-w-3xl">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            CASA MILANO GAMING ARENAS
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {language === 'hi' ? 'सभी गेमिंग अनुभव' : 'All Gaming Experiences'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {language === 'hi'
              ? 'जबलपुर के सबसे खास गेमिंग कैफे में 5 समर्पित एरिना का अनुभव करें। प्रो रेसिंग कॉकपिट से लेकर टूर्नामेंट स्नूकर, PS5 और आर्केड तक।'
              : 'Five dedicated arenas engineered for focus, adrenaline, and shared memories. Explore each experience below to learn about the equipment, rules, and how to reserve your slot.'}
          </p>
        </div>
      </div>

      {/* Experiences Showcase List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {experiencesData.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Media (7 cols) */}
              <div
                className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
              >
                <div
                  onClick={() => navigate(`/experiences/${exp.slug}`)}
                  className="relative border border-[#2A3036] overflow-hidden group cursor-pointer"
                >
                  <img
                    src={exp.hero_image}
                    alt={exp.title_en}
                    className="w-full aspect-[16/10] object-cover object-center filter brightness-[0.75] contrast-[1.15] group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#EDE9DF]">
                    <span className="font-display uppercase tracking-wider font-semibold" style={{ color: exp.accent_color }}>
                      {exp.slug.toUpperCase()} ZONE
                    </span>
                    <span className="text-[11px] text-[#EDE9DF]/60">
                      Capacity: {exp.capacity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content (5 cols) */}
              <div
                className={`lg:col-span-5 space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
              >
                <div className="space-y-2">
                  <div className="text-xs font-sans tracking-widest uppercase font-semibold" style={{ color: exp.accent_color }}>
                    ARENA 0{index + 1}
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE9DF]">
                    {language === 'hi' ? exp.title_hi : exp.title_en}
                  </h2>
                  <p className="text-sm font-display font-medium text-[#EDE9DF]/90">
                    "{language === 'hi' ? exp.tagline_hi : exp.tagline_en}"
                  </p>
                </div>

                <p className="text-sm text-[#EDE9DF]/75 font-sans leading-relaxed">
                  {language === 'hi' ? exp.long_desc_hi : exp.long_desc_en}
                </p>

                <div className="p-4 bg-[#202428] border border-[#2A3036] space-y-2 text-xs">
                  <div className="text-[#EDE9DF] font-semibold">Equipment & Rig Specs:</div>
                  <div className="text-[#EDE9DF]/70 leading-relaxed">{exp.equipment_info}</div>
                  <div className="pt-2 text-[11px] text-[#C58B58] border-t border-[#2A3036]/60">
                    {exp.rate_info}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => navigate('/book', { activity: exp.slug })}
                    className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 transition-all flex items-center space-x-2"
                  >
                    <span>Enquire This Slot</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => navigate(`/experiences/${exp.slug}`)}
                    className="text-xs font-semibold tracking-wider text-[#EDE9DF]/70 hover:text-[#EDE9DF] py-3.5 px-3 transition-colors"
                  >
                    <span>View Details & Rules →</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
