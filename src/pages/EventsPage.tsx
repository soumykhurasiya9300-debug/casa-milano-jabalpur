import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Trophy, Users, Cake, PartyPopper } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  const eventTypes = [
    {
      id: "birthday",
      icon: Cake,
      title_en: "Birthday & Milestone Celebrations",
      title_hi: "जन्मदिन और विशेष उत्सव",
      desc_en: "Celebrate your big day with your closest crew surrounded by PS5 setups, pro snooker, and custom café finger food platters.",
      desc_hi: "अपने खास दिन को दोस्तों के साथ गेमिंग और लजीज कैफे बाइट्स के संग यादगार बनाएं।",
      highlight: "Dedicated Host & Lounge Seating"
    },
    {
      id: "tournaments",
      icon: Trophy,
      title_en: "Community Tournaments & Friend Showdowns",
      title_hi: "कम्युनिटी टूर्नामेंट और फ्रेंडली मुकाबले",
      desc_en: "Organize private brackets for snooker frames, EA FC/FIFA tournaments, foosball shootouts, or racing simulator hot-lap battles.",
      desc_hi: "स्नूकर, EA FC या रेसिंग सिम्युलेटर पर अपनी फ्रेंडली लीग या टूर्नामेंट का आयोजन करें।",
      highlight: "Bracket Organization Support"
    },
    {
      id: "corporate",
      icon: Users,
      title_en: "College Squads & Team Hangouts",
      title_hi: "कॉलेज स्क्वाड और टीम हैंगआउट्स",
      desc_en: "Looking for an energetic venue outside conventional cafés? Casa Milano offers the perfect balance of relaxed seating and interactive games.",
      desc_hi: "पारंपरिक कैफे से अलग एक ऊर्जावान माहौल, जहाँ खेल और बातचीत दोनों का भरपूर मजा है।",
      highlight: "Flexible Multi-Station Rotation"
    }
  ];

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[#202428]">
        <div className="max-w-3xl">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            GROUP RESERVATIONS & SHOWDOWNS
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {language === 'hi' ? 'इवेंट्स और ग्रुप बुकिंग' : 'Events & Group Bookings'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {language === 'hi'
              ? 'क्या आप किसी बड़े ग्रुप, जन्मदिन या प्राइवेट टूर्नामेंट की योजना बना रहे हैं? कासा मिलानो में हमारे पास आपकी पार्टी के लिए बेहतरीन व्यवस्था है।'
              : 'Bring the entire squad together. Whether you are arranging an 8-player FIFA knockout or an exclusive multi-station buyout, we can tailor slots to match your event.'}
          </p>
        </div>
      </div>

      {/* Main Feature Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative border border-[#2A3036] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="Casa Milano Group Event Lounge"
            className="w-full aspect-[21/9] object-cover filter brightness-[0.65] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#C58B58] font-semibold">
                YOUR SPACE FOR CELEBRATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#EDE9DF]">
                Turn Any Gathering Into an Unforgettable Game Day.
              </h3>
            </div>
            <button
              onClick={() => navigate('/book', { activity: 'group-event' })}
              className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 transition-all flex items-center space-x-2 shrink-0"
            >
              <span>Enquire Group Event</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventTypes.map((event) => {
            const Icon = event.icon;

            return (
              <div
                key={event.id}
                className="bg-[#202428] border border-[#2A3036] p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#111315] border border-[#2A3036] flex items-center justify-center text-[#C58B58]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#EDE9DF]">
                    {language === 'hi' ? event.title_hi : event.title_en}
                  </h3>

                  <p className="text-sm text-[#EDE9DF]/75 font-sans leading-relaxed">
                    {language === 'hi' ? event.desc_hi : event.desc_en}
                  </p>

                  <div className="pt-2 text-xs font-semibold text-[#C58B58]">
                    ✓ {event.highlight}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A3036]">
                  <button
                    onClick={() => navigate('/book', { event_type: event.id })}
                    className="w-full bg-[#111315] hover:bg-[#111315]/80 text-[#EDE9DF] text-xs font-bold tracking-wider uppercase py-3 border border-[#2A3036] transition-colors"
                  >
                    Send Event Enquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
