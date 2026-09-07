// GrowNest - Master Data Store & Content

const GROWNEST_DATA = {
  brand: {
    name: 'GrowNest',
    primaryTagline: 'Grow Fresh. Grow Smart. Grow Anywhere.',
    secondaryTagline: 'Your smart indoor farm.',
    taglineSubtitle: 'An AI-powered indoor farming system that helps you grow fresh food at home — whatever the weather outside.',
    closingCta: 'Start Growing Smarter.',
    philosophy: "Your garden doesn't need a backyard."
  },

  products: [
    {
      id: 'basic',
      slug: 'basic',
      name: 'GrowNest Basic',
      tagline: 'For Beginners',
      subtitle: 'Compact tabletop smart planter for fresh herbs and greens.',
      price: 3499,
      mrp: 4499,
      badge: 'Starter Choice',
      badgeClass: 'badge-eco',
      image: 'assets/images/product-basic.jpg',
      rating: 4.8,
      reviewsCount: 128,
      leadTime: 'Delivered in 3-5 business days',
      features: [
        'Full spectrum UV & LED light panels for optimal growth',
        'Automatic misting sprinklers keep plants hydrated',
        'Air circulation fan ensures fresh air & proper ventilation',
        'Real-time temperature & humidity sensors',
        'Water level indicator with remaining volume display',
        'Touchscreen plant health dashboard & system controls',
        '100% Organic, chemical-free & energy-efficient'
      ],
      description: 'The ideal entry point into modern indoor gardening. Grow fresh Italian basil, rosemary, coriander, and thyme right on your kitchen counter with zero soil mess, automated hydration, and touchscreen health stats.',
      specs: {
        'Capacity': '6 Pod Modular Basin',
        'Dimensions': '44 x 24 x 32 cm',
        'Water Tank': '2.5 Liters (14-day supply)',
        'Lighting': 'Full Spectrum UV & LED Panels',
        'Ventilation': 'Active Air Circulation Fan',
        'Sensors': 'Temp, Humidity, Soil Moisture, Water Level',
        'Control': 'Plant Health Touchscreen Panel',
        'Warranty': '1 Year Comprehensive'
      },
      gallery: [
        { title: 'Actual Architecture', url: 'assets/images/product-basic.jpg' },
        { title: 'Modern Living Space', url: 'assets/images/hero.jpg' },
        { title: 'Compact Studio Unit', url: 'assets/images/basic_smart_planter_1788781120313.jpg' },
        { title: 'Mobile Telemetry', url: 'assets/images/app-mockup.jpg' },
        { title: 'Night Mode LED', url: 'assets/images/hero.jpg' }
      ]
    },
    {
      id: 'plus',
      slug: 'plus',
      name: 'GrowNest Plus',
      tagline: 'For Regular Home Growers',
      subtitle: '2-tier automated micro-farm with touchscreen and mist irrigation.',
      price: 6999,
      mrp: 8999,
      badge: 'MOST POPULAR',
      badgeClass: 'badge-popular',
      isPopular: true,
      image: 'assets/images/product-plus.jpg',
      rating: 4.9,
      reviewsCount: 342,
      leadTime: 'Delivered in 2-4 business days',
      features: [
        '2-tier modular architecture with adjustable tier height',
        'Dual full spectrum UV & LED light panels',
        'Automatic mist sprinklers with root hydration',
        'Soil health sensor (moisture, pH level & nutrients)',
        'Automatic organic nutrient dispenser',
        'Modular plant dividers for multi-crop separation',
        'Large water reservoir with built-in filtration',
        'Touchscreen control panel with Wi-Fi connectivity'
      ],
      description: 'Our most popular setup designed for regular home cooks and families. Grow crisp salads, strawberries, and rich culinary herbs across dual automated tiers with adjustable heights and automated nutrient dosing.',
      specs: {
        'Capacity': '2 Adjustable Growing Tiers',
        'Dimensions': '58 x 32 x 68 cm',
        'Water Tank': '5.0 Liters + Built-in Filter',
        'Lighting': 'Dual UV & LED Panel Arrays',
        'Nutrients': 'Automated Organic Nutrient Dispenser',
        'Sensors': 'Soil Moisture, pH, Temp, Humidity',
        'Control': 'Touchscreen Dashboard + Wi-Fi',
        'Warranty': '2 Year Comprehensive'
      },
      gallery: [
        { title: 'Actual Architecture', url: 'assets/images/product-plus.jpg' },
        { title: 'Living Room Setup', url: 'assets/images/hero.jpg' },
        { title: '2-Tier Farm Render', url: 'assets/images/plus_smart_farm_1788781142124.jpg' },
        { title: 'Mobile Telemetry', url: 'assets/images/app-mockup.jpg' },
        { title: 'Night Mode LED', url: 'assets/images/hero.jpg' }
      ]
    },
    {
      id: 'pro',
      slug: 'pro',
      name: 'GrowNest Pro',
      tagline: 'For Serious Indoor Growers',
      subtitle: 'Elite vertical smart farm with soil/pH probes and automated nutrient dispenser.',
      price: 11999,
      mrp: 14999,
      badge: 'ELITE GROWER',
      badgeClass: 'badge-pro',
      image: 'assets/images/product-pro.jpg',
      rating: 5.0,
      reviewsCount: 215,
      leadTime: 'Delivered in 2-4 business days (White-glove available)',
      features: [
        'Elite vertical multi-tier architecture with modular grow trays',
        'Modular extension port to connect multiple units together',
        '3-chamber automatic nutrient dispenser (Nutrients A, B, C)',
        'Integrated water filtration column & large reservoir',
        'Air filtration outlet for purified indoor microclimate',
        'Vertical smart control panel with live health curves',
        'Soil health probes (moisture, pH 6.2 target, nutrient EC)',
        'Automatic mist sprinklers & high-PAR UV LED panels'
      ],
      description: 'The pinnacle of automated home agriculture. Engineered for indoor food self-sufficiency, capable of cultivating full crops of heirloom tomatoes, crisp head lettuces, and hot chilies year-round with modular vertical expansion.',
      specs: {
        'Capacity': 'Multi-Tier + Side Vertical Grow Pocket',
        'Dimensions': '68 x 38 x 98 cm',
        'Water Tank': '8.0 Liters + 3 Nutrient Chambers (A, B, C)',
        'Filtration': 'Built-in Water Filter + Air Filtration Outlet',
        'Sensors': 'Optical Soil, Digital pH, Moisture, Temp, Humidity',
        'Control': 'Smart Control Panel + Cloud AI Sync',
        'Expandability': 'Modular Extension Port Supported',
        'Warranty': '3 Year Comprehensive + VIP Support'
      },
      gallery: [
        { title: 'Actual Architecture', url: 'assets/images/product-pro.jpg' },
        { title: 'Vertical Tower View', url: 'assets/images/pro_smart_farm_1788781162475.jpg' },
        { title: 'Penthouse Setup', url: 'assets/images/hero.jpg' },
        { title: 'Mobile Telemetry', url: 'assets/images/app-mockup.jpg' },
        { title: 'Harvest Cycle', url: 'assets/images/hero.jpg' }
      ]
    }
  ],

  ecosystemAccessories: [
    {
      id: 'nutrient-pack',
      name: 'GrowNest Bio-Nutrient Liquid (500ml)',
      category: 'Nutrients',
      price: 499,
      image: 'assets/images/product-pro.jpg',
      desc: 'Plant-derived organic N-P-K formula tailored for hydroponics.'
    },
    {
      id: 'seed-kit-herbs',
      name: 'Chef’s Gourmet Herb Seed Pod Kit',
      category: 'Seeds',
      price: 699,
      image: 'assets/images/product-basic.jpg',
      desc: 'Genovese Basil, Greek Oregano, English Thyme, Italian Parsley.'
    },
    {
      id: 'seed-kit-tomatoes',
      name: 'Heirloom Cherry Tomato & Chili Pods',
      category: 'Seeds',
      price: 799,
      image: 'assets/images/product-plus.jpg',
      desc: 'High-yield sweet dwarf tomatoes and fiery bird’s eye chilies.'
    },
    {
      id: 'tier-expansion',
      name: 'Modular Tier Expansion Unit',
      category: 'Hardware',
      price: 2499,
      image: 'assets/images/product-plus.jpg',
      desc: 'Stackable frame with LED bar and misting connectors.'
    },
    {
      id: 'smart-grow-bar',
      name: 'Botanical PAR LED Hanging Light Bar',
      category: 'Hardware',
      price: 1899,
      image: 'assets/images/hero.jpg',
      desc: 'Supplementary spectrum lighting for hanging and wall planters.'
    }
  ],

  crops: [
    { name: 'Cherry Tomatoes', type: 'fruits', icon: '🍅', time: '55-65 days', yield: 'High', light: '14 hrs/day', note: 'Sweet, rich clusters all year' },
    { name: 'Bird’s Eye Chillies', type: 'vegetables', icon: '🌶️', time: '60-70 days', yield: 'Abundant', light: '12 hrs/day', note: 'Spicy, compact bush variety' },
    { name: 'Genovese Basil', type: 'herbs', icon: '🌿', time: '21-28 days', yield: 'Continuous', light: '10 hrs/day', note: 'Cut-and-come-again harvest' },
    { name: 'Butterhead Lettuce', type: 'greens', icon: '🥬', time: '30-35 days', yield: 'Single/Cut', light: '12 hrs/day', note: 'Crisp, sweet, zero pesticide' },
    { name: 'Radish Microgreens', type: 'microgreens', icon: '🌱', time: '7-10 days', yield: 'Fast turnaround', light: '8 hrs/day', note: 'Packed with 40x antioxidants' },
    { name: 'Wild Strawberries', type: 'fruits', icon: '🍓', time: '75-90 days', yield: 'Medium', light: '14 hrs/day', note: 'Fragrant, incredibly sweet fruit' },
    { name: 'Baby Spinach', type: 'greens', icon: '🍃', time: '25-30 days', yield: 'Continuous', light: '10 hrs/day', note: 'Iron-rich, tender young leaves' },
    { name: 'Moroccan Spearmint', type: 'herbs', icon: '🌱', time: '18-24 days', yield: 'Vigorous', light: '10 hrs/day', note: 'Perfect for teas, drinks & salads' }
  ],

  comparisonMatrix: [
    { feature: 'Self-Watering Sub-System', basic: true, plus: true, pro: true },
    { feature: 'Moisture Level Monitoring', basic: true, plus: true, pro: true },
    { feature: 'Full Spectrum LED/UV Lighting', basic: true, plus: true, pro: true },
    { feature: 'Basic Environmental Sensors', basic: true, plus: true, pro: true },
    { feature: 'Multi-Tier Growing System', basic: false, plus: '2 Tiers', pro: '3+ Modular Tiers' },
    { feature: 'Automatic Sprinkler Mist Nozzles', basic: false, plus: true, pro: true },
    { feature: 'Temperature & Humidity Probes', basic: false, plus: true, pro: true },
    { feature: 'Whisper-Quiet Air Circulation', basic: false, plus: true, pro: 'HEPA Filtered' },
    { feature: 'Float-Level Water Monitoring', basic: 'Visual', plus: 'Digital Sensor', pro: 'Telemetry + Flow' },
    { feature: 'Touchscreen Control Dashboard', basic: false, plus: '2.8" OLED', pro: 'Full Panoramic Glass' },
    { feature: 'Optical Soil & Digital pH Monitoring', basic: false, plus: false, pro: true },
    { feature: 'Automated Nutrient Dispenser', basic: false, plus: false, pro: true },
    { feature: 'Integrated Water Filtration Column', basic: false, plus: false, pro: true },
    { feature: 'HEPA Active Air Filtration', basic: false, plus: false, pro: true },
    { feature: 'Modular Expansion Support', basic: false, plus: 'Up to 3 Tiers', pro: 'Up to 6 Tiers' },
    { feature: 'AI Plant Doctor Predictive Care', basic: 'Basic Tips', plus: 'App Integrated', pro: 'Continuous AI Sync' }
  ],

  aiDoctorCases: [
    {
      id: 'nitrogen',
      title: 'Yellowing Older Leaves (Chlorosis)',
      crop: 'Italian Sweet Basil',
      confidence: '94.8%',
      status: 'Attention Required',
      statusColor: 'var(--color-warning)',
      image: 'assets/images/product-basic.jpg',
      summary: 'Lower leaves turning pale chartreuse yellow while upper foliage remains green. Characteristic sign of mobile nitrogen depletion.',
      cause: 'The plant is mobilizing stored nitrogen to fuel new top shoots because reservoir nutrient levels dropped below 1.2 mS/cm.',
      remedy: 'Add 10ml of GrowNest Bio-Nutrient A to the reservoir. Ensure target pH stays between 5.8 and 6.2 for optimal cation absorption.',
      hardwareAction: 'Adjusting automated dispenser cycle: +12ml N-Boost injected'
    },
    {
      id: 'mildew',
      title: 'White Surface Patches (Early Mildew)',
      crop: 'Spearmint & Rosemary',
      confidence: '89.2%',
      status: 'Warning',
      statusColor: 'var(--color-danger)',
      image: 'assets/images/product-plus.jpg',
      summary: 'Fine white powdery specks forming on upper leaf epidermis due to stagnant humid micro-climates.',
      cause: 'Ambient humidity exceeded 78% for >14 hours with insufficient air turbulence around dense leaf canopies.',
      remedy: 'Increase circulation fan speed to setting 3. Prune inner dense foliage to let light penetrate. Mist with mild organic potassium bicarbonate.',
      hardwareAction: 'Fan speed boosted to 2400 RPM, humidity target reduced to 58%'
    },
    {
      id: 'underwater',
      title: 'Leaf Droop & Turgor Loss',
      crop: 'Cherry Tomato Plant',
      confidence: '97.1%',
      status: 'Hydration Critical',
      statusColor: 'var(--color-warning)',
      image: 'assets/images/product-pro.jpg',
      summary: 'Stems bending downward, limp foliage. Root moisture reading registered below 25% threshold.',
      cause: 'Water reservoir level reached lower safety limit during rapid fruiting stage transpiration.',
      remedy: 'Replenish reservoir with 3L fresh room-temperature water. System will immediately trigger emergency 45-second root bath.',
      hardwareAction: 'Automated emergency misting triggered for 45s'
    },
    {
      id: 'healthy',
      title: 'Optimal Growth Equilibrium',
      crop: 'Crisp Romaine Lettuce',
      confidence: '99.4%',
      status: 'Optimal Health',
      statusColor: 'var(--color-success)',
      image: 'assets/images/product-plus.jpg',
      summary: 'Lush emerald pigmentation, thick cell turgor, crisp leaf edges with zero browning or pest activity.',
      cause: 'Photosynthetically active radiation (PAR), ambient CO2, and nutrient balance are perfectly aligned.',
      remedy: 'No corrective actions required. Ready for outer leaf harvesting in approximately 4 days.',
      hardwareAction: 'Standard circadian cycle: 14h daylight / 10h rest'
    }
  ],

  quizQuestions: [
    {
      id: 1,
      question: 'What do you most want to grow inside your home?',
      options: [
        { label: 'Fresh culinary herbs (Basil, Mint, Thyme, Parsley)', score: 'basic' },
        { label: 'Salad greens, microgreens, and small veggies', score: 'plus' },
        { label: 'Fruiting vegetables (Tomatoes, Chillies) & full harvests', score: 'pro' },
        { label: 'A little bit of everything', score: 'plus' }
      ]
    },
    {
      id: 2,
      question: 'How much indoor floor or counter space do you have?',
      options: [
        { label: 'Just a corner of my kitchen counter or desk (Compact)', score: 'basic' },
        { label: 'A dedicated side table or kitchen island (Medium)', score: 'plus' },
        { label: 'Floor space for a sleek vertical standing unit (Spacious)', score: 'pro' },
        { label: 'Flexible / willing to expand over time', score: 'plus' }
      ]
    },
    {
      id: 3,
      question: 'How much automation do you desire?',
      options: [
        { label: 'Simple self-watering and lights (Minimal setup)', score: 'basic' },
        { label: 'Auto misting, touchscreen, and phone alerts (Smart)', score: 'plus' },
        { label: 'Fully autonomous: pH probes, nutrient dispenser & AI sync', score: 'pro' },
        { label: 'Maximum convenience, zero babysitting', score: 'pro' }
      ]
    },
    {
      id: 4,
      question: 'What is your gardening experience level?',
      options: [
        { label: 'Total beginner: I have killed every plant I owned', score: 'basic' },
        { label: 'Casual grower: I love fresh food but lack consistent time', score: 'plus' },
        { label: 'Experienced indoor grower / serious cook', score: 'pro' },
        { label: 'Tech enthusiast wanting the smartest ecosystem', score: 'pro' }
      ]
    }
  ],

  faqs: [
    {
      q: 'What is GrowNest and how does it work?',
      a: 'GrowNest is an eco-friendly, AI-assisted smart indoor farming system designed to let anyone grow fresh herbs, vegetables, and small fruits inside their home. It integrates calibrated full-spectrum LED grow lights, automated hydration, precision environmental sensors, and smart AI monitoring to create the ideal growing micro-climate 365 days a year.'
    },
    {
      q: 'What can I grow in a GrowNest unit?',
      a: 'Depending on the model, you can cultivate culinary herbs (basil, cilantro, mint, thyme, rosemary), leafy greens (kale, spinach, romaine, arugula), microgreens, dwarf cherry tomatoes, bird’s eye chillies, and strawberries.'
    },
    {
      q: 'Can GrowNest work in rooms without any natural sunlight?',
      a: 'Yes, 100%! GrowNest’s custom PAR (Photosynthetically Active Radiation) LED panels deliver the exact light spectrum and photons plants need for vegetative growth, flowering, and fruiting without requiring a single ray of outdoor sunlight.'
    },
    {
      q: 'How does the automatic watering system work?',
      a: 'GrowNest uses a closed-loop sub-irrigation and ultrasonic misting system. Moisture sensors continuously assess the root zone. When hydration is needed, the system automatically draws filtered water from its internal reservoir. You only need to refill the reservoir once every 2 to 3 weeks.'
    },
    {
      q: 'What does the AI Plant Doctor do?',
      a: 'The AI Plant Doctor analyzes photo uploads and live sensor data to detect early signs of nutrient deficiencies, improper pH, or moisture stress before visible wilting occurs. It suggests practical remedies and can automatically adjust your GrowNest settings (fan speed, light intensity, mist cycles) to resolve issues.'
    },
    {
      q: 'Can I expand or upgrade my GrowNest over time?',
      a: 'Yes. GrowNest Plus and GrowNest Pro feature modular stackable frames. You can add extra growing tiers, hanging planter rails, or supplementary grow bars as your indoor garden needs expand.'
    },
    {
      q: 'What is the key difference between Basic, Plus, and Pro?',
      a: 'GrowNest Basic (₹3,499) is a 3-pod compact tabletop unit with moisture sensors and LED lights. GrowNest Plus (₹6,999) is our most popular 2-tier system with mist sprinklers, temperature/humidity sensors, and an OLED touchscreen. GrowNest Pro (₹11,999) is a commercial-grade vertical unit featuring digital pH probes, automatic nutrient dispensers, water filtration, and HEPA air filtration.'
    },
    {
      q: 'How much maintenance does GrowNest require?',
      a: 'Less than 5 minutes every two weeks! All you do is refill the water reservoir when the app or indicator alerts you, add a cap of organic plant food once a month, and harvest your fresh produce.'
    },
    {
      q: 'Does GrowNest require the mobile app to operate?',
      a: 'No. Every GrowNest model is fully standalone with physical touch or display controls. The mobile app provides convenient remote monitoring, historical growth graphs, and AI Plant Doctor diagnoses, but is entirely optional.'
    },
    {
      q: 'How does GrowNest help during severe or unpredictable weather?',
      a: 'Because GrowNest creates an insulated, automated indoor micro-climate, heatwaves, frost, monsoon downpours, or cloudy winter weeks have zero impact on your plants. You get fresh, organic, crisp produce every day of the year.'
    }
  ]
};
