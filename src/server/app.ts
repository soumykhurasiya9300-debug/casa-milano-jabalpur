import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(express.json());

// Identify environment (Vercel serverless has read-only root FS, only /tmp is writable)
const isVercel = Boolean(process.env.VERCEL);
const DATA_DIR = isVercel ? '/tmp/casamilano_data' : path.resolve(process.cwd(), 'data');

try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
} catch (e) {
  // ignore in restricted environments
}

const SETTINGS_FILE = path.join(DATA_DIR, 'business_settings.json');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

// In-memory fallback in case filesystem is locked
let memoryEnquiries: any[] = [];

// Default business data based on prompt source-of-truth
export const defaultSettings = {
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
  },
  amenities: [
    { id: "racing", name: "Pro Racing Simulator", available: true },
    { id: "snooker", name: "Tournament Snooker & Pool", available: true },
    { id: "ps5", name: "PlayStation 5 Gaming Station", available: true },
    { id: "arcade", name: "Arcade Games", available: true },
    { id: "foosball", name: "Foosball Table", available: true },
    { id: "cafe", name: "Café & Refreshments", available: true }
  ]
};

try {
  if (!fs.existsSync(SETTINGS_FILE)) {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(defaultSettings, null, 2));
  }
} catch (e) {
  // ignore
}

export const EXPERIENCES = [
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
    accent_color: "#69C7E8",
    equipment_info: "Pro cockpit bucket seat, direct-drive force-feedback steering wheel, paddle shifters, load-cell pedals, ultra-wide high-refresh simulation monitors.",
    rate_info: "Session pricing is confirmed upon arrival or via enquiry. No hidden rates.",
    capacity: "1 racer per rig + friend spectator zone",
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
    accent_color: "#7F9B89",
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
    accent_color: "#C58B58",
    equipment_info: "Selected arcade games, mechanical reflexes, coin/token interactive units.",
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
    display_order: 5,
    is_published: true
  }
];

// Router that handles API calls whether requested via /api/xyz or /xyz
export const apiRouter = express.Router();

apiRouter.get('/settings', (req: Request, res: Response) => {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      const raw = fs.readFileSync(SETTINGS_FILE, 'utf-8');
      return res.json(JSON.parse(raw));
    }
  } catch (err) {}
  res.json(defaultSettings);
});

apiRouter.get('/experiences', (req: Request, res: Response) => {
  res.json(EXPERIENCES);
});

apiRouter.get('/experiences/:slug', (req: Request, res: Response) => {
  const item = EXPERIENCES.find(e => e.slug === req.params.slug);
  if (!item) {
    return res.status(404).json({ error: "Experience not found" });
  }
  res.json(item);
});

apiRouter.get('/cafe', (req: Request, res: Response) => {
  res.json({
    status: "verified_categories_curated_in_venue",
    notice_en: "Café food and beverages are prepared fresh in our lounge. Full seasonal menu with current pricing is served directly at the counter. Please enquiry or check in-venue for daily specials.",
    notice_hi: "काफे का भोजन और पेय पदार्थ ताजा तैयार किए जाते हैं। सटीक मूल्य और दैनिक विशेष मेनू काउंटर पर उपलब्ध है।",
    categories: [
      {
        id: "beverages",
        title_en: "Specialty Beverages & Shakes",
        title_hi: "विशेष पेय और शेक्स",
        description_en: "Signature milkshakes, artisan coffees, chilled mocktails, and iced coolers crafted to keep you energized.",
        description_hi: "सिग्नेचर मिल्कशेक, कॉफी और कूलर्स जो आपको तरोताजा रखें।",
        highlights: ["Signature Iced Brews", "Fruit Mocktails", "Thick Shakes", "Energy Coolers"]
      },
      {
        id: "bites",
        title_en: "Gaming Snacks & Finger Food",
        title_hi: "स्नैक्स और फिंगर फूड",
        description_en: "Easy-to-share gourmet fries, loaded nachos, hot crispy bites, and grilled toasts designed for seamless gaming breaks.",
        description_hi: "गेमिंग के दौरान दोस्तों के साथ शेयर करने के लिए आसान स्नैक्स।",
        highlights: ["Crispy Seasoned Fries", "Loaded Nachos", "Artisan Sliders / Sandwiches", "Quick Bites"]
      },
      {
        id: "combos",
        title_en: "Game & Sip Combos",
        title_hi: "गेम और सिप कॉम्बो",
        description_en: "Pairs session playtime with refreshing drinks. Ask the barista team on your visit for current seasonal combo offers.",
        description_hi: "खेल के साथ पेय का सही कॉम्बो। मौजूदा ऑफर्स की जानकारी काउंटर से प्राप्त करें।",
        highlights: ["Snooker & Cooler Combo", "Multiplayer Snack Platter", "Racer Energy Refreshment"]
      }
    ]
  });
});

apiRouter.get('/offers', (req: Request, res: Response) => {
  res.json({
    status: "enquiry_only",
    notice_en: "Packages and group reservations are tailored based on group size and session duration. Contact our team to book your tailored slot.",
    notice_hi: "पैकेज और ग्रुप बुकिंग समूह के आकार के अनुसार तय किए जाते हैं। अपनी बुकिंग के लिए सम्पर्क करें।",
    packages: [
      {
        id: "squad_pass",
        title_en: "The Squad Pass",
        title_hi: "द स्क्वाड पास",
        desc_en: "Designed for groups of 4 to 8 friends looking to rotate across PS5, Snooker, Foosball and the Racing Sim.",
        desc_hi: "4 से 8 दोस्तों के समूह के लिए तैयार किया गया स्पेशल पास।",
        benefits: ["Priority rotation across stations", "Comfortable group seating", "Enquiry-based custom hours"],
        badge: "Popular with Groups"
      },
      {
        id: "racer_challenge",
        title_en: "Simulator Hot-Lap Session",
        title_hi: "सिम्युलेटर हॉट-लैप सेशन",
        desc_en: "Reserved cockpit time on the racing simulator for personal practice or friendly lap-time showdowns.",
        desc_hi: "रेसिंग सिम्युलेटर पर व्यक्तिगत अभ्यास या दोस्तों के साथ लैप-टाइम मुकाबला।",
        benefits: ["Telemetry review", "Track selection flexibility", "Pro rig setup guidance"],
        badge: "Thrill Seekers"
      },
      {
        id: "private_events",
        title_en: "Birthday & Celebration Buyouts",
        title_hi: "जन्मदिन और निजी उत्सव",
        desc_en: "Celebrate milestones, college farewells, or weekend party sessions with exclusive zone access and tailored food arrangements.",
        desc_hi: "जन्मदिन या खास मौकों को खास बनाने के लिए विशेष पार्टी स्लॉट।",
        benefits: ["Dedicated venue host", "Customizable gaming lineup", "Advance date reservations"],
        badge: "Celebrations"
      }
    ]
  });
});

apiRouter.get('/gallery', (req: Request, res: Response) => {
  res.json([
    {
      id: "g1",
      category: "racing",
      title_en: "High-Fidelity Racing Rig",
      title_hi: "हाई-फिडेलिटी रेसिंग रिग",
      aspect: "wide",
      caption_en: "Direct-drive force feedback cockpit station."
    },
    {
      id: "g2",
      category: "snooker",
      title_en: "Tournament Cloth & Precision Cues",
      title_hi: "टूर्नामेंट क्लॉथ और सटीक क्यू",
      aspect: "portrait",
      caption_en: "Calibrated green felt and aramith ball racks."
    },
    {
      id: "g3",
      category: "ps5",
      title_en: "PlayStation 5 Multiplayer Station",
      title_hi: "प्लेस्टेशन 5 मल्टीप्लेयर स्टेशन",
      aspect: "landscape",
      caption_en: "DualSense controllers and low-latency 4K gaming screens."
    },
    {
      id: "g4",
      category: "foosball",
      title_en: "Solid-Rod Competition Foosball",
      title_hi: "सॉलिड-रॉड कॉम्पिटिशन फूजबॉल",
      aspect: "landscape",
      caption_en: "Fast-rolling balanced foosball matches."
    },
    {
      id: "g5",
      category: "arcade",
      title_en: "Dynamic Arcade Zone",
      title_hi: "डायनामिक आर्केड जोन",
      aspect: "portrait",
      caption_en: "Classic action and skill challenges."
    },
    {
      id: "g6",
      category: "cafe",
      title_en: "Social Café & Refreshments",
      title_hi: "सोशल काफे और रिफ्रेशमेंट्स",
      aspect: "wide",
      caption_en: "Artisanal coolers and gamer bites in a relaxed lounge."
    }
  ]);
});

apiRouter.post('/enquiries', (req: Request, res: Response) => {
  const {
    activity_slug,
    preferred_date,
    preferred_time,
    party_size,
    customer_name,
    phone,
    email,
    message,
    consent
  } = req.body;

  const errors: Record<string, string> = {};

  if (!activity_slug || typeof activity_slug !== 'string') {
    errors.activity_slug = "Please select an activity or session type.";
  }

  if (!preferred_date || typeof preferred_date !== 'string') {
    errors.preferred_date = "Please select a preferred date.";
  } else {
    const selectedDate = new Date(preferred_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selectedDate.getTime())) {
      errors.preferred_date = "Invalid date format.";
    } else if (selectedDate < today) {
      errors.preferred_date = "Date cannot be in the past.";
    }
  }

  if (!preferred_time || typeof preferred_time !== 'string' || preferred_time.trim() === '') {
    errors.preferred_time = "Please specify your preferred time.";
  }

  const parsedParty = parseInt(String(party_size), 10);
  if (isNaN(parsedParty) || parsedParty < 1 || parsedParty > 50) {
    errors.party_size = "Party size must be between 1 and 50 guests.";
  }

  if (!customer_name || typeof customer_name !== 'string' || customer_name.trim().length < 2) {
    errors.customer_name = "Please provide your full name (minimum 2 characters).";
  }

  const cleanPhone = String(phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!cleanPhone || cleanPhone.length < 10 || !/^\d{10,15}$/.test(cleanPhone)) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (email && typeof email === 'string' && email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (!consent) {
    errors.consent = "Please agree to the enquiry submission terms so we may contact you.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Please correct the form errors.",
      errors
    });
  }

  try {
    let enquiries: any[] = [...memoryEnquiries];

    if (fs.existsSync(ENQUIRIES_FILE)) {
      try {
        enquiries = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf-8'));
      } catch (e) {
        enquiries = [...memoryEnquiries];
      }
    }

    // Anti-duplicate check (within last 5 minutes)
    const now = Date.now();
    const duplicate = enquiries.find((e: any) =>
      e.phone === cleanPhone &&
      e.activity_slug === activity_slug &&
      (now - new Date(e.created_at).getTime()) < 300000
    );

    if (duplicate) {
      return res.status(429).json({
        success: false,
        message: "An enquiry with this phone number was recently submitted. Our team will contact you shortly.",
        reference: duplicate.reference
      });
    }

    const reference = `CM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEnquiry = {
      id: "enq_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      reference,
      activity_slug,
      preferred_date,
      preferred_time,
      party_size: parsedParty,
      customer_name: customer_name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : null,
      message: message ? String(message).trim() : null,
      consent: true,
      status: "pending_verification",
      created_at: new Date().toISOString()
    };

    enquiries.unshift(newEnquiry);
    memoryEnquiries = enquiries;

    try {
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2));
    } catch (writeErr) {
      // In read-only serverless, memoryEnquiries retains the submission safely
    }

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! Casa Milano staff will reach out to verify slot availability.",
      reference,
      enquiry: {
        reference,
        activity_slug,
        preferred_date,
        preferred_time,
        party_size: parsedParty,
        customer_name: customer_name.trim()
      }
    });
  } catch (err) {
    console.error("Error saving enquiry:", err);
    return res.status(500).json({
      success: false,
      message: "Could not save enquiry at this moment. Please try again or reach out on Instagram @casamilano.cm."
    });
  }
});

apiRouter.get('/enquiries', (req: Request, res: Response) => {
  try {
    let list = memoryEnquiries;
    if (fs.existsSync(ENQUIRIES_FILE)) {
      list = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf-8'));
    }
    const sanitized = list.map((d: any) => ({
      ...d,
      phone: d.phone ? d.phone.substring(0, 4) + '******' : null
    }));
    return res.json(sanitized);
  } catch (e) {
    res.json([]);
  }
});

// Mount router on both '/api' and '/'
app.use('/api', apiRouter);
app.use(apiRouter);

export default app;
