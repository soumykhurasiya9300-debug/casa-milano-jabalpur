import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { experiencesData } from '../data/mockData';
import { ArrowUpRight, ArrowLeft, ShieldCheck, Users, Clock, Sparkles } from 'lucide-react';

interface ExperienceDetailPageProps {
  slug: string;
}

export const ExperienceDetailPage: React.FC<ExperienceDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  const experience = experiencesData.find(e => e.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#111315]">
        <h2 className="font-display text-3xl font-bold text-[#EDE9DF]">Experience Not Found</h2>
        <p className="mt-2 text-sm text-[#EDE9DF]/60">The requested gaming arena could not be located.</p>
        <button
          onClick={() => navigate('/experiences')}
          className="mt-6 bg-[#EDE9DF] text-[#111315] px-6 py-3 text-xs font-bold uppercase tracking-wider"
        >
          Back to Experiences
        </button>
      </div>
    );
  }

  // Domain-specific aesthetic tweaks per experience
  const isRacing = experience.slug === 'racing';
  const isSnooker = experience.slug === 'snooker';
  const isPs5 = experience.slug === 'ps5';
  const isArcade = experience.slug === 'arcade';
  const isFoosball = experience.slug === 'foosball';

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Back breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate('/experiences')}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-[#EDE9DF]/60 hover:text-[#EDE9DF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Experiences</span>
        </button>
      </div>

      {/* Hero Visual Area - Tailored per experience */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border border-[#2A3036] overflow-hidden min-h-[420px] md:min-h-[520px] flex flex-col justify-end p-8 md:p-14">
          <div className="absolute inset-0 z-0">
            <img
              src={experience.hero_image}
              alt={experience.title_en}
              className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.2]"
            />
            {/* Dynamic themed overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: isSnooker
                  ? 'linear-gradient(to top, #111315 20%, rgba(17,19,21,0.6) 70%, transparent 100%)'
                  : isRacing
                  ? 'linear-gradient(to top, #111315 20%, rgba(17,19,21,0.6) 70%, transparent 100%)'
                  : 'linear-gradient(to top, #111315 20%, rgba(17,19,21,0.6) 70%, transparent 100%)'
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div
              className="text-xs font-sans tracking-[0.25em] uppercase font-bold"
              style={{ color: experience.accent_color }}
            >
              CASA MILANO · ARENA 0{experience.display_order}
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
              {language === 'hi' ? experience.title_hi : experience.title_en}
            </h1>

            <p className="text-base sm:text-xl font-display font-medium text-[#EDE9DF]/90 max-w-2xl">
              "{language === 'hi' ? experience.tagline_hi : experience.tagline_en}"
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('/book', { activity: experience.slug })}
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-7 py-4 transition-all flex items-center space-x-2"
              >
                <span>Enquire {experience.title_en} Slot</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Long Description & Gallery (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE9DF]">
                The Experience
              </h2>
              <p className="text-base sm:text-lg text-[#EDE9DF]/80 font-sans leading-relaxed">
                {language === 'hi' ? experience.long_desc_hi : experience.long_desc_en}
              </p>
            </div>

            {/* Secondary Visual Accent */}
            <div className="border border-[#2A3036] overflow-hidden">
              <img
                src={experience.secondary_image}
                alt={`${experience.title_en} detail`}
                className="w-full aspect-[16/9] object-cover filter brightness-[0.75] contrast-[1.1]"
              />
              <div className="p-4 bg-[#202428] text-xs text-[#EDE9DF]/70">
                {isRacing && "Direct telemetry, force-feedback wheelbase, and paddle shifters in the Casa Milano cockpit."}
                {isSnooker && "Calibrated slate table cushions, Aramith ball sets, and pristine green felt cloth."}
                {isPs5 && "Lag-free 4K HDR displays with DualSense controllers ready for quick matches."}
                {isArcade && "Arcade machines and reflex units tuned for instant adrenaline and leaderboard rivalries."}
                {isFoosball && "Tournament telescopic rods, weighted figures, and true ball roll."}
              </div>
            </div>

            {/* House Rules & Etiquette */}
            <div className="space-y-4 pt-4 border-t border-[#202428]">
              <div className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#C58B58]">
                <ShieldCheck className="w-4 h-4 text-[#C58B58]" />
                <span>Arena Etiquette & Guidelines</span>
              </div>
              <ul className="space-y-3">
                {(language === 'hi' ? experience.rules_hi : experience.rules_en).map((rule, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-[#EDE9DF]/80 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C58B58] mt-2 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar: Arena Specifications & Enquiry Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#202428] border border-[#2A3036] p-6 sm:p-8 space-y-6 sticky top-28">
              <div className="space-y-1">
                <div className="text-[11px] font-sans font-semibold tracking-widest text-[#C58B58] uppercase">
                  SESSION DETAILS
                </div>
                <h3 className="font-display text-xl font-bold text-[#EDE9DF]">
                  Arena Specifications
                </h3>
              </div>

              <div className="space-y-4 text-xs font-sans border-t border-[#2A3036] pt-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#EDE9DF]/60 font-medium">
                    <Users className="w-3.5 h-3.5" />
                    <span>Player Capacity</span>
                  </div>
                  <div className="text-sm font-semibold text-[#EDE9DF]">
                    {experience.capacity}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#EDE9DF]/60 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Hardware / Rig</span>
                  </div>
                  <div className="text-xs text-[#EDE9DF]/80 leading-relaxed">
                    {experience.equipment_info}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#EDE9DF]/60 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Rates & Availability</span>
                  </div>
                  <div className="text-xs text-[#C58B58] leading-relaxed">
                    {experience.rate_info}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A3036] space-y-3">
                <button
                  onClick={() => navigate('/book', { activity: experience.slug })}
                  className="w-full bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase py-3.5 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Enquire {experience.title_en} Slot</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-[#EDE9DF]/50 leading-normal">
                  Advance enquiry helps ensure table or rig availability on your arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
