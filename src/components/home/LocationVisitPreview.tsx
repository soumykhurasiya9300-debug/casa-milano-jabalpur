import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Instagram, Clock, ArrowUpRight, Navigation } from 'lucide-react';
import { initialSettings } from '../../data/mockData';

export const LocationVisitPreview: React.FC = () => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#111315] via-[#202428] to-[#111315] py-24 md:py-36 relative overflow-hidden border-t border-[#202428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Information Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold">
              <span>{t.chapters.c10_kicker}</span>
              <span aria-hidden="true">·</span>
              <span>JABALPUR, MP</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#EDE9DF]">
              {t.chapters.c10_title}
            </h2>

            <p className="text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
              {t.chapters.c10_subtitle}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#202428]">
              {/* Address */}
              <div className="p-4 bg-[#111315] border border-[#2A3036] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C58B58]">
                  <MapPin className="w-4 h-4 text-[#C58B58]" />
                  <span>{t.visit.address_title}</span>
                </div>
                <p className="text-sm text-[#EDE9DF] font-medium leading-relaxed">
                  {initialSettings.address}
                </p>
                <p className="text-xs text-[#EDE9DF]/50">
                  {t.visit.address_hint}
                </p>
              </div>

              {/* Operating Hours Honest Guidance */}
              <div className="p-4 bg-[#111315] border border-[#2A3036] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#69C7E8]">
                  <Clock className="w-4 h-4 text-[#69C7E8]" />
                  <span>{t.visit.hours_title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#EDE9DF]/80 leading-relaxed">
                  {t.visit.hours_val}
                </p>
              </div>

              {/* Instagram */}
              <div className="p-4 bg-[#111315] border border-[#2A3036] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-[#C58B58]" />
                  <div>
                    <div className="text-sm font-semibold text-[#EDE9DF]">@casamilano.cm</div>
                    <div className="text-xs text-[#EDE9DF]/50">{t.visit.instagram_hint}</div>
                  </div>
                </div>
                <a
                  href={initialSettings.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#EDE9DF] hover:text-[#C58B58] flex items-center space-x-1"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={initialSettings.google_maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 transition-all flex items-center space-x-2"
              >
                <Navigation className="w-4 h-4 text-[#111315]" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <button
                onClick={() => navigate('/visit')}
                className="text-xs font-semibold text-[#EDE9DF]/80 hover:text-[#EDE9DF] py-3.5 px-2"
              >
                View FAQs & Full Details →
              </button>
            </div>
          </div>

          {/* Right Map Card & Landmark Visual (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative border border-[#2A3036] bg-[#111315] p-2 overflow-hidden">
              <div className="aspect-[16/11] bg-[#202428] relative flex flex-col items-center justify-center text-center p-8 overflow-hidden">
                {/* Stylized dark map placeholder graphic */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#69C7E8" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="relative z-10 space-y-4 max-w-sm">
                  <div className="w-12 h-12 mx-auto bg-[#111315] border border-[#C58B58] flex items-center justify-center text-[#C58B58]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="font-display text-2xl font-bold text-[#EDE9DF]">
                    CASA MILANO
                  </div>
                  <div className="text-xs text-[#EDE9DF]/70 font-sans leading-relaxed">
                    3rd Floor, Ideal Hills / VV Tower, Adarsh Nagar, Gwarighat Road, Jabalpur, MP 482008
                  </div>
                  <a
                    href={initialSettings.google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#69C7E8] hover:underline pt-2"
                  >
                    <span>Open in Google Maps Application</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#202428]/40 border border-[#2A3036] text-[11px] text-[#EDE9DF]/60 text-center font-sans">
              Verification Notice: Building access pin is reported as 3rd Floor, Ideal Hills / VV Tower. Please re-verify entrance with building signage on Gwarighat Road.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
