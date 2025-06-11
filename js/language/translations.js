// js/translation.js
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.program": "Program",
    "nav.language": "Language",
    "lang.en": "English",
    "lang.sw": "Kiswahili",
    "nav.film": "Film",
    "nav.awards": "Awards",
    "nav.submission": "Submission",
    "nav.awards": "Awards",
    "nav.gallery": "Gallery",
    "nav.partners": "Partners",
    "nav.contact": "Contact Us",

    "hero.title1": "TANZANIA",
    "hero.title2": "FILM FESTIVAL",
    "hero.title3": "AWARD 2025",
    "hero.description": "Join us for a dynamic celebration of African storytelling, innovation, and industry transformation. From film screenings and workshops to investment pitches and the prestigious TAFFA Awards, this is more than a festival <span>it’s a movement.</span>",
    "hero.date": "Jun 6, 2025",
    "hero.location": "Dar es Salaam, Tanzania",
    "hero.cta": "Register",

    "about.title": "About the Festival",
    "about.description": "TAFFA is a powerful platform championing the film industry as a catalyst for social transformation and economic growth. Held annually, TAFFA unites filmmakers, media professionals, policymakers, investors, development partners, and the public for a three-month-long celebration of cinema, culture, and collaboration.",
    "about.highlights": "Festival Highlight",
    "about.item1": "Film Screenings & Premieres",
    "about.item2": "Hands-On Workshops & Masterclasses",
    "about.item3": "Forums & Dialogues with Thought Leaders",
    "about.item4": "Investment Pitches & Dealrooms",
    "about.item5": "Exhibitions & Tech Showcases",
    "about.item6": "Creative Studio & Heritage Tours",
    "about.item7": "Awards Gala",

    "about.stats.date": "Jun 06, 2025",
    "about.stats.location": "Dar es Salaam, Tanzania",
    "about.stats.filmmakers": "250+ Local & International Filmmakers",
    "about.stats.stakeholders": "3,000+ Stakeholders in Panels & Forums",
    "about.stats.audience": "10,000+ Audience Members at Screenings",
    "about.stats.reach": "Millions Reached Through Media Coverage",
    "about.register": "Register"
  },
  sw: {
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.program": "Ratiba",
    "nav.language": "Lugha",
    "lang.en": "Kiingereza",
    "lang.sw": "Kiswahili",
    "nav.film": "Filamu",
    "nav.awards": "Tuzo",
    "nav.submission": "Wasilisho",
    "nav.awards": "Tuzo",
    "nav.gallery": "Picha",
    "nav.partners": "Wadau",
    "nav.contact": "Wasiliana Nasi",
    
    "hero.title1": "TANZANIA",
    "hero.title2": "TAMASHA LA FILAMU",
    "hero.title3": "TUZO 2025",
    "hero.description": "Jiunge nasi kwa maadhimisho ya hadithi za Kiafrika, ubunifu, na mabadiliko ya tasnia. Kuanzia maonyesho ya filamu na warsha hadi mitandao ya uwekezaji na Tuzo za kifahari za TAFFA — hii si tamasha tu <span>ni harakati.</span>",
    "hero.date": "6 Juni, 2025",
    "hero.location": "Dar es Salaam, Tanzania",
    "hero.cta": "Jisajili",

    "about.title": "Kuhusu Tamasha",
    "about.description": "TAFFA ni jukwaa lenye nguvu linalotetea tasnia ya filamu kama kichocheo cha mabadiliko ya kijamii na ukuaji wa uchumi. Hufanyika kila mwaka, TAFFA huwaleta pamoja watayarishaji wa filamu, wataalamu wa vyombo vya habari, watunga sera, wawekezaji, wadau wa maendeleo, na umma kwa maadhimisho ya miezi mitatu ya sinema, utamaduni, na ushirikiano.",
    "about.highlights": "Mambo Muhimu ya Tamasha",
    "about.item1": "Maonyesho ya Filamu na Premieres",
    "about.item2": "Warsha za Vitendo na Madarasa ya Mabingwa",
    "about.item3": "Mijadala na Vikao na Viongozi wa Mawazo",
    "about.item4": "Uwasilishaji wa Uwekezaji na Vyumba vya Mikataba",
    "about.item5": "Maonyesho na Teknolojia za Kisasa",
    "about.item6": "Ziara za Studio na Maeneo ya Urithi",
    "about.item7": "Tuzo ya Gala",

    "about.stats.date": "6 Juni, 2025",
    "about.stats.location": "Dar es Salaam, Tanzania",
    "about.stats.filmmakers": "250+ Watayarishaji wa Filamu wa Ndani na Kimataifa",
    "about.stats.stakeholders": "3,000+ Wadau kwenye Vikao na Mijadala",
    "about.stats.audience": "10,000+ Watazamaji kwenye Maonyesho ya Filamu",
    "about.stats.reach": "Mamilioni Wamefikiwa Kupitia Vyombo vya Habari",
    "about.register": "Jisajili"
  }
};

const languages = ["en", "sw"];
const defaultLanguage = "en";

const getTranslations = (lang) => {
  if (!languages.includes(lang)) {
    console.warn(`Language ${lang} not supported. Falling back to default.`);
    return translations[defaultLanguage];
  }
  return translations[lang];
};
