import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, Gamepad2, Tv, Trophy } from 'lucide-react';

export const Ps5ArcadeFeature: React.FC = () => {
  const { navigate } = useRouter();
  const { t } = useLanguage();

  return (
    <section className="bg-[#111315] py-24 md:py-36 relative overflow-hidden border-t border-[#202428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-sans tracking-[0.25em] text-[#69C7E8] uppercase font-semibold mb-3">
            {t.chapters.c5_kicker}
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {t.chapters.c5_title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {t.chapters.c5_subtitle}
          </p>
        </div>

        {/* Dual Panels: PS5 Station & Arcade Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: PS5 Lounge */}
          <div className="bg-[#202428] border border-[#2A3036] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden border border-[#2A3036]/60">
                <img
                  src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80"
                  alt="Sony PS5 Station with DualSense Wireless Controllers"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.15]"
                />
                <div className="absolute top-4 left-4 text-[10px] font-sans font-semibold tracking-wider text-[#69C7E8] bg-[#111315]/80 px-2.5 py-1">
                  PLAYSTATION 5 MULTIPLAYER
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE9DF]">
                  PlayStation 5 Console Lounge
                </h3>
                <p className="mt-2 text-sm text-[#EDE9DF]/70 font-sans leading-relaxed">
                  Low-latency 4K gaming screens, wireless DualSense controllers, and comfortable group couches. Perfect for intense football tournaments, fight showdowns, and multiplayer party sessions.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#2A3036] text-xs text-[#EDE9DF]/70">
                <div className="flex flex-col items-center text-center p-2 bg-[#111315]/50">
                  <Tv className="w-4 h-4 text-[#69C7E8] mb-1" />
                  <span className="font-medium text-[#EDE9DF]">4K HDR</span>
                  <span className="text-[10px] text-[#EDE9DF]/50">Ultra-fast panels</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 bg-[#111315]/50">
                  <Gamepad2 className="w-4 h-4 text-[#69C7E8] mb-1" />
                  <span className="font-medium text-[#EDE9DF]">DualSense</span>
                  <span className="text-[10px] text-[#EDE9DF]/50">Haptic feedback</span>
                </div>
                <div className="flex flex-col items-center text-center p-2 bg-[#111315]/50">
                  <Trophy className="w-4 h-4 text-[#69C7E8] mb-1" />
                  <span className="font-medium text-[#EDE9DF]">Party Modes</span>
                  <span className="text-[10px] text-[#EDE9DF]/50">1-4 players/rig</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#2A3036] flex items-center justify-between">
              <button
                onClick={() => navigate('/book', { activity: 'ps5' })}
                className="text-xs font-bold tracking-wider uppercase text-[#EDE9DF] hover:text-[#69C7E8] flex items-center space-x-1.5 transition-colors"
              >
                <span>Enquire PS5 Slot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate('/experiences/ps5')}
                className="text-xs text-[#EDE9DF]/50 hover:text-[#EDE9DF] transition-colors"
              >
                View PS5 Games →
              </button>
            </div>
          </div>

          {/* Right: Arcade Units */}
          <div className="bg-[#202428] border border-[#2A3036] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden border border-[#2A3036]/60">
                <img
                  src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1200&q=80"
                  alt="Dynamic Arcade Units and Reflex Gaming"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.15]"
                />
                <div className="absolute top-4 left-4 text-[10px] font-sans font-semibold tracking-wider text-[#C58B58] bg-[#111315]/80 px-2.5 py-1">
                  ARCADE ARENA
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE9DF]">
                  Arcade Games & Reflex Action
                </h3>
                <p className="mt-2 text-sm text-[#EDE9DF]/70 font-sans leading-relaxed">
                  Fast-paced token units that deliver immediate competitive thrill. Jump in between matches for quick challenges, test your hand-eye reflexes, and beat your friends' best attempts.
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-[#2A3036] text-xs text-[#EDE9DF]/80">
                <div className="flex items-center justify-between py-1 border-b border-[#2A3036]/40">
                  <span className="text-[#EDE9DF]/60">Session Flow:</span>
                  <span>Instant play / tokens at reception</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#2A3036]/40">
                  <span className="text-[#EDE9DF]/60">Match Style:</span>
                  <span>Solo score challenges & 2-player battles</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#EDE9DF]/60">Atmosphere:</span>
                  <span>High-energy reflex and arcade cabinet fun</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#2A3036] flex items-center justify-between">
              <button
                onClick={() => navigate('/experiences/arcade')}
                className="text-xs font-bold tracking-wider uppercase text-[#EDE9DF] hover:text-[#C58B58] flex items-center space-x-1.5 transition-colors"
              >
                <span>Explore Arcade Zone</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate('/book', { activity: 'arcade' })}
                className="text-xs text-[#EDE9DF]/50 hover:text-[#EDE9DF] transition-colors"
              >
                Pass Enquiries →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
