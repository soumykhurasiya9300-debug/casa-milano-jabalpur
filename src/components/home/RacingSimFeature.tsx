import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, Gauge, Disc, Monitor } from 'lucide-react';

export const RacingSimFeature: React.FC = () => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="bg-[#111315] py-24 md:py-36 relative overflow-hidden border-t border-[#202428]">
      {/* Subtle Electric Ice ambient radial glow behind cockpit */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#69C7E8]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text / Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.25em] text-[#69C7E8] uppercase font-semibold">
              <span>{t.chapters.c3_kicker}</span>
              <span aria-hidden="true">·</span>
              <span>CASA MILANO RIG</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDE9DF] leading-[1.05]">
              {t.chapters.c3_title}
            </h2>

            <p className="text-lg sm:text-xl font-display font-medium text-[#69C7E8]">
              "Step into the driver's seat."
            </p>

            <p className="text-sm sm:text-base text-[#EDE9DF]/80 font-sans leading-relaxed">
              {t.chapters.c3_subtitle}
            </p>

            {/* Authentic Hardware Setup (Unboxed Clean List, Zero Pills) */}
            <div className="space-y-4 pt-4 border-t border-[#202428]">
              <div className="flex items-start space-x-3.5">
                <Gauge className="w-5 h-5 text-[#69C7E8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#EDE9DF]">Direct-Drive Wheel Base & Pedals</div>
                  <div className="text-xs text-[#EDE9DF]/60 mt-0.5">True-to-life force feedback communicating tire slip, kerbs, and weight transfer.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Monitor className="w-5 h-5 text-[#69C7E8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#EDE9DF]">Ultra-Wide High-Refresh Display Rig</div>
                  <div className="text-xs text-[#EDE9DF]/60 mt-0.5">Panoramic peripheral vision calibrated for immersive apex tracking.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Disc className="w-5 h-5 text-[#69C7E8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#EDE9DF]">Ergonomic Racing Cockpit Seat</div>
                  <div className="text-xs text-[#EDE9DF]/60 mt-0.5">Reinforced bucket seat posture allowing high-precision brake pedal modulation.</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/book', { activity: 'racing' })}
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 transition-all flex items-center space-x-2"
              >
                <span>Enquire Simulator Slot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/experiences/racing')}
                className="text-xs font-semibold tracking-wider text-[#69C7E8] hover:text-[#EDE9DF] py-3.5 px-3 flex items-center space-x-1 transition-colors"
              >
                <span>View Full Rig Specs →</span>
              </button>
            </div>
          </div>

          {/* Right Image Composition (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#2A3036] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85"
                alt="Pro Racing Simulator Cockpit at Casa Milano"
                className="w-full aspect-[16/10] object-cover object-center filter brightness-[0.7] contrast-[1.2] group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#EDE9DF]/80 border-t border-[#EDE9DF]/20 pt-4 backdrop-blur-sm bg-[#111315]/40 px-4 py-2">
                <span className="font-display tracking-wider uppercase font-semibold text-[#69C7E8]">
                  COCKPIT RIG 01
                </span>
                <span className="text-[11px] text-[#EDE9DF]/60 font-sans">
                  Available for Solo Practice & Lap Challenges
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
