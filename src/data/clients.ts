export interface Client {
  name: string;
  fullName: string;
  arabicName?: string;
  logo: string;
  category: string;
  scope: string;
  location: string;
  highlights: string[];
}

export const clients: Client[] = [
  {
    name: "DEWA",
    fullName: "Dubai Electricity and Water Authority",
    arabicName: "هيئة كهرباء ومياه دبي",
    logo: "/images/clients/dewa.png",
    category: "Government Utility Authority",
    scope: "Electrical distribution, substation technical supplies & utility infrastructure gear",
    location: "Dubai, United Arab Emirates",
    highlights: [
      "Power grid & substation technical equipment",
      "Specialized cable fault detection & diagnostic supplies",
      "High-reliability electrical & maintenance components",
    ],
  },
  {
    name: "Sharjah Municipality",
    fullName: "Sharjah City Municipality",
    arabicName: "بلدية مدينة الشارقة",
    logo: "/images/clients/sharjah-municipality.png",
    category: "Government Municipal Authority",
    scope: "Municipal infrastructure, civil engineering supplies & technical maintenance equipment",
    location: "Sharjah, United Arab Emirates",
    highlights: [
      "Municipal water & drainage piping infrastructure",
      "Industrial maintenance tools & workshop machinery",
      "Public works technical consumables & hardware",
    ],
  },
];
