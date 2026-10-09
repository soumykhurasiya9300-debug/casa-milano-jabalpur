import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const { path, navigate } = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experiencesDropdownOpen, setExperiencesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    {
      label: t.nav.experiences,
      href: '/experiences',
      subLinks: [
        { label: t.nav.racing, href: '/experiences/racing' },
        { label: t.nav.snooker, href: '/experiences/snooker' },
        { label: t.nav.ps5, href: '/experiences/ps5' },
        { label: t.nav.arcade, href: '/experiences/arcade' },
        { label: t.nav.foosball, href: '/experiences/foosball' }
      ]
    },
    { label: t.nav.cafe, href: '/cafe' },
    { label: t.nav.offers, href: '/offers' },
    { label: t.nav.events, href: '/events' },
    { label: t.nav.gallery, href: '/gallery' },
    { label: t.nav.visit, href: '/visit' }
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
    setExperiencesDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#111315]/95 backdrop-blur-md border-b border-[#202428] shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#111315]/80 backdrop-blur-sm border-b border-[#202428]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark / Wordmark */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('/')}
              className="text-left group focus-visible:ring-1 focus-visible:ring-[#C58B58] rounded-sm transition-opacity"
            >
              <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#EDE9DF] group-hover:text-[#C58B58] transition-colors">
                CASA MILANO
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#EDE9DF]/60 font-sans font-medium">
                JABALPUR · GAMING & SOCIAL
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = path === item.href || (item.subLinks && path.startsWith(item.href));

              if (item.subLinks) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setExperiencesDropdownOpen(true)}
                    onMouseLeave={() => setExperiencesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors py-1 ${
                        isActive
                          ? 'text-[#C58B58] border-b border-[#C58B58]'
                          : 'text-[#EDE9DF]/80 hover:text-[#EDE9DF]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </button>

                    {/* Submenu Dropdown */}
                    {experiencesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 w-52">
                        <div className="bg-[#202428] border border-[#2A3036] shadow-xl py-2 px-1">
                          {item.subLinks.map((sub) => (
                            <button
                              key={sub.href}
                              onClick={() => handleNavClick(sub.href)}
                              className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                                path === sub.href
                                  ? 'text-[#69C7E8] bg-[#111315]/40'
                                  : 'text-[#EDE9DF]/80 hover:text-[#EDE9DF] hover:bg-[#111315]/30'
                              }`}
                            >
                              {sub.label}
                            </button>
                          ))}
                          <div className="border-t border-[#2A3036] my-1"></div>
                          <button
                            onClick={() => handleNavClick('/experiences')}
                            className="w-full text-left px-3 py-1.5 text-[11px] text-[#C58B58] hover:underline"
                          >
                            All Experiences →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors py-1 ${
                    path === item.href
                      ? 'text-[#C58B58] border-b border-[#C58B58]'
                      : 'text-[#EDE9DF]/80 hover:text-[#EDE9DF]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher & Primary CTA */}
          <div className="hidden sm:flex items-center space-x-5">
            {/* Language Switcher: Unboxed clean typography */}
            <div className="flex items-center space-x-1 text-xs font-sans text-[#EDE9DF]/70">
              <button
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 tracking-wider transition-colors ${
                  language === 'en'
                    ? 'text-[#EDE9DF] font-semibold border-b border-[#C58B58]'
                    : 'text-[#EDE9DF]/50 hover:text-[#EDE9DF]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <span className="text-[#202428]" aria-hidden="true">|</span>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-1.5 py-0.5 font-hindi transition-colors ${
                  language === 'hi'
                    ? 'text-[#EDE9DF] font-semibold border-b border-[#C58B58]'
                    : 'text-[#EDE9DF]/50 hover:text-[#EDE9DF]'
                }`}
                title="हिंदी में बदलें"
              >
                हिंदी
              </button>
            </div>

            {/* Primary CTA */}
            <button
              onClick={() => handleNavClick('/book')}
              className="bg-[#EDE9DF] text-[#111315] hover:bg-[#EDE9DF]/90 font-sans font-semibold text-xs tracking-wider uppercase px-4 py-2.5 transition-all duration-200 flex items-center space-x-1.5 active:scale-[0.98]"
            >
              <span>{t.nav.book}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-3">
            {/* Quick Mobile Lang Switch */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="text-xs font-semibold px-2 py-1 text-[#EDE9DF]/80 border border-[#202428]"
            >
              {language === 'en' ? 'हिंदी' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EDE9DF] hover:text-[#C58B58] focus-visible:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#111315] border-b border-[#202428] px-4 pt-4 pb-6 space-y-4">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-left px-3 py-2.5 text-sm font-medium transition-colors ${
                  path === item.href
                    ? 'text-[#C58B58] bg-[#202428]'
                    : 'text-[#EDE9DF]/80 hover:text-[#EDE9DF]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#202428] flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('/book')}
              className="w-full text-center bg-[#EDE9DF] text-[#111315] font-sans font-semibold text-xs tracking-wider uppercase py-3 flex items-center justify-center space-x-2"
            >
              <span>{t.nav.book}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center text-[11px] text-[#EDE9DF]/50 tracking-wider">
              3rd Floor, Ideal Hills / VV Tower, Gwarighat Rd, Jabalpur
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
