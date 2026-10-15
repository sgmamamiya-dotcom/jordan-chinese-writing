// Science topics for bryan/science.html, following the Singapore primary Science themes (P3–P6).
// Each topic: summary points, key words, a 5-question quiz (c = index of the correct option), exam tips, fun facts.
// The virtual experiment for each topic lives in science-sims.js under the same id.
window.SCI_THEMES = {
  diversity: { name: 'Diversity', color: '#2E8B57' },
  cycles: { name: 'Cycles', color: '#2A6FC9' },
  systems: { name: 'Systems', color: '#7A4CE0' },
  energy: { name: 'Energy', color: '#D2780F' },
  interactions: { name: 'Interactions', color: '#CF3F3F' }
};

window.SCI_TOPICS = [
  /* ---------------- Diversity ---------------- */
  {
    id: 'living', emoji: '🌱', title: 'Living and Non-living Things', level: 'P3', theme: 'diversity',
    sim: 'Sorting lab: decide which things are living',
    summary: [
      'Living things need air, food and water to stay alive.',
      'Living things grow, respond to changes around them, and reproduce (make young ones of their own kind).',
      'Non-living things, such as a rock or a chair, do not have all of these characteristics.',
      'Some non-living things can move (a car) or get bigger (a crystal), but they do not need food, respond to changes or reproduce.',
      'Living things include plants, animals, fungi (like mushrooms) and bacteria.'
    ],
    terms: [
      ['Living thing', 'Something that needs air, food and water, grows, responds and reproduces.'],
      ['Non-living thing', 'Something that does not have all the characteristics of living things.'],
      ['Reproduce', 'To make young ones of its own kind.'],
      ['Respond', 'To react to a change around it, such as touch, light or sound.'],
      ['Grow', 'To increase in size, usually by taking in food.'],
      ['Characteristic', 'A feature that helps us describe or group something.']
    ],
    quiz: [
      { q: 'Which of these is a living thing?', a: ['A mushroom', 'A stone', 'A toy robot', 'A flame'], c: 0, e: 'A mushroom is a fungus. It needs food, water and air, grows and reproduces.' },
      { q: 'A toy car can move. Why is it still a non-living thing?', a: ['It does not need food, water and air, and cannot reproduce', 'It is made of plastic', 'It is small', 'It has wheels'], c: 0, e: 'Moving alone does not make something living. Check all the characteristics of living things.' },
      { q: 'The leaves of a mimosa plant fold up when touched. Which characteristic of living things does this show?', a: ['They respond to changes', 'They grow', 'They reproduce', 'They need water'], c: 0, e: 'Reacting to touch is responding to a change around it.' },
      { q: 'Which statement is true for ALL living things?', a: ['They can reproduce', 'They can move from place to place', 'They have legs', 'They make their own food'], c: 0, e: 'Plants do not move from place to place, and animals do not make their own food, but all living things reproduce.' },
      { q: 'A seed has been kept dry in a packet for a year. Is it living?', a: ['Yes, it can grow into a plant when it gets water, air and warmth', 'No, because it does not move', 'No, because it is not green', 'No, because it is in a packet'], c: 0, e: 'The seed is alive but resting. Given the right conditions, it germinates and grows.' }
    ],
    tips: [
      'When explaining why something is living, give a characteristic with evidence, e.g. "It grows bigger over time."',
      '"It moves" is not enough to show something is living. Plants are living but do not move from place to place.',
      'Use the key words: needs air, food and water; grows; responds; reproduces.'
    ],
    facts: [
      'Some bristlecone pine trees in the USA are more than 4,800 years old.',
      'Bacteria are so tiny that hundreds of them could fit across the full stop at the end of this sentence.'
    ]
  },
  {
    id: 'classify', emoji: '🐾', title: 'Classifying Living Things', level: 'P3', theme: 'diversity',
    sim: 'Use a classification key to name an animal group',
    summary: [
      'Living things are grouped by the characteristics they share.',
      'Main groups: plants, animals, fungi and bacteria.',
      'Flowering plants make flowers, fruits and seeds. Non-flowering plants such as ferns and mosses reproduce by spores.',
      'Animals can be grouped as mammals, birds, fish, reptiles, amphibians and insects.',
      'Fungi (mushrooms, moulds, yeast) cannot make their own food. They feed on dead or decaying matter and reproduce by spores.',
      'Bacteria are very tiny living things. Some cause diseases; others are useful, e.g. in making yoghurt.'
    ],
    terms: [
      ['Mammal', 'Has hair or fur and feeds its young with milk. Most give birth to young alive.'],
      ['Bird', 'Has feathers, a beak and wings, and lays eggs with hard shells.'],
      ['Fish', 'Lives in water, has fins and scales, and breathes with gills.'],
      ['Reptile', 'Has dry, scaly skin and lays eggs with leathery shells.'],
      ['Amphibian', 'Has moist skin. The young live in water and breathe with gills.'],
      ['Insect', 'Has 3 body parts, 6 legs and usually 2 pairs of wings.'],
      ['Fungi', 'Living things like mushrooms and moulds that cannot make their own food.'],
      ['Spore', 'A tiny part made by ferns, mosses and fungi that can grow into a new one.']
    ],
    quiz: [
      { q: 'A whale is a mammal because it…', a: ['feeds its young with milk', 'lives in water', 'has fins', 'is very big'], c: 0, e: 'Feeding young with milk is a characteristic of mammals. Fish also live in water and have fins.' },
      { q: 'Which of these is an insect?', a: ['Ant', 'Spider', 'Centipede', 'Snail'], c: 0, e: 'An ant has 3 body parts and 6 legs. A spider has 8 legs and 2 body parts.' },
      { q: 'Which group does a mushroom belong to?', a: ['Fungi', 'Plants', 'Bacteria', 'Animals'], c: 0, e: 'Mushrooms are fungi. They do not make their own food like plants do.' },
      { q: 'How does a fern reproduce?', a: ['By spores', 'By seeds', 'By flowers', 'By fruits'], c: 0, e: 'Ferns are non-flowering plants that reproduce by spores.' },
      { q: 'Which animal is an amphibian?', a: ['Frog', 'Crocodile', 'Turtle', 'Snake'], c: 0, e: 'Frogs have moist skin and their young (tadpoles) live in water. The others are reptiles.' }
    ],
    tips: [
      'Bats are mammals, not birds. Penguins are birds. Whales and dolphins are mammals.',
      'Spiders are not insects: they have 8 legs and 2 body parts.',
      'Fungi are not plants because they cannot make their own food.'
    ],
    facts: [
      'The platypus is a mammal that lays eggs.',
      'Scientists have named more than a million kinds of insects.'
    ]
  },
  {
    id: 'materials', emoji: '🧱', title: 'Materials', level: 'P3', theme: 'diversity',
    sim: 'Materials testing lab: bend, wet, light and magnet tests',
    summary: [
      'Objects are made of materials such as wood, metal, plastic, glass, rubber, fabric and paper.',
      'Each material has properties: strength, hardness, flexibility, whether it is waterproof, and whether it lets light through.',
      'We choose a material for a job because of its properties, e.g. rubber gloves are waterproof and flexible.',
      'A harder material can scratch a softer one.',
      'A flexible material can bend without breaking.'
    ],
    terms: [
      ['Hardness', 'How difficult it is to scratch a material.'],
      ['Strength', 'How well a material can hold weight without breaking.'],
      ['Flexibility', 'How easily a material can bend without breaking.'],
      ['Waterproof', 'Does not let water pass through.'],
      ['Absorbent', 'Soaks up water.'],
      ['Transparent', 'Lets most light pass through, so you can see clearly through it.']
    ],
    quiz: [
      { q: 'Why is rubber used to make gloves for washing dishes?', a: ['It is waterproof and flexible', 'It is hard', 'It is transparent', 'It is absorbent'], c: 0, e: 'The gloves must keep water out and let your fingers bend.' },
      { q: 'Material A scratches B. B scratches C. Which is the hardest?', a: ['A', 'B', 'C', 'They are equally hard'], c: 0, e: 'A harder material scratches a softer one, so A is harder than B, and B is harder than C.' },
      { q: 'Why is glass used for windows?', a: ['It lets most light through', 'It is flexible', 'It is absorbent', 'It is soft'], c: 0, e: 'Glass is transparent, so light can enter the room and we can see outside.' },
      { q: 'Which material is best for a raincoat?', a: ['Plastic', 'Cotton', 'Paper', 'Wool'], c: 0, e: 'Plastic is waterproof. Cotton, paper and wool absorb water.' },
      { q: '"It can bend without breaking." Which property is this?', a: ['Flexibility', 'Hardness', 'Strength', 'Transparency'], c: 0, e: 'That is the meaning of flexibility.' }
    ],
    tips: [
      'To compare hardness, use a scratch test: the material that scratches the other is harder.',
      'In a fair test, change only the material. Keep the size, shape and thickness the same.',
      'Link the property to the use: "Metal is used for pots because it is strong and conducts heat well."'
    ],
    facts: [
      'Diamond is the hardest natural material on Earth.',
      'Some plastics can take hundreds of years to break down.'
    ]
  },

  /* ---------------- Cycles ---------------- */
  {
    id: 'lifecycles', emoji: '🦋', title: 'Life Cycles', level: 'P3–P4', theme: 'cycles',
    sim: 'Step through life cycles, then put the stages in order',
    summary: [
      'A life cycle is the series of stages a living thing goes through as it grows and reproduces.',
      'Some animals have 4 stages: egg → larva → pupa → adult (butterfly, mosquito, beetle).',
      'Some animals have 3 stages: egg → nymph → adult (cockroach, grasshopper). The nymph looks like a small adult without fully grown wings.',
      'Frog: egg → tadpole → froglet → adult frog.',
      'Chicken: egg → chick → adult. The young looks like the adult.',
      'Flowering plant: seed → seedling → adult plant, which makes flowers, fruits and seeds.'
    ],
    terms: [
      ['Larva', 'The young stage that looks very different from the adult, e.g. a caterpillar.'],
      ['Pupa', 'The stage between larva and adult. A butterfly pupa does not feed.'],
      ['Nymph', 'The young of a 3-stage insect. It looks like a small adult without fully grown wings.'],
      ['Moult', 'To shed the outer covering so the young can grow bigger.'],
      ['Tadpole', 'The young frog that lives in water and breathes with gills.'],
      ['Seedling', 'A young plant that has just grown from a seed.']
    ],
    quiz: [
      { q: 'Which animal has a 3-stage life cycle?', a: ['Cockroach', 'Butterfly', 'Mosquito', 'Beetle'], c: 0, e: 'Cockroach: egg → nymph → adult. The others have 4 stages.' },
      { q: 'In which stage does a butterfly NOT feed?', a: ['Pupa', 'Larva', 'Adult', 'None of them'], c: 0, e: 'The pupa does not feed. It is changing into the adult.' },
      { q: 'Where does the larva of a mosquito live?', a: ['In water', 'On leaves', 'In soil', 'In the air'], c: 0, e: 'Mosquito larvae live in still water. That is why we remove stagnant water.' },
      { q: 'Why does a caterpillar moult?', a: ['To grow bigger, because its outer covering cannot stretch', 'To change colour', 'To lose weight', 'To breathe'], c: 0, e: 'The old covering is shed so the larva can grow.' },
      { q: 'What is a young grasshopper called?', a: ['Nymph', 'Larva', 'Pupa', 'Tadpole'], c: 0, e: 'Grasshoppers have a 3-stage life cycle with a nymph stage.' }
    ],
    tips: [
      'A nymph looks like a small adult; a larva looks very different from the adult.',
      'Removing stagnant water stops mosquitoes breeding by breaking the life cycle at the egg and larva stages.',
      'Count the stages carefully in a diagram: egg, then each young stage, then adult.'
    ],
    facts: [
      'A tadpole breathes with gills, but an adult frog breathes with lungs and through its moist skin.',
      'Some cicada nymphs live underground for 13 or 17 years before becoming adults.'
    ]
  },
  {
    id: 'matter', emoji: '🧊', title: 'Matter: Solids, Liquids and Gases', level: 'P4', theme: 'cycles',
    sim: 'Particle model: heat water and watch it change state',
    summary: [
      'Matter is anything that has mass and occupies space.',
      'A solid has a definite shape and a definite volume.',
      'A liquid has a definite volume but no definite shape. It takes the shape of its container.',
      'A gas has no definite shape and no definite volume. It fills its container and can be compressed.',
      'Air is matter: it has mass and occupies space.',
      'Light, heat and sound are not matter.'
    ],
    terms: [
      ['Matter', 'Anything that has mass and occupies space.'],
      ['Mass', 'The amount of matter in something, measured in grams (g) or kilograms (kg).'],
      ['Volume', 'The amount of space something occupies.'],
      ['Definite shape', 'Keeps its own shape in any container.'],
      ['Definite volume', 'Takes up the same amount of space in any container.'],
      ['Compress', 'To squeeze into a smaller space. Gases are easy to compress.']
    ],
    quiz: [
      { q: 'Which of these is NOT matter?', a: ['Light', 'Air', 'Water', 'Sand'], c: 0, e: 'Light has no mass and does not occupy space.' },
      { q: 'Which describes a liquid?', a: ['Definite volume, no definite shape', 'Definite shape and volume', 'No definite shape or volume', 'Definite shape, no definite volume'], c: 0, e: 'A liquid takes the shape of its container but keeps its volume.' },
      { q: 'Which can be compressed easily?', a: ['Air in a syringe', 'Water in a syringe', 'A wooden block', 'A stone'], c: 0, e: 'Gases can be compressed; liquids and solids hardly at all.' },
      { q: 'Sand can be poured like water. Why is sand a solid?', a: ['Each grain has a definite shape and volume', 'It is heavy', 'It is dry', 'It comes from the beach'], c: 0, e: 'Sand is made of many tiny solid grains.' },
      { q: 'A balloon gets bigger when you blow air into it. This shows that air…', a: ['occupies space', 'has no mass', 'is a liquid', 'is light'], c: 0, e: 'The air takes up space inside the balloon.' }
    ],
    tips: [
      'Sand, sugar and salt can be poured but are solids: each grain keeps its shape.',
      'A gas takes both the shape AND the volume of its container.',
      'To show air has mass, compare the mass of a flat ball with the same ball pumped up with air.'
    ],
    facts: [
      'Water expands when it freezes. That is why ice floats on water.',
      'Glass may look runny in very old windows, but it is a solid at room temperature.'
    ]
  },
  {
    id: 'water', emoji: '💧', title: 'Water and Changes of State', level: 'P4–P5', theme: 'cycles',
    sim: 'Drying lab: what makes wet clothes dry fastest?',
    summary: [
      'Melting: solid → liquid. Ice melts at 0 °C. Freezing: liquid → solid, also at 0 °C.',
      'Boiling: water changes quickly into steam at 100 °C.',
      'Evaporation: liquid → gas at any temperature, from the surface of the liquid.',
      'Condensation: water vapour loses heat to a cooler surface and changes into water droplets.',
      'Water cycle: evaporation → condensation (clouds) → rain → rivers and seas → evaporation again.',
      'Evaporation is faster when it is hotter, windier, less humid, and when the exposed surface area is larger.'
    ],
    terms: [
      ['Evaporation', 'Liquid changing into gas at any temperature, at the surface.'],
      ['Condensation', 'Water vapour losing heat and changing into water droplets.'],
      ['Melting point', 'The temperature at which a solid melts. For ice: 0 °C.'],
      ['Boiling point', 'The temperature at which a liquid boils. For water: 100 °C.'],
      ['Water vapour', 'Water in gas form. It is invisible.'],
      ['Exposed surface area', 'How much of the liquid is in contact with the air.']
    ],
    quiz: [
      { q: 'Water droplets form on the outside of a glass of iced water because…', a: ['water vapour in the air loses heat to the cold glass and condenses', 'water leaks through the glass', 'the ice melts through the glass', 'the glass sweats'], c: 0, e: 'The droplets come from water vapour in the surrounding air.' },
      { q: 'When will wet clothes dry fastest?', a: ['A hot, windy day with the clothes spread out', 'A cool, still day with the clothes folded', 'A humid day with the clothes folded', 'A cool day with the clothes in a pile'], c: 0, e: 'Heat, wind and a larger exposed surface area all speed up evaporation.' },
      { q: 'What happens to the temperature of ice while it is melting?', a: ['It stays at 0 °C', 'It keeps rising', 'It drops', 'It jumps to 100 °C'], c: 0, e: 'The heat gained is used to melt the ice, so the temperature stays at 0 °C until all of it melts.' },
      { q: 'The white "mist" above a boiling kettle is…', a: ['tiny water droplets formed when steam condenses', 'steam', 'smoke', 'air'], c: 0, e: 'Steam itself is invisible. It condenses into tiny droplets in the cooler air.' },
      { q: 'Which process forms clouds?', a: ['Condensation', 'Evaporation', 'Melting', 'Freezing'], c: 0, e: 'Water vapour rises, cools and condenses into tiny droplets that make up clouds.' }
    ],
    tips: [
      'For condensation, say the water vapour "loses heat to a cooler surface".',
      'Evaporation happens at any temperature; boiling happens only at the boiling point.',
      '"Water vapour" is an invisible gas. "Water droplets" are liquid and can be seen.'
    ],
    facts: [
      'The water you drink has been going round the water cycle for millions of years.',
      'Water covers about 70% of Earth\'s surface, but only a small part of it is fresh water we can drink.'
    ]
  },
  {
    id: 'plantrepro', emoji: '🌸', title: 'Reproduction in Plants', level: 'P5', theme: 'cycles',
    sim: 'Germination lab: what does a seed need to germinate?',
    summary: [
      'Flowering plants reproduce by seeds. Ferns and mosses reproduce by spores.',
      'Parts of a flower: petals attract insects; the stamen (anther and filament) makes pollen; the pistil (stigma, style and ovary) contains ovules.',
      'Pollination is the transfer of pollen grains from the anther to the stigma, by insects, wind and other ways.',
      'Fertilisation is when the male reproductive cell from the pollen joins with the female reproductive cell in the ovule.',
      'After fertilisation, the ovary develops into a fruit and the ovules develop into seeds.',
      'Seeds are dispersed by animals, wind, water and splitting. Dispersal reduces overcrowding, so seedlings compete less for light, water and space.',
      'A seed needs water, air and warmth to germinate. It does not need light or soil to germinate.'
    ],
    terms: [
      ['Pollination', 'The transfer of pollen from the anther to the stigma.'],
      ['Fertilisation', 'The joining of the male and female reproductive cells.'],
      ['Stamen', 'The male part of a flower: anther and filament.'],
      ['Pistil', 'The female part of a flower: stigma, style and ovary.'],
      ['Ovule', 'Found in the ovary. It develops into a seed after fertilisation.'],
      ['Germination', 'When a seed starts to grow into a young plant.'],
      ['Dispersal', 'The spreading of seeds away from the parent plant.']
    ],
    quiz: [
      { q: 'After fertilisation, the ovary develops into a…', a: ['fruit', 'seed', 'flower', 'leaf'], c: 0, e: 'Ovary → fruit; ovule → seed.' },
      { q: 'Which is NOT needed for a seed to germinate?', a: ['Light', 'Water', 'Air', 'Warmth'], c: 0, e: 'A seed uses its stored food to germinate, so it does not need light yet.' },
      { q: 'A flower pollinated by the wind usually…', a: ['makes lots of light pollen', 'has big, colourful petals', 'has a strong scent', 'makes sweet nectar'], c: 0, e: 'Wind-pollinated flowers do not need to attract insects, and light pollen is carried easily by the wind.' },
      { q: 'A fruit with tiny hooks is most likely dispersed by…', a: ['animals', 'wind', 'water', 'splitting'], c: 0, e: 'The hooks catch on animal fur and are carried away.' },
      { q: 'Why is seed dispersal important?', a: ['Seedlings compete less for light, water and space', 'Seeds become bigger', 'Fruits taste sweeter', 'Flowers grow faster'], c: 0, e: 'Dispersal reduces overcrowding near the parent plant.' }
    ],
    tips: [
      'Pollination and fertilisation are different steps: pollination comes first.',
      'Fruit comes from the ovary; seed comes from the ovule.',
      'For germination, write "water, air and warmth". A seed germinates in the dark.'
    ],
    facts: [
      'Coconuts can float across oceans and grow on another island.',
      'A lotus seed found in China germinated after more than 1,000 years.'
    ]
  },

  /* ---------------- Systems ---------------- */
  {
    id: 'plantparts', emoji: '🌿', title: 'Plant Parts and Functions', level: 'P3–P4', theme: 'systems',
    sim: 'Coloured-water experiment: watch water travel up a stem',
    summary: [
      'Roots hold the plant firmly in the soil and take in water and mineral salts. Some roots store food (carrot).',
      'The stem holds the plant upright and carries water and food to other parts. Some stems store food (potato).',
      'Water-carrying tubes carry water and mineral salts from the roots upwards to all parts.',
      'Food-carrying tubes carry food made in the leaves to all parts of the plant.',
      'Leaves make food for the plant using light (photosynthesis).',
      'Flowers develop into fruits, and fruits protect the seeds and help disperse them.'
    ],
    terms: [
      ['Roots', 'Hold the plant in the soil and take in water and mineral salts.'],
      ['Stem', 'Holds the plant up and carries water and food.'],
      ['Leaf', 'Makes food for the plant.'],
      ['Mineral salts', 'Substances in the soil that plants need to stay healthy.'],
      ['Water-carrying tubes', 'Carry water and mineral salts up from the roots.'],
      ['Food-carrying tubes', 'Carry food from the leaves to all parts of the plant.']
    ],
    quiz: [
      { q: 'Which part takes in water from the soil?', a: ['Roots', 'Stem', 'Leaves', 'Flowers'], c: 0, e: 'Roots take in water and mineral salts.' },
      { q: 'A potato is a…', a: ['stem that stores food', 'root that stores food', 'fruit', 'seed'], c: 0, e: 'A potato is an underground stem. A carrot is a root.' },
      { q: 'What is the main job of the leaves?', a: ['To make food', 'To take in water', 'To hold the plant up', 'To attract insects'], c: 0, e: 'Leaves make food through photosynthesis.' },
      { q: 'A white flower is placed in red-coloured water. After a day, its petals turn red. This shows that…', a: ['the stem carries water up to the flower', 'flowers like red', 'the petals make the colour', 'roots store water'], c: 0, e: 'The coloured water travels up the water-carrying tubes.' },
      { q: 'Which tubes carry food from the leaves to the roots?', a: ['Food-carrying tubes', 'Water-carrying tubes', 'Both', 'Neither'], c: 0, e: 'Food-carrying tubes carry food to all parts, including the roots.' }
    ],
    tips: [
      'Water-carrying tubes carry water upwards only. Food-carrying tubes carry food both up and down.',
      'If a ring of the outer stem (with the food-carrying tubes) is removed, the part just above the ring swells because food collects there.',
      'A potato is a stem; a carrot and a sweet potato are roots.'
    ],
    facts: [
      'Some kinds of bamboo can grow about 90 cm in a single day.',
      'The roots of a tree can spread out much wider than its branches.'
    ]
  },
  {
    id: 'digestion', emoji: '🍎', title: 'The Digestive System', level: 'P4', theme: 'systems',
    sim: 'Follow a bite of food through the digestive system',
    summary: [
      'Digestion breaks food down into simpler substances that the body can absorb.',
      'Food passes through: mouth → gullet → stomach → small intestine → large intestine → anus.',
      'Mouth: teeth break food into smaller pieces; saliva starts digestion.',
      'Gullet: pushes food down to the stomach. No digestion takes place here.',
      'Stomach: digestive juices mix with the food and continue digestion.',
      'Small intestine: digestion is completed and digested food is absorbed into the blood.',
      'Large intestine: water is removed from the undigested food, which then leaves the body through the anus.'
    ],
    terms: [
      ['Digestion', 'Breaking food down into simpler substances the body can absorb.'],
      ['Saliva', 'A digestive juice in the mouth.'],
      ['Gullet', 'The tube from the mouth to the stomach.'],
      ['Digestive juices', 'Liquids that help break down food.'],
      ['Absorption', 'Digested food passing into the blood.'],
      ['Undigested food', 'Food that cannot be digested; it leaves the body.']
    ],
    quiz: [
      { q: 'Where is digestion completed?', a: ['Small intestine', 'Stomach', 'Large intestine', 'Mouth'], c: 0, e: 'Digestion is completed in the small intestine.' },
      { q: 'Which part removes water from undigested food?', a: ['Large intestine', 'Small intestine', 'Gullet', 'Mouth'], c: 0, e: 'The large intestine takes in water from the undigested food.' },
      { q: 'In which part does digestion NOT take place?', a: ['Gullet', 'Mouth', 'Stomach', 'Small intestine'], c: 0, e: 'The gullet only moves food down to the stomach.' },
      { q: 'Why do we chew our food?', a: ['To break it into smaller pieces so it is easier to digest', 'To make it taste better', 'To make it colder', 'To add air to it'], c: 0, e: 'Smaller pieces are easier for digestive juices to work on.' },
      { q: 'Where is digested food absorbed into the blood?', a: ['Small intestine', 'Stomach', 'Gullet', 'Mouth'], c: 0, e: 'Digested food passes into the blood in the small intestine.' }
    ],
    tips: [
      'Digestion takes place in the mouth, stomach and small intestine only.',
      'No digestion takes place in the gullet or large intestine.',
      'Use the term "digestive juices", not just "juices".'
    ],
    facts: [
      'An adult\'s small intestine is about 6 metres long.',
      'Your stomach makes a new inside lining every few days so its own juices do not digest it.'
    ]
  },
  {
    id: 'cells', emoji: '🔬', title: 'Cells', level: 'P5', theme: 'systems',
    sim: 'Microscope: compare plant and animal cells',
    summary: [
      'The cell is the basic unit of life. Living things are made of one or more cells.',
      'Cell membrane: controls what moves into and out of the cell.',
      'Cytoplasm: where most of the cell\'s activities take place.',
      'Nucleus: controls the cell\'s activities and contains genetic material.',
      'Plant cells also have a cell wall (gives shape and support) and chloroplasts (contain chlorophyll to trap light for photosynthesis).',
      'Not all plant cells have chloroplasts. Root cells, for example, do not.'
    ],
    terms: [
      ['Cell', 'The basic unit of life.'],
      ['Cell membrane', 'Controls what moves into and out of the cell.'],
      ['Cytoplasm', 'Jelly-like part where cell activities take place.'],
      ['Nucleus', 'Controls the activities of the cell.'],
      ['Cell wall', 'Gives a plant cell its shape and support.'],
      ['Chloroplast', 'Contains chlorophyll to trap light for photosynthesis.']
    ],
    quiz: [
      { q: 'Which part controls the activities of the cell?', a: ['Nucleus', 'Cytoplasm', 'Cell wall', 'Cell membrane'], c: 0, e: 'The nucleus is the control centre.' },
      { q: 'Which part is found in plant cells but NOT in animal cells?', a: ['Cell wall', 'Cell membrane', 'Nucleus', 'Cytoplasm'], c: 0, e: 'Plant cells have a cell wall (and chloroplasts); animal cells do not.' },
      { q: 'Root cells do not have…', a: ['chloroplasts', 'a nucleus', 'cytoplasm', 'a cell membrane'], c: 0, e: 'Roots are underground with no light, so their cells have no chloroplasts.' },
      { q: 'What does the cell membrane do?', a: ['Controls what moves in and out of the cell', 'Makes food', 'Gives the cell its shape', 'Traps light'], c: 0, e: 'The membrane controls movement of substances in and out.' },
      { q: 'Which part traps light for photosynthesis?', a: ['Chloroplast', 'Nucleus', 'Cell wall', 'Cytoplasm'], c: 0, e: 'Chloroplasts contain chlorophyll, which traps light.' }
    ],
    tips: [
      'Plant cells have BOTH a cell wall and a cell membrane.',
      'Not all plant cells have chloroplasts, e.g. root cells.',
      'Do not mix up "cell wall" (support) and "cell membrane" (controls movement).'
    ],
    facts: [
      'Your body is made of tens of trillions of cells.',
      'Some bacteria are made of just one cell, but can still grow and reproduce.'
    ]
  },
  {
    id: 'bodysystems', emoji: '❤️', title: 'Respiratory and Circulatory Systems', level: 'P5', theme: 'systems',
    sim: 'Exercise lab: heart rate and breathing rate',
    summary: [
      'Respiratory system: air enters through the nose, goes down the windpipe into the lungs.',
      'In the lungs, oxygen passes into the blood and carbon dioxide passes out of the blood.',
      'Air breathed out has less oxygen and more carbon dioxide and water vapour than air breathed in.',
      'Circulatory system: the heart pumps blood through blood vessels to all parts of the body.',
      'Blood carries oxygen, digested food and water to the body, and takes away carbon dioxide and other waste.',
      'During exercise, we breathe faster and the heart beats faster to bring more oxygen to the muscles.',
      'Fish take in oxygen dissolved in water through their gills.'
    ],
    terms: [
      ['Lungs', 'Where oxygen enters the blood and carbon dioxide leaves it.'],
      ['Windpipe', 'The tube that carries air to the lungs.'],
      ['Heart', 'Pumps blood around the body.'],
      ['Blood vessels', 'Tubes that carry blood.'],
      ['Gills', 'Let fish take in oxygen dissolved in water.'],
      ['Pulse rate', 'The number of heartbeats per minute.']
    ],
    quiz: [
      { q: 'Where does gas exchange take place in humans?', a: ['Lungs', 'Heart', 'Windpipe', 'Stomach'], c: 0, e: 'In the lungs, oxygen enters the blood and carbon dioxide leaves it.' },
      { q: 'Compared with air breathed in, air breathed out has more…', a: ['carbon dioxide', 'oxygen', 'nitrogen only', 'dust'], c: 0, e: 'The body gives out carbon dioxide, so exhaled air has more of it.' },
      { q: 'Why does the heart beat faster during exercise?', a: ['To bring more oxygen and digested food to the muscles', 'Because the heart is tired', 'To make the body colder', 'To stop breathing'], c: 0, e: 'Working muscles need more oxygen and food to release energy.' },
      { q: 'How do fish get oxygen?', a: ['From oxygen dissolved in water, through their gills', 'By coming up to breathe air', 'Through their fins', 'From the food they eat'], c: 0, e: 'Gills take in dissolved oxygen from the water.' },
      { q: 'Which organ pumps blood?', a: ['Heart', 'Lungs', 'Brain', 'Stomach'], c: 0, e: 'The heart is the pump of the circulatory system.' }
    ],
    tips: [
      'Air breathed out still contains oxygen, just less than air breathed in.',
      'Link the systems: the respiratory system takes in oxygen; the circulatory system carries it around the body.',
      'After exercise, heart rate and breathing rate slowly return to normal.'
    ],
    facts: [
      'Your heart beats about 100,000 times a day.',
      'A resting child breathes in and out about 20 times a minute.'
    ]
  },
  {
    id: 'circuits', emoji: '💡', title: 'Electrical Circuits', level: 'P6', theme: 'systems',
    sim: 'Circuit builder: switches, conductors, series and parallel',
    summary: [
      'Electricity flows only in a closed circuit: a complete path from one end of the battery back to the other.',
      'A switch opens or closes the circuit.',
      'Electrical conductors let electricity pass through: metals such as copper, iron, steel and aluminium.',
      'Electrical insulators do not: plastic, rubber, wood, glass.',
      'Series circuit: one path. Adding more bulbs makes each bulb dimmer. If one bulb fuses, all go out.',
      'Parallel circuit: separate paths. If one bulb fuses, the others stay lit.',
      'Adding batteries in series makes the bulbs brighter.'
    ],
    terms: [
      ['Closed circuit', 'A complete path, so electricity can flow.'],
      ['Open circuit', 'A broken path, so no electricity flows.'],
      ['Electrical conductor', 'A material that lets electricity pass through.'],
      ['Electrical insulator', 'A material that does not let electricity pass through.'],
      ['Series circuit', 'Components connected one after another in a single path.'],
      ['Parallel circuit', 'Components on separate branches of the circuit.']
    ],
    quiz: [
      { q: 'Which object will make the bulb light up when placed in the gap of a circuit?', a: ['Steel paper clip', 'Plastic straw', 'Rubber band', 'Wooden stick'], c: 0, e: 'Steel is a metal, so it is an electrical conductor.' },
      { q: 'Two bulbs are connected in series. One bulb fuses. What happens to the other?', a: ['It goes out', 'It gets brighter', 'It stays the same', 'It flickers'], c: 0, e: 'In series there is only one path, so the circuit is broken.' },
      { q: 'A second battery is added in series. The bulb becomes…', a: ['brighter', 'dimmer', 'unlit', 'the same'], c: 0, e: 'More batteries in series give more electrical energy to the bulb.' },
      { q: 'Why are electrical wires covered in plastic?', a: ['Plastic is an electrical insulator and prevents electric shocks', 'Plastic makes wires stronger', 'Plastic is a good conductor', 'It looks nicer'], c: 0, e: 'The plastic keeps electricity inside the metal wire.' },
      { q: 'In a parallel circuit, one bulb is removed. The other bulb…', a: ['stays lit', 'goes out', 'gets dimmer', 'explodes'], c: 0, e: 'Each bulb is on its own path in a parallel circuit.' }
    ],
    tips: [
      'Trace a finger along the circuit: you must be able to go from one end of the battery back to the other without a break.',
      'Connect batteries positive (+) to negative (–).',
      'Write the full term: "electrical conductor", not just "conductor".'
    ],
    facts: [
      'The electrical signal moves through a wire almost as fast as light, even though the tiny particles carrying the electricity move very slowly.',
      'Copper is used in most wires because it is a very good electrical conductor.'
    ]
  },

  /* ---------------- Energy ---------------- */
  {
    id: 'light', emoji: '🔦', title: 'Light and Shadows', level: 'P4', theme: 'energy',
    sim: 'Shadow lab: move the torch and change the material',
    summary: [
      'Light travels in straight lines.',
      'We see an object when light from it, or light reflected by it, enters our eyes.',
      'Transparent materials let most light through. Translucent materials let some light through. Opaque materials do not let light through.',
      'A shadow forms when an opaque object blocks light. A translucent object forms a faint shadow.',
      'The closer an object is to the light source, the bigger its shadow.',
      'Shiny surfaces such as mirrors reflect light well.'
    ],
    terms: [
      ['Light source', 'Something that gives out its own light, e.g. the Sun, a torch.'],
      ['Reflect', 'When light bounces off a surface.'],
      ['Transparent', 'Lets most light through.'],
      ['Translucent', 'Lets some light through.'],
      ['Opaque', 'Does not let light through.'],
      ['Shadow', 'A dark area formed when an object blocks light.']
    ],
    quiz: [
      { q: 'We can see the Moon because…', a: ['it reflects light from the Sun', 'it gives out its own light', 'it is very hot', 'it is close to Earth'], c: 0, e: 'The Moon is not a light source; it reflects sunlight.' },
      { q: 'An object is moved closer to a torch. What happens to its shadow on the wall?', a: ['It becomes bigger', 'It becomes smaller', 'It stays the same', 'It disappears'], c: 0, e: 'Closer to the light source, the object blocks more light, so the shadow is bigger.' },
      { q: 'Which forms the darkest shadow?', a: ['Cardboard', 'Frosted glass', 'Clear plastic', 'Tracing paper'], c: 0, e: 'Cardboard is opaque, so it blocks all the light.' },
      { q: 'A shadow forms because…', a: ['light travels in straight lines and is blocked by the object', 'the object gives out darkness', 'light bends around the object', 'the wall absorbs the object'], c: 0, e: 'Light cannot bend around an opaque object, so a dark area forms behind it.' },
      { q: 'Which of these is a light source?', a: ['The Sun', 'The Moon', 'A mirror', 'A shiny spoon'], c: 0, e: 'The others only reflect light.' }
    ],
    tips: [
      'The Moon is NOT a light source.',
      'In diagrams, arrows go from the light source to the object and then to the eye, never from the eye.',
      'To explain a shadow, say "light travels in a straight line and the opaque object blocks the light".'
    ],
    facts: [
      'Light from the Sun takes about 8 minutes to reach Earth.',
      'Your shadow is shortest around midday, when the Sun is high in the sky.'
    ]
  },
  {
    id: 'heat', emoji: '🌡️', title: 'Heat and Temperature', level: 'P4', theme: 'energy',
    sim: 'Conduction race: which rod lets heat through fastest?',
    summary: [
      'Heat is a form of energy. Temperature tells us how hot or cold something is, measured in °C with a thermometer.',
      'Heat flows from a hotter place to a colder place until both are at the same temperature.',
      'Most things expand when they gain heat and contract when they lose heat.',
      'Good conductors of heat (metals) let heat flow through quickly.',
      'Poor conductors of heat (wood, plastic, air, foam) let heat flow through slowly. They are used to keep things hot or cold.'
    ],
    terms: [
      ['Heat', 'A form of energy that flows from hotter to colder places.'],
      ['Temperature', 'How hot or cold something is, in °C.'],
      ['Thermometer', 'Instrument used to measure temperature.'],
      ['Good conductor of heat', 'Lets heat flow through quickly, e.g. metal.'],
      ['Poor conductor of heat', 'Lets heat flow through slowly, e.g. wood, plastic.'],
      ['Expand / contract', 'Become bigger when heated / smaller when cooled.']
    ],
    quiz: [
      { q: 'A metal spoon in hot soup soon feels hot because…', a: ['metal is a good conductor of heat', 'metal is a poor conductor of heat', 'the spoon makes heat', 'the soup is cold'], c: 0, e: 'Heat flows quickly through the metal to your hand.' },
      { q: 'Heat flows from…', a: ['a hotter place to a colder place', 'a colder place to a hotter place', 'small objects to big objects', 'light objects to heavy objects'], c: 0, e: 'Heat always flows from hotter to colder.' },
      { q: 'Why are small gaps left between sections of railway tracks?', a: ['So the tracks can expand on hot days', 'To save metal', 'To make noise', 'To let water through'], c: 0, e: 'The metal expands when it gains heat; the gaps stop the tracks bending.' },
      { q: 'Equal amounts of water at 80 °C and 20 °C are mixed. The final temperature is about…', a: ['50 °C', '100 °C', '20 °C', '80 °C'], c: 0, e: 'Heat flows from the hot water to the cold water until they reach the same temperature in between.' },
      { q: 'Why are cooler boxes lined with foam?', a: ['Foam is a poor conductor of heat, so it slows down heat gain', 'Foam makes cold', 'Foam is a good conductor of heat', 'Foam is heavy'], c: 0, e: 'Foam slows down heat flowing in from the warmer surroundings.' }
    ],
    tips: [
      'Never write "cold flows in". Heat flows; things become colder when they lose heat.',
      'A cooler box keeps drinks cold by reducing heat GAIN from the surroundings.',
      'Temperature is measured in degrees Celsius (°C).'
    ],
    facts: [
      'Woolly jumpers keep you warm because they trap air, which is a poor conductor of heat.',
      'The Eiffel Tower can be about 15 cm taller in summer because the iron expands.'
    ]
  },
  {
    id: 'photosynthesis', emoji: '☀️', title: 'Photosynthesis', level: 'P5', theme: 'energy',
    sim: 'Pondweed lab: count oxygen bubbles under a lamp',
    summary: [
      'Plants make their own food through photosynthesis.',
      'Photosynthesis needs light, water, carbon dioxide and chlorophyll.',
      'It produces sugar (food) and oxygen.',
      'Light energy is converted into chemical potential energy stored in the food.',
      'It takes place mainly in the leaves, in the chloroplasts.',
      'Plants respire all the time, day and night. In bright light, they make more oxygen than they use.'
    ],
    terms: [
      ['Photosynthesis', 'The process by which plants make food using light.'],
      ['Chlorophyll', 'The green substance that traps light.'],
      ['Carbon dioxide', 'A gas the plant takes in from the air to make food.'],
      ['Oxygen', 'A gas given out during photosynthesis.'],
      ['Starch', 'The form in which plants store food.'],
      ['Light intensity', 'How bright the light is.']
    ],
    quiz: [
      { q: 'Which is NOT needed for photosynthesis?', a: ['Oxygen', 'Light', 'Water', 'Carbon dioxide'], c: 0, e: 'Oxygen is given out, not needed.' },
      { q: 'Which gas is given out during photosynthesis?', a: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Steam'], c: 0, e: 'Oxygen is produced and released.' },
      { q: 'A pondweed gives out more bubbles when the lamp is moved closer because…', a: ['brighter light increases photosynthesis, so more oxygen is made', 'the water gets colder', 'the plant breathes faster', 'the lamp makes bubbles'], c: 0, e: 'The bubbles are oxygen; more light means more photosynthesis.' },
      { q: 'Where does photosynthesis mainly take place?', a: ['In the leaves', 'In the roots', 'In the flowers', 'In the soil'], c: 0, e: 'Leaf cells have many chloroplasts.' },
      { q: 'A green-and-white leaf is tested for starch. Only the green parts have starch because…', a: ['the white parts have no chlorophyll', 'the white parts have no water', 'the white parts get no light', 'the white parts are dead'], c: 0, e: 'Without chlorophyll, those parts cannot photosynthesise.' }
    ],
    tips: [
      'Say "light energy is converted into chemical potential energy in food".',
      'In bubble experiments, the bubbles are oxygen. Keep other variables (same plant, same water) constant.',
      'Plants respire 24 hours a day; photosynthesis only happens in light.'
    ],
    facts: [
      'About half of the oxygen on Earth is made by tiny plant-like living things in the ocean.',
      'Trees use carbon dioxide from the air to build their wood.'
    ]
  },
  {
    id: 'energy', emoji: '⚡', title: 'Energy Forms and Conversion', level: 'P6', theme: 'energy',
    sim: 'Ramp lab: watch potential energy turn into kinetic energy',
    summary: [
      'Energy is needed to make things work and move.',
      'Kinetic energy: energy of a moving object.',
      'Potential energy is stored energy: gravitational (an object raised high), elastic (a stretched or compressed spring or rubber band), chemical (food, fuels, batteries).',
      'Other forms: light, heat, sound and electrical energy.',
      'Energy cannot be made or destroyed. It can only be converted from one form to another.',
      'Some energy is usually converted into heat and sound that we do not want (wasted energy).',
      'The Sun is our main source of energy.'
    ],
    terms: [
      ['Kinetic energy', 'Energy of a moving object.'],
      ['Gravitational potential energy', 'Energy stored in an object because of its height.'],
      ['Elastic potential energy', 'Energy stored in a stretched or compressed object.'],
      ['Chemical potential energy', 'Energy stored in food, fuels and batteries.'],
      ['Energy conversion', 'Energy changing from one form to another.'],
      ['Wasted energy', 'Energy converted into forms we do not want, usually heat and sound.']
    ],
    quiz: [
      { q: 'A battery-powered torch is switched on. Which conversion is correct?', a: ['Chemical potential → electrical → light + heat', 'Light → electrical → chemical', 'Kinetic → light', 'Heat → chemical → light'], c: 0, e: 'The battery stores chemical potential energy, which becomes electrical energy, then light (and some heat).' },
      { q: 'A ball resting at the top of a slope has…', a: ['gravitational potential energy', 'kinetic energy only', 'no energy', 'sound energy'], c: 0, e: 'It is raised up, so it has gravitational potential energy.' },
      { q: 'A stretched rubber band has…', a: ['elastic potential energy', 'kinetic energy', 'light energy', 'chemical energy only'], c: 0, e: 'Stretching stores elastic potential energy.' },
      { q: 'The energy stored in food is…', a: ['chemical potential energy', 'kinetic energy', 'light energy', 'sound energy'], c: 0, e: 'Food stores chemical potential energy.' },
      { q: 'As a ball rolls down a slope, its gravitational potential energy is converted mainly into…', a: ['kinetic energy (plus some heat and sound)', 'chemical energy', 'light energy', 'elastic energy'], c: 0, e: 'Height decreases and speed increases; friction turns some energy into heat and sound.' }
    ],
    tips: [
      'If the question asks for all the forms, remember the wasted heat and sound.',
      'Energy is converted, not "used up" or "destroyed".',
      'A raised object has gravitational potential energy even when it is not moving.'
    ],
    facts: [
      'Plants capture only a small part of the sunlight that falls on them, about 1–2%.',
      'A hydroelectric dam turns the gravitational potential energy of high water into electrical energy.'
    ]
  },

  /* ---------------- Interactions ---------------- */
  {
    id: 'magnets', emoji: '🧲', title: 'Magnets', level: 'P3–P4', theme: 'interactions',
    sim: 'Magnet lab: test objects and turn the magnets around',
    summary: [
      'Magnets attract magnetic materials: iron, steel, nickel and cobalt.',
      'Non-magnetic materials include copper, aluminium, plastic, wood, glass and paper.',
      'A magnet has a north pole (N) and a south pole (S). Like poles repel; unlike poles attract.',
      'A freely hanging bar magnet comes to rest pointing north–south.',
      'Magnetic force can act at a distance and through non-magnetic materials such as paper.',
      'A magnet is strongest at its poles. Magnets can be made by stroking with another magnet or by using electricity (electromagnet).'
    ],
    terms: [
      ['Magnetic material', 'A material attracted by a magnet: iron, steel, nickel, cobalt.'],
      ['Pole', 'The end of a magnet, where its pull is strongest.'],
      ['Attract', 'Pull towards.'],
      ['Repel', 'Push away.'],
      ['Electromagnet', 'A magnet made by passing electricity through a coil of wire.'],
      ['Compass', 'Uses a magnetic needle to show north and south.']
    ],
    quiz: [
      { q: 'Which object is attracted to a magnet?', a: ['Steel paper clip', 'Aluminium can', 'Plastic ruler', 'Copper wire'], c: 0, e: 'Steel is a magnetic material. Aluminium and copper are metals but are not magnetic.' },
      { q: 'The N pole of one magnet is brought near the N pole of another. They…', a: ['repel', 'attract', 'do nothing', 'stick together'], c: 0, e: 'Like poles repel.' },
      { q: 'How can you be sure an object is a magnet, not just a piece of iron?', a: ['It repels a pole of a known magnet', 'It attracts a magnet', 'It is shiny', 'It is heavy'], c: 0, e: 'Iron is attracted to both poles; only a magnet can repel.' },
      { q: 'How can you make an electromagnet stronger?', a: ['Add more coils of wire or more batteries', 'Use a plastic core', 'Use fewer coils', 'Remove the battery'], c: 0, e: 'More coils or more electricity make a stronger electromagnet.' },
      { q: 'Where is a bar magnet strongest?', a: ['At its poles', 'In the middle', 'Everywhere the same', 'On its sides'], c: 0, e: 'More paper clips stick to the poles than the middle.' }
    ],
    tips: [
      'Only repulsion proves an object is a magnet. Attraction could just mean it is a magnetic material.',
      'Not all metals are magnetic: aluminium and copper are not.',
      'To compare magnet strength, count how many identical paper clips each magnet holds.'
    ],
    facts: [
      'Earth behaves like a giant magnet, which is why a compass needle points north.',
      'Some birds may use Earth\'s magnetism to find their way when they migrate.'
    ]
  },
  {
    id: 'forces', emoji: '🏋️', title: 'Forces', level: 'P6', theme: 'interactions',
    sim: 'Friction ramp and spring lab',
    summary: [
      'A force is a push or a pull.',
      'A force can move a still object, speed it up, slow it down, stop it, change its direction or change its shape.',
      'Gravitational force pulls objects towards the Earth.',
      'Frictional force acts between two surfaces in contact and opposes motion. Rougher surfaces give more friction. Friction produces heat.',
      'Elastic spring force: a stretched or compressed spring pushes or pulls back. The more load, the longer the stretch (until its limit).',
      'Force is measured in newtons (N) with a spring balance.'
    ],
    terms: [
      ['Force', 'A push or a pull.'],
      ['Newton (N)', 'The unit of force.'],
      ['Gravitational force', 'The pull of the Earth on objects.'],
      ['Frictional force', 'A force between surfaces in contact that opposes motion.'],
      ['Elastic spring force', 'The force of a stretched or compressed spring.'],
      ['Spring balance', 'Instrument used to measure force.']
    ],
    quiz: [
      { q: 'A toy car travels a shorter distance on carpet than on tiles because…', a: ['there is more friction on the carpet', 'there is less friction on the carpet', 'gravity is stronger on carpet', 'carpet is softer to look at'], c: 0, e: 'The rough carpet produces more frictional force, so the car slows down faster.' },
      { q: 'Which force makes an apple fall from a tree?', a: ['Gravitational force', 'Frictional force', 'Elastic spring force', 'Magnetic force'], c: 0, e: 'The Earth pulls the apple down.' },
      { q: 'A spring stretches 2 cm for every 100 g. How much does it stretch with 300 g?', a: ['6 cm', '3 cm', '2 cm', '9 cm'], c: 0, e: '3 × 2 cm = 6 cm (as long as the spring is within its limit).' },
      { q: 'Which is a way to reduce friction?', a: ['Oil the moving parts', 'Use rougher surfaces', 'Press the surfaces together harder', 'Use sandpaper'], c: 0, e: 'Oil makes surfaces slide more easily.' },
      { q: 'What is the unit of force?', a: ['Newton (N)', 'Gram (g)', 'Metre (m)', 'Degree Celsius (°C)'], c: 0, e: 'Force is measured in newtons.' }
    ],
    tips: [
      'Friction opposes motion and produces heat (rub your hands together).',
      'In spring questions, check the pattern in the table and whether the spring has passed its limit.',
      'Friction can be useful (shoe grip, brakes) or not useful (wears parts down).'
    ],
    facts: [
      'On the Moon, gravity is about one-sixth as strong as on Earth.',
      'Without friction, you could not walk: your feet would just slide.'
    ]
  },
  {
    id: 'foodchains', emoji: '🦅', title: 'Food Chains and Food Webs', level: 'P6', theme: 'interactions',
    sim: 'Food web: remove an animal and predict what happens',
    summary: [
      'Producers (plants) make their own food. Consumers get food by eating other living things.',
      'Herbivores eat plants; carnivores eat animals; omnivores eat both.',
      'A food chain shows who eats whom. The arrow means "is eaten by" and shows the direction energy flows.',
      'A food web is made of many food chains linked together.',
      'Decomposers (fungi and bacteria) break down dead plants and animals and return nutrients to the soil.',
      'If one population changes, other populations in the food web are affected.',
      'The Sun is the source of energy for almost all food chains.'
    ],
    terms: [
      ['Producer', 'A living thing that makes its own food (plants).'],
      ['Consumer', 'A living thing that eats other living things.'],
      ['Predator', 'An animal that hunts other animals.'],
      ['Prey', 'An animal that is hunted.'],
      ['Decomposer', 'Breaks down dead matter, e.g. fungi and bacteria.'],
      ['Population', 'A group of the same kind of living things in one place.']
    ],
    quiz: [
      { q: 'In "grass → grasshopper → frog → snake", what is the producer?', a: ['Grass', 'Grasshopper', 'Frog', 'Snake'], c: 0, e: 'Food chains always start with a producer.' },
      { q: 'What does the arrow in a food chain mean?', a: ['"is eaten by" (energy flows this way)', '"eats"', '"is bigger than"', '"lives near"'], c: 0, e: 'The arrow points to the animal doing the eating.' },
      { q: 'In "grass → grasshopper → frog → snake", all the frogs die. What happens to the grasshoppers at first?', a: ['They increase', 'They decrease', 'They stay the same', 'They all die'], c: 0, e: 'Fewer frogs eat them, so more grasshoppers survive.' },
      { q: 'Which is a decomposer?', a: ['Mushroom', 'Rabbit', 'Grass', 'Eagle'], c: 0, e: 'Fungi like mushrooms break down dead matter.' },
      { q: 'Where does the energy in a food chain first come from?', a: ['The Sun', 'The soil', 'Water', 'The predator'], c: 0, e: 'Plants capture light energy from the Sun to make food.' }
    ],
    tips: [
      'Always start a food chain with a producer.',
      'The arrow points from the eaten to the eater.',
      'Explain changes step by step: "There are fewer frogs to eat the grasshoppers, so the grasshopper population increases."'
    ],
    facts: [
      'Only about a tenth of the energy at one level of a food chain is passed on to the next level.',
      'Without decomposers, dead leaves and animals would pile up everywhere.'
    ]
  },
  {
    id: 'adaptations', emoji: '🐪', title: 'Adaptations and the Environment', level: 'P6', theme: 'interactions',
    sim: 'Design an animal to survive in a habitat',
    summary: [
      'An adaptation is a feature or behaviour that helps a living thing survive in its environment.',
      'Structural adaptations are body features, e.g. a polar bear\'s thick fur and fat keep it warm.',
      'Behavioural adaptations are actions, e.g. some birds migrate to warmer places; lizards bask in the sun to warm up.',
      'Desert plants such as cacti have spines instead of broad leaves to reduce water loss, and thick stems to store water.',
      'Camouflage helps animals hide from predators or prey.',
      'People affect the environment through pollution and cutting down forests. We can help by reducing, reusing and recycling, and by protecting habitats.'
    ],
    terms: [
      ['Adaptation', 'A feature or behaviour that helps a living thing survive.'],
      ['Habitat', 'The place where a living thing lives.'],
      ['Camouflage', 'Blending in with the surroundings.'],
      ['Migration', 'Moving to another place at certain times of the year.'],
      ['Hibernation', 'A deep sleep through winter to save energy.'],
      ['Conservation', 'Protecting the environment and the living things in it.']
    ],
    quiz: [
      { q: 'A cactus has spines instead of broad leaves to…', a: ['reduce water loss', 'make more food', 'attract insects', 'grow taller'], c: 0, e: 'Spines have a small surface area, so less water is lost.' },
      { q: 'A stick insect looks like a twig. This helps it to…', a: ['hide from predators (camouflage)', 'find water', 'keep warm', 'fly faster'], c: 0, e: 'Predators do not notice it among the twigs.' },
      { q: 'Why do some birds migrate before winter?', a: ['To find food and warmer places', 'To find new colours', 'To moult', 'To sleep'], c: 0, e: 'Food is scarce and it is cold where they were living.' },
      { q: 'A water lily has large, flat leaves so that they…', a: ['can float and trap more light', 'sink to the bottom', 'store fat', 'scare away fish'], c: 0, e: 'Floating leaves stay at the surface where there is light.' },
      { q: 'Which action helps protect the environment?', a: ['Reusing and recycling', 'Using more plastic bags', 'Cutting down forests', 'Littering'], c: 0, e: 'Reducing, reusing and recycling means less waste and pollution.' }
    ],
    tips: [
      'State the feature AND how it helps: "Thick fur traps heat, keeping the polar bear warm."',
      'A camel\'s hump stores fat, not water.',
      'Behavioural adaptations are things an animal does, not body parts.'
    ],
    facts: [
      'The Arctic fox\'s fur is white in winter and turns brown in summer.',
      'A camel can drink over 100 litres of water in about 10 minutes.'
    ]
  }
];
