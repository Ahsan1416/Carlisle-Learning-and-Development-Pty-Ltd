export interface Course {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  category: 'safety' | 'high-risk' | 'earthmoving' | 'agriculture' | 'traffic' | 'voc';
  categoryLabel: string;
  price: number;
  citbSubsidy?: number;
  duration: string;
  schedule: string;
  location: string;
  featured?: boolean;
  image: string;
  description: string;
  overview: string;
  outcomes: string[];
  prerequisites: string[];
  accreditation: string;
  targetAudience: string;
}

export const COURSES: Course[] = [
  // --- CONSTRUCTION SAFETY ---
  {
    id: 'white-card-cpcwhs1001',
    code: 'CPCWHS1001',
    title: 'Prepare to work safely in the construction industry',
    shortTitle: 'White Card Construction Induction',
    category: 'safety',
    categoryLabel: 'Construction Safety',
    price: 200,
    citbSubsidy: 110,
    duration: '8 Hours (1 Day)',
    schedule: 'Weekly scheduled intakes (8:00 AM – 4:00 PM)',
    location: 'Mount Barker Centre / On-site corporate',
    featured: true,
    image: '/images/white-card-training.jpg',
    description: 'Mandatory WHS induction for all personnel entering Australian construction sites. Fully accredited SafeWork SA card upon completion.',
    overview: 'The CPCWHS1001 White Card is mandatory for anyone wishing to work on a construction site in South Australia and across Australia. Our 1-day course covers work health and safety legislation, hazard identification, risk control measures, safety signage, and emergency response procedures.',
    outcomes: [
      'Understand statutory WHS responsibilities under SafeWork SA regulations',
      'Identify construction workplace hazards and implement hierarchy of control',
      'Understand basic emergency procedures, evacuation plans, and first aid',
      'Correct selection, fitting, and use of Personal Protective Equipment (PPE)',
      'Receive official SafeWork SA White Card upon successful assessment'
    ],
    prerequisites: ['Minimum 14 years old', '100 points of original ID', 'Valid USI (Unique Student Identifier)'],
    accreditation: 'Nationally Recognised Unit of Competency & SafeWork SA Card',
    targetAudience: 'Apprentices, tradespeople, laborers, supervisors, project managers, and anyone visiting or working on construction sites.'
  },
  {
    id: 'confined-spaces-riiwhs202e',
    code: 'RIIWHS202E',
    title: 'Enter and work in confined spaces',
    shortTitle: 'Confined Spaces Entry',
    category: 'safety',
    categoryLabel: 'Construction Safety',
    price: 400,
    citbSubsidy: 145,
    duration: '1 Day (8:00 AM – 4:30 PM)',
    schedule: 'Regular monthly scheduled sessions & on-demand group bookings',
    location: 'Mount Barker Centre / On-site facility',
    featured: true,
    image: '/images/confined-space.png',
    description: 'Essential compliance training for safely planning, entering, working in, and exiting enclosed or hazardous atmospheres.',
    overview: 'This unit covers entering and working in confined spaces in civil construction, mining, agriculture, and manufacturing environments. Students learn gas atmosphere testing, permit systems, emergency rescue protocols, and ventilation procedures.',
    outcomes: [
      'Plan and prepare for confined space entry in accordance with WHS legislation',
      'Conduct atmospheric testing and risk assessment for hazardous gases',
      'Utilize safety harness, tripods, winches, and breathing apparatus',
      'Maintain communication with stand-by observers and control entry permits',
      'Execute emergency exit and basic rescue procedures safely'
    ],
    prerequisites: ['Photo ID', 'Valid USI', 'Basic literacy and numeracy'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIWHS202E)',
    targetAudience: 'Civil engineers, miners, council workers, plumbers, utility workers, and plant operators.'
  },
  {
    id: 'working-at-heights-riiwhs204e',
    code: 'RIIWHS204E',
    title: 'Work safely at heights',
    shortTitle: 'Working Safely at Heights',
    category: 'safety',
    categoryLabel: 'Construction Safety',
    price: 400,
    citbSubsidy: 155,
    duration: '1 Day (8:00 AM – 4:00 PM)',
    schedule: 'Regular intakes & on-demand corporate sessions',
    location: 'Mount Barker Centre / On-site client premises',
    featured: true,
    image: '/images/working-at-heights.webp',
    description: 'Practical height safety training covering harness inspection, static lines, anchor points, fall arrest systems, and rescue planning.',
    overview: 'Working at Heights training provides workers with the knowledge and practical skills required to work safely where a fall risk exists. Covers anchor inspection, personal fall protection equipment, safety plans, and emergency response.',
    outcomes: [
      'Assess height hazards and review Safe Work Method Statements (SWMS)',
      'Inspect, fit, and properly adjust full-body safety harnesses and lanyards',
      'Identify certified anchorage points, static lines, and fall restraint setups',
      'Calculate fall clearances and avoid swing fall hazards',
      'Implement prompt suspension trauma prevention and rescue protocols'
    ],
    prerequisites: ['Photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIWHS204E)',
    targetAudience: 'Roofers, builders, solar installers, scaffolders, telecommunications technicians, and maintenance personnel.'
  },
  {
    id: 'elevating-work-platform-under-11m-riihan301e',
    code: 'RIIHAN301E',
    title: 'Operate elevating work platform (Under 11m)',
    shortTitle: 'EWP Scissor & Boom Lift (< 11m)',
    category: 'safety',
    categoryLabel: 'Construction Safety',
    price: 400,
    citbSubsidy: 220,
    duration: '1 Day',
    schedule: 'Scheduled weekly / bi-weekly',
    location: 'Mount Barker Training Facility',
    featured: false,
    image: '/images/ewp-scissor-lift.png',
    description: 'Comprehensive operational ticket for scissor lifts, vertical masts, and boom lifts with platform height under 11 metres.',
    overview: 'Gain your national certification for operating scissor lifts and self-propelled boom lifts with a maximum reach under 11 metres. Focuses on machine pre-start inspections, ground condition assessment, hazard control, and platform stability.',
    outcomes: [
      'Conduct pre-operational checks and complete logbook documentation',
      'Evaluate ground compaction, slope ratings, and overhead powerline clearances',
      'Operate scissor lifts and small knuckle booms smoothly and safely',
      'Emergency lower system testing and ground control takeover'
    ],
    prerequisites: ['Photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIHAN301E)',
    targetAudience: 'Electricians, painters, signwriters, builders, and warehouse technicians.'
  },

  // --- HIGH RISK WORK LICENCES (HRWL) ---
  {
    id: 'forklift-licence-tlilic0003',
    code: 'TLILIC0003',
    title: 'Licence to operate a forklift truck (LF)',
    shortTitle: 'Forklift Licence (LF)',
    category: 'high-risk',
    categoryLabel: 'High Risk Work Licence',
    price: 700,
    citbSubsidy: 295,
    duration: '2 – 3 Days (Theory + Practical + SafeWork SA Assessment)',
    schedule: 'Regular weekly weekday & weekend options',
    location: 'Mount Barker Carlisle Training Yard',
    featured: true,
    image: '/images/forklift-lf.png',
    description: 'SafeWork SA accredited High Risk Work Licence LF. Full practical forklift driver training and SafeWork SA mandated assessment.',
    overview: 'Our Forklift LF licence course delivers rigorous, hands-on training using modern counterbalance and reach forklifts. Led by accredited SafeWork SA assessors, you will master load center dynamics, maneuver in tight pallet racking, and pass your national Mandated Assessment with high confidence.',
    outcomes: [
      'Interpret load rating charts, calculate capacity, and understand stability triangle',
      'Perform thorough daily pre-start safety inspections and logbook completion',
      'Safely navigate ramps, confined spaces, pedestrian walkways, and blind corners',
      'Stack and destack pallets into multi-tier racking systems accurately',
      'Successfully complete SafeWork SA National Mandated Assessment for LF licence'
    ],
    prerequisites: ['Must be at least 18 years of age', '100 points of original identification', 'Valid USI'],
    accreditation: 'Nationally Recognised Unit (TLILIC0003) & SafeWork SA High Risk Work Licence (LF)',
    targetAudience: 'Warehouse staff, logistics personnel, retail store workers, farm and transport operators.'
  },
  {
    id: 'boom-type-ewp-over-11m-tlilic0005',
    code: 'TLILIC0005',
    title: 'Licence to operate a boom-type elevating work platform (boom length 11 metres or more)',
    shortTitle: 'Boom Lift WP Licence (> 11m)',
    category: 'high-risk',
    categoryLabel: 'High Risk Work Licence',
    price: 750,
    citbSubsidy: 440,
    duration: '2 Days (Training + Mandated Assessment)',
    schedule: 'Regular scheduled intakes',
    location: 'Mount Barker Training Facility',
    featured: true,
    image: '/images/boom-lift-wp.jpg',
    description: 'SafeWork SA High Risk Work Licence WP for knuckle boom and telescopic boom lifts with height reach over 11 metres.',
    overview: 'Required by law for any operator of a boom-type EWP with a platform height of 11 metres or greater. Covers telescopic, articulating, and trailer-mounted cherry pickers with comprehensive safety controls.',
    outcomes: [
      'Plan boom work safely, evaluating wind speed, terrain slope, and soil stability',
      'Understand outrigger deployment, ground bearing pressures, and spreader plates',
      'Master dual-control operation (platform and ground emergency descent)',
      'Emergency lower systems, harness tethering, and overhead hazard avoidance',
      'Pass SafeWork SA National Assessment for WP class licence'
    ],
    prerequisites: ['Minimum 18 years of age', '100 points of ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Unit (TLILIC0005) & SafeWork SA High Risk Work Licence (WP)',
    targetAudience: 'Construction crews, tree loppers, window washers, riggers, and mechanical installers.'
  },

  // --- CIVIL CONSTRUCTION & MINING PLANT ---
  {
    id: 'excavator-riimpo320f',
    code: 'RIIMPO320F',
    title: 'Conduct Civil Construction Excavator Operations',
    shortTitle: 'Civil Excavator Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 2000,
    citbSubsidy: 1300,
    duration: '2 – 3 Days',
    schedule: 'Scheduled weekly & on-demand for civil contractors',
    location: 'Mount Barker Heavy Plant Yard / On-site site project',
    featured: true,
    image: '/images/civil-excavator-large.jpg',
    description: 'Industry-standard civil ticket covering trenching, benching, battering, bulk excavation, and quick-hitch attachment changes.',
    overview: 'Our excavator training is delivered by experienced civil earthmoving veterans on modern heavy machinery. You will gain practical, site-ready competency in trench excavation, bulk digging, battering slopes, lifting suspended loads, and safe machine transport.',
    outcomes: [
      'Conduct complete machine walk-arounds, fluid checks, and pre-start documentation',
      'Execute precision trenching to civil grade tolerances with laser/grade guidance',
      'Safely change buckets, rippers, rock breakers, and augers using quick hitch systems',
      'Operate on slopes, soft ground, and around live underground utilities',
      'Receive Nationally Recognised RII statement valid across Australian mine and civil sites'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO320F)',
    targetAudience: 'Earthmoving contractors, pipeline installers, landscapers, council road crews, and civil operators.'
  },
  {
    id: 'skid-steer-riimpo318f',
    code: 'RIIMPO318F',
    title: 'Conduct Civil Construction Skid Steer Loader Operations',
    shortTitle: 'Skid Steer / Bobcat Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 2000,
    citbSubsidy: 1300,
    duration: '2 Days',
    schedule: 'Scheduled weekly',
    location: 'Mount Barker Heavy Plant Yard / On-site',
    featured: true,
    image: '/images/skid-steer-bobcat.jpg',
    description: 'Master wheeled and tracked skid steer operations, bulk loading, site leveling, ramp travel, and attachment interchange.',
    overview: 'The skid steer (Bobcat) is one of the most versatile machines on any civil or landscaping site. Our course teaches you advanced maneuvering in tight spaces, rapid stockpile loading, precision grading, and safe operation on inclines.',
    outcomes: [
      'Control skid steer safely across tight jobsites with zero damage',
      'Stockpile materials, load tandem and semi-tippers efficiently',
      'Spread, level, and blend fill materials to specification',
      'Inspect, grease, and maintain track/wheel tension and hydraulic attachments'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO318F)',
    targetAudience: 'Landscapers, civil earthmovers, road builders, and demolition contractors.'
  },
  {
    id: 'front-end-loader-riimpo321f',
    code: 'RIIMPO321F',
    title: 'Conduct Civil Construction Wheeled Front End Loader Operations',
    shortTitle: 'Wheeled Front End Loader',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 2000,
    citbSubsidy: 1300,
    duration: '2 Days',
    schedule: 'Scheduled regularly / on-demand',
    location: 'Mount Barker Heavy Plant Yard / On-site',
    featured: false,
    image: '/images/front-end-loader.jpg',
    description: 'High-production wheeled loader training for civil construction, quarries, batching plants, and bulk material handling.',
    overview: 'Master the operation of articulated wheeled front end loaders. Learn high-efficiency bucket cycling, truck loading, aggregate stockpile management, and operating safely in high-traffic work zones.',
    outcomes: [
      'Articulated steering control, braking, and bucket roll-back techniques',
      'Efficient V-pattern and Y-pattern truck loading methods',
      'Stockpile management, blending, and quarry safety compliance',
      'Post-operational shutdowns, parking, and routine maintenance checks'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO321F)',
    targetAudience: 'Quarry workers, asphalt and concrete batch plant operators, civil road builders.'
  },
  {
    id: 'roller-operations-riimpo317f',
    code: 'RIIMPO317F',
    title: 'Conduct Roller Operations',
    shortTitle: 'Roller Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 1200,
    citbSubsidy: 980,
    duration: '1 – 2 Days',
    schedule: 'Regular scheduled intakes',
    location: 'Mount Barker Heavy Plant Yard / On-site',
    featured: false,
    image: '/images/roller-compaction.jpg',
    description: 'Compaction operations for road building, sub-base preparation, asphalt compaction, and civil earthworks.',
    overview: 'Learn how to operate smooth drum, padfoot, and multi-tyre rollers. Understand compaction theory, soil moisture density, vibration frequency selection, and edge compaction techniques.',
    outcomes: [
      'Understand soil density, optimum moisture content, and compaction standards',
      'Operate smooth drum, padfoot, and pneumatic rollers across roadbeds and fill',
      'Select appropriate vibration frequencies to prevent subgrade fracturing',
      'Edge rolling, joint compaction, and safe slope traversal'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO317F)',
    targetAudience: 'Road construction crews, civil contractors, subdivision developers.'
  },
  {
    id: 'backhoe-riimpo319f',
    code: 'RIIMPO319F',
    title: 'Conduct Backhoe Loader Operations',
    shortTitle: 'Backhoe Loader Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 2000,
    citbSubsidy: 980,
    duration: '2 Days',
    schedule: 'Scheduled monthly / on-demand',
    location: 'Mount Barker Heavy Plant Yard / On-site',
    featured: false,
    image: '/images/backhoe-loader.jpg',
    description: 'Dual-purpose front loader and rear excavator operations, stabilizer setup, trenching, and road travel.',
    overview: 'Learn to operate both the front loading bucket and rear excavator arm on versatile backhoe loaders. Covers stabilizer leg placement, utility service trenching, craning loads, and road driving.',
    outcomes: [
      'Master rear boom digging, craning, and side-shifting controls',
      'Front bucket grading, backfilling, and truck loading',
      'Outrigger stabilizer positioning on slopes and unstable soils',
      'Road transit protocols, travel locks, and weight distribution'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO319F)',
    targetAudience: 'Council utilities, plumbing contractors, local contractors, civil operators.'
  },
  {
    id: 'telehandler-riihan309f',
    code: 'RIIHAN309F',
    title: 'Conduct Telescopic Materials Handler Operations',
    shortTitle: 'Telehandler Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 1800,
    citbSubsidy: 325,
    duration: '2 Days',
    schedule: 'Regular intakes & on-demand',
    location: 'Mount Barker Training Facility',
    featured: false,
    image: '/images/telehandler.jpg',
    description: 'Operation of multi-terrain telescopic handlers, load charts, boom elevation, and variable attachments.',
    overview: 'Telehandlers have become essential across construction, mining, and agriculture. This unit covers load charts, boom angle limits, shifting loads over rough terrain, using pallet forks, buckets, and jib attachments.',
    outcomes: [
      'Read and apply telehandler load capacity charts across different boom lengths',
      'Operate chassis leveling, outriggers, and multi-steering modes (4WS, Crab)',
      'Transport and place suspended and palletized loads at high elevations safely',
      'Understand attachment derating and dynamic load centers'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIHAN309F)',
    targetAudience: 'Commercial builders, agricultural producers, mine site supply yards.'
  },
  {
    id: 'dozer-operations-riimpo323e',
    code: 'RIIMPO323E',
    title: 'Conduct Civil Construction Dozer Operations',
    shortTitle: 'Civil Dozer Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 2500,
    citbSubsidy: 1300,
    duration: '3 Days',
    schedule: 'Scheduled on demand & corporate bookings',
    location: 'Mount Barker / Client Project Site',
    featured: false,
    image: '/images/dozer-operations.jpg',
    description: 'Bulk earthmoving, stripping topsoil, slot dozing, ripping rock, batter shaping, and slope stabilization.',
    overview: 'High-level training in heavy tracked crawler tractor operations. Covers deep ripping, blade pitching and angling, slot dozing for maximum cubic meter throughput, and clearing vegetation safely.',
    outcomes: [
      'Blade control (SU blade, tilt, angle) and slot dozing techniques',
      'Ripper tooth positioning, rock fracturing, and ground preparation',
      'Operating safely on steep grades and along high walls',
      'Track wear inspection, undercarriage maintenance, and emergency egress'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO323E)',
    targetAudience: 'Mining personnel, dam builders, land clearing contractors, major civil works.'
  },
  {
    id: 'grader-operations-riimpo324f',
    code: 'RIIMPO324F',
    title: 'Conduct Civil Construction Grader Operations',
    shortTitle: 'Civil Grader Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 2500,
    citbSubsidy: 1300,
    duration: '3 – 4 Days',
    schedule: 'Scheduled on demand & corporate bookings',
    location: 'Mount Barker / Client Project Site',
    featured: false,
    image: '/images/grader-operations.jpg',
    description: 'Precision final trim grading, blade articulation, camber formation, table drains, and road maintenance.',
    overview: 'The motor grader is the pinnacle of earthmoving precision. This unit covers mouldboard manipulation, wheel lean, frame articulation, windrow management, cutting drains, and trimming subgrade to exact millimeter levels.',
    outcomes: [
      'Master multi-axis mouldboard pitch, angle, lift, and side-shift',
      'Cutting cross-fall cambers, super-elevations, and V-drains',
      'Managing gravel windrows and blending road surfacing materials',
      'Final trim grading to pegs and survey levels'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO324F)',
    targetAudience: 'Road construction specialists, council maintenance teams, civil contractors.'
  },
  {
    id: 'water-vehicle-riimpo326e',
    code: 'RIIMPO326E',
    title: 'Conduct Water Vehicle Operations',
    shortTitle: 'Water Vehicle Operations',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 1100,
    citbSubsidy: 955,
    duration: '1 – 2 Days',
    schedule: 'Scheduled regularly / on-demand',
    location: 'Mount Barker Plant Yard / On-site',
    featured: false,
    image: '/images/water-vehicle.jpg',
    description: 'Dust suppression, compaction moisture conditioning, water cannon and spray bar operation, fill station safety.',
    overview: 'Learn the safe operation of rigid and articulated water trucks on civil construction and mine sites. Covers spray pattern controls, managing liquid surges in tankers, and filling from standpipes and dams.',
    outcomes: [
      'Manage liquid surge inertia and heavy tank stopping distances safely',
      'Operate pressurized spray heads, gravity bars, and monitor cannons',
      'Maintain correct road moisture levels without causing slick road hazards',
      'Standpipe connection, water pump operation, and winter drainage procedures'
    ],
    prerequisites: ['Appropriate driver licence class', 'Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (RIIMPO326E)',
    targetAudience: 'Civil project crews, quarry staff, haul road maintenance drivers.'
  },
  {
    id: 'haul-trucks-riimpo337e-338e',
    code: 'RIIMPO337E / RIIMPO338E',
    title: 'Conduct Articulated & Rigid Haul Truck Operations',
    shortTitle: 'Haul Truck Operations (Artic & Rigid)',
    category: 'earthmoving',
    categoryLabel: 'Earthmoving & Mining Plant',
    price: 2000,
    duration: '2 Days',
    schedule: 'Scheduled on demand & corporate bookings',
    location: 'Mount Barker / Client Project Site',
    featured: false,
    image: '/images/haul-truck.jpg',
    description: 'Haul road driving, tipping into dump hoppers or stockpiles, retarder braking, and reversing under excavators.',
    overview: 'Comprehensive training for operating heavy articulated dump trucks (ADT) and rigid off-highway haulers. Covers weight distribution, retarder brake control on steep haul roads, spotting under excavators, and dump point safety.',
    outcomes: [
      'Operate heavy haul trucks on wet, slippery, and steep decline haul routes',
      'Use transmission retarders and engine brakes to avoid overheating service brakes',
      'Spotting, reversing, and positioning precisely under excavators and loaders',
      'Tipping at edge bunds, dump hoppers, and unstable spoil heaps'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment',
    targetAudience: 'Mining trainees, quarry operators, bulk civil infrastructure crews.'
  },

  // --- AGRICULTURE & LAND MANAGEMENT ---
  {
    id: 'chainsaw-ahcmom213',
    code: 'AHCMOM213',
    title: 'Operate and maintain chainsaws',
    shortTitle: 'Chainsaw Operation & Maintenance',
    category: 'agriculture',
    categoryLabel: 'Ag & Land Management',
    price: 500,
    citbSubsidy: 125,
    duration: '1 Day',
    schedule: 'Scheduled regularly and on-farm corporate groups',
    location: 'Mount Barker Centre / On-property training',
    featured: true,
    image: '/images/chainsaw-course.jpg',
    description: 'Cross-cutting, compression/tension cuts, chain sharpening, bar dressing, kickback prevention, and forestry PPE.',
    overview: 'Essential chainsaw safety for primary producers, council teams, landscapers, and forestry operators. Covers daily chain filing, carburetor and bar maintenance, kickback zone awareness, and safe cross-cutting of fallen timber under tension.',
    outcomes: [
      'Master precision hand-filing of cutters and depth gauges (rakers)',
      'Inspect chain brakes, throttle interlocks, and anti-vibration mounts',
      'Evaluate wood tension and compression to prevent chainsaw pinch or kickback',
      'Safe body positioning, saw handling, and correct personal protective gear'
    ],
    prerequisites: ['Photo ID', 'Valid USI', 'Steel-capped work boots'],
    accreditation: 'Nationally Recognised Statement of Attainment (AHCMOM213)',
    targetAudience: 'Farmers, council maintenance staff, landscapers, firewood contractors, arborists.'
  },
  {
    id: 'tractors-ahcmom202-317',
    code: 'AHCMOM202 / 317',
    title: 'Operate Agricultural Tractors & Attachments',
    shortTitle: 'Agricultural Tractor Operations',
    category: 'agriculture',
    categoryLabel: 'Ag & Land Management',
    price: 700,
    duration: '1 – 2 Days',
    schedule: 'Regular monthly sessions & on-farm training',
    location: 'Mount Barker & Murraylands',
    featured: false,
    image: '/images/tractor-operation.jpg',
    description: 'Safe operation of farm tractors, 3-point linkage implements, PTO shafts, front-end loader attachments, and slope safety.',
    overview: 'Tractors are responsible for more severe agricultural incidents than almost any other farm equipment. This course trains farm workers and lifestyle property owners in ROPS safety, PTO guarding, implement hitching, and stable operation across rolling Adelaide Hills terrain.',
    outcomes: [
      'Inspect and connect 3-point linkage equipment and hydraulic remotes',
      'Safe PTO shaft engagement, guard inspection, and safety clutch protocols',
      'Prevent rollover incidents on steep contours and with heavy loads',
      'Front-end loader bucket, hay fork, and post-hole digger operations'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment',
    targetAudience: 'Farmers, vineyard hands, lifestyle block owners, council groundskeepers.'
  },
  {
    id: 'side-by-side-utility-ahcmom216',
    code: 'AHCMOM216',
    title: 'Operate Side by Side Utility Vehicle (SSV / ATV)',
    shortTitle: 'Side by Side Utility Vehicle (SSV)',
    category: 'agriculture',
    categoryLabel: 'Ag & Land Management',
    price: 700,
    duration: '1 Day',
    schedule: 'Scheduled monthly & on-farm group delivery',
    location: 'Mount Barker Centre / Property on-site',
    featured: false,
    image: '/images/side-by-side-utility.jpg',
    description: 'Uneven terrain handling, slope traversal, load carrying, towing trailers, roll-over protection, and daily maintenance.',
    overview: 'Side-by-side utility vehicles (SSVs) and Quad bikes are vital farm workhorses. Learn defensive driving, safe weight distribution, towing farm trailers, navigating rocky slopes, and pre-start mechanical inspections.',
    outcomes: [
      'Master terrain evaluation: ascending, descending, and traversing slopes',
      'Payload limits, center of gravity management, and towing calculations',
      'Roll-over protective structures (ROPS) and seatbelt safety enforcement',
      'Routine farm maintenance, tire pressure checks, and winching recovery'
    ],
    prerequisites: ['Valid photo ID', 'Valid USI'],
    accreditation: 'Nationally Recognised Statement of Attainment (AHCMOM216)',
    targetAudience: 'Primary producers, vineyard operators, surveyors, parks & wildlife staff.'
  },

  // --- TRAFFIC MANAGEMENT ---
  {
    id: 'traffic-combo-tc1-tmi1',
    code: 'RIISS00058 / RIISS00060',
    title: 'Combination Traffic Controller & Traffic Management Implementer (TC1 & TMI1)',
    shortTitle: 'TC1 & TMI1 Combo (Austroads TTM)',
    category: 'traffic',
    categoryLabel: 'Traffic Management',
    price: 1200,
    citbSubsidy: 440,
    duration: '2 – 3 Days (Theory + Live Practical Work)',
    schedule: 'Intakes run fortnightly & on-demand for civil projects',
    location: 'Mount Barker Carlisle Centre & Practical Road Site',
    featured: true,
    image: '/images/traffic-controller-field.jpg',
    description: 'Approved Austroads TTM curriculum for urban streets and low-volume rural roads. Includes stop/slow bat and signage placement.',
    overview: 'Carlisle Learning is an Approved Training Provider for Austroads Temporary Traffic Management (TTM). This combined course certifies you as both a Traffic Controller (TC1) and a Traffic Management Implementer (TMI1) for Category 1 roads (urban streets and low-volume rural roads).',
    outcomes: [
      'Operate Stop/Slow bat safely to control vehicular traffic flows',
      'Set up, maintain, and remove advance warning signs, cones, and bollards',
      'Interpret and implement Traffic Guidance Schemes (TGS / TMP)',
      'Coordinate two-way radio communications with road crew and co-controllers',
      'Receive official Austroads Statement of Attainment & TTM Accreditation'
    ],
    prerequisites: ['Valid Driver’s Licence', 'Valid White Card (CPCWHS1001)', 'Valid USI'],
    accreditation: 'Approved Austroads TTM National Skill Set & Nationally Recognised Training',
    targetAudience: 'Traffic control employees, road workers, civil contractors, event marshals.'
  },
  {
    id: 'traffic-combo-tc2-tmi2',
    code: 'RIISS00059 / RIISS00061',
    title: 'Combination Traffic Controller & Implementer for High Volume Roads (TC2 & TMI2)',
    shortTitle: 'TC2 & TMI2 High Volume Roads (Austroads)',
    category: 'traffic',
    categoryLabel: 'Traffic Management',
    price: 1100,
    citbSubsidy: 295,
    duration: '2 Days',
    schedule: 'Scheduled monthly and on-demand',
    location: 'Mount Barker & Designated High Volume Road Site',
    featured: false,
    image: '/images/traffic-implementer.jpg',
    description: 'Austroads Category 2 training for high-speed, multi-lane, and high-volume expressways across South Australia.',
    overview: 'Elevate your traffic management qualification to high-volume expressway and arterial road environments. Covers crash attenuator trucks, advanced signage taper distances, multi-lane closures, and variable message sign (VMS) deployment.',
    outcomes: [
      'Manage complex multi-lane lane drops and high-speed highway tapers',
      'Deploy truck-mounted attenuators (TMA) and portable traffic lights',
      'Review high-volume road safety audits and dynamic risk assessments',
      'Execute emergency traffic clearance protocols under high-speed traffic'
    ],
    prerequisites: ['Must hold current TC1 & TMI1 tickets', 'White Card', 'Driver’s Licence'],
    accreditation: 'Austroads Category 2 Skill Set & Nationally Recognised Training',
    targetAudience: 'Experienced traffic controllers, motorway maintenance crews, state civil contractors.'
  },

  // --- VERIFICATION OF COMPETENCY (VOC) ---
  {
    id: 'voc-plant-equipment',
    code: 'VOC-WHS',
    title: 'Verification of Competency (VOC) – Civil Plant & High Risk Equipment',
    shortTitle: 'Verification of Competency (VOC)',
    category: 'voc',
    categoryLabel: 'Verification of Competency',
    price: 350,
    duration: '2 – 4 Hours per machine (Flexible scheduling)',
    schedule: 'Delivered on-site at your project or our Mount Barker facility',
    location: 'Mount Barker Training Facility or On-site across SA',
    featured: true,
    image: '/images/carlisle-badge.jpg',
    description: 'Ensure site safety and WHS legislative compliance. Industry-recognised operator competency checks for plant, machinery, and HRWL tickets.',
    overview: 'A Verification of Competency (VOC) is a formal assessment conducted to confirm that an operator’s practical skills and theory knowledge are current and safe. Employers across South Australia rely on Carlisle Learning VOC assessments to verify operator competency before onboarding to tier-1 civil, mining, and infrastructure projects.',
    outcomes: [
      'Theory check: Oral/written questions confirming safe operation and site procedures',
      'Practical demonstration: Machine pre-start, operational maneuvering, hazard control',
      'Provides written employer report verifying operator compliance',
      'VOC Card and Certificate issued with standard 2-year site validity'
    ],
    prerequisites: ['Must already hold Statement of Attainment or High Risk Work Licence for the machine'],
    accreditation: 'Industry-recognised Carlisle Learning Compliance Certificate & VOC Card',
    targetAudience: 'Contractors, employers, HR managers, tier-1 project site directors.'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Courses' },
  { id: 'safety', name: 'Construction Safety' },
  { id: 'high-risk', name: 'High Risk Licences' },
  { id: 'earthmoving', name: 'Earthmoving & Mining' },
  { id: 'traffic', name: 'Traffic Management' },
  { id: 'agriculture', name: 'Ag & Land Management' },
  { id: 'voc', name: 'VOC Assessments' }
];

