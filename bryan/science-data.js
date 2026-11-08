// Science topics for bryan/science.html, following the Singapore primary Science themes (P3–P6).
// Each topic: summary points, key words, a 5-question quiz (c = index of the correct option), exam tips, fun facts.
// The virtual experiment for each topic lives in science-sims.js under the same id.
window.SCI_THEMES = {
  spso: { name: 'SPSO (Science Olympiad)', color: '#0F766E' },
  diversity: { name: 'Diversity', color: '#2E8B57' },
  cycles: { name: 'Cycles', color: '#2A6FC9' },
  systems: { name: 'Systems', color: '#7A4CE0' },
  energy: { name: 'Energy', color: '#D2780F' },
  interactions: { name: 'Interactions', color: '#CF3F3F' }
};

window.SCI_TOPICS = [
  /* ---------------- SPSO lessons: videos + a Google Form quiz ----------------
     To add a lesson, copy this entry and change id, title, videos (YouTube ids) and form. */
  {
    id: 'spso1', kind: 'lesson', emoji: '🏅', title: 'SPSO Lesson 1: What is Science?', level: 'SPSO', theme: 'spso',
    videos: [
      { id: 'GyN2RhbhiEU', title: 'What’s the difference between a scientific law and theory?', by: 'TED-Ed' },
      { id: 'wVLaf10T0zI', title: 'What is Science?', by: 'Science Sessions' },
      { id: 'NMM8vx9vDiE', title: 'Galileo Galilei – in a nutshell', by: 'NutshellEdu' },
      { id: 'TkvjDZseD4k', title: 'The Nature of Science', by: 'Bozeman Science' }
    ],
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSd_nKSsMQtVPS2jzNAFRVvBOGorOMH0kvakPJoEUT3GcYuK2w/viewform',
    slides: [
      { kicker: 'SPSO · Lesson 1', title: 'What is Science?', emoji: '🔬',
        points: ['How scientists find things out', 'Explaining like a scientist', 'Two ways of reasoning', 'Laws and theories', 'Galileo: a scientist at work'] },
      { title: 'Science is a process', emoji: '🧭',
        points: ['Science is a way of finding out about the natural world using observation and evidence.', 'It is also the knowledge that this process builds up over time.', 'A scientific question must be testable: we can collect evidence to answer it.'] },
      { title: 'The science process', steps: ['Question', 'Hypothesis', 'Experiment', 'Results', 'Conclusion'],
        note: 'Real science is not a fixed recipe. Results often lead to new questions, and scientists loop back and test again.' },
      { title: 'Explaining like a scientist: C-E-R',
        cols: [['Claim', 'What you think is true', 'Plants need light to grow well.'], ['Evidence', 'Data that supports the claim', 'Plants in the light grew 8 cm; plants in the dark grew 2 cm.'], ['Reasoning', 'Why the evidence supports the claim', 'Plants use light to make food, so more light means more growth.']],
        note: 'A hypothesis comes before the experiment. It is not one of the parts of a scientific explanation.' },
      { title: 'Two ways of reasoning',
        cols: [['Inductive', 'Many observations → a general rule', 'Every swan I have seen is white, so swans are probably white. (The rule could still be wrong!)'], ['Deductive', 'A general rule → a specific case', 'All birds lay eggs. A pigeon is a bird. So pigeons lay eggs. (Certain, if the rule is true.)']] },
      { title: 'Scientific law vs scientific theory',
        cols: [['Law', 'Describes WHAT happens', 'Often a rule or formula that predicts results. Example: the law of gravitation.'], ['Theory', 'Explains WHY or HOW it happens', 'A well-tested explanation backed by lots of evidence. Example: the particle theory of matter.']],
        note: 'A theory does not “grow up” into a law. Laws and theories do different jobs.' },
      { title: '“It’s just a theory”?', emoji: '🤔',
        points: ['In everyday talk, a “theory” means a guess.', 'In science, a theory is a well-tested explanation supported by evidence.', 'Laws and theories can both be changed if strong new evidence appears. Science is always open to improvement.'] },
      { title: 'Galileo Galilei (1564–1642)', emoji: '🔭',
        points: ['Tested ideas with experiments and measurements, instead of simply trusting old books.', 'Rolled balls down ramps to study how objects speed up as they fall.', 'Used a telescope to discover moons going around Jupiter and to see the phases of Venus.', 'His evidence supported the idea that the Earth goes around the Sun.'] },
      { title: 'Science subjects work together', emoji: '🧪',
        points: ['Biology studies living things. Chemistry studies substances and how they change. Physics studies forces, energy, light and motion.', 'Forensic scientists use biology, chemistry AND physics to examine evidence from crime scenes.', 'A field that uses several subjects together is called interdisciplinary.'] },
      { title: 'Recap', emoji: '✅',
        points: ['Science is a process of finding out, using evidence.', 'Question → hypothesis → experiment → results → conclusion.', 'Scientific explanation = claim + evidence + reasoning.', 'Inductive: examples → rule. Deductive: rule → example.', 'Law = what happens. Theory = why it happens.'] }
    ],
    summary: [
      'Science is a process of asking questions about the natural world and answering them with observations and evidence. It is also the knowledge this process has built up.',
      'A typical science process: ask a question → form a hypothesis (a testable explanation or prediction) → do an experiment → record the results → draw a conclusion.',
      'Real science is not a fixed recipe. New results lead to new questions, and experiments are repeated to check that the results are reliable.',
      'A scientific explanation has three parts: a claim, the evidence for it, and the reasoning that links them (C-E-R). A hypothesis is not one of these parts.',
      'Inductive reasoning goes from many specific observations to a general rule, which could still turn out to be wrong. Deductive reasoning goes from a general rule to a specific case.',
      'A scientific law describes what happens, often as a rule that predicts results. A scientific theory explains why or how it happens and is supported by a lot of evidence.',
      'Theories do not become laws. In science, “theory” does not mean a guess. Both laws and theories can change when strong new evidence appears.',
      'Galileo Galilei helped start modern science by testing ideas with experiments and observations, such as rolling balls down ramps and studying the sky with a telescope.',
      'Science subjects work together. Forensic science is interdisciplinary: it uses biology, chemistry and physics.'
    ],
    terms: [
      ['Science', 'A process of finding out about the natural world using observation and evidence.'],
      ['Hypothesis', 'A testable explanation or prediction, made before an experiment.'],
      ['Evidence', 'Observations and data that support or go against a claim.'],
      ['Claim', 'A statement of what you think is true, which you back up with evidence.'],
      ['Reasoning', 'Explaining why the evidence supports the claim.'],
      ['Inductive reasoning', 'Using many specific observations to reach a general rule.'],
      ['Deductive reasoning', 'Using a general rule to reach a conclusion about a specific case.'],
      ['Scientific law', 'Describes what happens in nature, often as a rule that predicts results.'],
      ['Scientific theory', 'A well-tested explanation of why or how something happens.'],
      ['Interdisciplinary', 'Using knowledge from more than one subject.']
    ],
    quiz: [
      { q: 'Which best describes a hypothesis?', a: ['A testable explanation or prediction made before an experiment', 'The final answer to an experiment', 'A list of results', 'A fact that can never change'], c: 0, e: 'A hypothesis is tested by the experiment. The conclusion comes at the end.' },
      { q: '“Every metal I have tested conducts electricity, so all metals probably conduct electricity.” What kind of reasoning is this?', a: ['Inductive reasoning', 'Deductive reasoning', 'A scientific law', 'Not reasoning at all'], c: 0, e: 'It goes from many specific observations to a general rule.' },
      { q: '“All mammals breathe with lungs. A whale is a mammal. So a whale breathes with lungs.” What kind of reasoning is this?', a: ['Deductive reasoning', 'Inductive reasoning', 'A hypothesis', 'A guess'], c: 0, e: 'It starts from a general rule and applies it to one case.' },
      { q: 'What does a scientific theory do?', a: ['Explains why or how something happens, backed by lots of evidence', 'Makes a guess with no evidence', 'Becomes a law once it is proven', 'Never changes'], c: 0, e: 'In science, a theory is a well-tested explanation, not a guess.' },
      { q: 'Which is the main job of a scientific law?', a: ['To describe what happens, often predicting results', 'To explain why something happens', 'To give an opinion', 'To list the steps of an experiment'], c: 0, e: 'Laws describe what happens; theories explain why.' },
      { q: 'Bryan claims: “Plants grow taller in sunlight.” Which of these is EVIDENCE for his claim?', a: ['Plants by the window grew 8 cm in two weeks, plants in a cupboard grew 2 cm', 'Plants are green', 'Sunlight is bright', 'Plants need water'], c: 0, e: 'Evidence is data from observations that supports the claim.' },
      { q: 'Which question can be answered by a science experiment?', a: ['Does salt water freeze at a lower temperature than tap water?', 'Which colour is the most beautiful?', 'Is it rude to whistle indoors?', 'Which song is the best?'], c: 0, e: 'Science questions must be testable with measurements or observations.' },
      { q: 'Why do scientists repeat their experiments?', a: ['To check that the results are reliable', 'To make the experiment longer', 'Because they forgot the results', 'To change the hypothesis every time'], c: 0, e: 'Getting similar results again makes them more trustworthy.' },
      { q: 'A scientist’s results do not support her hypothesis. What should she do?', a: ['Accept the results, change the hypothesis and test again', 'Hide the results', 'Change the results to match', 'Stop doing science'], c: 0, e: 'Results that do not match are useful: they help improve the explanation.' },
      { q: 'Galileo saw moons going around Jupiter through his telescope. Why was this important?', a: ['It showed that not everything in the sky goes around the Earth', 'It proved Jupiter is made of gas', 'It showed the Moon makes its own light', 'It proved the Earth is flat'], c: 0, e: 'If moons orbit Jupiter, the Earth cannot be the centre of everything.' }
    ],
    tips: [
      'Know the order: hypothesis → experiment → results → conclusion.',
      'A scientific explanation is Claim + Evidence + Reasoning. A hypothesis is NOT one of the three parts.',
      'Inductive = from examples to a rule (“every… so probably…”). Deductive = from a rule to an example (“all… so this one…”).',
      'Laws describe what happens; theories explain why. A theory never turns into a law.',
      'Watch out for answers that call science “just a set of knowledge”: science is mainly a process of finding out using evidence.',
      'A field that uses several science subjects (like forensic science using biology, chemistry and physics) is interdisciplinary.'
    ],
    facts: [
      'Galileo improved the telescope until it could magnify about 20 times, and in 1610 he discovered the four largest moons of Jupiter.',
      'The word “scientist” was only invented in the 1830s. Before that, people who studied nature were often called “natural philosophers”.'
    ]
  },
  {
    id: 'spso2', kind: 'lesson', emoji: '⚛️', title: 'SPSO Lesson 2: Matter and Elements', level: 'SPSO', theme: 'spso',
    videos: [
      { id: 'xazQRcSCRaY', title: 'The 2,400-year search for the atom', by: 'TED-Ed' },
      { id: 'z6vwS0fue6E', title: 'Brownian Motion: Explaining Life’s Randomness', by: 'SciToons' },
      { id: '1xxsgnEvEfE', title: 'What’s the Hottest Hot and Coldest Cold?', by: 'Be Smart' },
      { id: '-CCjNfyvEEs', title: 'Journey to Absolute Zero', by: 'JG Online' },
      { id: 'AVEGJZxglIg', title: 'Plasma, the Most Common Phase of Matter in the Universe', by: 'SciShow' },
      { id: '3mfr5FO6Oko', title: 'Bose–Einstein Condensate: Fifth State of Matter', by: 'Hemant Gupta' },
      { id: 'nAJgchCI3kg', title: 'Liquid Crystals', by: 'National Science Foundation' },
      { id: 'O-48znAg7VE', title: 'Solving the puzzle of the periodic table', by: 'TED-Ed' },
      { id: 'fPnwBITSmgU', title: 'The genius of Mendeleev’s periodic table', by: 'TED-Ed' },
      { id: 'uPkEGAHo78o', title: 'Periodic Table Explained: Introduction', by: 'AtomicSchool' },
      { id: 'xgC5zgr6Hdc', title: 'How does a superconductor work? (optional, for quiz questions 7 and 8)', by: 'Scitic short' }
    ],
    activities: [
      { title: 'Dalton’s Playhouse', by: 'Visionlearning', url: 'https://www.visionlearning.com/library/animations/daltons_playhouse/',
        what: 'Re-run famous experiments from the history of chemistry. Compare the total mass before and after each reaction. This is for question 5 of the class quiz.' },
      { title: 'Diffusion', by: 'PhET, University of Colorado', url: 'https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_en.html', embed: true,
        what: 'Remove the divider and watch two gases spread out. Change the temperature, the mass of the particles and how many there are. Which changes make diffusion faster? This is for question 6 of the class quiz.' }
    ],
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScw2NHw_ya71gJl5QltQbndibNQKnTAXNe2r6M_VGgnGTLONQ/viewform',
    slides: [
      { kicker: 'SPSO · Lesson 2', title: 'Matter and Elements', emoji: '⚛️',
        points: ['The long search for the atom', 'Evidence that particles are always moving', 'How hot and how cold can things get?', 'More states of matter than solid, liquid and gas', 'Elements and the periodic table'] },
      { title: 'The 2,400-year search for the atom', emoji: '🔍',
        steps: ['Democritus: “atomos”', 'Dalton: atomic theory', 'Thomson: electrons', 'Rutherford: nucleus', 'Bohr: electron shells'],
        note: 'Around 400 BC, Democritus guessed that matter is made of tiny pieces that cannot be cut (“atomos”). It took until about 1800 for John Dalton to support the idea with evidence from experiments.' },
      { title: 'Dalton’s atomic theory (about 1803)', emoji: '🧱',
        points: ['All matter is made of tiny particles called atoms.', 'Atoms of the same element are alike; atoms of different elements are different.', 'Atoms join in fixed ratios to make compounds, e.g. water is always H₂O.', 'In a chemical reaction, atoms are rearranged. They are not created or destroyed.'] },
      { title: 'Mass is conserved', emoji: '⚖️',
        cols: [['Law', 'Conservation of mass', 'In a closed container, the total mass before a reaction equals the total mass after it.'], ['Who', 'Antoine Lavoisier', 'Called the “father of modern chemistry”. He weighed everything very carefully, before and after.'], ['Why', 'Atoms are rearranged', 'No atoms are lost or gained, so the total mass stays the same.']],
        note: 'If a reaction gives off a gas and the container is open, the gas escapes, so it looks like mass was lost. In a sealed container, the mass stays the same.' },
      { title: 'Particles never stop moving', emoji: '🔬',
        points: ['Brownian motion: tiny specks (e.g. from pollen) in water jiggle about randomly.', 'In 1905, Einstein explained it: invisible water molecules keep bumping into the specks from all sides.', 'This was strong evidence that atoms and molecules really exist.', 'Diffusion: particles spread out from where there are many to where there are few.', 'Diffusion is faster at a higher temperature, with a bigger difference in concentration, and with lighter particles.'] },
      { title: 'How hot? How cold?', emoji: '🌡️',
        cols: [['Temperature', 'How fast particles move', 'Hotter means the particles move faster.'], ['Absolute zero', '0 K = −273.15 °C', 'The coldest possible temperature, where particles have the least possible motion. It can be approached but never quite reached.'], ['Very hot', 'Trillions of degrees', 'Particle colliders have briefly made matter trillions of degrees hot.']] },
      { title: 'More states of matter', emoji: '✨',
        cols: [['Plasma', 'A gas so hot that electrons are pulled off its atoms', 'Made of ions and free electrons. Conducts electricity very well. Found in the Sun, stars, lightning and neon signs.'], ['Bose–Einstein condensate', 'Atoms cooled to a tiny fraction above absolute zero', 'The atoms act together like one “super atom”. First made in 1995.'], ['Liquid crystal', 'Flows like a liquid, but its molecules line up like a crystal', 'Used in LCD screens: an electric field changes how the molecules line up.']] },
      { title: 'Strange things at very low temperatures', emoji: '🧊',
        points: ['Superfluid: a liquid with no viscosity (no friction) at very low temperature. Liquid helium below about −271 °C can even creep up the walls of its container.', 'Superconductor: a material with zero electrical resistance when cooled below a certain temperature.', 'Superconductors push magnetic fields out, so a magnet can float above one.', 'Examples: mercury (the first, found in 1911), niobium–titanium in MRI scanners, and YBCO, which works with liquid nitrogen.'] },
      { title: 'The periodic table', emoji: '🗂️',
        points: ['An element is a pure substance that cannot be broken down into simpler substances. There are 118 known elements.', 'In 1869, Mendeleev arranged the elements by atomic mass and put elements with similar properties in the same column.', 'He left gaps and predicted elements not yet found, such as gallium and germanium. When they were discovered, they matched his predictions.', 'Today the elements are arranged by atomic number (the number of protons).'] },
      { title: 'Reading the table', emoji: '🧭',
        cols: [['Rows', 'Periods', 'Argon is in period 3 (row 3), at the end of the row.'], ['Columns', 'Groups', 'Elements in a group behave alike. Copper, silver and gold are all in group 11.'], ['Metals vs non-metals', 'Most elements are metals', 'Metals are on the left and in the middle. Non-metals, including hydrogen, are at the top right.']] },
      { title: 'Recap', emoji: '✅',
        points: ['Dalton: matter is made of atoms that are rearranged, not created or destroyed, in reactions.', 'Lavoisier: mass is conserved in a closed system.', 'Brownian motion and diffusion show that particles are always moving.', 'Plasma, Bose–Einstein condensates, liquid crystals and superfluids are unusual states of matter.', 'Mendeleev’s table grouped similar elements and predicted missing ones.'] }
    ],
    summary: [
      'Around 400 BC, Democritus suggested that matter is made of tiny, uncuttable pieces called “atomos”. Around 1800, John Dalton used experiments to support the idea, in his atomic theory.',
      'Dalton’s atomic theory: all matter is made of atoms; atoms of one element are alike; atoms join in fixed ratios to form compounds; in reactions, atoms are rearranged but not created or destroyed.',
      'Later scientists found that atoms have smaller parts: electrons (Thomson), a tiny dense nucleus (Rutherford) and electrons in shells (Bohr).',
      'Antoine Lavoisier, the “father of modern chemistry”, showed that mass is conserved: in a closed system, the total mass before a reaction equals the total mass after it.',
      'An element cannot be broken down into simpler substances. A compound is two or more elements chemically joined in a fixed ratio. Both elements and compounds are pure substances.',
      'Brownian motion is the random jiggling of tiny specks in a liquid or gas, caused by molecules bumping into them. Einstein explained it in 1905, giving strong evidence that molecules exist.',
      'Diffusion is the spreading of particles from a region where there are more of them to a region where there are fewer. It is faster at a higher temperature, with a bigger concentration difference and with lighter particles.',
      'Temperature measures how fast particles move. Absolute zero (0 K, −273.15 °C) is the coldest possible temperature.',
      'Besides solid, liquid and gas, there are other states of matter: plasma (ions and free electrons, found in stars and lightning), Bose–Einstein condensates (atoms near absolute zero acting as one), and liquid crystals (used in LCD screens).',
      'At very low temperatures, superfluids flow with no viscosity, and superconductors carry electricity with zero resistance.',
      'In 1869, Mendeleev arranged the elements into a periodic table, grouping elements with similar properties and leaving gaps for elements still to be discovered. Rows are periods, columns are groups, and most elements are metals.'
    ],
    terms: [
      ['Atom', 'The smallest particle of an element that still has the properties of that element.'],
      ['Element', 'A pure substance that cannot be broken down into simpler substances, e.g. oxygen, copper.'],
      ['Compound', 'A pure substance made of two or more elements chemically joined in a fixed ratio, e.g. water.'],
      ['Conservation of mass', 'In a closed system, the total mass stays the same during a chemical reaction.'],
      ['Brownian motion', 'The random jiggling of tiny specks in a liquid or gas, caused by molecules hitting them.'],
      ['Diffusion', 'The spreading of particles from where there are more of them to where there are fewer.'],
      ['Absolute zero', '0 K or −273.15 °C: the coldest possible temperature.'],
      ['Plasma', 'A very hot state of matter made of ions and free electrons. It conducts electricity well.'],
      ['Bose–Einstein condensate', 'A state of matter made by cooling atoms to almost absolute zero, so they act like one big atom.'],
      ['Liquid crystal', 'A substance that flows like a liquid but whose molecules line up like a crystal. Used in LCD screens.'],
      ['Superfluid', 'A liquid that flows with no viscosity (no friction), found at very low temperatures.'],
      ['Superconductor', 'A material with zero electrical resistance below a certain very low temperature.'],
      ['Period / Group', 'A row / a column of the periodic table. Elements in the same group have similar properties.']
    ],
    quiz: [
      { q: 'Who first suggested that matter is made of tiny pieces that cannot be cut, about 2,400 years ago?', a: ['Democritus', 'John Dalton', 'Isaac Newton', 'Dmitri Mendeleev'], c: 0, e: 'Democritus called them “atomos”, meaning uncuttable. Dalton gave the idea experimental support around 1800.' },
      { q: '10 g of iron and 6 g of sulfur react completely in a sealed tube. What is the mass of the product?', a: ['16 g', '10 g', '4 g', 'Less than 16 g, because some atoms are destroyed'], c: 0, e: 'Mass is conserved: atoms are rearranged, not destroyed, so 10 g + 6 g = 16 g.' },
      { q: 'What causes Brownian motion?', a: ['Molecules of the liquid bumping into the tiny specks', 'The specks are alive and swimming', 'Light pushing the specks', 'Magnetism in the water'], c: 0, e: 'Invisible, fast-moving molecules hit the specks unevenly from all sides, making them jiggle.' },
      { q: 'Which change makes a gas diffuse more slowly?', a: ['Lowering the temperature', 'Using lighter particles', 'Making the concentration difference bigger', 'Heating the gas'], c: 0, e: 'At a lower temperature, particles move more slowly, so they spread out more slowly.' },
      { q: 'What is absolute zero?', a: ['−273.15 °C, the coldest possible temperature', '0 °C, the freezing point of water', '−100 °C', 'The temperature of outer space near the Sun'], c: 0, e: '0 K = −273.15 °C. It can be approached but never quite reached.' },
      { q: 'Which statement about plasma is NOT correct?', a: ['LCD screens are made of plasma', 'Plasma is made of ions and free electrons', 'Lightning is plasma', 'Plasma conducts electricity well'], c: 0, e: 'LCD screens use liquid crystals, not plasma. (Old “plasma TVs” were a different technology.)' },
      { q: 'A Bose–Einstein condensate is made by…', a: ['cooling atoms to almost absolute zero', 'heating a gas until electrons come off', 'dissolving salt in water', 'squeezing a liquid very hard'], c: 0, e: 'Near absolute zero, the atoms lose almost all their motion and start to act together like one big atom.' },
      { q: 'A superconductor is a material that…', a: ['has zero electrical resistance when cooled enough', 'conducts heat but not electricity', 'is a very good insulator', 'only works at very high temperatures'], c: 0, e: 'Below its critical temperature, current flows with no resistance, and a magnet can float above it.' },
      { q: 'Why was Mendeleev’s periodic table so impressive?', a: ['He left gaps and correctly predicted elements not yet discovered', 'He discovered all the elements himself', 'He arranged elements in alphabetical order', 'He proved that atoms have a nucleus'], c: 0, e: 'For example, he predicted “eka-silicon”, later found as germanium, with almost exactly the properties he described.' },
      { q: 'Which statement about the periodic table is correct?', a: ['Most elements are metals', 'Hydrogen is a metal', 'Argon is in row 4', 'Copper, silver and gold are in different groups'], c: 0, e: 'About three-quarters of elements are metals. Hydrogen is a non-metal, argon is in period 3, and copper, silver and gold are all in group 11.' }
    ],
    tips: [
      'Element vs compound: an element cannot be broken down; a compound can, by a chemical reaction. Both are pure substances.',
      'When mass seems to change in a reaction, look for a gas escaping (or entering) an open container.',
      'Diffusion factors: temperature, concentration difference and particle mass. Name all three.',
      'Do not mix up plasma and liquid crystals: LCD = Liquid Crystal Display.',
      'Absolute zero is −273 °C (0 K), not 0 °C.',
      'Periods are rows (across); groups are columns (down). Remember: “Groups go down.”'
    ],
    facts: [
      'Over 99% of the visible matter in the universe is plasma, because stars are made of it.',
      'The Large Hadron Collider has made matter over 5 trillion °C hot, hotter than the centre of the Sun by hundreds of thousands of times.',
      'Lavoisier named oxygen and hydrogen, and wrote one of the first lists of elements.'
    ]
  },

  {
    id: 'spso3', kind: 'lesson', emoji: '🧬', title: 'SPSO Lesson 3: Living Things', level: 'SPSO', theme: 'spso',
    videos: [
      { id: 'rgZhDoPgzK8', title: 'What Biologists Do (Crash Course Biology #3)', by: 'CrashCourse' },
      { id: 'de1hiS_XjWg', title: 'The mysterious origins of life on Earth', by: 'TED-Ed' },
      { id: 'NNijmxsKGbc', title: 'What Was the Miller–Urey Experiment?', by: 'Stated Clearly' },
      { id: 'yAXnYcUjn5k', title: 'Insights into cell membranes via dish detergent', by: 'TED-Ed' },
      { id: 'qYv3tbyquWk', title: 'Introduction to Photosynthesis', by: 'Frank Gregorio' }
    ],
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSevOCDJqhvV_g_2eyaEKRyEjpDC5BDpEkwkE7MPl9KBmOjODA/viewform',
    slides: [
      { kicker: 'SPSO · Lesson 3', title: 'Living Things', emoji: '🧬',
        points: ['What makes something alive?', 'Earth 4 billion years ago', 'The Miller–Urey experiment', 'From molecules to the first cells', 'Cell membranes and photosynthesis', 'Are viruses alive?'] },
      { title: 'What makes something alive? MRS GREN', emoji: '🌱',
        cols: [['M · R · S', 'Movement, Respiration, Sensitivity', 'Living things move, release energy from food, and respond to changes around them.'], ['G · R', 'Growth, Reproduction', 'They grow and develop, and make more of their own kind.'], ['E · N', 'Excretion, Nutrition', 'They get rid of waste and need food (nutrients) to stay alive.']],
        note: 'Living things are made of one or more cells.' },
      { title: 'Growing means building', emoji: '🏗️',
        points: ['To grow, an organism must take in materials from its environment (food, water, carbon dioxide…).', 'These materials must be changed (transformed) before they can be used to build new cells and tissues. Food is digested; plants turn CO₂ and water into sugar.', 'Organisms follow patterns (instructions in their DNA) to build their structures.', 'Plants keep developing after the embryo stage (post-embryonic development): a tree keeps making new leaves, branches and flowers all its life.'] },
      { title: 'Earth 4 billion years ago', emoji: '🌋',
        cols: [['Hot', 'Much hotter than today', 'Volcanoes everywhere, many meteorite impacts and lightning storms.'], ['Poisonous air', 'No free oxygen', 'The air was mostly water vapour, carbon dioxide, nitrogen, and gases such as methane and ammonia. Lots of greenhouse gases kept it warm.'], ['No life yet', 'No ozone layer', 'Strong ultraviolet light reached the surface. The first signs of life appear about 3.5–3.8 billion years ago.']] },
      { title: 'The Miller–Urey experiment (1952)', emoji: '⚡',
        steps: ['Gases: water, methane, ammonia, hydrogen', 'Electric sparks (like lightning)', 'Cool and collect', 'Organic molecules form'],
        note: 'Stanley Miller and Harold Urey made amino acids (the building blocks of proteins) from simple gases, plus substances such as hydrogen cyanide and urea. Sugars like glucose were not produced.' },
      { title: 'From molecules to the first cells', emoji: '🪜',
        steps: ['Small organic molecules (amino acids, bases)', 'Join into big molecules (proteins, nucleic acids)', 'Wrapped in membranes (protocells)', 'Molecules that copy themselves (inheritance)'],
        note: 'The first cells had no nucleus. A nucleus came much later, so “DNA kept inside a nucleus” was not needed for the first life.' },
      { title: 'Cell membranes', emoji: '🫧',
        points: ['Every cell is wrapped in a thin cell membrane that keeps its inside different from the outside.', 'The membrane is made of fatty molecules (lipids) in two layers, with water-loving heads and water-fearing tails.', 'Dish detergent breaks up grease, and it breaks up cell membranes too. This is how scientists get DNA out of cells (try it with strawberries!).', 'On early Earth, fatty molecules could form tiny bubbles on their own: possibly the first “cell walls” for life.'] },
      { title: 'Photosynthesis', emoji: '☀️',
        points: ['Plants, algae and some bacteria make their own food using light energy.', 'Carbon dioxide + water → (light, chlorophyll) → glucose + oxygen', 'Chlorophyll, the green pigment in chloroplasts, traps the light energy.', 'Tiny ocean bacteria (cyanobacteria) that photosynthesised filled the air with oxygen over hundreds of millions of years, making life like ours possible.'] },
      { title: 'Are viruses alive?', emoji: '🦠',
        cols: [['Like living things', 'They have DNA or RNA and can evolve', 'They change over time, which is why we need new flu vaccines.'], ['Unlike living things', 'They are not made of cells', 'They do not feed, grow or respire on their own.'], ['The key reason', 'They cannot reproduce on their own', 'A virus must get inside a living host cell and use it to make copies of itself.']] },
      { title: 'What biologists do', emoji: '🔬',
        points: ['Biologists study living things, from molecules and cells to whole ecosystems.', 'They ask questions, observe, form hypotheses and test them, just like in Lesson 1.', 'Their work helps us make medicines, grow food and protect the environment.'] },
      { title: 'Recap', emoji: '✅',
        points: ['Living things: MRS GREN, and made of cells.', 'Growth needs materials from outside, transformed before use.', 'Early Earth: hot, poisonous air with lots of greenhouse gases, no oxygen and no life.', 'Miller–Urey: lightning + simple gases → amino acids.', 'First cells: molecules → big molecules → membranes → self-copying.', 'Photosynthesis makes food and oxygen. Viruses need a host cell to reproduce.'] }
    ],
    summary: [
      'Living things show seven characteristics (MRS GREN): movement, respiration, sensitivity, growth, reproduction, excretion and nutrition. They are made of one or more cells.',
      'To grow, an organism must take in materials from its environment, and these must be transformed (for example, digested or made into sugar) before they can build new tissues.',
      'Organisms follow patterns, coded in their DNA, to build their structures. Plants keep developing new organs after the embryo stage (post-embryonic development).',
      'About 4 billion years ago, Earth was much hotter, with volcanoes, lightning and meteorite impacts. The air had no free oxygen, contained poisonous gases and had lots of greenhouse gases. There was no life yet.',
      'In 1952, Stanley Miller and Harold Urey passed electric sparks through water, methane, ammonia and hydrogen. They made amino acids and other organic molecules such as hydrogen cyanide and urea, but not sugars like glucose.',
      'Scientists think life arose in stages: small organic molecules formed; they joined into large molecules such as proteins and nucleic acids; these were packaged inside membranes; and molecules that could copy themselves made inheritance possible.',
      'The first cells had no nucleus, so DNA inside a nucleus was not a necessary condition for the first life.',
      'A cell membrane is a double layer of fatty molecules that separates the inside of a cell from its surroundings. Detergent breaks it apart, which is how DNA can be extracted from cells.',
      'Photosynthesis: plants use light energy, trapped by chlorophyll, to turn carbon dioxide and water into glucose and oxygen. Photosynthesising bacteria gave Earth its oxygen-rich air.',
      'Viruses are usually called non-living because they cannot reproduce on their own: they must use a host cell. They are not cells, but they do contain DNA or RNA and can evolve.'
    ],
    terms: [
      ['Organism', 'A living thing.'],
      ['MRS GREN', 'Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition: the characteristics of living things.'],
      ['Cell', 'The basic unit of life. All living things are made of one or more cells.'],
      ['Organic molecule', 'A carbon-based molecule found in living things, e.g. amino acids, sugars, fats.'],
      ['Amino acid', 'A small molecule that joins with others to build proteins.'],
      ['Nucleic acid', 'A large molecule that carries genetic information: DNA or RNA.'],
      ['Miller–Urey experiment', 'A 1952 experiment that made amino acids from simple gases and electric sparks, imitating early Earth.'],
      ['Protocell', 'A simple bubble with a membrane around chemicals: a possible step towards the first cells.'],
      ['Cell membrane', 'The thin, fatty layer around a cell that controls what goes in and out.'],
      ['Photosynthesis', 'Using light energy to make glucose and oxygen from carbon dioxide and water.'],
      ['Chlorophyll', 'The green substance in plants that traps light energy for photosynthesis.'],
      ['Virus', 'A tiny particle of DNA or RNA in a protein coat that can only reproduce inside a host cell.']
    ],
    quiz: [
      { q: 'Which of these is NOT one of the characteristics of living things (MRS GREN)?', a: ['Being made of metal', 'Respiration', 'Sensitivity', 'Excretion'], c: 0, e: 'MRS GREN: movement, respiration, sensitivity, growth, reproduction, excretion, nutrition.' },
      { q: 'A seedling grows into a plant. What must happen to the materials it takes in?', a: ['They must be changed before they can build new tissues', 'They are used exactly as they are', 'They are stored but never used', 'They are passed out as waste'], c: 0, e: 'Plants turn CO₂ and water into sugar, then into new cells. Materials are always transformed before they are built in.' },
      { q: 'What was Earth like 4 billion years ago?', a: ['Very hot, with no free oxygen in the air', 'Cool, with lots of oxygen', 'Covered in forests', 'Just like today'], c: 0, e: 'Early Earth was hot and volcanic, and its air had no free oxygen.' },
      { q: 'In the Miller–Urey experiment, what did the electric sparks stand for?', a: ['Lightning', 'Sunlight', 'Volcanoes', 'Rain'], c: 0, e: 'The sparks gave energy, like lightning storms on early Earth.' },
      { q: 'Which molecules did the Miller–Urey experiment famously produce?', a: ['Amino acids', 'Glucose', 'DNA', 'Whole cells'], c: 0, e: 'Amino acids, the building blocks of proteins. It did not make sugars like glucose, DNA or cells.' },
      { q: 'Put these steps towards the first cells in order: (1) molecules inside membranes, (2) small organic molecules, (3) large molecules like proteins.', a: ['2 → 3 → 1', '1 → 2 → 3', '3 → 2 → 1', '2 → 1 → 3'], c: 0, e: 'Small molecules form first, then join into large ones, which are later packaged inside membranes.' },
      { q: 'Why does dish detergent help scientists extract DNA from cells?', a: ['It breaks apart the fatty cell membranes', 'It makes DNA glow', 'It feeds the cells', 'It turns DNA into protein'], c: 0, e: 'Membranes are made of fatty molecules, and detergent breaks up fat, so the cell opens and releases its DNA.' },
      { q: 'What are the products of photosynthesis?', a: ['Glucose and oxygen', 'Carbon dioxide and water', 'Oxygen and carbon dioxide', 'Glucose and carbon dioxide'], c: 0, e: 'Carbon dioxide + water → glucose + oxygen, using light energy.' },
      { q: 'Where did most of the oxygen in Earth’s air come from?', a: ['Photosynthesis by bacteria and plants', 'Volcanoes', 'Lightning', 'Meteorites'], c: 0, e: 'Photosynthesising bacteria (cyanobacteria), then algae and plants, slowly filled the air with oxygen.' },
      { q: 'Why are viruses usually called non-living?', a: ['They cannot reproduce on their own', 'They cannot change over time', 'They have no DNA or RNA', 'They cannot be destroyed'], c: 0, e: 'A virus must invade a host cell to make copies of itself. Viruses do have DNA or RNA and can evolve.' }
    ],
    tips: [
      'Learn MRS GREN: you can be asked to explain why something is or is not living.',
      'Early Earth: hot, no free oxygen, poisonous gases and MORE greenhouse gases than today.',
      'Miller–Urey made amino acids, not glucose, DNA or cells.',
      'Photosynthesis: name both the reactants (carbon dioxide, water) and the products (glucose, oxygen), plus light and chlorophyll.',
      'Viruses: the key reason they are “non-living” is that they cannot reproduce without a host cell.',
      'Watch for “NOT” and “FALSE” in questions: underline them before choosing.'
    ],
    facts: [
      'The oldest signs of life are about 3.5 billion years old: layered rocks called stromatolites, built by mats of bacteria.',
      'Stanley Miller kept his old samples. In 2008, scientists tested them with modern equipment and found more than 20 amino acids.',
      'You can see your own DNA at home: mash strawberries with salt water and detergent, then add cold rubbing alcohol, and white strands of DNA appear.'
    ]
  },
  {
    id: 'spso4', kind: 'lesson', emoji: '🧂', title: 'SPSO Lesson 4: Chemicals and Chemical Bonds', level: 'SPSO', theme: 'spso',
    videos: [
      { id: 'TYEYEIuTmGQ', title: 'Atomic Structure and Electrons', by: 'Whats Up Dude' },
      { id: 'hePb00CqvP0', title: 'The Periodic Table: Atomic Radius, Ionization Energy, and Electronegativity', by: 'Professor Dave Explains' },
      { id: 'qNaBMvJXdJ4', title: 'Noble Gases: the Gases in Group 18', by: 'FuseSchool' },
      { id: 'NgD9yHSJ29I', title: 'How atoms bond (for class quiz question 2)', by: 'TED-Ed' },
      { id: 'lP_EsVY4CVg', title: 'Chemical Bonds: Ionic and Covalent', by: 'Ysci' },
      { id: 'ji_25I_q4LQ', title: 'Making table salt using sodium metal and chlorine gas', by: 'NileRed' },
      { id: 'X7b8_9wAREE', title: 'Alloy metals and their components', by: 'Study’n’Learn' },
      { id: 'eHCuJjIBIpY', title: 'Techniques in Separating Mixtures (with actual laboratory videos)', by: 'Science Simplified' },
      { id: 'XfSopnqrHOs', title: 'Chromatography', by: 'Quick Biochemistry Basics' },
      { id: 'rz4Dd1I_fX0', title: 'The Periodic Table Song (2018 Update!)', by: 'AsapSCIENCE' }
    ],
    activities: [
      { title: 'Build an Atom', by: 'PhET, University of Colorado', url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html', embed: true,
        what: 'Drag protons, neutrons and electrons into the atom. Watch how the element, the charge and the mass change. Try to build a neutral carbon atom, then a sodium ion (Na⁺).' }
    ],
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSdWVR7LyXh1fnNFGyCmvr78pvk1905UQqhfrD1oGFHJ56uczQ/viewform',
    slides: [
      { kicker: 'SPSO · Lesson 4', title: 'Chemicals and Chemical Bonds', emoji: '🧂',
        points: ['Inside an atom', 'Reading the periodic table', 'Noble gases: the “happy” atoms', 'Ionic and covalent bonds', 'Elements, compounds, mixtures and alloys', 'Separating mixtures'] },
      { title: 'Inside an atom', emoji: '⚛️',
        cols: [['Proton', 'Positive (+), in the nucleus', 'The number of protons decides which element it is (the atomic number).'], ['Neutron', 'No charge, in the nucleus', 'Adds mass. Protons + neutrons = mass number.'], ['Electron', 'Negative (−), in shells around the nucleus', 'Shells fill up as 2, then 8, then 8. A neutral atom has as many electrons as protons.']],
        note: 'The electrons in the outermost shell are called valence electrons. They decide how an atom bonds.' },
      { title: 'Reading the periodic table', emoji: '🗂️',
        cols: [['Period (row)', 'Number of electron shells', 'Sodium is in period 3, so it has 3 shells: 2, 8, 1.'], ['Group (column)', 'Same number of valence electrons', 'Group 1 elements have 1 outer electron; group 17 have 7.'], ['Trends', 'Across a row, atoms get smaller and hold electrons more tightly', 'Down a group, atoms get bigger and lose outer electrons more easily.']] },
      { title: 'Noble gases (group 18)', emoji: '🎈',
        points: ['Helium, neon, argon, krypton, xenon and radon.', 'Their outer shell is full: 8 valence electrons (helium has 2, which fills its only shell).', 'A full outer shell makes them very stable, so they hardly react. They exist as single atoms.', 'Uses: helium in balloons, neon in glowing signs, argon inside light bulbs and for welding.'] },
      { title: 'Why atoms bond', emoji: '🤝',
        points: ['Most atoms do not have a full outer shell.', 'They become stable, like a noble gas, by losing, gaining or sharing electrons.', 'This is the “octet rule”: atoms tend to end up with 8 electrons in their outer shell.', 'The way they do it gives two main kinds of bond: ionic and covalent.'] },
      { title: 'Ionic bond: giving and taking', emoji: '🧲',
        steps: ['Na (2,8,1) gives away 1 electron', 'Cl (2,8,7) takes 1 electron', 'Na⁺ (2,8) and Cl⁻ (2,8,8)', 'Opposite charges attract'],
        note: 'Both ions now have 8 electrons in their outer shell. Millions of Na⁺ and Cl⁻ ions stack into a cubic crystal: table salt. Ionic bonds usually form between a metal and a non-metal.' },
      { title: 'Covalent bond: sharing', emoji: '🫱🏻‍🫲🏽',
        points: ['Non-metal atoms share pairs of electrons so that each gets a full outer shell.', 'Methane (CH₄): carbon shares one pair with each of 4 hydrogen atoms (4 covalent bonds).', 'Water (H₂O) and carbon dioxide (CO₂) are covalent too.', 'Some elements exist as molecules of two atoms (diatomic): H₂, N₂, O₂, Cl₂. Oxygen gas is O₂, held by a double covalent bond.'] },
      { title: 'A compound is totally different from its elements', emoji: '🔥',
        cols: [['Sodium', 'Soft, shiny metal', 'Reacts violently with water.'], ['Chlorine', 'Green, poisonous gas', 'Was even used as a weapon.'], ['Sodium chloride', 'Table salt', 'Safe to eat! The compound has completely new properties.']] },
      { title: 'Elements, compounds, mixtures', emoji: '🧪',
        cols: [['Element', 'One kind of atom', 'Cannot be broken down into simpler substances. A pure substance.'], ['Compound', 'Elements chemically bonded in a fixed ratio', 'e.g. water H₂O, salt NaCl, cane sugar (sucrose) C₁₂H₂₂O₁₁. Also a pure substance.'], ['Mixture', 'Substances mixed but not chemically joined', 'Can be separated by physical methods, e.g. salt water, air.']],
        note: 'Allotropes are different forms of the same element: diamond, graphite and buckyballs (carbon); white, red and black phosphorus.' },
      { title: 'Alloys', emoji: '⚙️',
        points: ['An alloy is a mixture of a metal with other elements.', 'Steel = iron + carbon (stronger). Stainless steel = iron + chromium + nickel (does not rust). Brass = copper + zinc. Bronze = copper + tin.', 'Different-sized atoms stop the layers of metal atoms sliding easily, so alloys are usually harder and stronger.', 'Many alloys resist rusting and corrosion better than the pure metal.'] },
      { title: 'Separating mixtures', emoji: '🧫',
        cols: [['Filtration / sieving', 'Insoluble solid from a liquid, or big bits from small', 'Sand from water.'], ['Evaporation / distillation', 'Using boiling', 'Salt from salt water (evaporation); pure water from sea water (distillation).'], ['Chromatography', 'Separating dyes', 'Different dyes travel up the paper at different speeds, so ink splits into colours.']],
        note: 'Magnets pull out iron; a separating funnel separates oil and water.' },
      { title: 'Recap', emoji: '✅',
        points: ['Atoms: protons and neutrons in the nucleus, electrons in shells (2, 8, 8).', 'Period = number of shells; group = number of valence electrons.', 'Noble gases have full outer shells, so they are unreactive.', 'Ionic bond: electrons transferred (metal + non-metal). Covalent bond: electrons shared (non-metals).', 'Compounds are pure and have new properties. Mixtures and alloys are not chemically joined.', 'Separate mixtures by filtration, evaporation, distillation, magnets or chromatography.'] }
    ],
    summary: [
      'An atom has a nucleus of protons (positive) and neutrons (no charge), with electrons (negative) in shells around it. The first shell holds 2 electrons, the next ones 8.',
      'The number of protons (the atomic number) decides the element. In a neutral atom, the number of electrons equals the number of protons.',
      'In the periodic table, the period (row) number is the number of electron shells, and elements in the same group (column) have the same number of valence (outer) electrons.',
      'Across a period, atoms get smaller and hold their electrons more tightly. Down a group, atoms get larger and lose outer electrons more easily.',
      'Noble gases (group 18) have full outer shells (8 valence electrons; helium has 2). This makes them very stable and unreactive.',
      'Atoms bond to get a full outer shell. In an ionic bond, a metal gives electrons to a non-metal, forming oppositely charged ions that attract, e.g. Na⁺ and Cl⁻ in sodium chloride, which forms cubic crystals.',
      'In a covalent bond, non-metal atoms share pairs of electrons, e.g. methane (CH₄), water and oxygen gas (O₂, a diatomic molecule).',
      'A compound has properties very different from the elements that form it: sodium (a reactive metal) and chlorine (a poisonous gas) make table salt.',
      'Elements and compounds are pure substances. Cane sugar (sucrose) is a compound. A mixture contains substances that are not chemically joined and can be separated by physical methods.',
      'Allotropes are different forms of the same element, e.g. diamond, graphite and buckyballs (carbon), and white, red and black phosphorus.',
      'An alloy is a metal mixed with other elements, e.g. steel, stainless steel, brass and bronze. Alloys are usually harder and stronger, and often resist rust better than pure metals.',
      'Mixtures can be separated by sieving, filtration, evaporation, distillation, magnetic separation, a separating funnel or chromatography.'
    ],
    terms: [
      ['Proton', 'A positive particle in the nucleus. Its number decides the element.'],
      ['Neutron', 'A particle with no charge in the nucleus.'],
      ['Electron', 'A tiny negative particle moving in shells around the nucleus.'],
      ['Valence electrons', 'The electrons in an atom’s outermost shell.'],
      ['Period / Group', 'A row (number of shells) / a column (number of valence electrons) of the periodic table.'],
      ['Noble gas', 'A group 18 element with a full outer shell, so it hardly reacts.'],
      ['Ion', 'An atom that has lost or gained electrons, so it has a charge, e.g. Na⁺, Cl⁻.'],
      ['Ionic bond', 'The attraction between oppositely charged ions formed when electrons are transferred.'],
      ['Covalent bond', 'A bond in which two atoms share a pair of electrons.'],
      ['Diatomic molecule', 'A molecule made of two atoms, e.g. O₂, H₂, Cl₂.'],
      ['Compound', 'Two or more elements chemically bonded in a fixed ratio. A pure substance.'],
      ['Mixture', 'Substances mixed together but not chemically joined.'],
      ['Allotropes', 'Different forms of the same element, e.g. diamond and graphite.'],
      ['Alloy', 'A metal mixed with other elements to improve its properties, e.g. steel.'],
      ['Chromatography', 'A way of separating a mixture of dyes on paper using a solvent.']
    ],
    quiz: [
      { q: 'Which particle decides which element an atom is?', a: ['Proton', 'Neutron', 'Electron', 'Ion'], c: 0, e: 'The number of protons is the atomic number. Change it and you get a different element.' },
      { q: 'Sodium is in period 3. What does that tell you?', a: ['It has 3 electron shells', 'It has 3 valence electrons', 'It has 3 protons', 'It is the third metal'], c: 0, e: 'The period number is the number of shells: sodium is 2, 8, 1.' },
      { q: 'Why are noble gases so unreactive?', a: ['Their outer shell is full', 'They have no electrons', 'They are very heavy', 'They are always hot'], c: 0, e: 'A full outer shell (8 electrons; 2 for helium) is very stable, so they do not need to bond.' },
      { q: 'What happens when sodium and chlorine form an ionic bond?', a: ['Sodium gives 1 electron to chlorine', 'They share a pair of electrons', 'Chlorine gives 1 electron to sodium', 'They swap protons'], c: 0, e: 'Na (2,8,1) loses one electron to become Na⁺; Cl (2,8,7) gains it to become Cl⁻.' },
      { q: 'Which substance has covalent bonds?', a: ['Water (H₂O)', 'Sodium chloride', 'A copper wire', 'Neon gas'], c: 0, e: 'Hydrogen and oxygen are non-metals that share electrons. Salt is ionic, copper is metallic and neon does not bond.' },
      { q: 'Which is a compound?', a: ['Cane sugar (sucrose)', 'Oxygen gas', 'Salt water', 'Brass'], c: 0, e: 'Sucrose is carbon, hydrogen and oxygen chemically bonded in a fixed ratio. Oxygen is an element; salt water and brass are mixtures.' },
      { q: 'Diamond and graphite are both made of only carbon. They are called…', a: ['allotropes', 'alloys', 'isotopes', 'compounds'], c: 0, e: 'Allotropes are different forms of the same element.' },
      { q: 'Why is steel used instead of pure iron for bridges?', a: ['The alloy is harder and stronger', 'It is a pure element', 'It is lighter than air', 'It conducts no electricity'], c: 0, e: 'Carbon atoms in steel stop the iron layers sliding, making it stronger.' },
      { q: 'How would you get pure water from sea water?', a: ['Distillation', 'Filtration', 'Using a magnet', 'Chromatography'], c: 0, e: 'Boil the sea water and cool the steam: the salt is left behind.' },
      { q: 'Black ink splits into blue, red and yellow bands on wet filter paper. This method is…', a: ['chromatography', 'evaporation', 'sieving', 'decanting'], c: 0, e: 'Different dyes travel at different speeds up the paper.' }
    ],
    tips: [
      'Draw electron shells as 2, 8, 8 and count the outer shell carefully.',
      'Ionic = transfer (metal + non-metal); covalent = sharing (non-metal + non-metal).',
      'Compounds ARE pure substances. Mixtures and alloys are not compounds.',
      'Period number = number of shells; group number tells you the outer electrons.',
      'In true/false questions, look for one word that makes the whole statement wrong (e.g. “not”, “always”).',
      'Learn one example for each separation method: filtration (sand), distillation (sea water), chromatography (ink).'
    ],
    facts: [
      'A grain of table salt contains about a billion billion sodium and chloride ions arranged in tiny cubes. Look at salt under a magnifying glass to see the cube shapes.',
      'Buckminsterfullerene (C₆₀), the “buckyball”, is a carbon molecule shaped exactly like a football.',
      'Helium was discovered in the Sun (from its light) before it was found on Earth. Its name comes from “helios”, Greek for Sun.'
    ]
  },
  {
    id: 'spso5', kind: 'lesson', emoji: '🦋', title: 'SPSO Lesson 5: Biodiversity', level: 'SPSO', theme: 'spso',
    videos: [
      { id: 'b6Ua_zWDH6U', title: 'What is Biodiversity?', by: 'WWF International' },
      { id: 'dJU0WJBl5EE', title: '4 Billion Years of Life: Bacteria to Human Evolution', by: 'VizEffects' },
      { id: 's9Yf_G7LU3c', title: 'The Three Domains of Life', by: 'Educational Tree of Life' },
      { id: 'z8znhBuIwr4', title: 'Classification of Living Things', by: 'MooMooMath and Science' },
      { id: 'gO-CbUsh-Jc', title: 'Phylogeny: Evolutionary Relationships and Tree Diagrams', by: 'ATP for Learning' },
      { id: 'f97Yy_8XX4I', title: 'Mollusca: Gastropods, Bivalves, Cephalopods', by: 'MooMooMath and Science' }
    ],
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSeMPTK8Q5ksBZqORsSjecxZqOJTh_eW4Zjc8kdP4igaicXInQ/viewform',
    slides: [
      { kicker: 'SPSO · Lesson 5', title: 'Biodiversity', emoji: '🦋',
        points: ['What biodiversity is and why it matters', 'How scientists classify living things', 'Scientific names', 'Domains and kingdoms', 'Plants: from algae to flowering plants', 'Animals: chordates, arthropods and molluscs', 'Family trees of life (phylogeny)'] },
      { title: 'What is biodiversity?', emoji: '🌏',
        cols: [['Genetic diversity', 'Differences within one species', 'Dogs come in hundreds of breeds; no two people are exactly alike.'], ['Species diversity', 'How many different kinds of living things', 'Scientists have named about 2 million species, and there are many more.'], ['Ecosystem diversity', 'Different habitats', 'Rainforests, coral reefs, deserts, mangroves…']],
        note: 'Biodiversity gives us food, medicine, clean air and water. Losing species can upset a whole ecosystem.' },
      { title: '4 billion years of life', emoji: '⏳',
        steps: ['Bacteria (about 3.5 billion years ago)', 'Cells with a nucleus', 'Many-celled life', 'Fish → amphibians → reptiles', 'Mammals and birds', 'Humans (about 300,000 years ago)'],
        note: 'All living things are related. Over very long times, species change (evolve) and new species branch off.' },
      { title: 'Who started classifying?', emoji: '📚',
        points: ['John Ray (1600s) was the first to describe the species as the basic unit of classification.', 'Carl Linnaeus (1700s) grouped living things into ranks and gave each species a two-part name. He is called the “father of taxonomy”.', 'Taxonomy is the science of naming and classifying living things.', 'The species is the basic taxonomic category: a group of living things that can breed with each other and have fertile young.'] },
      { title: 'The ranks of classification', emoji: '🪜',
        steps: ['Kingdom', 'Phylum (Division in plants)', 'Class', 'Order', 'Family', 'Genus', 'Species'],
        note: 'Memory trick: “King Philip Came Over For Good Soup”. For plants, “division” is used instead of “phylum”: they are the same rank.' },
      { title: 'Scientific names (binomial nomenclature)', emoji: '🏷️',
        cols: [['Two parts', 'Genus + species', 'Human: Homo sapiens. Mango: Mangifera indica. Potato: Solanum tuberosum.'], ['How to write it', 'Genus starts with a capital letter, species is all small letters', 'Printed in italics, or underlined when handwritten.'], ['Why', 'One name, used everywhere', 'Common names change from place to place; scientific names do not.']],
        note: 'In Mangifera indica, Mangifera is the genus (generic name) and indica is the species name.' },
      { title: 'Three domains, five kingdoms', emoji: '🌳',
        cols: [['Bacteria', 'Prokaryotes: no nucleus, no mitochondria', 'Includes cyanobacteria and the bacteria that turn milk into curd.'], ['Archaea', 'Prokaryotes that often live in extreme places', 'Hot springs, very salty lakes.'], ['Eukarya', 'Cells with a nucleus', 'Protists, fungi, plants and animals.']],
        note: 'Many textbooks also use five kingdoms: Monera (bacteria), Protista, Fungi, Plantae and Animalia.' },
      { title: 'Helpful microbes', emoji: '🦠',
        points: ['Cyanobacteria (“blue-green algae”) are bacteria that make their own food by photosynthesis. Besides chlorophyll they contain a blue pigment called phycocyanin.', 'Some fix nitrogen: they turn nitrogen gas into substances plants can use. Azotobacter does this freely in the soil; Rhizobium lives in the root nodules of beans; Anabaena and Nostoc are cyanobacteria that do it too.', 'Lactobacillus bacteria turn milk into curd and yoghurt.', 'Fungi (yeast, moulds, mushrooms) make bread rise, decompose dead things, and give us medicines such as penicillin.'] },
      { title: 'The plant kingdom', emoji: '🌿',
        cols: [['Algae and mosses', 'Simple plants', 'Algae live in water. Mosses (bryophytes) have no vascular tissue (no tubes to carry water) and no true roots, so they are like algae.'], ['Ferns', 'Pteridophytes', 'Have vascular tissue, but reproduce with spores, not seeds.'], ['Seed plants', 'Gymnosperms and angiosperms', 'Gymnosperms (pines) have naked seeds in cones. Angiosperms are flowering plants with seeds inside fruits. Both need pollination.']],
        note: 'Angiosperms carry water in both tracheids and vessels. The Venus flytrap is an angiosperm: a flowering plant that also catches insects.' },
      { title: 'Plants and their homes', emoji: '🌵',
        cols: [['Xerophytes', 'Dry places, e.g. deserts', 'Cactus: thick stem stores water, leaves are spines.'], ['Hydrophytes', 'In or on water', 'Water lily: air spaces help it float.'], ['Mesophytes and epiphytes', 'Moderate places / growing on other plants', 'Most garden plants are mesophytes. Orchids often grow on trees as epiphytes.']] },
      { title: 'The animal kingdom', emoji: '🐙',
        cols: [['Chordates', 'Notochord, dorsal hollow nerve cord, pharyngeal slits and post-anal tail', 'Includes all vertebrates: fish, amphibians, reptiles, birds and mammals.'], ['Arthropods', 'The largest group of animals', 'Jointed legs and a hard exoskeleton: insects, spiders, crabs. More than 3 out of 4 known animal species.'], ['Molluscs', 'Soft body, often with a shell', 'Gastropods (snails), bivalves (clams, mussels) and cephalopods (octopus, squid).']] },
      { title: 'Phylogeny: family trees of life', emoji: '🌲',
        points: ['A phylogenetic tree shows how groups of living things are related through evolution.', 'Each branching point is a common ancestor.', 'Groups that branch from a more recent point are more closely related. For example, humans are more closely related to chimpanzees than to fish.', 'Scientists build these trees from body features and, today, from DNA.'] },
      { title: 'Recap', emoji: '✅',
        points: ['Biodiversity: genetic, species and ecosystem diversity.', 'Species is the basic unit (John Ray); Linnaeus gave ranks and two-part names.', 'Kingdom → Phylum → Class → Order → Family → Genus → Species.', 'Bacteria and archaea are prokaryotes (no nucleus, no mitochondria).', 'Bryophytes → pteridophytes → gymnosperms → angiosperms.', 'Arthropods are the largest animal group.'] }
    ],
    summary: [
      'Biodiversity is the variety of life on Earth: genetic diversity (within a species), species diversity (number of kinds) and ecosystem diversity (variety of habitats). It gives us food, medicine and a healthy environment.',
      'Life began about 3.5–4 billion years ago with bacteria. Over time, living things evolved and branched into all the species we see today.',
      'Taxonomy is the science of naming and classifying living things. John Ray first described the species as the basic unit of classification. Carl Linnaeus is the “father of taxonomy”.',
      'The ranks from largest to smallest are kingdom, phylum (division for plants), class, order, family, genus and species. The species is the basic taxonomic category.',
      'Each species has a two-part scientific name (binomial nomenclature): genus (capital letter) + species (small letter), in italics, e.g. Homo sapiens, Mangifera indica (mango).',
      'All life is grouped into three domains: Bacteria, Archaea and Eukarya. Bacteria and archaea are prokaryotes: they have no nucleus and no mitochondria.',
      'Cyanobacteria are photosynthetic bacteria (autotrophs) with chlorophyll and a blue pigment, phycocyanin. Some, like Anabaena and Nostoc, fix nitrogen. Azotobacter is a free-living nitrogen-fixing bacterium in soil. Lactobacillus bacteria turn milk into curd.',
      'Plant groups: algae; bryophytes (mosses: no vascular tissue, no true roots, so they resemble algae); pteridophytes (ferns: vascular, with spores); gymnosperms (naked seeds in cones); angiosperms (flowering plants with seeds in fruits, and water-carrying tracheids and vessels). Pollination happens in seed plants.',
      'Plants are named for where they grow: xerophytes (deserts), hydrophytes (water), mesophytes (moderate conditions) and epiphytes (growing on other plants).',
      'Chordates have a notochord, a dorsal hollow nerve cord, pharyngeal slits and a post-anal tail at some stage. Arthropods are the largest animal group. Molluscs include gastropods, bivalves and cephalopods.',
      'A phylogenetic tree shows evolutionary relationships: each branch point is a common ancestor, and groups sharing a recent ancestor are closely related.'
    ],
    terms: [
      ['Biodiversity', 'The variety of all living things: genes, species and ecosystems.'],
      ['Taxonomy', 'The science of naming and classifying living things.'],
      ['Species', 'The basic unit of classification: organisms that can breed together and have fertile young.'],
      ['Genus', 'A group of closely related species. The first part of a scientific name.'],
      ['Binomial nomenclature', 'Linnaeus’s two-part naming system, e.g. Homo sapiens.'],
      ['Prokaryote', 'A single-celled organism with no nucleus and no mitochondria, e.g. bacteria.'],
      ['Eukaryote', 'An organism whose cells have a nucleus.'],
      ['Cyanobacteria', 'Photosynthetic bacteria with chlorophyll and the blue pigment phycocyanin.'],
      ['Nitrogen fixation', 'Turning nitrogen gas from the air into substances plants can use.'],
      ['Bryophyte', 'A moss or liverwort: no vascular tissue and no true roots.'],
      ['Pteridophyte', 'A fern: has vascular tissue but reproduces with spores.'],
      ['Gymnosperm', 'A seed plant with naked seeds, usually in cones, e.g. pine.'],
      ['Angiosperm', 'A flowering plant whose seeds are inside fruits.'],
      ['Xerophyte', 'A plant adapted to dry places, e.g. cactus.'],
      ['Chordate', 'An animal with a notochord and a dorsal hollow nerve cord at some stage.'],
      ['Arthropod', 'An animal with jointed legs and an exoskeleton: the largest animal group.'],
      ['Phylogenetic tree', 'A branching diagram showing how living things are related through evolution.']
    ],
    quiz: [
      { q: 'Which is the correct order of ranks, from largest to smallest?', a: ['Kingdom, phylum, class, order, family, genus, species', 'Species, genus, family, kingdom', 'Kingdom, genus, class, phylum, species', 'Phylum, kingdom, class, species, genus'], c: 0, e: '“King Philip Came Over For Good Soup.”' },
      { q: 'In the name Homo sapiens, what is “Homo”?', a: ['The genus', 'The species', 'The family', 'The kingdom'], c: 0, e: 'A scientific name is genus (capital letter) + species (small letter).' },
      { q: 'What do bacteria NOT have?', a: ['A nucleus and mitochondria', 'Cell membranes', 'DNA', 'Cytoplasm'], c: 0, e: 'Bacteria are prokaryotes: their DNA floats in the cytoplasm, and they have no mitochondria.' },
      { q: 'Which microbe turns milk into curd or yoghurt?', a: ['Bacteria (Lactobacillus)', 'Viruses', 'Algae', 'Mosses'], c: 0, e: 'Lactobacillus bacteria change milk sugar into lactic acid, which thickens the milk.' },
      { q: 'A cactus grows in the desert. Plants like this are called…', a: ['xerophytes', 'hydrophytes', 'epiphytes', 'mesophytes'], c: 0, e: 'Xero- means dry. Hydrophytes grow in water; epiphytes grow on other plants.' },
      { q: 'Why are mosses (bryophytes) said to resemble algae?', a: ['They have no vascular tissue and no true roots', 'They have flowers', 'They have seeds in cones', 'They are animals'], c: 0, e: 'Like algae, they are photosynthetic but have no tubes to carry water and no true roots.' },
      { q: 'Which group of plants has flowers and seeds inside fruits?', a: ['Angiosperms', 'Gymnosperms', 'Pteridophytes', 'Bryophytes'], c: 0, e: 'Angiosperms are flowering plants. Gymnosperms have naked seeds; ferns and mosses have no seeds.' },
      { q: 'Which is the largest group in the animal kingdom?', a: ['Arthropods', 'Mammals', 'Molluscs', 'Reptiles'], c: 0, e: 'Arthropods (insects, spiders, crustaceans) make up more than three-quarters of known animal species.' },
      { q: 'An octopus, a snail and a clam all belong to which group?', a: ['Molluscs', 'Arthropods', 'Chordates', 'Fungi'], c: 0, e: 'Cephalopods, gastropods and bivalves are the three main groups of molluscs.' },
      { q: 'On a phylogenetic tree, what does a branching point show?', a: ['A common ancestor', 'An extinct planet', 'The biggest animal', 'A food chain'], c: 0, e: 'Each fork is an ancestor shared by the groups that branch off from it.' }
    ],
    tips: [
      'Scientific names: genus with a capital letter, species with a small letter, in italics (underline when handwriting).',
      'Remember the ranks with “King Philip Came Over For Good Soup”. Division = phylum (used for plants).',
      'Prokaryotes (bacteria, archaea, cyanobacteria) have no nucleus and no mitochondria.',
      'Plant groups in order: bryophytes (no tubes) → pteridophytes (tubes, spores) → gymnosperms (naked seeds) → angiosperms (flowers, fruits).',
      'Word clues: xero- = dry, hydro- = water, epi- = upon.',
      'Chordate features (all four): notochord, dorsal hollow nerve cord, pharyngeal slits, post-anal tail.'
    ],
    facts: [
      'There are thought to be about 10 quintillion (10,000,000,000,000,000,000) insects alive at any time.',
      'An octopus has three hearts and blue blood.',
      'Linnaeus named over 12,000 species of plants and animals, including our own: Homo sapiens, “wise human”.'
    ]
  },
  {
    id: 'spso6', kind: 'lesson', emoji: '🌿', title: 'SPSO Lesson 6: Ecology', level: 'SPSO', theme: 'spso',
    videos: [
      { id: 'c6AR8FoS-k0', title: 'Exploring Pulau Ubin’s ecology: more than just a place to escape to', by: 'The Straits Times' },
      { id: 'ZiULxLLP32s', title: 'Coral Reefs 101', by: 'National Geographic' },
      { id: 'mLbDbmmV6Qc', title: 'Eutrophication Explained', by: 'Atlas Pro' },
      { id: 'ZHCgA-n5wRw', title: 'Are Microplastics in Our Water Becoming a Macroproblem?', by: 'National Geographic' },
      { id: 'e6rglsLy1Ys', title: 'Air Pollution 101', by: 'National Geographic' },
      { id: 'cw3uNW8HPrU', title: 'What if Carbon Sequestration Became the New Normal?', by: 'CLEAR Center at UC Davis' },
      { id: 'DWWU-8_4wu0', title: 'NEWater: A Singapore Success Story', by: 'PUB Singapore' }
    ],
    form: 'https://docs.google.com/forms/d/e/1FAIpQLSdyYt_HN1YdGPLODmeIzXGDDjgnADeqmKNPFb9TfurMXcX3nQ/viewform',
    slides: [
      { kicker: 'SPSO · Lesson 6', title: 'Ecology', emoji: '🌿',
        points: ['What ecology studies', 'Food chains, food webs and energy flow', 'Biomagnification', 'Eutrophication and microplastics', 'Air pollution and the greenhouse effect', 'Coral reefs, Pulau Ubin and NEWater: ecology in Singapore'] },
      { title: 'What is ecology?', emoji: '🔎',
        cols: [['Ecology', 'The study of how organisms interact with each other and their environment', 'Ecologists ask: who eats whom, who lives where, and why?'], ['Biotic factors', 'The living parts of an ecosystem', 'Plants, animals, fungi, bacteria.'], ['Abiotic factors', 'The non-living parts', 'Light, temperature, water, air, soil. They affect how organisms grow and reproduce.']],
        note: 'Organism → population (one species) → community (all species) → ecosystem (community + environment).' },
      { title: 'Food chains', emoji: '🔗',
        steps: ['Producer (plant)', 'Primary consumer (herbivore)', 'Secondary consumer', 'Tertiary consumer (top predator)'],
        note: 'Example: plants → grasshopper → frog → snake → eagle. Each arrow means “is eaten by”. Decomposers (bacteria, fungi) break down dead things at every level.' },
      { title: 'Energy flows one way', emoji: '⚡',
        points: ['Energy enters an ecosystem as sunlight, captured by producers.', 'Only about 10% of the energy at one level passes to the next. The rest is used for living or lost as heat.', 'So energy is greatest at the bottom (producers) and least at the top (top predators). This is why food chains are short.', 'Energy flow is one-way (unidirectional): it cannot flow back to the sun or to the plants.'] },
      { title: 'Biomagnification', emoji: '🔺',
        points: ['Some substances cannot be broken down (non-biodegradable), e.g. the pesticide DDT and mercury.', 'They build up in the bodies of animals that eat them.', 'At each higher level, animals eat many contaminated organisms, so the amount increases up the food chain.', 'Top predators such as eagles and big fish end up with the most. DDT once made eagle eggshells so thin they broke.'] },
      { title: 'Eutrophication', emoji: '🟢',
        steps: ['Fertiliser washes into a lake', 'Algae grow very fast (algal bloom)', 'Algae die; bacteria decompose them', 'Bacteria use up the oxygen', 'Fish die'],
        note: 'Eutrophic lakes have lots of nutrients, frequent blooms of blue-green algae and HIGH productivity at first, but the water ends up with too little oxygen.' },
      { title: 'Microplastics', emoji: '🧴',
        points: ['Tiny plastic pieces smaller than 5 mm, from broken-down bottles and bags, synthetic clothes and tyre dust.', 'They are found in oceans, rivers, tap water, sea salt and even inside animals.', 'Small animals eat them, and they pass up food chains.', 'Using less single-use plastic is one of the best ways to help.'] },
      { title: 'Air pollution and the greenhouse effect', emoji: '🏭',
        cols: [['Air pollution', 'Harmful substances in the air', 'Smoke, fine dust (PM2.5), sulfur dioxide from vehicles, factories and burning, e.g. haze from forest fires.'], ['Greenhouse effect', 'Gases trap heat and keep Earth warm', 'Without it, Earth would be about −18 °C. Carbon dioxide and methane are greenhouse gases.'], ['Global warming', 'Too much greenhouse gas', 'Burning fuels adds CO₂, so Earth warms, ice melts and sea levels rise.']] },
      { title: 'Carbon sequestration', emoji: '🌳',
        points: ['Carbon sequestration means capturing carbon dioxide and storing it so it does not warm the planet.', 'Natural stores: forests, soils, oceans, mangroves and seagrass.', 'Mangroves can store several times more carbon per hectare than many rainforests, in their mud.', 'Scientists are also testing machines and farming methods that pull CO₂ out of the air.'] },
      { title: 'Coral reefs', emoji: '🪸',
        points: ['Corals are animals: tiny polyps that build limestone skeletons.', 'Algae living inside them make food by photosynthesis and give corals their colours.', 'Coral reefs cover less than 1% of the ocean floor but are home to about a quarter of all marine species.', 'When the sea gets too warm, corals push out their algae and turn white (coral bleaching).'] },
      { title: 'Ecology in Singapore', emoji: '🇸🇬',
        cols: [['Pulau Ubin', 'Mangroves, coastal forest and Chek Jawa wetlands', 'Home to wild boars, hornbills, mudskippers and horseshoe crabs.'], ['Coral reefs', 'Southern islands', 'Singapore’s waters have over 250 kinds of hard coral.'], ['NEWater', 'Used water cleaned to be ultra-pure', 'Microfiltration, reverse osmosis and UV light. One of Singapore’s four “national taps”.']] },
      { title: 'Animals to know', emoji: '🐧',
        cols: [['Amphibians', 'Salamanders, frogs and toads', 'Moist skin; most lay eggs in water.'], ['Birds that cannot fly', 'Ostrich, emu, kiwi', 'They are still birds: feathers, beaks, eggs. A bat is a mammal, not a bird.'], ['Polar bears and penguins', 'Never meet in the wild', 'Polar bears live in the Arctic (north); penguins live in the southern hemisphere, mostly around Antarctica.']] },
      { title: 'Recap', emoji: '✅',
        points: ['Ecology: organisms interacting with each other and the environment (biotic + abiotic).', 'Energy flows one way; most at the producers, least at the top.', 'Biomagnification: toxins increase up the food chain.', 'Eutrophication: nutrients → algal bloom → no oxygen → fish die.', 'Greenhouse gases keep Earth warm; too much causes global warming.', 'Protect habitats like coral reefs and mangroves.'] }
    ],
    summary: [
      'Ecology is the scientific study of how organisms interact with each other and with their environment.',
      'An ecosystem has biotic (living) and abiotic (non-living) parts. Abiotic factors such as light, temperature and water affect how organisms grow and reproduce.',
      'A food chain shows who eats whom, starting with a producer. Each feeding level is a trophic level. Decomposers break down dead organisms and return nutrients to the soil.',
      'Energy enters as sunlight and flows in one direction only. About 10% passes to the next level, so energy is greatest at the bottom (producers) and least at the top.',
      'Biomagnification: non-biodegradable substances such as DDT and mercury build up in increasing amounts at each higher level of a food chain.',
      'Eutrophication: extra nutrients (e.g. fertiliser) cause algal blooms, often of blue-green algae. When the algae die, decomposers use up the oxygen and fish die. Eutrophic lakes have high, not low, productivity.',
      'Microplastics are plastic pieces smaller than 5 mm. They are now found in water, soil, food and animals, and can pass up food chains.',
      'Air pollution comes from vehicles, factories and burning. Greenhouse gases keep Earth warm, but extra carbon dioxide from burning fuels causes global warming.',
      'Carbon sequestration captures and stores carbon dioxide, naturally in forests, soils, oceans and mangroves, or with new technology.',
      'Coral reefs are built by tiny animals (polyps) that live with algae. They support about a quarter of marine species and are harmed by warming seas (bleaching) and pollution.',
      'Singapore examples: Pulau Ubin’s mangroves and Chek Jawa wetlands, coral reefs around the southern islands, and NEWater, which recycles used water into ultra-pure water.',
      'Amphibians include salamanders, frogs and toads. Ostriches, emus and kiwis are flightless birds; bats are mammals. Polar bears (Arctic) and penguins (southern hemisphere) never meet in the wild.'
    ],
    terms: [
      ['Ecology', 'The study of how organisms interact with each other and their environment.'],
      ['Ecosystem', 'A community of living things together with their non-living environment.'],
      ['Biotic / Abiotic', 'Living / non-living parts of an ecosystem.'],
      ['Producer', 'An organism that makes its own food, usually by photosynthesis.'],
      ['Consumer', 'An organism that eats other organisms.'],
      ['Decomposer', 'A bacterium or fungus that breaks down dead organisms.'],
      ['Trophic level', 'A feeding level in a food chain.'],
      ['Food web', 'Many food chains linked together.'],
      ['Biomagnification', 'The build-up of toxins in increasing amounts at higher levels of a food chain.'],
      ['Eutrophication', 'Too many nutrients in water, causing algal blooms and loss of oxygen.'],
      ['Microplastics', 'Plastic pieces smaller than 5 mm.'],
      ['Greenhouse effect', 'Gases in the air trapping heat and keeping Earth warm.'],
      ['Carbon sequestration', 'Capturing carbon dioxide and storing it away.'],
      ['Coral bleaching', 'Corals turning white when stressed by warm water and losing their algae.'],
      ['NEWater', 'Singapore’s ultra-clean water made by purifying used water.']
    ],
    quiz: [
      { q: 'Which of these is an abiotic factor?', a: ['Temperature', 'Grass', 'Bacteria', 'A frog'], c: 0, e: 'Abiotic means non-living: light, temperature, water, soil and air.' },
      { q: 'In the food chain grass → grasshopper → frog → snake, which has the most energy available?', a: ['Grass', 'Grasshopper', 'Frog', 'Snake'], c: 0, e: 'Energy is greatest at the producer level. Only about 10% passes up each level.' },
      { q: 'Why does energy flow in only one direction?', a: ['Energy is lost as heat at each level and cannot go back', 'Animals refuse to share', 'Plants make energy from nothing', 'Decomposers send it back to the sun'], c: 0, e: 'Energy is used up and lost as heat; it is not recycled. Nutrients are recycled, energy is not.' },
      { q: 'A lake has DDT in its water. Which animal will have the highest amount of DDT in its body?', a: ['The fish-eating eagle at the top', 'Tiny plankton', 'Small fish', 'Water plants'], c: 0, e: 'Biomagnification: the toxin builds up at each level, so the top predator has the most.' },
      { q: 'What starts eutrophication in a lake?', a: ['Too many nutrients, such as fertiliser', 'Too much oxygen', 'Too many fish', 'Cold weather'], c: 0, e: 'Nutrients cause an algal bloom; decomposing algae then use up the oxygen.' },
      { q: 'Microplastics are plastic pieces smaller than…', a: ['5 mm', '5 cm', '50 cm', '5 m'], c: 0, e: 'They are often too small to see easily, so they spread everywhere.' },
      { q: 'Which gas is mostly responsible for global warming caused by burning fuels?', a: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium'], c: 0, e: 'Burning coal, oil and gas releases carbon dioxide, a greenhouse gas.' },
      { q: 'What is coral bleaching?', a: ['Corals turning white when warm water makes them lose their algae', 'People painting reefs white', 'Corals growing extra fast', 'Sand covering the reef'], c: 0, e: 'Without their algae, corals lose their colour and main food source.' },
      { q: 'Which animal is NOT a bird?', a: ['Bat', 'Ostrich', 'Kiwi', 'Emu'], c: 0, e: 'Bats are mammals: they have fur and feed their young milk. Ostriches, kiwis and emus are flightless birds.' },
      { q: 'How is NEWater made?', a: ['By purifying used water with filters, reverse osmosis and UV light', 'By melting ice from mountains', 'By collecting rain only', 'By boiling sea water'], c: 0, e: 'Used water is cleaned in stages until it is ultra-pure.' }
    ],
    tips: [
      'Food chain arrows point to the eater (“is eaten by”), showing the direction of energy flow.',
      'Energy: most at the bottom (producers), least at the top. Toxins (biomagnification): least at the bottom, most at the top.',
      'Eutrophication in steps: nutrients → algal bloom → algae die → decomposers use oxygen → fish die.',
      'Do not mix up the greenhouse effect (natural, keeps Earth warm) with global warming (too much of it).',
      'A flightless bird is still a bird; a flying bat is still a mammal. Classify by features, not by whether it flies.',
      'In “which is NOT…” questions, check every option before choosing.'
    ],
    facts: [
      'Chek Jawa on Pulau Ubin was due to be reclaimed in 2001, but it was saved after volunteers showed how rich its wildlife was.',
      'A great whale stores tonnes of carbon in its body. When it dies and sinks to the seabed, that carbon can stay locked away for hundreds of years.',
      'NEWater is so pure that it is mainly used by wafer-fabrication factories, which need cleaner water than drinking water.'
    ]
  },
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
