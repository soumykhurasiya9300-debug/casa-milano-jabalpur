import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const SnookerFeature: React.FC = () => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="bg-[#111315] py-24 md:py-36 relative overflow-hidden border-t border-[#202428]">
      {/* Muted green subtle ambient tint */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#7F9B89]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Images Composition: Layered Depth (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Primary Wide Slate View */}
              <div className="col-span-8 border border-[#2A3036] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80"
                  alt="Snooker Tournament Cloth and Ball Rack at Casa Milano"
                  className="w-full aspect-[4/3] object-cover object-center filter brightness-[0.75] contrast-[1.1] group-hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Secondary Close-Up Cue Detail */}
              <div className="col-span-4 space-y-4">
                <div className="border border-[#2A3036] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80"
                    alt="Precision Cues and Snooker Ambience"
                    className="w-full aspect-[3/4] object-cover object-center filter brightness-[0.7] contrast-[1.1]"
                  />
                </div>
                <div className="p-3 bg-[#202428]/60 border border-[#2A3036] text-[11px] text-[#EDE9DF]/70 font-sans">
                  Tournament Cloth · Glare-free canopy lighting
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.25em] text-[#7F9B89] uppercase font-semibold">
              <span>{t.chapters.c4_kicker}</span>
              <span aria-hidden="true">·</span>
              <span>CHAMPIONSHIP TABLES</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDE9DF] leading-[1.05]">
              {t.chapters.c4_title}
            </h2>

            <p className="text-sm sm:text-base text-[#EDE9DF]/80 font-sans leading-relaxed">
              {t.chapters.c4_subtitle}
            </p>

            <div className="pt-2 border-t border-[#202428] space-y-3">
              <div className="text-xs text-[#EDE9DF]/70 flex items-center justify-between">
                <span className="font-medium text-[#EDE9DF]">Table Standard:</span>
                <span>Championship slate with high-speed tournament felt</span>
              </div>
              <div className="text-xs text-[#EDE9DF]/70 flex items-center justify-between">
                <span className="font-medium text-[#EDE9DF]">Cues & Balls:</span>
                <span>Balanced ash cues, calibrated Aramith ball racks</span>
              </div>
              <div className="text-xs text-[#EDE9DF]/70 flex items-center justify-between">
                <span className="font-medium text-[#EDE9DF]">Atmosphere:</span>
                <span>Private lounge seating with barista drink service</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/book', { activity: 'snooker' })}
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 transition-all flex items-center space-x-2"
              >
                <span>Enquire Table Slot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/experiences/snooker')}
                className="text-xs font-semibold tracking-wider text-[#7F9B89] hover:text-[#EDE9DF] py-3.5 px-3 flex items-center space-x-1 transition-colors"
              >
                <span>Snooker Details & Etiquette →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
