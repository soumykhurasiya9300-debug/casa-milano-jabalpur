import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, Instagram, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111315] border-t border-[#202428] text-[#EDE9DF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#202428]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#EDE9DF]">
                CASA MILANO
              </span>
              <p className="text-xs font-sans tracking-[0.2em] text-[#C58B58] uppercase mt-0.5 font-medium">
                JABALPUR · GAMING · FOOD · SOCIAL
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-display text-lg sm:text-xl font-semibold text-[#EDE9DF]">
                "{t.footer.statement}"
              </p>
              <p className="text-sm font-sans tracking-widest text-[#EDE9DF]/60 uppercase">
                {t.footer.campaign}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#EDE9DF]/70 font-sans leading-relaxed max-w-md">
              {t.footer.about}
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://www.instagram.com/casamilano.cm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#EDE9DF]/90 hover:text-[#C58B58] transition-colors py-1"
              >
                <Instagram className="w-4 h-4 text-[#C58B58]" />
                <span>@casamilano.cm</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="inline-flex items-center space-x-1.5 text-xs text-[#EDE9DF]/50 hover:text-[#EDE9DF] transition-colors py-1"
                  title="Replay branded introduction sequence"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Replay Intro</span>
                </button>
              )}
            </div>
          </div>

          {/* Gaming Experiences (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C58B58]">
              {t.footer.links_title}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => navigate('/experiences/racing')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Racing Simulator (Pro Cockpit)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/experiences/snooker')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Snooker & Billiards Lounge
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/experiences/ps5')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  PlayStation 5 Console Arena
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/experiences/arcade')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Arcade Games & Reflex Action
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/experiences/foosball')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Tournament Foosball Arena
                </button>
              </li>
            </ul>
          </div>

          {/* Explore Venue (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C58B58]">
              {t.footer.explore_title}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => navigate('/cafe')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Lounge Café & Bites
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/offers')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Packages & Passes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/events')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Events & Groups
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/gallery')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors"
                >
                  Photo Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/book')}
                  className="text-[#EDE9DF]/70 hover:text-[#EDE9DF] transition-colors font-medium text-[#EDE9DF]"
                >
                  Enquire Slot →
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Reported Address (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C58B58]">
              {t.footer.contact_title}
            </div>
            <div className="text-xs text-[#EDE9DF]/70 leading-relaxed space-y-2">
              <div className="flex items-start space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C58B58] shrink-0 mt-0.5" />
                <span>3rd Floor, Ideal Hills / VV Tower, Adarsh Nagar, Gwarighat Road, Jabalpur, MP</span>
              </div>
              <button
                onClick={() => navigate('/visit')}
                className="text-xs text-[#69C7E8] hover:underline block pt-1"
              >
                Directions & Details →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#EDE9DF]/50 space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            {t.footer.copyright}
          </p>

          <p className="text-[11px] text-center md:text-right max-w-lg leading-normal">
            {t.footer.privacy_note}
          </p>
        </div>
      </div>
    </footer>
  );
};
