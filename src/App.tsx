/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { LanguageProvider } from './context/LanguageContext';
import { BrandIntro } from './components/common/BrandIntro';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { ExperienceDetailPage } from './pages/ExperienceDetailPage';
import { CafePage } from './pages/CafePage';
import { OffersPage } from './pages/OffersPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { VisitPage } from './pages/VisitPage';

function AppContent() {
  const { path } = useRouter();
  const [showIntro, setShowIntro] = useState(() => {
    // Show intro on initial load unless already seen in session
    try {
      const seen = sessionStorage.getItem('casamilano_intro_seen');
      return !seen;
    } catch (e) {
      return true;
    }
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem('casamilano_intro_seen', 'true');
    } catch (e) {
      // ignore
    }
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  // Route Resolver
  const renderPage = () => {
    if (path === '/') {
      return <HomePage />;
    }
    if (path === '/experiences') {
      return <ExperiencesPage />;
    }
    if (path === '/experiences/racing') {
      return <ExperienceDetailPage slug="racing" />;
    }
    if (path === '/experiences/snooker') {
      return <ExperienceDetailPage slug="snooker" />;
    }
    if (path === '/experiences/ps5') {
      return <ExperienceDetailPage slug="ps5" />;
    }
    if (path === '/experiences/arcade') {
      return <ExperienceDetailPage slug="arcade" />;
    }
    if (path === '/experiences/foosball') {
      return <ExperienceDetailPage slug="foosball" />;
    }
    if (path === '/cafe') {
      return <CafePage />;
    }
    if (path === '/offers') {
      return <OffersPage />;
    }
    if (path === '/events') {
      return <EventsPage />;
    }
    if (path === '/gallery') {
      return <GalleryPage />;
    }
    if (path === '/book') {
      return <EnquiryPage />;
    }
    if (path === '/visit') {
      return <VisitPage />;
    }

    // Default fallback to HomePage
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#EDE9DF] flex flex-col font-sans selection:bg-[#C58B58]/30 selection:text-[#EDE9DF]">
      {/* Branded Intro Screen */}
      {showIntro && <BrandIntro onComplete={handleIntroComplete} />}

      {/* Global Header */}
      <Header />

      {/* Main View Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer onReplayIntro={handleReplayIntro} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}
