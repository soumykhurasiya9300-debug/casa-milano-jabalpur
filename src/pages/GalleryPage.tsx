import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryItems } from '../data/mockData';
import { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label_en: 'All Spaces', label_hi: 'सभी' },
    { id: 'racing', label_en: 'Racing Sim', label_hi: 'रेसिंग' },
    { id: 'snooker', label_en: 'Snooker', label_hi: 'स्नूकर' },
    { id: 'ps5', label_en: 'PS5 Lounge', label_hi: 'PS5' },
    { id: 'arcade', label_en: 'Arcade', label_hi: 'आर्केड' },
    { id: 'foosball', label_en: 'Foosball', label_hi: 'फूजबॉल' },
    { id: 'cafe', label_en: 'Lounge Café', label_hi: 'काफे' }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-28 bg-[#111315]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-[#202428]">
        <div className="max-w-3xl">
          <div className="text-xs font-sans tracking-[0.25em] text-[#C58B58] uppercase font-semibold mb-3">
            LOUNGE ARCHIVE & PHOTOGRAPHY
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EDE9DF]">
            {language === 'hi' ? 'कासा मिलानो गैलरी' : 'Casa Milano Gallery'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#EDE9DF]/70 font-sans leading-relaxed">
            {language === 'hi'
              ? 'हमारे गेमिंग एरिना, क्यू स्पोर्ट्स टेबल्स, हाई-स्पीड सिमुलेटर और आरामदायक कैफे लाउंज की खूबसूरत तस्वीरें।'
              : 'Explore the atmosphere, gaming stations, and social moments inside Jabalpur’s premier gaming venue.'}
          </p>
        </div>
      </div>

      {/* Category Filter Controls: Functional buttons (Zero static pills) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#202428] border border-[#2A3036] max-w-2xl">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-[#EDE9DF] text-[#111315]'
                    : 'text-[#EDE9DF]/70 hover:text-[#EDE9DF] hover:bg-[#111315]/40'
                }`}
              >
                {language === 'hi' ? tab.label_hi : tab.label_en}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-[#202428] border border-[#2A3036] overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title_en}
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.1] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 space-y-1">
                <div className="text-xs font-sans tracking-widest uppercase font-semibold text-[#C58B58]">
                  {item.category.toUpperCase()}
                </div>
                <h3 className="font-display text-lg font-bold text-[#EDE9DF]">
                  {language === 'hi' ? item.title_hi : item.title_en}
                </h3>
                <p className="text-xs text-[#EDE9DF]/60 font-sans">
                  {language === 'hi' ? item.caption_hi : item.caption_en}
                </p>
              </div>

              <div className="absolute top-3 right-3 p-1.5 bg-[#111315]/80 text-[#EDE9DF] opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#111315]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#202428] border border-[#2A3036] p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 bg-[#111315] text-[#EDE9DF] hover:text-[#C58B58] transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title_en}
              className="w-full max-h-[70vh] object-contain"
            />

            <div className="pt-4 space-y-1">
              <div className="text-xs font-sans tracking-widest text-[#C58B58] uppercase font-semibold">
                {activeItem.category.toUpperCase()}
              </div>
              <h3 className="font-display text-2xl font-bold text-[#EDE9DF]">
                {language === 'hi' ? activeItem.title_hi : activeItem.title_en}
              </h3>
              <p className="text-sm text-[#EDE9DF]/70">
                {language === 'hi' ? activeItem.caption_hi : activeItem.caption_en}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
