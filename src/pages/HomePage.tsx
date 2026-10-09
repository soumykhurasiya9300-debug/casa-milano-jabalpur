import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ExperiencesGrid } from '../components/home/ExperiencesGrid';
import { RacingSimFeature } from '../components/home/RacingSimFeature';
import { SnookerFeature } from '../components/home/SnookerFeature';
import { Ps5ArcadeFeature } from '../components/home/Ps5ArcadeFeature';
import { FoosballFeature } from '../components/home/FoosballFeature';
import { CafePreview } from '../components/home/CafePreview';
import { EventsOffersPreview } from '../components/home/EventsOffersPreview';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { LocationVisitPreview } from '../components/home/LocationVisitPreview';
import { FinalCta } from '../components/home/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-[#111315]">
      {/* Chapter 1: The World of Casa Milano Hero */}
      <HeroSection />

      {/* Chapter 2: Choose Your Game - Editorial Asymmetrical Grid */}
      <ExperiencesGrid />

      {/* Chapter 3: Racing Simulator Feature Moment */}
      <RacingSimFeature />

      {/* Chapter 4: Snooker & Billiards Feature */}
      <SnookerFeature />

      {/* Chapter 5: PS5 & Arcade Feature */}
      <Ps5ArcadeFeature />

      {/* Chapter 6: Foosball & Social Play */}
      <FoosballFeature />

      {/* Chapter 7: Café Experience Preview */}
      <CafePreview />

      {/* Chapter 8: Events & Group Experiences */}
      <EventsOffersPreview />

      {/* Chapter 9: Photo Gallery Preview */}
      <GalleryPreview />

      {/* Chapter 10: Location & Visit Preview */}
      <LocationVisitPreview />

      {/* Chapter 11: Final Typographic Statement CTA */}
      <FinalCta />
    </div>
  );
};
