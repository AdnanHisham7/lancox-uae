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
}

export const approvedBrands: ApprovedBrand[] = [
  { name: "Schneider Electric", category: "Electrical & Automation" },
  { name: "RS Components", category: "Industrial Consumables & MRO" },
  { name: "Siemens", category: "Drives, Switchgear & Automation" },
  { name: "Omron", category: "Industrial Sensors & Relays" },
  { name: "SKF", category: "Bearings, Seals & Lubrication" },
  { name: "Molex", category: "Interconnectors & Cabling" },
  { name: "Festo", category: "Pneumatics & Process Automation" },
  { name: "3M", category: "Safety PPE & Industrial Adhesives" },
  { name: "Flowserve", category: "Pumps, Valves & Mechanical Seals" },
  { name: "Fluke", category: "Test & Calibration Instruments" },
  { name: "STMicroelectronics", category: "Semiconductors & Controls" },
  { name: "SMC", category: "Pneumatic Control Equipment" },
  { name: "McMaster-Carr", category: "Industrial Hardware & Fasteners" },
  { name: "L&T Valves", category: "High-Pressure Process Valves" },
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
  { region: "United Arab Emirates", hub: "Jebel Ali Free Zone (JAFZA)", focus: "Strategic Regional Logistics & Central Distribution" },
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
    title: "JAFZA Strategic Hub Logistics",
    description: "Operating from Jebel Ali Free Zone provides duty-free transit, world-class multi-modal shipping connections, and expedited regional dispatch.",
  },
  {
    title: "Full Material Traceability",
    description: "Complete heat number tracking, mill test reports, calibration certificates, and third-party inspection dossiers supplied with all shipments.",
  },
];
