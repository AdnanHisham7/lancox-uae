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
    id: "equipment-tools",
    slug: "equipment-tools",
    name: "Industrial Equipment & Tools",
    shortName: "Equipment & Tools",
    tagline: "Professional hand tools, precision inspection devices, cable detectors, and testing equipment.",
    description:
      "LANCOX FZCO supplies certified industrial equipment, professional hand and power tools, non-destructive inspection devices, underground cable locators, and precision sheath fault detection instruments for utility engineers, maintenance technicians, and field contractors across the UAE and Middle East.",
    seoTitle: "Industrial Equipment & Tools Supplier Dubai UAE | Hand Tools & Cable Locators | LANCOX FZCO",
    seoDescription:
      "Procure professional industrial tools and equipment in Dubai: hand tools, diagnostic inspection equipment, cable detectors, sheath fault locators, torque wrenches, and maintenance gear.",
    icon: "tool",
    image: "/images/fasteners-hero.jpg",
    highlights: [
      "VDE insulated 1000V electrical tools, calibrated torque wrenches, and workshop hardware",
      "Precision dimensional inspection tools, borescopes, and ultrasonic thickness testers",
      "Underground multi-frequency pipe & cable detectors and ground-penetrating radar systems",
      "High-voltage cable sheath fault pinpointers, TDR cable radar, and insulation testers",
    ],
    standards: ["IEC 60900", "ISO 6789", "EN 61010", "CE Certified", "DIN", "ANSI"],
    applications: [
      "Power utility cable tracing, network mapping, and fault pinpointing",
      "Plant turnaround maintenance, electromechanical overhaul, and calibration",
      "Non-destructive testing (NDT), dimensional QA/QC, and thermal audits",
      "Heavy industrial workshop fabrication and infrastructure construction",
    ],
    productFamilies: [
      {
        name: "Professional Hand Tools & Workshop Gear",
        description: "Heavy-duty, ergonomic, and VDE insulated hand tools for industrial trades.",
        items: [
          "Insulated electrical hand tools (1000V rated to IEC 60900)",
          "Heavy-duty combination spanners, sockets, ratchets & impact sockets",
          "Industrial pliers, wire strippers, heavy cable cutters & hydraulic crimpers",
          "Heavy pipe wrenches, chain tongs, benders & pipe threaders",
          "Non-sparking safety tools (copper-beryllium & aluminum-bronze)",
        ],
      },
      {
        name: "Calibrated Torque Wrenches & Multipliers",
        description: "Certified torque application and mechanical multiplication instruments.",
        items: [
          "Adjustable click-type & digital torque wrenches (ISO 6789 certified)",
          "Manual and pneumatic torque multipliers (up to 10,000 Nm)",
          "Hydraulic torque wrenches (square drive & low-profile hex cassettes)",
          "Torque calibration testers, angle gauges & preset screwdrivers",
        ],
      },
      {
        name: "Diagnostic & Precision Inspection Instruments",
        description: "Precision dimensional measurement, visual inspection, and NDT apparatus.",
        items: [
          "Precision vernier calipers, depth micrometers & dial test indicators",
          "Industrial video borescopes, fiberscopes & inspection cameras",
          "Thermal imaging cameras & infrared spot thermometers",
          "Ultrasonic thickness gauges & dry film coating thickness meters",
          "Laser shaft alignment systems, optical tachometers & vibration meters",
        ],
      },
      {
        name: "Underground Pipe & Cable Detectors",
        description: "Advanced electromagnetic location and underground utility mapping systems.",
        items: [
          "Multi-frequency electromagnetic pipe and cable locators",
          "Precision signal transmitters, direct connection leads & induction clamps",
          "Sonde beacons for non-metallic ducts, drains & conduit tracing",
          "Ground Penetrating Radar (GPR) utility scanning systems",
          "Passive 50Hz/60Hz power grid & radio frequency line detectors",
        ],
      },
      {
        name: "Cable Sheath Fault Locators & Test Sets",
        description: "Specialized cable diagnostic equipment and pinpoint fault location tools.",
        items: [
          "Step-voltage gradient A-frames & sheath fault pinpointing receivers",
          "Surge wave generators (thumpers) & acoustic ground listening sets",
          "Time Domain Reflectometers (TDR / cable radar fault locators)",
          "High-voltage insulation testers & megohmmeters (1kV, 5kV, 10kV & 15kV)",
          "VLF (Very Low Frequency) cable test sets & bridge fault locators",
        ],
      },
      {
        name: "Hydraulic Maintenance & Lifting Equipment",
        description: "Heavy mechanical pulling, spreading, lifting, and workshop machinery.",
        items: [
          "Hydraulic flange spreaders, nut splitters & flange alignment pins",
          "High-tonnage hydraulic cylinders, low-height toe jacks & hand pumps",
          "Bearing pullers, mechanical gear pullers & induction heaters",
          "Chain hoists, lever blocks, wire rope pullers & rigging tackle",
          "Magnetic base drill presses, portable angle grinders & cutting saws",
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
