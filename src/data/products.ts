export interface ProductFamily {
  name: string;
  description: string;
  items: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  icon: string;
  image: string;
  productFamilies: ProductFamily[];
  highlights: string[];
  standards: string[];
  applications: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "electrical",
    slug: "electrical",
    name: "Electrical Equipment & Power Systems",
    shortName: "Electrical",
    tagline: "Industrial power distribution, cable management, and certified explosion-proof equipment.",
    description:
      "LANCOX FZCO supplies comprehensive electrical components engineered for heavy-duty industrial facilities, utility distribution networks, processing plants, and commercial infrastructure across the UAE and Middle East.",
    seoTitle: "Electrical Trading Company Dubai | Industrial Electrical Supplies UAE | LANCOX FZCO",
    seoDescription:
      "Procure certified industrial electrical products in Dubai: LV/MV/HV cables, switchgear, conduits, transformers, explosion-proof fittings, RMUs, cable trays, and lighting.",
    icon: "zap",
    image: "/images/electrical-hero.jpg",
    highlights: [
      "Full spectrum low, medium, and high voltage power transmission supplies",
      "Hazardous area and explosion-proof rated fittings for harsh environments",
      "Comprehensive cable containment, raceways, and tray accessories",
      "Industrial automation, motor controls, VFDs, and power backup systems",
    ],
    standards: ["IEC 60502", "BS 5467", "NEMA VE-1", "UL Listed", "ATEX / IECEx", "IEEE"],
    applications: [
      "Power generation and distribution substations",
      "Oil & gas processing units and refineries",
      "Manufacturing facilities and processing automation",
      "Commercial EPC developments and infrastructure projects",
    ],
    productFamilies: [
      {
        name: "Cables & Power Transmission",
        description: "Engineered conductors, power cables, and control wiring for industrial installations.",
        items: [
          "LV/MV/HV wires and power cables",
          "Instrumentation cables (screened & unshielded)",
          "Overhead line accessories and lighting poles",
          "Splicing and termination kits",
          "Cable lugs, ties, glands, and connectors",
        ],
      },
      {
        name: "Conduits & Containment Systems",
        description: "Heavy-duty raceways and containment solutions for harsh and hazardous environments.",
        items: [
          "Conduits: PVC, rigid steel, PVC coated, EMT, aluminum",
          "Cable trays, raceways, trunking, ladders, and accessories",
          "Junction boxes (weatherproof & hazardous location)",
          "Hazardous / explosion-proof fittings",
        ],
      },
      {
        name: "Power Distribution & Switchgear",
        description: "Medium and low voltage distribution, circuit protection, and power conversion units.",
        items: [
          "Switchgear, capacitors, and high-voltage insulators",
          "ATS (Automatic Transfer Switches), switch racks, and RMUs (Ring Main Units)",
          "Panel boards and industrial load centers",
          "Relays, current transformers, and step-down transformers",
          "UPS systems (Uninterruptible Power Supplies)",
          "Industrial starters, contactors, and control gear",
        ],
      },
      {
        name: "Motors, Drives & Generation",
        description: "Prime power generation, motor drivers, and industrial rotation machinery.",
        items: [
          "Industrial electric motors and Variable Frequency Drives (VFDs)",
          "Generators and packaged sub-stations",
          "Welding equipment and heavy workshop accessories",
        ],
      },
      {
        name: "Grounding, Protection & Lighting",
        description: "Personnel safety, asset protection, lightning arrestors, and industrial luminaires.",
        items: [
          "Grounding systems and exothermic weld connections",
          "Lightning protection and testing/measuring equipment",
          "Commercial and industrial lighting fixtures (LED & hazardous-area rated)",
          "Cathodic protection equipment for structural preservation",
        ],
      },
    ],
  },
  {
    id: "mechanical",
    slug: "mechanical",
    name: "Mechanical Equipment & Piping Systems",
    shortName: "Mechanical",
    tagline: "Industrial piping, high-pressure valves, pumps, compressors, and heat exchange machinery.",
    description:
      "LANCOX FZCO delivers robust mechanical process equipment, line pipe, industrial fluid controls, and thermodynamic machinery tailored to the rigorous operational demands of petrochemical, processing, and manufacturing sectors.",
    seoTitle: "Mechanical Equipment Supplier UAE | Industrial Valves & Pipes Dubai | LANCOX FZCO",
    seoDescription:
      "Source seamless & ERW pipes, industrial valves, centrifugal pumps, compressors, boilers, heat exchangers, and pipe fittings from LANCOX FZCO, Dubai, UAE.",
    icon: "settings",
    image: "/images/mechanical-hero.jpg",
    highlights: [
      "ASTM/ASME compliant seamless, SAW, and ERW carbon and alloy line pipes",
      "Manual and motor-operated valves for severe service fluid handling",
      "Industrial fluid pumping systems and positive displacement units",
      "Thermodynamic equipment: boilers, heat exchangers, compressors, and chillers",
    ],
    standards: ["ASME B16.34", "ASME B31.3", "API 6D", "API 600", "ASTM A106", "DIN EN 10204 3.1"],
    applications: [
      "Oil & gas gathering, pipeline transport, and refining",
      "Chemical processing and batch manufacturing",
      "District cooling and central HVAC systems",
      "Water desalination and heavy industrial utilities",
    ],
    productFamilies: [
      {
        name: "Pipes & Structural Tubing",
        description: "Certified tubular products manufactured to international pressure and fluid standards.",
        items: [
          "Seamless pipes (Carbon Steel, Alloy Steel, Stainless Steel)",
          "SAW (Submerged Arc Welded) large diameter pipes",
          "ERW (Electric Resistance Welded) process pipes",
          "Pipe closures, saddles, and pipeline repair clamps",
        ],
      },
      {
        name: "Industrial Valves & Actuation",
        description: "Flow control and isolation valves for corrosive, cryogenic, and high-pressure duties.",
        items: [
          "Gate valves, globe valves, and check valves",
          "Ball valves (floating & trunnion mounted)",
          "Butterfly valves (resilient seated & high performance)",
          "Plug valves and manifold valves",
          "Motor-operated valves (MOV) and actuated assemblies",
        ],
      },
      {
        name: "Pumping Systems & Fluid Movement",
        description: "Heavy-duty pumps designed for continuous duty in abrasive, slurry, and hydrocarbon media.",
        items: [
          "Centrifugal pumps (horizontal, vertical, multistage)",
          "Positive displacement pumps",
          "Rotary pumps and special-purpose chemical dosing pumps",
          "Mechanical seals, packings, and flexible couplings",
        ],
      },
      {
        name: "Piping Components & Fittings",
        description: "Engineered connection hardware, pressure flanges, and sealing elements.",
        items: [
          "Flanges: Weld neck, slip-on, blind, socket weld, threaded (ANSI/ASME)",
          "Butt weld fittings: Tees, elbows, concentric/eccentric reducers, caps",
          "Gaskets (spiral wound, RTJ, sheet), seals, strainers, and belts",
          "Industrial lubricants and high-temperature grease",
        ],
      },
      {
        name: "Thermal, Compression & HVAC Equipment",
        description: "Compressors, thermodynamic exchangers, boilers, and industrial climate controls.",
        items: [
          "Industrial boilers and steam generation packages",
          "Air, gas, screw, and rotary compressors",
          "Industrial blowers and vacuum pumps",
          "Shell & tube and plate heat exchangers",
          "Gears, speed reducers, and heavy mechanical drives",
          "HVAC equipment, humidifiers, dehumidifiers, and air/oil filters",
        ],
      },
    ],
  },
  {
    id: "fasteners",
    slug: "fasteners",
    name: "Industrial Fasteners & Hardware",
    shortName: "Fasteners",
    tagline: "High-tensile structural bolting, studs, nuts, washers, and bespoke parts to print.",
    description:
      "LANCOX FZCO provides certified structural fasteners, stud bolts, and custom-machined joining solutions engineered for civil infrastructure, structural steel frameworks, offshore platforms, and heavy processing vessels.",
    seoTitle: "Industrial Fasteners Supplier UAE | Stud Bolts & Heavy Hex Nuts Dubai | LANCOX FZCO",
    seoDescription:
      "High-tensile industrial fasteners in UAE: stud bolts, hex cap screws, heavy hex nuts, anchor bolts, U-bolts, washers, and custom parts to print. Dubai, UAE.",
    icon: "wrench",
    image: "/images/fasteners-hero.jpg",
    highlights: [
      "High-grade carbon, alloy, stainless steel, and nickel alloy fastener stocks",
      "Full compliance with ASTM A193, A194, A320, and DIN structural specifications",
      "Custom fabrication and machining to client engineering drawings and print",
      "Protective coatings: PTFE, Hot-Dip Galvanized, Zinc-Nickel, and Cadmium",
    ],
    standards: ["ASTM A193 / A194", "ASTM A325 / A490", "ISO 898-1", "DIN 931 / 933", "BS 3692"],
    applications: [
      "Flange bolting in pressurized pipelines and process vessels",
      "Pre-engineered steel buildings and infrastructure erection",
      "Turbinery, pump bases, and vibrating mechanical equipment mounting",
      "Offshore rigs, marine structures, and subsea assemblies",
    ],
    productFamilies: [
      {
        name: "Bolts & Heavy Structural Fasteners",
        description: "Precision-threaded fasteners for high-tensile and severe-temperature joints.",
        items: [
          "Hex cap screws, square head bolts, and heavy hex bolts",
          "Flange bolts and eye bolts",
          "U-bolts and pipe support fasteners",
          "Anchor bolts and foundation embedment assemblies",
          "R-head bolts and specialized structural fasteners",
        ],
      },
      {
        name: "Studs & All-Thread Rods",
        description: "Continuous and engineered double-end studs for pressure boundary equipment.",
        items: [
          "All-thread studs (ASTM A193 B7, B8, B8M, B16)",
          "Double-end studs and engineered tap-end studs",
          "High-temperature and cryogenic alloy studs (ASTM A320 L7)",
          "Custom cut-to-length and precision-chamfered studs",
        ],
      },
      {
        name: "Nuts, Washers & Retaining Hardware",
        description: "Mating hardware designed to maintain clamping force and resist vibration loosening.",
        items: [
          "Heavy hex nuts (ASTM A194 2H, Gr. 7, Gr. 8)",
          "Standard hex nuts, lock nuts, and nylon-insert nuts",
          "Flat washers, bevel washers, and hardened structural washers",
          "Spring lock washers and vibration-resistant Belleville washers",
        ],
      },
      {
        name: "Screws, Pins & Precision Components",
        description: "Internal wrenching and locating hardware for machinery and precision assemblies.",
        items: [
          "Socket head cap screws (alloy & stainless steel)",
          "Flat head and shoulder screws",
          "Pins: Clevis pins, dowel pins, and taper pins",
          "Set screws and retaining rings",
        ],
      },
      {
        name: "Custom Parts to Print or Sample",
        description: "Bespoke fastening and machined elements manufactured strictly to client specifications.",
        items: [
          "Custom CNC machined components to drawing or physical sample",
          "Specialty exotic alloy fasteners (Inconel, Monel, Duplex, Super Duplex)",
          "Custom threaded components with non-standard pitches",
        ],
      },
    ],
  },
  {
    id: "instrumentation",
    slug: "instrumentation",
    name: "Instrumentation & Process Automation",
    shortName: "Instrumentation",
    tagline: "Precision measurement, flow metering, calibration instruments, and safety monitoring.",
    description:
      "LANCOX FZCO stocks and procures process measurement transmitters, stainless instrumentation tubing, control valves, and hazardous gas detection systems critical for safe, efficient plant automation.",
    seoTitle: "Instrumentation Supplier Dubai UAE | Process Control & Valves | LANCOX FZCO",
    seoDescription:
      "Precision process instrumentation in UAE: stainless tubing, pressure & temperature transmitters, flow meters, manifold valves, RTDs, and fire & gas detectors.",
    icon: "activity",
    image: "/images/instrumentation-hero.jpg",
    highlights: [
      "Precision pressure, level, temperature, and flow transmitters",
      "Seamless stainless steel instrumentation tubing and twin-ferrule fittings",
      "Instrumentation manifolds, double block & bleed valves, and solenoid controls",
      "Industrial fire, toxic gas, and hydrocarbon leak detection installations",
    ],
    standards: ["ASME B31.3", "ISA-75", "IEC 61508 (SIL)", "ATEX / IECEx", "NACE MR0175 / ISO 15156"],
    applications: [
      "Process monitoring in petrochemical plants and chemical reactors",
      "Custody transfer and fiscal flow measurement skids",
      "Wellhead control panels and emergency shutdown systems",
      "Clean rooms, pharmaceutical manufacturing, and water quality testing",
    ],
    productFamilies: [
      {
        name: "Tubing & Compression Fittings",
        description: "High-integrity fluid connection systems for pneumatic and hydraulic control loops.",
        items: [
          "Seamless stainless steel tubing (316/316L, Duplex, Super Duplex)",
          "Twin-ferrule compression tube fittings and quick-connect couplings",
          "High-pressure pipe fittings and adapter connectors",
        ],
      },
      {
        name: "Measurement & Sensing Instruments",
        description: "Sensors, gauges, and transmitters delivering accurate real-time process data.",
        items: [
          "Pressure gauges, transmitters, and pressure switches",
          "Level indicators, transmitters, and level switches",
          "Flow meters (electromagnetic, vortex, ultrasonic, Coriolis) and density meters",
          "RTDs (Resistance Temperature Detectors), thermocouples, and thermowells",
          "Regulators, annunciators, detectors, and process sensors",
          "Thermostats and localized temperature switches",
        ],
      },
      {
        name: "Valves & Instrument Manifolds",
        description: "Direct-mount isolation, venting, and multi-valve manifolds for transmitter protection.",
        items: [
          "Solenoid valves for automated safety actuators",
          "Double block & bleed (DBB) valves",
          "2-valve, 3-valve, and 5-valve instrument manifolds",
          "Gauge valves, needle valves, and bleed valves",
        ],
      },
      {
        name: "Control Enclosures & Calibration",
        description: "Protected junction housings and precision calibration field equipment.",
        items: [
          "Junction boxes for control, signal, and instrumentation cabling",
          "Test and calibration instruments (pressure calibrators, multi-meters)",
          "Signal conditioners and intrinsically safe barrier modules",
        ],
      },
      {
        name: "Fire & Gas Detection Systems",
        description: "Facility-wide hazard monitoring protecting personnel and capital infrastructure.",
        items: [
          "Fixed toxic gas and flammable hydrocarbon leak detectors",
          "Optical flame detectors (UV/IR) and acoustic leak sensors",
          "Fire and gas detection control systems and annunciator panels",
          "Integrated firefighting alarm systems and notification beacons",
        ],
      },
    ],
  },
  {
    id: "safety",
    slug: "safety",
    name: "Industrial Safety Products & PPE",
    shortName: "Safety",
    tagline: "Certified personal protective equipment, flame-resistant apparel, and worksite protection.",
    description:
      "LANCOX FZCO equips industrial workforces with certified Personal Protective Equipment (PPE), flame-retardant garments, and facility emergency safety gear that meet international HSE mandates.",
    seoTitle: "Industrial Safety Products UAE | Certified PPE & Safety Shoes Dubai | LANCOX FZCO",
    seoDescription:
      "Industrial safety equipment supplier in UAE: certified safety shoes, FR coveralls, eye protection, helmets, gloves, and firefighting gear. Fast delivery across UAE & Middle East.",
    icon: "shield-check",
    image: "/images/safety-hero.jpg",
    highlights: [
      "EN ISO and ANSI compliant personal protective gear for hazardous worksites",
      "Flame-resistant (FR) and arc-flash protective apparel for oil & gas and utility work",
      "Full spectrum head, eye, hearing, and respiratory protection lines",
      "Workplace emergency response, spill control, and firefighting equipment",
    ],
    standards: ["EN ISO 20345", "EN ISO 11612", "ANSI Z87.1", "EN 397", "EN 388", "NFPA 2112"],
    applications: [
      "Heavy construction sites and civil infrastructure projects",
      "Offshore drilling rigs and refinery turnarounds",
      "Metal fabrication, welding shops, and foundry operations",
      "Chemical storage warehouses and bulk logistics terminals",
    ],
    productFamilies: [
      {
        name: "Head, Eye & Face Protection",
        description: "Impact-rated and chemical-resistant protection for head, face, and vision.",
        items: [
          "Industrial safety helmets and hard hats with chin straps (EN 397)",
          "Safety goggles, impact spectacles, and chemical splash glasses",
          "Welding helmets, face shields, and visor brackets",
        ],
      },
      {
        name: "Hand & Foot Protection",
        description: "Heavy-duty puncture, cut, impact, and chemical resistant protection.",
        items: [
          "Safety shoes and steel-toe/composite-toe boots (EN ISO 20345 S3/SRC)",
          "Safety gloves (cut-resistant, chemical-handling, leather rigger, heat-resistant)",
          "Metatarsal guard boots and anti-static ESD safety footwear",
        ],
      },
      {
        name: "Protective Apparel & Workwear",
        description: "Ergonomic protective clothing engineered for extreme heat, flash fire, and chemicals.",
        items: [
          "FR (Flame-Resistant) coveralls and arc-rated workwear (NFPA 2112 / EN 11612)",
          "High-visibility reflective vests and jackets (EN ISO 20471)",
          "Chemical protective suits and disposable particulate coveralls",
        ],
      },
      {
        name: "General Safety & Firefighting Equipment",
        description: "Facility safety essentials, emergency response, and firefighting equipment.",
        items: [
          "General worksite safety equipment and barricades",
          "Industrial firefighting equipment, extinguishers, and hose reels",
          "Emergency eyewash stations and safety deluge showers",
          "First aid kits, spill containment kits, and fall arrest harnesses",
        ],
      },
    ],
  },
];
