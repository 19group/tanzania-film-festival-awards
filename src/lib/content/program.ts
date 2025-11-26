// Path: src/lib/content/program.ts
import { ProgramContent } from "@/lib/types/program";

export const programContent: ProgramContent = {
  sw: {
    hero: {
      kicker: "Ratiba ya Matukio",
      title: "Ratiba ya TAFFA",
      subtitle:
        "Pata ratiba kamili ya maonyesho ya filamu, warsha, mijadala na shughuli zote za Tamasha la Filamu Tanzania.",
      festivalDates: "14-16 Agosti",
      location: "Mlimani City, Dar es Salaam",
      duration: "Siku 3",
    },

    days: [
      {
        date: "14 Agosti",
        day: "Siku ya Kwanza",
        description: "Sherehe ya uzinduzi na maonyesho ya filamu za kipekee",
        icon: "film",
        color: "from-[#E4B34C] to-yellow-500",
      },
      {
        date: "15 Agosti",
        day: "Siku ya Pili",
        description: "Mafunzo ya vitendo na mazungumzo na wataalamu",
        icon: "users",
        color: "from-[#E4B34C] to-yellow-500",
      },
      {
        date: "16 Agosti",
        day: "Siku ya Tatu",
        description: "Maonyesho ya mwisho na sherehe ya kufunga",
        icon: "award",
        color: "from-[#E4B34C] to-yellow-500",
      },
    ],

    whatToExpect: [
      {
        icon: "film",
        title: "Maonyesho ya Filamu",
        description: "Filamu kutoka Tanzania, Afrika Mashariki na kimataifa.",
      },
      {
        icon: "users",
        title: "Warsha za Mafunzo",
        description: "Mafunzo ya vitendo kutoka kwa wataalamu wa tasnia.",
      },
      {
        icon: "briefcase",
        title: "Majadiliano ya Paneli",
        description: "Mazungumzo kuhusu mustakabali wa filamu Tanzania.",
      },
      {
        icon: "users",
        title: "Mtandao wa Biashara",
        description: "Kutana na watengenezaji filamu, wawekezaji na wadau.",
      },
      {
        icon: "award",
        title: "Maonyesho Maalum",
        description: "Premiere za filamu mpya na za kihistoria.",
      },
      {
        icon: "briefcase",
        title: "Fursa za Biashara",
        description: "Jukwaa la kuwasilisha miradi kwa wawekezaji.",
      },
    ],

    guide: [
      "Fika mapema ili kuepuka foleni na kupata nafasi nzuri.",
      "Tazama ratiba mara kwa mara kwa mabadiliko ya mwisho.",
      "Shiriki kwenye warsha za bure zilizopo kwa wageni wote.",
      "Tembelea mabanda ya washirika na maonyesho.",
      "Changamkiana na watengenezaji wa filamu.",
      "Hifadhi tiketi yako kwa ufikiaji wa shughuli zote.",
    ],
  },

  en: {
    hero: {
      kicker: "Event Schedule",
      title: "TAFFA Program",
      subtitle:
        "Explore the full schedule of film screenings, workshops, panels, and all festival activities.",
      festivalDates: "14–16 August",
      location: "Mlimani City, Dar es Salaam",
      duration: "3 Days",
    },

    days: [
      {
        date: "14 August",
        day: "Day One",
        description: "Opening ceremony and featured film screenings",
        icon: "film",
        color: "from-[#E4B34C] to-yellow-500",
      },
      {
        date: "15 August",
        day: "Day Two",
        description: "Hands-on training and panel discussions",
        icon: "users",
        color: "from-[#E4B34C] to-yellow-500",
      },
      {
        date: "16 August",
        day: "Day Three",
        description: "Final screenings and closing celebration",
        icon: "award",
        color: "from-[#E4B34C] to-yellow-500",
      },
    ],

    whatToExpect: [
      {
        icon: "film",
        title: "Film Screenings",
        description: "Films from Tanzania, East Africa, and international productions.",
      },
      {
        icon: "users",
        title: "Training Workshops",
        description: "Hands-on training sessions by industry professionals.",
      },
      {
        icon: "briefcase",
        title: "Panel Discussions",
        description: "Discussions on the future of Tanzanian cinema.",
      },
      {
        icon: "users",
        title: "Networking",
        description: "Connect with filmmakers, investors, and stakeholders.",
      },
      {
        icon: "award",
        title: "Special Screenings",
        description: "Premieres of new releases and classic films.",
      },
      {
        icon: "briefcase",
        title: "Business Opportunities",
        description: "Pitch projects to investors and industry leaders.",
      },
    ],

    guide: [
      "Arrive early to avoid queues and secure good seats.",
      "Check the schedule frequently for updates.",
      "Join free workshops open to all attendees.",
      "Visit partner booths and exhibitions.",
      "Network with fellow filmmakers and creatives.",
      "Keep your badge for full access to activities.",
    ],
  },
};
