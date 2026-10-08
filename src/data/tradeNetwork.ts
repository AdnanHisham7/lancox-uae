export interface StandardBadge {
  code: string;
  name: string;
  scope: string;
}

export interface TradeCorridor {
  region: string;
  hub: string;
  focus: string;
}

export interface ApprovedBrand {
  name: string;
  category: string;
  logo: string;
}

export const approvedBrands: ApprovedBrand[] = [
  {
    name: "Schneider Electric",
    category: "Electrical Distribution & Automation",
    logo: "/images/brands/schneider-electric.png",
  },
  {
    name: "Siemens",
    category: "Switchgear, Drives & Industrial Controls",
    logo: "/images/brands/siemens.png",
  },
  {
    name: "ABB",
    category: "Electrification, Power Systems & Automation",
    logo: "/images/brands/abb.svg",
  },
  {
    name: "OMRON",
    category: "Industrial Sensors, Relays & Automation",
    logo: "/images/brands/omron.png",
  },
  {
    name: "SMC",
    category: "Pneumatics & Fluid Power Controls",
    logo: "/images/brands/smc.png",
  },
  {
    name: "RSB",
    category: "Automotive, Transmission & Heavy Machining",
    logo: "/images/brands/rsb.png",
  },
  {
    name: "Phoenix Contact",
    category: "Terminal Blocks, Surge Protection & Interface",
    logo: "/images/brands/phoenix-contact.svg",
  },
  {
    name: "Larsen & Toubro (L&T)",
    category: "Switchgear, Process Valves & Electrical Equipment",
    logo: "/images/brands/larsen-toubro.svg",
  },
  {
    name: "Tanbos",
    category: "Cable Fault Locators & Diagnostic Test Sets",
    logo: "/images/brands/tanbos.png",
  },
  {
    name: "Rittal",
    category: "Industrial Enclosures & Climate Control",
    logo: "/images/brands/rittal.svg",
  },
  {
    name: "ebm-papst",
    category: "Industrial Fans, Blowers & Drive Engineering",
    logo: "/images/brands/ebm-papst.svg",
  },
  {
    name: "Honeywell",
    category: "Process Solutions, Sensors & Field Instrumentation",
    logo: "/images/brands/honeywell.svg",
  },
  {
    name: "MEAN WELL",
    category: "Industrial Power Supplies & LED Drivers",
    logo: "/images/brands/mean-well.png",
  },
  {
    name: "Philips",
    category: "Professional & Hazardous Area Lighting",
    logo: "/images/brands/philips.svg",
  },
  {
    name: "LEDVANCE",
    category: "Industrial Luminaires & LED Systems",
    logo: "/images/brands/ledvance.svg",
  },
  {
    name: "TopWorx",
    category: "Discrete Valve Control & Position Sensing",
    logo: "/images/brands/topworx.png",
  },
  {
    name: "Perkins",
    category: "Diesel Engines & Power Generation",
    logo: "/images/brands/perkins.svg",
  },
  {
    name: "RAKtherm",
    category: "PPR Piping Systems & High-Pressure Plumbing",
    logo: "/images/brands/raktherm.png",
  },
];

export const internationalStandards: StandardBadge[] = [
  { code: "API", name: "American Petroleum Institute", scope: "Line Pipes, Valves & Oilfield Equipment" },
  { code: "ASME", name: "American Society of Mechanical Engineers", scope: "Pressure Vessels, Boilers & Flanges" },
  { code: "ASTM", name: "ASTM International", scope: "Material Specifications, Steels & Structural Fasteners" },
  { code: "IEC", name: "International Electrotechnical Commission", scope: "Cables, Switchgear, Motors & Transformers" },
  { code: "ATEX / IECEx", name: "Hazardous Area Certification", scope: "Explosion-Proof Electrical & Instrumentation" },
  { code: "DIN", name: "Deutsches Institut für Normung", scope: "Precision Fasteners, Mechanical & Metric Tools" },
  { code: "BS EN", name: "British & European Standards", scope: "Structural Steels, PPE Workwear & Safety Footwear" },
  { code: "ISO 9001", name: "Quality Management Systems", scope: "Manufacturer Quality Assurance & Traceability" },
  { code: "NEMA", name: "National Electrical Manufacturers", scope: "Cable Tray Systems, Enclosures & Motors" },
  { code: "NFPA", name: "National Fire Protection Association", scope: "Fire & Gas Detection, FR Protective Workwear" },
];

export const tradeCorridors: TradeCorridor[] = [
  { region: "United Arab Emirates", hub: "Dubai Logistics Hub", focus: "Strategic Regional Logistics & Central Distribution" },
  { region: "Europe", hub: "Germany, Italy & UK", focus: "Precision Valves, Heavy Heat Exchangers & Instrumentation" },
  { region: "North America", hub: "USA & Canada", focus: "High-Tensile Bolting, Severe-Service API Valves & Tubing" },
  { region: "East Asia", hub: "Japan, South Korea & Taiwan", focus: "High-Spec Seamless Pipe, High-Tech Pumps & Automation" },
  { region: "China", hub: "Yiwu & Coastal Industrial Ports", focus: "General Industrial Consumables, Electrical & Fasteners" },
  { region: "GCC & Middle East", hub: "Saudi Arabia, Oman & Qatar", focus: "Cross-Border Industrial Delivery & Regional Contracting" },
];

export const tradeNetworkPillars = [
  {
    title: "Vetted Global Sourcing",
    description: "Every supplier in our network is audited for manufacturing consistency, material test certificates (MTC 3.1/3.2), and regulatory compliance.",
  },
  {
    title: "Approved Manufacturer Compliance (AML)",
    description: "We cross-reference procurement requests against your project's Approved Manufacturer List (AML) to ensure exact engineering compliance.",
  },
  {
    title: "Strategic Hub & Regional Logistics",
    description: "Operating from Dubai provides seamless transit, world-class shipping connections, and expedited regional dispatch across UAE and the GCC.",
  },
  {
    title: "Full Material Traceability",
    description: "Complete heat number tracking, mill test reports, calibration certificates, and third-party inspection dossiers supplied with all shipments.",
  },
];
