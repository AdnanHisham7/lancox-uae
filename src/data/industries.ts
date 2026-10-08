export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  keySupplies: string[];
  challenges: string[];
  standards: string[];
  seoTitle: string;
  seoDescription: string;
}

export const industries: Industry[] = [
  {
    id: "electrical",
    name: "Electrical & Power Infrastructure",
    tagline: "Industrial power transmission, substation equipment, MV/HV cabling, and switchgear.",
    image: "/images/electrical-hero.jpg",
    description:
      "LANCOX FZCO supports leading utility authorities — including Dubai Electricity and Water Authority (DEWA) — as well as power generation plants, substations, utility networks, and heavy electromechanical infrastructure across the UAE and Middle East with certified electrical distribution equipment, MV/HV cables, and switchgear.",
    seoTitle: "Electrical Power Infrastructure Supplies Dubai UAE | LANCOX FZCO",
    seoDescription:
      "Procure certified electrical equipment in Dubai: LV/MV/HV cables, switchgear, panelboards, transformers, explosion-proof fittings, RMUs, and cable containment for DEWA and regional utilities.",
    keySupplies: [
      "LV/MV/HV power cables and copper/aluminum conductors",
      "Medium & low voltage switchgear, panelboards, and Ring Main Units (RMUs)",
      "Power transformers, instrument current transformers, and protection relays",
      "Heavy-duty cable trays, ladders, raceways, and galvanized conduits",
      "ATEX / IECEx certified explosion-proof junction boxes and lighting",
      "Grounding systems, exothermic weld connections, and lightning protection",
    ],
    challenges: [
      "Ensuring high thermal resilience and minimal transmission loss in extreme ambient temperatures",
      "Strict compliance with regional utility authority technical specifications (such as DEWA standards) and international IEC frameworks",
      "Expedited turnaround on large-scale cable containment and distribution packages",
    ],
    standards: ["IEC", "BS", "IEEE", "NEMA", "ATEX", "UL"],
  },
  {
    id: "oil-and-gas",
    name: "Oil & Gas",
    tagline: "High-spec piping, severe-service valves, explosion-proof electrical, and safety supplies.",
    image: "/images/industry-oil-and-gas.jpg",
    description:
      "LANCOX FZCO supports upstream, midstream, and downstream operations with severe-service components that withstand high pressures, corrosive sour hydrocarbons (H2S), and offshore environmental stress.",
    seoTitle: "Oil and Gas Industrial Supplies Dubai UAE | LANCOX FZCO",
    seoDescription:
      "Procure certified oil & gas industrial supplies in Dubai: ASTM seamless pipes, API 6D valves, explosion-proof fittings, instrumentation manifolds, and FR coveralls.",
    keySupplies: [
      "API 6D and API 600 ball, gate, globe, and check valves",
      "ASTM A106 / A333 seamless line pipe & high-yield fittings",
      "Seamless pipes, flanges, and high-yield line fittings",
      "ATEX/IECEx explosion-proof junction boxes and lighting",
      "Fire & gas detection systems and instrumentation manifolds",
      "NFPA 2112 / EN 11612 certified flame-resistant (FR) coveralls",
    ],
    challenges: [
      "Mitigating sour gas corrosion (NACE MR0175 / ISO 15156 compliance)",
      "Adhering to strict turnaround procurement deadlines and zero-downtime windows",
      "Full material traceability with EN 10204 3.1 certification",
    ],
    standards: ["API", "ASME", "NACE MR0175", "ATEX", "NFPA", "ASTM"],
  },
  {
    id: "petrochemical",
    name: "Petrochemical",
    tagline: "Corrosion-resistant alloys, specialty sealing, and automated process control hardware.",
    image: "/images/industry-petrochemical.jpg",
    description:
      "Supplying petrochemical cracking units, polymer plants, and chemical synthesis complexes with corrosion-resistant metallurgy, high-integrity compression fittings, and precise fluid metering instruments.",
    seoTitle: "Petrochemical Equipment & Supplies UAE | LANCOX FZCO",
    seoDescription:
      "High-grade petrochemical industrial equipment in UAE: exotic alloy piping, PTFE gaskets, motor-operated valves, flow meters, and hazardous safety gear.",
    keySupplies: [
      "Stainless steel (316/316L, Duplex) and alloy piping & fittings",
      "Motor-operated valves (MOV) and automated flow control systems",
      "Spiral wound gaskets, RTJ seals, and chemical-resistant packings",
      "Precision flow meters, temperature thermowells, and RTDs",
      "Positive displacement chemical dosing pumps",
      "Chemical splash eye protection, gas detectors, and emergency showers",
    ],
    challenges: [
      "Managing aggressive chemical media and high thermal cycling",
      "Ensuring zero fugitive emissions across pressurized valve packing",
      "Rapid replenishment of maintenance, repair, and operations (MRO) consumables",
    ],
    standards: ["ASME B16.34", "ASTM A182", "ISA", "DIN", "ISO 15848"],
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    tagline: "Power generation hardware, transformers, high-voltage switchgear, and boilers.",
    image: "/images/industry-energy.jpg",
    description:
      "Empowering thermal power stations, solar fields, electrical substations, and regional utility grids with heavy power distribution switchgear, medium/high voltage cables, and high-efficiency heat recovery equipment.",
    seoTitle: "Energy & Utility Supplies UAE | Switchgear & Power Cables Dubai | LANCOX FZCO",
    seoDescription:
      "Reliable energy and utility infrastructure supplies in Dubai: MV/HV power cables, transformers, switchgear, RMUs, grounding systems, and steam boilers.",
    keySupplies: [
      "LV/MV/HV underground and overhead power distribution cables",
      "Ring Main Units (RMUs), switchgear, and capacitor banks",
      "Power transformers, instrument current transformers, and relays",
      "Industrial boilers, steam superheaters, and shell & tube exchangers",
      "Exothermic weld grounding connections and lightning protection poles",
      "Arc-flash personal protective equipment (PPE) and high-voltage gloves",
    ],
    challenges: [
      "Maintaining grid stability and minimizing transmission thermal loss",
      "Safe integration of high-voltage switchgear in compact substations",
      "High thermal stress resistance in continuous-duty steam systems",
    ],
    standards: ["IEC", "IEEE", "BS", "ASME Section I", "NEMA"],
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    tagline: "Structural bolting, containment raceways, industrial lighting, and civil safety supplies.",
    image: "/images/industry-construction.jpg",
    description:
      "Equipping civic authorities such as Sharjah Municipality, as well as major contractors and MEP specialists building public infrastructure, transport terminals, commercial complexes, and industrial warehouses with certified structural hardware, piping, and electrical containment.",
    seoTitle: "Construction & Municipal Infrastructure Supplies Dubai UAE | LANCOX FZCO",
    seoDescription:
      "Construction & municipal infrastructure supplies in UAE: structural fasteners, cable trays, conduits, piping, and worksite safety PPE for Sharjah Municipality, contractors, and public projects.",
    keySupplies: [
      "ASTM A325 / A490 structural bolts, foundation anchor bolts, and U-bolts",
      "Galvanized cable trays, raceways, trunking, and ladder systems",
      "Rigid steel, EMT, and PVC electrical conduits with accessories",
      "Commercial LED fixtures, emergency lighting, and industrial luminaires",
      "Centrifugal booster pumps and HVAC chiller fluid piping",
      "Hard hats, safety boots, high-visibility workwear, and fall arrest harnesses",
    ],
    challenges: [
      "Meeting aggressive contractor procurement milestones and phased site drops",
      "Stringent municipal authority compliance (Sharjah Municipality, Dubai Municipality) and Civil Defense standards for MEP and civic materials",
      "Large-volume bulk fastener and containment delivery without delays",
    ],
    standards: ["ASTM", "BS EN", "NEMA VE-1", "UL", "ISO 9001"],
  },
  {
    id: "processing-manufacturing",
    name: "Processing & Manufacturing",
    tagline: "Industrial pumps, compressors, speed reducers, electric motors, and VFD controls.",
    image: "/images/industry-manufacturing.jpg",
    description:
      "Supplying FMCG, pharmaceutical, steel fabrication, packaging, and industrial processing plants with mechanical drive power, automated fluid pumping, compressed air packages, and factory consumables.",
    seoTitle: "Processing & Manufacturing Supplies UAE | Industrial Pumps & Motors | LANCOX FZCO",
    seoDescription:
      "Manufacturing & processing supplies in Dubai: electric motors, VFDs, air compressors, industrial pumps, mechanical seals, and machine fasteners.",
    keySupplies: [
      "Industrial electric motors, VFD controllers, and motor starters",
      "Rotary screw compressors, vacuum pumps, and pneumatic lines",
      "Centrifugal and positive displacement process pumps with mechanical seals",
      "Gears, speed reducers, transmission couplings, and drive belts",
      "Socket head cap screws, dowel pins, and custom machined parts to print",
      "Cut-resistant gloves, ear defenders, and workshop safety equipment",
    ],
    challenges: [
      "Preventing costly assembly-line stoppages through timely MRO supplies",
      "Optimizing motor energy efficiency and drive reliability",
      "Sourcing specialized metric and imperial replacement hardware",
    ],
    standards: ["DIN", "ISO", "IEC", "AGMA", "ANSI"],
  },
  {
    id: "general-industries",
    name: "General Industries",
    tagline: "Comprehensive industrial consumables, workshop tools, lubricants, and plant hardware.",
    image: "/images/industry-general.jpg",
    description:
      "Serving diverse commercial workshops, logistics hubs, maritime yards, and regional industrial parks with broad-scope technical procurement, fast-turnaround hardware, and dependable after-sales fulfillment.",
    seoTitle: "General Industrial Supplies Dubai UAE | LANCOX FZCO",
    seoDescription:
      "General industrial goods and consumables in UAE: industrial lubricants, welding supplies, fasteners, pipe fittings, gauges, and safety equipment from LANCOX FZCO, Dubai, UAE.",
    keySupplies: [
      "Industrial lubricants, synthetic greases, and anti-seize compounds",
      "Welding equipment, cutting torches, electrodes, and welding accessories",
      "Standard hex bolts, nuts, washers, and general fastening assortments",
      "Butt weld pipe fittings, flanges, and general service ball valves",
      "Testing instruments, multi-meters, and pressure gauges",
      "Worksite PPE, safety shoes, barrier tape, and spill containment",
    ],
    challenges: [
      "Consolidating fragmented multi-category supply lists into a single purchase order",
      "Cost-effective delivery for urgent maintenance requirements",
      "Verifying quality standards across diverse global brand options",
    ],
    standards: ["ISO", "DIN", "ASTM", "BS"],
  },
];
