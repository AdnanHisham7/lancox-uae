export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  domain: string;
  siteUrl: string;
  description: string;
  address: {
    street: string;
    building: string;
    market: string;
    area: string;
    city: string;
    country: string;
    full: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    mobile1?: string;
    mobile1Display?: string;
    mobile2?: string;
    mobile2Display?: string;
    whatsapp: string;
    whatsappDisplay: string;
  };
  businessHours: {
    days: string;
    hours: string;
    timezone: string;
  };
  social: {
    linkedin?: string;
    whatsappLink: string;
  };
  analytics: {
    googleTagManagerId: string;
    googleAnalyticsId: string;
    googleSearchConsoleToken: string;
    bingWebmasterToken: string;
  };
  navigation: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "LANCOX FZCO",
  legalName: "LANCOX FZCO",
  tagline: "Bridging the best to the esteemed hands…",
  domain: "lancoxuae.com",
  siteUrl: "https://lancoxuae.com",
  description:
    "LANCOX FZCO is a premier industrial trading company based in United Arab Emirates. We procure and supply certified Electrical, Mechanical, Fasteners, Instrumentation, and Industrial Safety equipment across the Middle East.",
  address: {
    building: "F4107, First Floor",
    market: "Dubai Traders Market, Yiwu Market",
    area: "Jebel Ali",
    street: "Yiwu Market, Dubai Traders Market, Jebel Ali",
    city: "Dubai",
    country: "United Arab Emirates",
    full: "F4107, First Floor, Dubai Traders Market, Yiwu Market, Jebel Ali, Dubai, UAE",
  },
  contact: {
    email: "sales@lancoxuae.com",
    phone: "+971585828231",
    phoneDisplay: "+971 58 582 8231",
    whatsapp: "971509410053",
    whatsappDisplay: "+971 50 941 0053",
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "08:30 AM – 06:00 PM (GST)",
    timezone: "Asia/Dubai",
  },
  social: {
    whatsappLink:
      "https://wa.me/971509410053?text=Hello%20LANCOX%20FZCO%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20industrial%20supplies.",
  },
  analytics: {
    // Configurable through environment variables or centralized here
    googleTagManagerId:
      import.meta.env.PUBLIC_GTM_ID || "GTM-LANCOX_PLACEHOLDER",
    googleAnalyticsId:
      import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "G-LANCOX_PLACEHOLDER",
    googleSearchConsoleToken:
      import.meta.env.PUBLIC_GSC_TOKEN ||
      "google-site-verification-token-placeholder",
    bingWebmasterToken:
      import.meta.env.PUBLIC_BING_TOKEN ||
      "bing-site-verification-token-placeholder",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Products", href: "/products/" },
    { label: "Industries", href: "/industries/" },
    { label: "Trade Network", href: "/trade-network/" },
    { label: "Contact", href: "/contact/" },
  ],
};
