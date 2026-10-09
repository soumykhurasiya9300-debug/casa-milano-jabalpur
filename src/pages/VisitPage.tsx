import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Instagram, Clock, ArrowUpRight, HelpCircle, Navigation, MessageCircle } from 'lucide-react';
import { initialSettings } from '../data/mockData';

export const VisitPage: React.FC = () => {
  const { navigate } = useRouter();
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[#202428]">
        <div className="max-w-3xl">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            {t.visit.badge}
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {t.visit.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.visit.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Venue Details (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Address Card */}
            <div className="p-8 bg-[#202428] border border-[#2A3036] space-y-4">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#C58B58]">
                <MapPin className="w-5 h-5 text-[#C58B58]" />
                <span>{t.visit.address_title}</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#EDE9DF]">
                {initialSettings.address}
              </h2>
              <p className="text-xs text-[#EDE9DF]/60 leading-relaxed">
                {t.visit.address_hint}
              </p>
              <div className="pt-2">
                <a
                  href={initialSettings.google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 transition-all inline-flex items-center space-x-2"
                >
                  <Navigation className="w-4 h-4 text-[#111315]" />
                  <span>{t.visit.directions_btn}</span>
                </a>
              </div>
            </div>

            {/* Hours & Verification Note */}
            <div className="p-8 bg-[#202428] border border-[#2A3036] space-y-4">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#69C7E8]">
                <Clock className="w-5 h-5 text-[#69C7E8]" />
                <span>{t.visit.hours_title}</span>
              </div>
              <p className="text-sm text-[#EDE9DF]/80 font-sans leading-relaxed">
                {t.visit.hours_val}
              </p>
              <div className="p-3 bg-[#111315]/70 border-l border-[#69C7E8] text-xs text-[#EDE9DF]/60">
                Operating timings and holiday schedules are updated on Instagram stories. We encourage visitors to confirm slot availability before heading over.
              </div>
            </div>

            {/* Official Instagram */}
            <div className="p-8 bg-[#202428] border border-[#2A3036] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <Instagram className="w-8 h-8 text-[#C58B58]" />
                <div>
                  <div className="text-xs font-semibold text-[#EDE9DF]/50 uppercase tracking-wider">
                    {t.visit.instagram_title}
                  </div>
                  <div className="font-display text-xl font-bold text-[#EDE9DF]">
                    @casamilano.cm
                  </div>
                </div>
              </div>

              <a
                href={initialSettings.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#EDE9DF]/30 hover:border-[#EDE9DF] text-[#EDE9DF] text-xs font-semibold uppercase tracking-wider px-5 py-3 transition-colors inline-flex items-center space-x-1.5"
              >
                <span>{t.visit.instagram_btn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Advance Enquiry CTA */}
            <div className="p-8 bg-[#111315] border border-[#2A3036] space-y-4">
              <h3 className="font-display text-xl font-bold text-[#EDE9DF]">
                Planning Your Visit?
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE9DF]/70">
                Avoid table or simulator waiting times by submitting an advance slot enquiry for your squad.
              </p>
              <button
                onClick={() => navigate('/book')}
                className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3.5 transition-all inline-flex items-center space-x-2"
              >
                <span>{t.visit.enquiry_btn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: FAQs (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold">
              <HelpCircle className="w-4 h-4 text-[#C58B58]" />
              <span>{t.visit.faq_title}</span>
            </div>

            <div className="space-y-4">
              {t.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#202428] border border-[#2A3036] space-y-3"
                >
                  <h4 className="font-display text-lg font-bold text-[#EDE9DF]">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#EDE9DF]/70 font-sans leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
