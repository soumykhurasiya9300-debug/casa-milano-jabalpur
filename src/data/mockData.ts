import { Experience, BusinessSettings, MenuItemCategory, PackageOffer, GalleryItem } from '../types';

export const initialSettings: BusinessSettings = {
  business_name: "Casa Milano",
  tagline: "Not Just A Place. Your Space.",
  campaign_line: "Play. Eat. Chill. Repeat.",
  city: "Jabalpur",
  state: "Madhya Pradesh",
  address: "3rd Floor, Casa Milano, Ideal Hills / VV Tower, Adarsh Nagar, Gwarighat Road, Jabalpur, Madhya Pradesh 482008",
  address_verification_note: "Reported address. Exact building entry pin to be re-verified with venue upon arrival.",
  instagram_handle: "@casamilano.cm",
  instagram_url: "https://www.instagram.com/casamilano.cm",
  google_maps_url: "https://www.google.com/maps/search/?api=1&query=Casa+Milano+Ideal+Hills+VV+Tower+Adarsh+Nagar+Gwarighat+Road+Jabalpur",
  phone: null,
  whatsapp_number: null,
  email: null,
  operating_hours: {
    status: "unconfirmed",
    announcement: "Official operating hours are currently being finalized with venue management. We recommend messaging on Instagram (@casamilano.cm) or sending an enquiry prior to your visit."
  }
};

export const experiencesData: Experience[] = [
  {
    id: "racing",
    slug: "racing",
    title_en: "Racing Simulator",
    title_hi: "रेसिंग सिम्युलेटर",
    tagline_en: "Feel Every Turn. Step into the driver's seat.",
    tagline_hi: "हर मोड़ को महसूस करें। ड्राइवर की सीट पर कदम रखें।",
    short_desc_en: "Immerse yourself in precision racing cockpit rigs with direct force feedback, authentic pedals, and razor-sharp high refresh displays.",
    short_desc_hi: "फोर्स फीडबैक, प्रामाणिक पैडल और उच्च रिफ्रेश डिस्प्ले वाले प्रो कॉकपिट रिग्स पर वास्तविक रेसिंग का रोमांच महसूस करें।",
    long_desc_en: "Engineered for enthusiasts and casual thrill-seekers alike. Take the wheel across iconic international circuits, master apexes, and push speed limits in an authentic racing setup right here in Jabalpur.",
    long_desc_hi: "रोमांच के दीवानों के लिए विशेष रूप से तैयार। प्रसिद्ध अंतरराष्ट्रीय ट्रैक्स पर गाड़ी दौड़ाएं और जबलपुर में ही यथार्थवादी रेसिंग का आनंद लें।",
    accent_color: "#69C7E8", // Electric Ice
    equipment_info: "Pro cockpit bucket seat, direct-drive force-feedback steering wheel, paddle shifters, load-cell pedals, ultra-wide high-refresh simulation monitors.",
    rate_info: "Session pricing confirmed upon arrival or via enquiry. No hidden rates.",
    capacity: "1 racer per rig + dedicated companion spectator zone",
    rules_en: [
      "Follow simulator staff onboarding instructions before starting session.",
      "Wear comfortable flat footwear for pedal precision.",
      "Food and open drinks not allowed on steering hardware surfaces."
    ],
    rules_hi: [
      "सत्र शुरू करने से पहले संचालक के निर्देशों का पालन करें।",
      "ड्राइविंग के लिए आरामदायक जूते पहनें।",
      "सिम्युलेटर हार्डवेयर पर खाना या पेय पदार्थ न रखें।"
    ],
    hero_image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    secondary_image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1200&q=80",
    display_order: 1,
    is_published: true
  },
  {
    id: "snooker",
    slug: "snooker",
    title_en: "Snooker & Billiards",
    title_hi: "स्नूकर और बिलियर्ड्स",
    tagline_en: "Aim. Play. Repeat.",
    tagline_hi: "निशाना लगाएं। खेलें। दोहराएं।",
    short_desc_en: "Championship-standard felt, precision cues, calibrated lighting, and a refined social lounge ambience.",
    short_desc_hi: "चैंपियनशिप मानक टेबल, सटीक क्यू और शानदार लाउंज माहौल में स्नूकर का लुत्फ उठाएं।",
    long_desc_en: "Step into our dedicated snooker zone where focused competition meets relaxed luxury. Whether you are running century breaks or enjoying a casual frames session with friends after hours, Casa Milano delivers the ideal cue sports environment.",
    long_desc_hi: "हमारे समर्पित स्नूकर जोन में प्रतिस्पर्धा और सुकून का सही संगम है। दोस्तों के साथ मजेदार फ्रेम खेलें और खेल का आनंद लें।",
    accent_color: "#7F9B89", // Muted Arcade Green
    equipment_info: "Full-size slate tables with tournament cloth, balanced ash cues, aramith ball sets, and overhead glare-free canopy lighting.",
    rate_info: "Frames or hourly slots available. Enquire for current table slot rates.",
    capacity: "2 to 4 players per table",
    rules_en: [
      "Use cue chalk responsibly to preserve tournament table cloth.",
      "No food or open beverages placed on cushion rails.",
      "Standard cue sports etiquette and fair play expected."
    ],
    rules_hi: [
      "टेबल क्लॉथ की सुरक्षा के लिए चॉक का सही उपयोग करें।",
      "टेबल के किनारों पर खाना या पेय न रखें।",
      "खेल भावना और शिष्टाचार का पालन करें।"
    ],
    hero_image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=80",
    secondary_image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=1200&q=80",
    display_order: 2,
    is_published: true
  },
  {
    id: "ps5",
    slug: "ps5",
    title_en: "PlayStation 5 Lounge",
    title_hi: "प्लेस्टेशन 5 लाउंज",
    tagline_en: "Game On. Next-gen console multiplayer.",
    tagline_hi: "गेम ऑन। नेक्स्ट-जेन कंसोल मल्टीप्लेयर।",
    short_desc_en: "PS5 setups connected to low-latency 4K HDR displays with DualSense controllers for sports, fighting, and co-op adventures.",
    short_desc_hi: "4K HDR डिस्प्ले और डुअलसेंस कंट्रोलर्स के साथ आधुनिक PS5 मल्टीप्लेयर गेमिंग।",
    long_desc_en: "Gather your crew for intense FIFA/EA FC showdowns, Mortal Kombat battles, racing duels, and cooperative team campaigns. Comfortable seating and lag-free audio-visuals make every match unforgettable.",
    long_desc_hi: "अपने दोस्तों के साथ EA FC, फाइटिंग गेम्स और रोमांचक को-ऑप एडवेंचर्स खेलें। आरामदायक सिटिंग और बेहतरीन स्क्रीन का मजा लें।",
    accent_color: "#69C7E8",
    equipment_info: "Sony PlayStation 5 consoles, ultra-HD 4K gaming screens, wireless DualSense haptic controllers, dedicated audio soundbars.",
    rate_info: "Hourly station passes available. Contact or enquire for current station availability.",
    capacity: "1 to 4 players per console station",
    rules_en: [
      "Treat controllers with care; keep hands clean before play.",
      "Switching physical discs or cables must be done by venue crew.",
      "Respect surrounding players' space and volume levels."
    ],
    rules_hi: [
      "कंट्रोलर्स का सावधानीपूर्वक उपयोग करें।",
      "डिस्क या केबल बदलने के लिए स्टाफ से सहायता लें।",
      "लाउंज में अन्य खिलाड़ियों के प्रति शिष्टता बरतें।"
    ],
    hero_image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1600&q=80",
    secondary_image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    display_order: 3,
    is_published: true
  },
  {
    id: "arcade",
    slug: "arcade",
    title_en: "Arcade Games",
    title_hi: "आर्केड गेम्स",
    tagline_en: "Classic Thrills. Instant adrenaline.",
    tagline_hi: "क्लासिक रोमांच। तुरंत उत्साह।",
    short_desc_en: "Dynamic arcade cabinets and skill games designed for fast-paced rounds and quick competitive fun.",
    short_desc_hi: "तेज रफ्तार राउंड्स और रोमांचक प्रतिस्पर्धी गेम्स के साथ आर्केड का मजा।",
    long_desc_en: "Experience high-energy arcade action that keeps you coming back for just one more round. Ideal for warmups, quick breaks between matches, and friendly head-to-head score challenges.",
    long_desc_hi: "दोस्तों के साथ स्कोर की होड़ लगाएं और हाई-एनर्जी आर्केड गेम्स का आनंद लें।",
    accent_color: "#C58B58", // Burnished Copper
    equipment_info: "Selected arcade games, mechanical reflex games, token-interactive units.",
    rate_info: "Token/play based. Ask at counter for current arcade token availability.",
    capacity: "Solo and 2-player battle modes",
    rules_en: [
      "Use official Casa Milano game tokens/passes.",
      "No tilting, shaking, or rough handling of arcade machines."
    ],
    rules_hi: [
      "कासा मिलानो के आधिकारिक टोकन या पास का उपयोग करें।",
      "मशीनों को झटका न दें या अनावश्यक जोर न लगाएं।"
    ],
    hero_image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1600&q=80",
    secondary_image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=1200&q=80",
    display_order: 4,
    is_published: true
  },
  {
    id: "foosball",
    slug: "foosball",
    title_en: "Foosball Arena",
    title_hi: "फूजबॉल एरिना",
    tagline_en: "Better With Your People. Fast, loud, social.",
    tagline_hi: "दोस्तों के साथ और भी मजेदार। तेज और रोमांचक।",
    short_desc_en: "Professional solid-rod foosball tables for 1v1 faceoffs and high-stakes 2v2 friend rivalries.",
    short_desc_hi: "1v1 और 2v2 मुकाबलों के लिए बेहतरीन फूजबॉल टेबल्स।",
    long_desc_en: "Few things spark natural laughter, hype, and friendly banter like rapid-fire foosball. Our heavy-duty tables provide true ball roll, crisp ball control, and hours of group bonding.",
    long_desc_hi: "दोस्तों के बीच मजेदार मुकाबले और हंसी-मजाक के लिए फूजबॉल सबसे पसंदीदा खेल है।",
    accent_color: "#EDE9DF",
    equipment_info: "High-grade commercial tournament foosball table with counterbalanced figures and precision telescopic rods.",
    rate_info: "Included with selected gaming passes or frame rates. Enquire for details.",
    capacity: "2 to 4 players per match",
    rules_en: [
      "No intentional 360-degree rod spinning (pro tournament rules apply).",
      "Return match balls to table trays when finishing a round."
    ],
    rules_hi: [
      "रॉड को 360 डिग्री बेवजह न घुमाएं।",
      "मैच पूरा होने पर बॉल को टेबल ट्रे में वापस रखें।"
    ],
    hero_image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80",
    secondary_image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    display_order: 5,
    is_published: true
  }
];

export const cafeCategories: MenuItemCategory[] = [
  {
    id: "beverages",
    title_en: "Handcrafted Coolers & Shakes",
    title_hi: "सिग्नेचर कूलर्स और शेक्स",
    description_en: "Rich thick shakes, artisan iced cold brews, fruit coolers, and sparkling mocktails tailored for intense gaming sessions.",
    description_hi: "स्वादिष्ट मिल्कशेक, कोल्ड ब्रू और फलों के ताज़ा कूलर्स जो आपकी एनर्जी बनाए रखें।",
    highlights: ["Artisan Iced Coffee", "Double Chocolate Shake", "Mint Citrus Mocktail", "Blueberry Fizz Cooler"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "bites",
    title_en: "Gamer Finger Food & Bites",
    title_hi: "गेमर स्नैक्स और फिंगर फूड",
    description_en: "Crisp seasoned fries, nachos with melted dips, hot gourmet toasties, and easy finger food that keep controllers clean.",
    description_hi: "क्रिस्पी फ्राइज, लोडेड नाचोज़ और स्वादिष्ट बाइट्स जो गेमिंग के लिए उपयुक्त हैं।",
    highlights: ["Peri Peri Crisp Fries", "Loaded Cheesy Nachos", "Grilled Paneer/Veg Toastie", "Crispy Finger Platters"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "combos",
    title_en: "Session Play & Sip Combos",
    title_hi: "सेशन प्ले और सिप कॉम्बो",
    description_en: "Special seasonal pairings pairing table or simulator playtime with barista drinks. Ask our counter barista for today's specials.",
    description_hi: "खेलने के साथ ड्रिंक्स के खास मौसमी कॉम्बो ऑफर्स। काउंटर से दैनिक स्पेशल पूछें।",
    highlights: ["Snooker Hour + Cooler", "Squad Platter + 4 Shakes", "Racer Energy Refreshment Combo"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
  }
];

export const packageOffers: PackageOffer[] = [
  {
    id: "squad_pass",
    title_en: "The Squad Pass",
    title_hi: "द स्क्वाड पास",
    desc_en: "Ideal for groups of 4 to 8 looking to rotate between PS5, Snooker, Foosball and the Racing Sim during an evening hangout.",
    desc_hi: "4 से 8 दोस्तों के ग्रुप के लिए बेस्ट, जो शाम को विभिन्न गेम्स खेलना चाहते हैं।",
    benefits_en: [
      "Priority rotation across stations",
      "Reserved lounge sofa seating",
      "Tailored multi-game duration on enquiry"
    ],
    benefits_hi: [
      "स्टेशन्स के बीच प्राथमिकता रोटेशन",
      "आरक्षित लाउंज सोफा सिटिंग",
      "पूछताछ पर कस्टम अवधि"
    ],
    badge_en: "Group Hangouts",
    badge_hi: "ग्रुप हैंगआउट्स",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "racer_challenge",
    title_en: "Simulator Hot-Lap Session",
    title_hi: "सिम्युलेटर हॉट-लैप सेशन",
    desc_en: "Dedicated cockpit time on the racing simulator for focused practice, time-trial competition, or testing your skills on iconic tracks.",
    desc_hi: "रेसिंग सिम्युलेटर पर व्यक्तिगत अभ्यास और टाइम-ट्रायल मुकाबले के लिए समर्पित समय।",
    benefits_en: [
      "Full rig calibration guidance",
      "Telemetry & lap time recording",
      "Single or companion shared rig time"
    ],
    benefits_hi: [
      "कॉकपिट रिग कैलिब्रेशन गाइडेंस",
      "लैप टाइम और टेलीमेट्री रिकॉर्डिंग",
      "सिंगल या शेयर्ड रिग टाइम"
    ],
    badge_en: "Simulation Special",
    badge_hi: "सिमुलेशन स्पेशल",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "private_events",
    title_en: "Birthday & Celebration Buyouts",
    title_hi: "जन्मदिन और निजी उत्सव",
    desc_en: "Mark birthdays, semester-end meetups, or corporate offsites with dedicated station blocks and tailored snack coordination.",
    desc_hi: "जन्मदिन या खास मौकों को खास बनाने के लिए विशेष पार्टी स्लॉट और कैफे अरेंजमेंट।",
    benefits_en: [
      "Advance date reservation guarantee",
      "Dedicated venue host for the squad",
      "Tailored café refreshments arrangement"
    ],
    benefits_hi: [
      "अग्रिम तारीख की पुष्टि",
      "समर्पित वेन्यू होस्ट",
      "कस्टमाइज्ड कैफे रिफ्रेशमेंट्स"
    ],
    badge_en: "Private Bookings",
    badge_hi: "प्राइवेट बुकिंग",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "racing",
    title_en: "Pro Simulator Cockpit",
    title_hi: "प्रो सिम्युलेटर कॉकपिट",
    caption_en: "Direct-drive wheel and bucket cockpit setup in high contrast.",
    caption_hi: "हाई कंट्रास्ट में डायरेक्ट-ड्राइव व्हील और बकेट कॉकपिट सेटअप।",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    aspect: "wide"
  },
  {
    id: "g2",
    category: "snooker",
    title_en: "Championship Cloth & Balls",
    title_hi: "चैंपियनशिप क्लॉथ और बॉल्स",
    caption_en: "Calibrated green felt cloth and overhead balanced lighting.",
    caption_hi: "कैलिब्रेटेड ग्रीन क्लॉथ और सटीक ओवरहेड लाइटिंग।",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    aspect: "portrait"
  },
  {
    id: "g3",
    category: "ps5",
    title_en: "DualSense 4K Gaming Zone",
    title_hi: "डुअलसेंस 4K गेमिंग जोन",
    caption_en: "Lag-free multiplayer setups with comfortable leather seating.",
    caption_hi: "आरामदायक सिटिंग के साथ लो-लेटेंसी 4K मल्टीप्लेयर स्टेशन्स।",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g4",
    category: "foosball",
    title_en: "Foosball Social Action",
    title_hi: "फूजबॉल सोशल एक्शन",
    caption_en: "Rapid-fire 2v2 friendly showdowns and high spirits.",
    caption_hi: "दोस्तों के बीच तेज रफ्तार 2v2 मुकाबला।",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80",
    aspect: "landscape"
  },
  {
    id: "g5",
    category: "arcade",
    title_en: "Arcade Reflex Units",
    title_hi: "आर्केड रिफ्लेक्स यूनिट्स",
    caption_en: "Instant play machines for quick adrenaline breaks.",
    caption_hi: "त्वरित एड्रेनालिन ब्रेक के लिए इंस्टेंट प्ले मशीनें।",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80",
    aspect: "portrait"
  },
  {
    id: "g6",
    category: "cafe",
    title_en: "Lounge Refreshments",
    title_hi: "लाउंज रिफ्रेशमेंट्स",
    caption_en: "Crafted iced coolers and warm social seating.",
    caption_hi: "स्वादिष्ट कूलर्स और आरामदायक सोशल लाउंज।",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    aspect: "wide"
  }
];
