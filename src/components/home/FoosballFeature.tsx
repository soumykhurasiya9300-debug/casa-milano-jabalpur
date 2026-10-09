import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, Users, Zap } from 'lucide-react';

export const FoosballFeature: React.FC = () => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#111315] via-[#202428] to-[#111315] py-24 md:py-32 relative overflow-hidden border-t border-[#202428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-sans tracking-[0.25em] text-[#EDE9DF]/60 uppercase font-semibold">
              {t.chapters.c6_kicker}
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EDE9DF] leading-tight">
              {t.chapters.c6_title}
            </h2>

            <p className="text-base sm:text-lg text-[#EDE9DF]/80 font-sans leading-relaxed">
              {t.chapters.c6_subtitle}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#111315] border border-[#2A3036]">
                <Users className="w-5 h-5 text-[#C58B58] mb-2" />
                <div className="text-sm font-semibold text-[#EDE9DF]">2v2 Rivalries</div>
                <div className="text-xs text-[#EDE9DF]/60 mt-1">
                  Team up with friends for lightning-quick rounds.
                </div>
              </div>

              <div className="p-4 bg-[#111315] border border-[#2A3036]">
                <Zap className="w-5 h-5 text-[#69C7E8] mb-2" />
                <div className="text-sm font-semibold text-[#EDE9DF]">Solid-Rod Precision</div>
                <div className="text-xs text-[#EDE9DF]/60 mt-1">
                  Smooth bearings, true ball control, zero stickiness.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={() => navigate('/book', { activity: 'foosball' })}
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 transition-all flex items-center space-x-2"
              >
                <span>Enquire Foosball Slot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/experiences/foosball')}
                className="text-xs font-semibold text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Image (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#2A3036] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80"
                alt="Foosball Table and Social Play at Casa Milano"
                className="w-full aspect-[4/3] object-cover object-center filter brightness-[0.75] contrast-[1.1] group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#EDE9DF]/80">
                Tournament Table · Counterbalanced players · Smooth telescopic action
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
