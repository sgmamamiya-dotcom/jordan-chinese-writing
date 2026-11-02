// O-Level science topics, shown under the SPSO level in bryan/science.html (Olympiad prep goes beyond P6).
// Same shape as science-data.js. Topics with an experiment have a matching SCI_SIMS[id] in science-sims.js.
// Quiz: c = index of the correct option (options are shuffled on screen).
(function () {
  var TH = window.SCI_THEMES, T = window.SCI_TOPICS;
  TH.physics = { name: 'O-Level Physics', color: '#1D4ED8' };
  TH.chemistry = { name: 'O-Level Chemistry', color: '#B45309' };
  TH.biology = { name: 'O-Level Biology', color: '#15803D' };
  function q(question, answers, explain) { return { q: question, a: answers, c: 0, e: explain }; }

  T.push(
  /* ================= PHYSICS ================= */
  {
    id: 'ol-motion', emoji: '🏎️', title: 'Kinematics: speed, velocity and acceleration', level: 'SPSO', theme: 'physics',
    sim: 'Set the starting speed and the acceleration, then watch the speed–time graph. The shaded area is the distance travelled.',
    summary: [
      'Speed = distance ÷ time. Its SI unit is metres per second (m/s).',
      'Velocity is speed in a stated direction, so it is a vector. Distance and speed are scalars.',
      'Acceleration = change in velocity ÷ time taken, in m/s². A negative acceleration is a deceleration.',
      'On a distance–time graph, the gradient is the speed. A horizontal line means the object is at rest.',
      'On a speed–time graph, the gradient is the acceleration and the area under the line is the distance travelled.',
      'Near the Earth, objects in free fall without air resistance accelerate at about 10 m/s².',
      'With air resistance, a falling object speeds up until air resistance equals its weight. It then falls at a constant terminal velocity.'
    ],
    terms: [
      ['Scalar', 'A quantity with size (magnitude) only, e.g. distance, speed, mass, time.'],
      ['Vector', 'A quantity with size and direction, e.g. displacement, velocity, force.'],
      ['Speed', 'Distance travelled per unit time.'],
      ['Velocity', 'Rate of change of displacement: speed in a given direction.'],
      ['Acceleration', 'Rate of change of velocity, in m/s².'],
      ['Gradient', 'Steepness of a graph: change in y ÷ change in x.'],
      ['Terminal velocity', 'The constant top speed reached when air resistance balances weight.']
    ],
    quiz: [
      q('A car goes from 0 to 20 m/s in 5 s. What is its acceleration?', ['4 m/s²', '100 m/s²', '0.25 m/s²', '15 m/s²'], 'a = (20 − 0) ÷ 5 = 4 m/s².'),
      q('What does the area under a speed–time graph give?', ['Distance travelled', 'Acceleration', 'Speed', 'Time taken'], 'Area = speed × time = distance.'),
      q('A distance–time graph is a horizontal line. The object is…', ['at rest', 'moving at constant speed', 'accelerating', 'decelerating'], 'Distance is not changing, so it is not moving.'),
      q('Which of these is a vector?', ['Velocity', 'Speed', 'Mass', 'Time'], 'Velocity has a direction; the others do not.'),
      q('A runner covers 400 m in 50 s. Her average speed is…', ['8 m/s', '20 000 m/s', '0.125 m/s', '450 m/s'], '400 ÷ 50 = 8 m/s.'),
      q('A skydiver reaches terminal velocity. What is true?', ['Air resistance equals weight', 'Weight is zero', 'Air resistance is zero', 'She is still accelerating'], 'Balanced forces, so no acceleration.'),
      q('A car moves at a steady 15 m/s for 4 s. How far does it go?', ['60 m', '3.75 m', '19 m', '11 m'], 'distance = speed × time = 15 × 4.'),
      q('On a speed–time graph, a straight line sloping down shows…', ['constant deceleration', 'constant speed', 'increasing acceleration', 'the object at rest'], 'A steady downward slope is a steady decrease in speed.')
    ],
    tips: [
      'Always write units. Acceleration is m/s², not m/s.',
      'Do not mix up the graphs: gradient of distance–time = speed, gradient of speed–time = acceleration.',
      'For area under a speed–time graph, split the shape into rectangles and triangles.',
      'Change km/h to m/s by dividing by 3.6 before using formulas.'
    ],
    facts: [
      'A cheetah can accelerate from 0 to 100 km/h in about 3 seconds, faster than most sports cars.',
      'A skydiver falling belly-down reaches a terminal velocity of about 55 m/s (about 200 km/h).'
    ]
  },
  {
    id: 'ol-forces', emoji: '🏋️', title: 'Forces, mass and weight', level: 'SPSO', theme: 'physics',
    summary: [
      'A force is a push or a pull, measured in newtons (N). Forces can change an object’s speed, direction or shape.',
      'Newton’s first law: an object stays at rest, or moves at constant velocity, unless a resultant force acts on it.',
      'Newton’s second law: resultant force = mass × acceleration (F = ma).',
      'Newton’s third law: if A pushes on B, B pushes back on A with an equal and opposite force.',
      'Mass is the amount of matter (kg) and does not change from place to place. Weight is the pull of gravity (N): W = mg, with g ≈ 10 N/kg on Earth.',
      'Friction opposes motion between surfaces. It wastes energy as heat, but we need it for walking and braking.',
      'Moment of a force = force × perpendicular distance from the pivot. In balance, clockwise moments = anticlockwise moments.'
    ],
    terms: [
      ['Newton (N)', 'The SI unit of force.'],
      ['Resultant force', 'The single force that has the same effect as all the forces acting together.'],
      ['Mass', 'The amount of matter in a body, in kg.'],
      ['Weight', 'The gravitational force on a mass, W = mg.'],
      ['Inertia', 'The tendency of a mass to resist a change in its motion.'],
      ['Moment', 'The turning effect of a force: F × perpendicular distance from the pivot.'],
      ['Centre of gravity', 'The point where the whole weight of an object seems to act.']
    ],
    quiz: [
      q('A 2 kg trolley has a resultant force of 6 N. Its acceleration is…', ['3 m/s²', '12 m/s²', '0.33 m/s²', '8 m/s²'], 'a = F ÷ m = 6 ÷ 2.'),
      q('An astronaut goes from Earth to the Moon. What happens?', ['Mass stays the same, weight decreases', 'Both decrease', 'Mass decreases, weight stays the same', 'Both stay the same'], 'Mass is the amount of matter; the Moon’s gravity is weaker.'),
      q('What is the weight of a 50 kg student on Earth (g = 10 N/kg)?', ['500 N', '50 N', '5 N', '50 kg'], 'W = mg = 50 × 10 = 500 N.'),
      q('A book rests on a table. Which pair is a Newton’s third-law pair?', ['Book pushes down on table; table pushes up on book', 'Weight of book; table pushes up on book', 'Weight of book; weight of table', 'Friction; weight'], 'Third-law pairs act on two different objects and are the same type of force.'),
      q('A car moves at constant velocity. The resultant force on it is…', ['zero', 'forwards', 'backwards', 'equal to its weight'], 'No acceleration means no resultant force (first law).'),
      q('A 20 N force acts 0.5 m from a pivot. Its moment is…', ['10 N m', '40 N m', '20.5 N m', '0.025 N m'], 'Moment = 20 × 0.5.'),
      q('Why do passengers lurch forward when a bus brakes suddenly?', ['Inertia: their bodies keep moving forwards', 'The bus pushes them forward', 'Gravity increases', 'Friction pulls them forward'], 'Their bodies tend to keep their motion.'),
      q('Making the base of a lamp wider and heavier makes it…', ['more stable', 'less stable', 'lighter', 'no different'], 'A low centre of gravity and wide base increase stability.')
    ],
    tips: [
      'Weight is a force in N, never in kg.',
      'In F = ma, F is the resultant force. Subtract friction first.',
      'Third-law pairs act on different objects, so they never cancel each other.',
      'For moments, the distance must be perpendicular to the force.'
    ],
    facts: [
      'On the Moon, g is about 1.6 N/kg, so you would weigh about one-sixth of your Earth weight.',
      'Archimedes said, “Give me a place to stand and a lever long enough, and I will move the world.”'
    ]
  },
  {
    id: 'ol-energy', emoji: '⚡', title: 'Energy, work, power and pressure', level: 'SPSO', theme: 'physics',
    summary: [
      'Energy cannot be created or destroyed, only converted from one store to another (conservation of energy).',
      'Kinetic energy: KE = ½mv². Gravitational potential energy: GPE = mgh.',
      'Work done = force × distance moved in the direction of the force. 1 joule (J) = 1 N m.',
      'Power is the rate of doing work: P = work done ÷ time. 1 watt (W) = 1 J/s.',
      'Efficiency = useful energy output ÷ total energy input × 100%. No real machine is 100% efficient.',
      'Pressure = force ÷ area, in pascals (Pa). A smaller area gives a bigger pressure for the same force.',
      'Pressure in a liquid = hρg: it increases with depth and with the density of the liquid.'
    ],
    terms: [
      ['Joule (J)', 'The unit of energy and work.'],
      ['Kinetic energy', 'Energy of a moving object, ½mv².'],
      ['Gravitational potential energy', 'Energy stored because of height in a gravitational field, mgh.'],
      ['Work done', 'Force × distance moved in the direction of the force.'],
      ['Power', 'Rate of work done or energy transferred, in watts.'],
      ['Efficiency', 'Fraction of input energy that becomes useful output.'],
      ['Pressure', 'Force per unit area, in pascals (N/m²).']
    ],
    quiz: [
      q('A 2 kg ball moves at 3 m/s. Its kinetic energy is…', ['9 J', '6 J', '18 J', '3 J'], '½ × 2 × 3² = 9 J.'),
      q('A 50 kg boy climbs 4 m. His gain in GPE is (g = 10 N/kg)…', ['2000 J', '200 J', '54 J', '12.5 J'], 'mgh = 50 × 10 × 4.'),
      q('A motor does 600 J of work in 12 s. Its power is…', ['50 W', '7200 W', '588 W', '0.02 W'], 'P = 600 ÷ 12.'),
      q('A lamp uses 100 J and gives out 20 J of light. Its efficiency is…', ['20%', '80%', '120%', '5%'], '20 ÷ 100 × 100%.'),
      q('Why do sharp knives cut better?', ['Small area gives large pressure', 'They are heavier', 'Large area gives large pressure', 'They have less friction'], 'P = F ÷ A.'),
      q('Why is a dam thicker at the bottom?', ['Water pressure increases with depth', 'Water is denser at the top', 'To look stronger', 'Pressure decreases with depth'], 'Pressure = hρg.'),
      q('A ball is dropped. Ignoring air resistance, as it falls…', ['GPE changes to KE', 'KE changes to GPE', 'total energy increases', 'energy is destroyed'], 'Total energy stays the same.'),
      q('Pushing against a wall that does not move, the work done on the wall is…', ['zero', '10 J', 'equal to your weight', 'very large'], 'No distance moved, so no work done on the wall.')
    ],
    tips: [
      'Square the speed in ½mv², not the mass.',
      'Change minutes into seconds and cm² into m² before calculating.',
      'Describe energy changes as a chain, e.g. chemical → kinetic → thermal.',
      'Efficiency can never be over 100%. Check your answer.'
    ],
    facts: [
      'Lightning carries about a billion joules of energy in a fraction of a second.',
      'A stiletto heel can press on the floor harder than an elephant’s foot, because its area is so small.'
    ]
  },
  {
    id: 'ol-thermal', emoji: '🌡️', title: 'Thermal physics', level: 'SPSO', theme: 'physics',
    summary: [
      'The kinetic particle model: all matter is made of tiny particles in constant random motion. Hotter means faster particles.',
      'Solids: particles vibrate about fixed positions. Liquids: particles slide past each other. Gases: particles are far apart and move fast and randomly.',
      'Gas pressure is caused by particles colliding with the walls of the container.',
      'Heat moves by conduction (through solids, especially metals), convection (currents in fluids) and radiation (infrared waves, which can cross a vacuum).',
      'Dull black surfaces are good absorbers and emitters of radiation; shiny white surfaces are poor ones.',
      'During melting and boiling, temperature stays constant: the energy (latent heat) is used to break attractions between particles.',
      'Evaporation happens at any temperature, only at the surface, and cools the liquid left behind.'
    ],
    terms: [
      ['Conduction', 'Transfer of thermal energy through vibrating particles and free electrons.'],
      ['Convection', 'Transfer of thermal energy by the movement of a heated fluid.'],
      ['Radiation', 'Transfer of thermal energy by infrared waves; needs no medium.'],
      ['Latent heat', 'Energy absorbed or released during a change of state at constant temperature.'],
      ['Evaporation', 'Liquid changing to gas at the surface, below the boiling point.'],
      ['Thermal equilibrium', 'When two objects are at the same temperature, so there is no net heat flow.'],
      ['Specific heat capacity', 'Energy needed to raise the temperature of 1 kg of a substance by 1 °C.']
    ],
    quiz: [
      q('How does heat from the Sun reach the Earth?', ['Radiation', 'Conduction', 'Convection', 'Evaporation'], 'Space is a vacuum; only radiation can cross it.'),
      q('While ice melts, its temperature…', ['stays at 0 °C', 'rises steadily', 'falls', 'jumps to 100 °C'], 'The energy goes into breaking bonds (latent heat).'),
      q('Why is a heater placed near the floor of a room?', ['Hot air rises and sets up a convection current', 'Heat sinks', 'Radiation goes down', 'Floors conduct well'], 'Warm air is less dense and rises.'),
      q('Which surface is the best emitter of radiation?', ['Dull black', 'Shiny silver', 'Shiny white', 'Polished gold'], 'Dull black surfaces emit and absorb best.'),
      q('Why does sweating cool you down?', ['Evaporation removes the fastest particles', 'Sweat is cold', 'Sweat reflects heat', 'Sweat conducts heat in'], 'The remaining liquid has a lower average kinetic energy.'),
      q('When a gas is heated in a sealed can, the pressure rises because…', ['particles hit the walls harder and more often', 'particles get bigger', 'more particles appear', 'the can shrinks'], 'Faster particles cause more frequent, harder collisions.'),
      q('Which is the best conductor of heat?', ['Copper', 'Wood', 'Air', 'Plastic'], 'Metals have free electrons.'),
      q('A vacuum flask reduces heat loss by radiation using…', ['silvered walls', 'the vacuum', 'a plastic stopper', 'thick glass'], 'Shiny surfaces reflect radiation. The vacuum stops conduction and convection.')
    ],
    tips: [
      'Explain with particles: say what the particles do, not just “heat rises”.',
      'Hot air rises because it is less dense, not because “heat rises”.',
      'On a heating curve, the flat parts are changes of state.',
      'Evaporation and boiling are different: compare where, when and the temperature.'
    ],
    facts: [
      'Water has a very high specific heat capacity, which is why the sea warms up and cools down slowly.',
      'The coldest possible temperature, absolute zero, is −273.15 °C.'
    ]
  },
  {
    id: 'ol-light', emoji: '🔦', title: 'Light: reflection and refraction', level: 'SPSO', theme: 'physics',
    sim: 'Change the angle of the light ray and the material it goes into. See how much it bends, and find the critical angle for total internal reflection.',
    summary: [
      'Law of reflection: the angle of incidence equals the angle of reflection, measured from the normal.',
      'An image in a plane mirror is upright, the same size, laterally inverted and as far behind the mirror as the object is in front. It is virtual.',
      'Refraction is the bending of light when it changes speed going from one medium to another.',
      'Going into a denser medium (e.g. air to glass), light slows down and bends towards the normal.',
      'Refractive index n = sin i ÷ sin r = speed of light in vacuum ÷ speed in the medium.',
      'Total internal reflection happens when light goes from a denser to a less dense medium at an angle greater than the critical angle c, where sin c = 1/n.',
      'Optical fibres and prisms in binoculars use total internal reflection.'
    ],
    terms: [
      ['Normal', 'An imaginary line at 90° to a surface where the ray hits it.'],
      ['Angle of incidence', 'Angle between the incoming ray and the normal.'],
      ['Refraction', 'The bending of light as its speed changes between media.'],
      ['Refractive index', 'n = sin i ÷ sin r; how much a material slows and bends light.'],
      ['Critical angle', 'The angle of incidence (in the denser medium) that gives a refracted angle of 90°.'],
      ['Total internal reflection', 'All light reflected back inside a denser medium when i > c.'],
      ['Virtual image', 'An image that cannot be formed on a screen; light only seems to come from it.']
    ],
    quiz: [
      q('A ray hits a mirror at 30° to the normal. The angle of reflection is…', ['30°', '60°', '90°', '120°'], 'i = r.'),
      q('Light goes from air into glass. It…', ['slows down and bends towards the normal', 'speeds up and bends away', 'does not bend', 'stops'], 'Glass is optically denser.'),
      q('Glass has n = 1.5. Light in a vacuum travels at 3 × 10⁸ m/s. In glass it travels at…', ['2 × 10⁸ m/s', '4.5 × 10⁸ m/s', '3 × 10⁸ m/s', '1.5 × 10⁸ m/s'], 'v = c ÷ n.'),
      q('For total internal reflection, light must travel…', ['from denser to less dense, with i > c', 'from less dense to denser', 'at exactly 0°', 'through a vacuum only'], 'Both conditions are needed.'),
      q('Which uses total internal reflection?', ['Optical fibre', 'Plane mirror', 'Magnifying glass', 'Shadow'], 'Light bounces along inside the fibre.'),
      q('A swimming pool looks shallower than it is because of…', ['refraction', 'reflection', 'dispersion', 'diffraction'], 'Light bends away from the normal as it leaves the water.'),
      q('Glass has n = 1.5. Its critical angle is about…', ['42°', '30°', '60°', '90°'], 'sin c = 1/1.5 ≈ 0.67, so c ≈ 42°.'),
      q('An image in a plane mirror is…', ['virtual and laterally inverted', 'real and upside down', 'magnified', 'real and upright'], 'That is why AMBULANCE is written backwards on the front of ambulances.')
    ],
    tips: [
      'Measure all angles from the normal, not from the surface.',
      'Draw rays with a ruler and add arrows to show direction.',
      'For the critical angle, light must be going out of the denser material.',
      'Learn the plane-mirror image description as a list of four properties.'
    ],
    facts: [
      'Diamond has a refractive index of 2.42 and a critical angle of only 24°, which is why it sparkles.',
      'Most internet data travels as flashes of light in optical fibres under the sea.'
    ]
  },
  {
    id: 'ol-waves', emoji: '🌊', title: 'Waves, sound and the electromagnetic spectrum', level: 'SPSO', theme: 'physics',
    summary: [
      'Waves transfer energy without transferring matter.',
      'Transverse waves vibrate at right angles to the direction of travel (e.g. light, water waves). Longitudinal waves vibrate along the direction of travel (e.g. sound), with compressions and rarefactions.',
      'Wave equation: speed v = frequency f × wavelength λ. Frequency is measured in hertz (Hz).',
      'Sound needs a medium. It travels fastest in solids and cannot travel through a vacuum.',
      'Louder sound means bigger amplitude; higher pitch means higher frequency. Humans hear about 20 Hz to 20 000 Hz.',
      'Ultrasound (above 20 kHz) is used in pre-natal scans and for finding depth by echoes.',
      'The EM spectrum, from long to short wavelength: radio, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays. All travel at 3 × 10⁸ m/s in a vacuum.'
    ],
    terms: [
      ['Amplitude', 'The maximum displacement from the rest position.'],
      ['Wavelength (λ)', 'Distance between two neighbouring crests (or compressions).'],
      ['Frequency (f)', 'Number of complete waves per second, in Hz.'],
      ['Transverse wave', 'Vibrations at right angles to the direction of energy transfer.'],
      ['Longitudinal wave', 'Vibrations parallel to the direction of energy transfer.'],
      ['Echo', 'A reflected sound wave.'],
      ['Ultrasound', 'Sound with a frequency above 20 kHz, too high for humans to hear.']
    ],
    quiz: [
      q('A wave has f = 50 Hz and λ = 2 m. Its speed is…', ['100 m/s', '25 m/s', '52 m/s', '0.04 m/s'], 'v = fλ.'),
      q('Which wave is longitudinal?', ['Sound', 'Light', 'Radio', 'Water ripple'], 'Air particles vibrate back and forth along the direction of travel.'),
      q('Why can’t sound travel through space?', ['There are no particles to vibrate', 'It is too cold', 'It is too fast', 'Space absorbs it'], 'Sound needs a medium.'),
      q('Which EM wave has the shortest wavelength?', ['Gamma rays', 'Radio waves', 'Infrared', 'Visible light'], 'Gamma has the highest frequency and shortest wavelength.'),
      q('A louder sound has a larger…', ['amplitude', 'frequency', 'wavelength only', 'speed'], 'Pitch depends on frequency; loudness on amplitude.'),
      q('A ship hears an echo 2 s after a sonar pulse. Sound in water is 1500 m/s. The sea is…', ['1500 m deep', '3000 m deep', '750 m deep', '6000 m deep'], 'The sound goes down and back: 1500 × 2 ÷ 2.'),
      q('Which EM wave is used for TV remote controls?', ['Infrared', 'X-rays', 'Gamma rays', 'Ultraviolet'], 'Remotes send infrared pulses.'),
      q('What does every EM wave have in common?', ['Same speed in a vacuum', 'Same wavelength', 'Same frequency', 'They are longitudinal'], 'All travel at 3 × 10⁸ m/s in a vacuum.')
    ],
    tips: [
      'For echoes, remember to halve the total distance.',
      'Learn the EM spectrum order with a mnemonic: “Rich Men In Vegas Use X-ray Glasses”.',
      'Wavelength is measured from crest to crest, not crest to trough.',
      'Waves transfer energy, not matter. Say this in explanations.'
    ],
    facts: [
      'Bats and dolphins use ultrasound echoes to “see” in the dark (echolocation).',
      'Sound travels about 4 times faster in water and about 15 times faster in steel than in air.'
    ]
  },
  {
    id: 'ol-electricity', emoji: '🔌', title: 'Current electricity', level: 'SPSO', theme: 'physics',
    sim: 'Build a circuit with two resistors in series or in parallel. Change the battery voltage and resistances, and read the ammeter and voltmeters.',
    summary: [
      'Current is the rate of flow of charge: I = Q ÷ t, in amperes (A). It is measured with an ammeter in series.',
      'Potential difference (p.d., voltage) is the energy transferred per unit charge, in volts (V). It is measured with a voltmeter in parallel.',
      'Resistance R = V ÷ I, in ohms (Ω). Longer and thinner wires have more resistance.',
      'In series: the same current flows everywhere, R_total = R₁ + R₂, and the p.d.s add up to the supply voltage.',
      'In parallel: each branch has the same p.d., the currents add up, and the total resistance is less than the smallest resistor.',
      'Electrical power P = VI = I²R. Energy = Pt; electricity bills use kilowatt-hours (kWh).',
      'Safety: fuses and circuit breakers cut the current if it gets too big; earthing protects you if a metal case becomes live.'
    ],
    terms: [
      ['Current', 'Rate of flow of charge, in amperes (A).'],
      ['Potential difference', 'Work done per unit charge between two points, in volts (V).'],
      ['Resistance', 'Opposition to current: R = V ÷ I, in ohms (Ω).'],
      ['Ohm’s law', 'For a metal at constant temperature, current is proportional to p.d.'],
      ['Series circuit', 'Components in a single loop, one after another.'],
      ['Parallel circuit', 'Components on separate branches across the same two points.'],
      ['Fuse', 'A thin wire that melts and breaks the circuit when the current is too high.']
    ],
    quiz: [
      q('A 12 V battery drives 3 A through a resistor. Its resistance is…', ['4 Ω', '36 Ω', '15 Ω', '0.25 Ω'], 'R = V ÷ I.'),
      q('2 Ω and 4 Ω resistors are in series. The total resistance is…', ['6 Ω', '1.33 Ω', '8 Ω', '2 Ω'], 'In series, add them.'),
      q('Two 6 Ω resistors in parallel have a total resistance of…', ['3 Ω', '12 Ω', '6 Ω', '36 Ω'], '1/R = 1/6 + 1/6, so R = 3 Ω.'),
      q('How is a voltmeter connected?', ['In parallel with the component', 'In series', 'Either way', 'Across the battery only'], 'It measures p.d. across a component.'),
      q('A 2000 W kettle runs for 0.5 h. It uses…', ['1 kWh', '1000 kWh', '4 kWh', '2 kWh'], '2 kW × 0.5 h.'),
      q('Why are home lights wired in parallel?', ['Each gets full voltage and can be switched separately', 'It uses less wire', 'Current is the same', 'Resistance is higher'], 'One bulb failing does not turn off the others.'),
      q('A charge of 30 C flows in 10 s. The current is…', ['3 A', '300 A', '0.33 A', '40 A'], 'I = Q ÷ t.'),
      q('The fuse should be connected in the…', ['live wire', 'neutral wire', 'earth wire', 'plastic casing'], 'So the appliance is disconnected from the high voltage when it blows.')
    ],
    tips: [
      'Ammeter in series, voltmeter in parallel: draw them correctly.',
      'In parallel, the total resistance must be smaller than any single branch. Use this to check.',
      'kWh is a unit of energy, not power.',
      'Use the triangle V = IR, but write the formula out before substituting.'
    ],
    facts: [
      'A current of just 0.05 A across the heart can be deadly, which is why earthing and circuit breakers matter.',
      'Some materials cooled to very low temperatures become superconductors with zero resistance.'
    ]
  },
  {
    id: 'ol-magnetism', emoji: '🧲', title: 'Magnetism and electromagnetism', level: 'SPSO', theme: 'physics',
    summary: [
      'Like poles repel and unlike poles attract. Magnetic field lines go from north to south outside a magnet.',
      'Iron is easily magnetised and demagnetised (soft); steel keeps its magnetism (hard), so it is used for permanent magnets.',
      'A current in a wire produces a magnetic field of circles around it (right-hand grip rule).',
      'An electromagnet is a coil with an iron core. It is stronger with more current, more turns and an iron core, and it can be switched off.',
      'A current-carrying wire in a magnetic field feels a force (Fleming’s left-hand rule). This is how a d.c. motor works.',
      'Moving a magnet into a coil induces an e.m.f. (electromagnetic induction). Faster movement, stronger magnets and more turns give a bigger e.m.f.',
      'Transformers use induction to change a.c. voltages: Vs ÷ Vp = Ns ÷ Np.'
    ],
    terms: [
      ['Magnetic field', 'The region around a magnet where a magnetic force acts.'],
      ['Electromagnet', 'A temporary magnet made by a current in a coil, usually with an iron core.'],
      ['Solenoid', 'A long coil of wire.'],
      ['Fleming’s left-hand rule', 'Gives the direction of force on a current in a magnetic field (motors).'],
      ['Electromagnetic induction', 'Producing an e.m.f. by changing the magnetic field through a conductor.'],
      ['Transformer', 'A device that steps a.c. voltage up or down using two coils on an iron core.'],
      ['Commutator', 'A split ring that reverses the current in a d.c. motor’s coil every half turn.']
    ],
    quiz: [
      q('Two north poles are brought together. They…', ['repel', 'attract', 'do nothing', 'become south poles'], 'Like poles repel.'),
      q('Which change makes an electromagnet weaker?', ['Fewer turns of wire', 'More current', 'Adding an iron core', 'More turns of wire'], 'Fewer turns give a weaker field.'),
      q('Why is soft iron used as the core of an electromagnet?', ['It magnetises and demagnetises easily', 'It is a permanent magnet', 'It does not conduct', 'It is cheap only'], 'So the magnet switches off when the current stops.'),
      q('A transformer has 100 primary turns and 500 secondary turns. With 12 V in, the output is…', ['60 V', '2.4 V', '12 V', '600 V'], '12 × 500 ÷ 100.'),
      q('A magnet is held still inside a coil. The induced current is…', ['zero', 'large', 'steady', 'alternating'], 'Only a changing field induces an e.m.f.'),
      q('What does a d.c. motor change energy into?', ['Electrical → kinetic', 'Kinetic → electrical', 'Chemical → electrical', 'Light → kinetic'], 'A generator does the reverse.'),
      q('Transformers only work with…', ['a.c.', 'd.c.', 'batteries', 'magnets alone'], 'They need a changing current to make a changing field.'),
      q('Which material is best for a permanent magnet?', ['Steel', 'Soft iron', 'Copper', 'Aluminium'], 'Steel keeps its magnetism.')
    ],
    tips: [
      'Field lines never cross and always go from N to S.',
      'Left hand for motors, right hand for generators: practise the finger directions.',
      'Induction needs change. A stationary magnet induces nothing.',
      'Show transformer working: formula, substitution, answer with unit.'
    ],
    facts: [
      'The Earth behaves like a giant bar magnet; its magnetic field shields us from harmful solar wind.',
      'Maglev trains use powerful electromagnets to float above the track and reach over 400 km/h.'
    ]
  },

  /* ================= CHEMISTRY ================= */
  {
    id: 'ol-separation', emoji: '⚗️', title: 'Experimental chemistry and separation', level: 'SPSO', theme: 'chemistry',
    summary: [
      'A pure substance has a fixed melting point and boiling point. Impurities lower the melting point and raise the boiling point.',
      'Filtration separates an insoluble solid from a liquid. The solid left behind is the residue; the liquid through is the filtrate.',
      'Evaporation gets a dissolved solid from a solution. Crystallisation gives purer crystals, used for salts that decompose on strong heating.',
      'Simple distillation separates a solvent from a solution (e.g. pure water from sea water).',
      'Fractional distillation separates miscible liquids with different boiling points (e.g. ethanol and water, crude oil).',
      'A separating funnel separates immiscible liquids such as oil and water.',
      'Paper chromatography separates and identifies dyes. Rf = distance moved by spot ÷ distance moved by solvent front.'
    ],
    terms: [
      ['Pure substance', 'A single element or compound with nothing else mixed in.'],
      ['Mixture', 'Two or more substances not chemically combined.'],
      ['Residue', 'The solid left in the filter paper.'],
      ['Filtrate', 'The liquid that passes through the filter paper.'],
      ['Distillation', 'Boiling a liquid and condensing its vapour to collect it.'],
      ['Miscible', 'Liquids that mix completely.'],
      ['Rf value', 'Distance moved by a substance ÷ distance moved by the solvent front.']
    ],
    quiz: [
      q('How do you get sand out of sand and water?', ['Filtration', 'Distillation', 'Chromatography', 'Crystallisation'], 'Sand is insoluble.'),
      q('How do you get pure water from sea water?', ['Simple distillation', 'Filtration', 'Chromatography', 'Separating funnel'], 'Water boils off and is condensed; the salt stays.'),
      q('How do you separate ethanol (78 °C) from water?', ['Fractional distillation', 'Filtration', 'Separating funnel', 'Magnet'], 'They are miscible with different boiling points.'),
      q('A spot moves 3 cm and the solvent front 6 cm. Rf is…', ['0.5', '2', '3', '9'], '3 ÷ 6.'),
      q('Why is the start line in chromatography drawn in pencil?', ['Pencil does not dissolve in the solvent', 'Pencil is darker', 'Ink is too expensive', 'Pencil absorbs water'], 'Ink would separate and spoil the result.'),
      q('A sample melts over 76–80 °C. It is probably…', ['impure', 'pure', 'a gas', 'an element'], 'Pure substances melt sharply at one temperature.'),
      q('How do you separate oil and water?', ['Separating funnel', 'Filtration', 'Evaporation', 'Chromatography'], 'They are immiscible.'),
      q('In a condenser, cold water enters at the…', ['bottom', 'top', 'middle', 'side of the flask'], 'So the jacket stays full of water for best cooling.')
    ],
    tips: [
      'Name the method and say why: which property is different (solubility, boiling point, size).',
      'Draw apparatus as clear 2-D section diagrams with labels.',
      'In distillation, the thermometer bulb is level with the side arm.',
      'Rf has no units and is always less than 1.'
    ],
    facts: [
      'Singapore’s NEWater is made using membranes (reverse osmosis) and UV light, not just distillation.',
      'Chromatography is used in forensic labs to compare inks on forged documents.'
    ]
  },
  {
    id: 'ol-atoms', emoji: '⚛️', title: 'Atomic structure', level: 'SPSO', theme: 'chemistry',
    sim: 'Build an atom by adding protons, neutrons and electrons. See which element it is, its mass number, charge and electron arrangement.',
    summary: [
      'An atom has a tiny nucleus containing protons (+1) and neutrons (0), with electrons (−1) moving in shells around it.',
      'Proton number (atomic number, Z) = number of protons. It decides which element the atom is.',
      'Nucleon number (mass number, A) = protons + neutrons.',
      'A neutral atom has equal numbers of protons and electrons.',
      'Isotopes are atoms of the same element with different numbers of neutrons. They have the same chemical properties.',
      'Electrons fill shells: up to 2 in the first shell, then 8, then 8 (for the first 20 elements).',
      'The number of outer-shell (valence) electrons decides an element’s group and chemical properties.'
    ],
    terms: [
      ['Proton', 'A positive particle in the nucleus, relative mass 1.'],
      ['Neutron', 'A neutral particle in the nucleus, relative mass 1.'],
      ['Electron', 'A negative particle in shells, relative mass about 1/1840.'],
      ['Proton number', 'Number of protons in the nucleus (Z).'],
      ['Nucleon number', 'Total number of protons and neutrons (A).'],
      ['Isotopes', 'Atoms of the same element with different numbers of neutrons.'],
      ['Valence electrons', 'Electrons in the outermost shell.']
    ],
    quiz: [
      q('An atom of sodium has 11 protons and 12 neutrons. Its nucleon number is…', ['23', '11', '12', '1'], '11 + 12.'),
      q('What decides which element an atom is?', ['Number of protons', 'Number of neutrons', 'Number of shells', 'Its mass'], 'Each element has its own proton number.'),
      q('The electronic configuration of chlorine (Z = 17) is…', ['2, 8, 7', '2, 7, 8', '8, 8, 1', '2, 8, 8'], 'Fill 2, then 8, then the remaining 7.'),
      q('Carbon-12 and carbon-14 are…', ['isotopes', 'different elements', 'ions', 'compounds'], 'Same protons (6), different neutrons.'),
      q('An ion with 12 protons and 10 electrons has a charge of…', ['2+', '2−', '0', '10+'], 'Two more protons than electrons.'),
      q('Which particle has almost no mass?', ['Electron', 'Proton', 'Neutron', 'Nucleus'], 'About 1/1840 of a proton.'),
      q('Elements in the same group have the same number of…', ['outer-shell electrons', 'neutrons', 'shells', 'protons'], 'This gives them similar chemical properties.'),
      q('Most of an atom is…', ['empty space', 'nucleus', 'neutrons', 'solid matter'], 'The nucleus is tiny compared with the whole atom.')
    ],
    tips: [
      'Neutrons = nucleon number − proton number.',
      'For ions, change only the electrons; the protons stay the same.',
      'Draw electron shells as circles with dots or crosses, and label the nucleus.',
      'Isotopes have the same chemical properties but different physical properties (e.g. mass).'
    ],
    facts: [
      'If an atom were the size of a football stadium, its nucleus would be about the size of a pea in the centre.',
      'Carbon-14 decays slowly, which lets scientists date ancient bones and wood.'
    ]
  },
  {
    id: 'ol-bonding', emoji: '🔗', title: 'Chemical bonding and structure', level: 'SPSO', theme: 'chemistry',
    summary: [
      'Atoms bond to get a full outer shell, like the noble gases.',
      'Ionic bonding: a metal transfers electrons to a non-metal, forming positive and negative ions held by strong electrostatic attraction.',
      'Ionic compounds form giant lattices: high melting points, and they conduct electricity only when molten or dissolved (ions free to move).',
      'Covalent bonding: non-metal atoms share pairs of electrons.',
      'Simple molecular substances (e.g. water, CO₂) have weak forces between molecules, so low melting points, and they do not conduct.',
      'Giant covalent structures: diamond is very hard with a very high melting point; graphite has layers that slide and free electrons, so it conducts.',
      'Metallic bonding: positive metal ions in a “sea” of delocalised electrons, so metals conduct and are malleable.'
    ],
    terms: [
      ['Ion', 'An atom or group of atoms with a charge, from losing or gaining electrons.'],
      ['Ionic bond', 'Electrostatic attraction between oppositely charged ions.'],
      ['Covalent bond', 'A shared pair of electrons between two non-metal atoms.'],
      ['Giant lattice', 'A huge regular 3-D arrangement of particles.'],
      ['Intermolecular forces', 'Weak attractions between separate molecules.'],
      ['Delocalised electrons', 'Electrons free to move through a structure.'],
      ['Malleable', 'Can be hammered into shape without breaking.']
    ],
    quiz: [
      q('Sodium chloride conducts electricity when…', ['molten or dissolved in water', 'solid', 'never', 'cold'], 'The ions must be free to move.'),
      q('Which type of bonding is in a water molecule?', ['Covalent', 'Ionic', 'Metallic', 'None'], 'Hydrogen and oxygen are non-metals that share electrons.'),
      q('Why does magnesium form Mg²⁺?', ['It loses 2 outer electrons', 'It gains 2 electrons', 'It shares 2 electrons', 'It gains 2 protons'], 'Mg is 2,8,2; losing 2 gives a full shell.'),
      q('Why does graphite conduct electricity?', ['It has delocalised electrons between layers', 'It is a metal', 'It contains ions', 'It is soft'], 'Each carbon uses only 3 electrons in bonds.'),
      q('Why do simple molecules like CO₂ have low boiling points?', ['Weak forces between molecules', 'Weak covalent bonds', 'They contain ions', 'They are giant structures'], 'Boiling breaks intermolecular forces, not covalent bonds.'),
      q('Which is the hardest?', ['Diamond', 'Graphite', 'Sodium chloride', 'Ice'], 'Each carbon has four strong covalent bonds.'),
      q('What is the formula of magnesium oxide?', ['MgO', 'Mg₂O', 'MgO₂', 'Mg₂O₃'], 'Mg²⁺ and O²⁻ balance 1 : 1.'),
      q('Why are metals malleable?', ['Layers of ions can slide over each other', 'They have weak bonds', 'They are soft', 'They contain molecules'], 'The sea of electrons keeps holding the ions together.')
    ],
    tips: [
      'For dot-and-cross diagrams, show only outer shells and put charges in square brackets for ions.',
      'Say “electrostatic attraction between oppositely charged ions”, not just “strong bonds”.',
      'Boiling a simple molecular substance breaks intermolecular forces, not covalent bonds.',
      'To conduct, a substance needs mobile charged particles: ions or electrons.'
    ],
    facts: [
      'Graphene, a single layer of graphite, is about 200 times stronger than steel by weight.',
      'Diamond and graphite are both pure carbon, just arranged differently.'
    ]
  },
  {
    id: 'ol-mole', emoji: '🧮', title: 'Formulae, equations and the mole', level: 'SPSO', theme: 'chemistry',
    summary: [
      'A balanced equation has the same number of each type of atom on both sides. State symbols: (s), (l), (g), (aq).',
      'Relative atomic mass (Ar) compares an atom’s mass to 1/12 of a carbon-12 atom. Relative molecular mass (Mr) is the sum of the Ar values.',
      'One mole is 6 × 10²³ particles (Avogadro’s number).',
      'Number of moles = mass ÷ molar mass (g/mol).',
      'One mole of any gas occupies 24 dm³ at room temperature and pressure.',
      'Concentration (mol/dm³) = moles ÷ volume in dm³.',
      'Use the mole ratio from the balanced equation to find reacting masses. Percentage yield = actual ÷ theoretical × 100%.'
    ],
    terms: [
      ['Mole', 'The amount of substance containing 6 × 10²³ particles.'],
      ['Relative atomic mass (Ar)', 'Average mass of an atom compared with 1/12 of carbon-12.'],
      ['Relative molecular mass (Mr)', 'Sum of the Ar values of all atoms in a molecule.'],
      ['Molar mass', 'Mass of one mole of a substance, in g/mol.'],
      ['Molar volume', '24 dm³: volume of 1 mol of any gas at r.t.p.'],
      ['Concentration', 'Amount of solute per dm³ of solution.'],
      ['Limiting reactant', 'The reactant that runs out first and limits the amount of product.']
    ],
    quiz: [
      q('What is the Mr of H₂O? (H = 1, O = 16)', ['18', '17', '10', '34'], '2 × 1 + 16.'),
      q('How many moles are in 44 g of CO₂? (Mr = 44)', ['1', '44', '0.5', '2'], '44 ÷ 44.'),
      q('What volume does 2 mol of oxygen gas occupy at r.t.p.?', ['48 dm³', '24 dm³', '12 dm³', '32 dm³'], '2 × 24.'),
      q('Balance: H₂ + O₂ → H₂O', ['2H₂ + O₂ → 2H₂O', 'H₂ + O₂ → H₂O₂', 'H₂ + 2O₂ → 2H₂O', '2H₂ + 2O₂ → 2H₂O'], 'Four H and two O on each side.'),
      q('0.5 mol of NaOH is dissolved to make 250 cm³. The concentration is…', ['2 mol/dm³', '0.125 mol/dm³', '125 mol/dm³', '0.5 mol/dm³'], '0.5 ÷ 0.25 dm³.'),
      q('What is the Mr of CaCO₃? (Ca = 40, C = 12, O = 16)', ['100', '68', '84', '116'], '40 + 12 + 3 × 16.'),
      q('Theoretical yield 20 g, actual 15 g. Percentage yield is…', ['75%', '133%', '25%', '5%'], '15 ÷ 20 × 100%.'),
      q('Which state symbol means dissolved in water?', ['(aq)', '(l)', '(s)', '(w)'], 'Aqueous.')
    ],
    tips: [
      'Never change the small numbers in a formula to balance an equation; change only the big numbers in front.',
      'Convert cm³ to dm³ by dividing by 1000.',
      'Set out mole problems in steps: moles of known → mole ratio → moles of unknown → mass or volume.',
      'Keep 3 significant figures unless told otherwise.'
    ],
    facts: [
      '6 × 10²³ grains of sand would bury the whole of Singapore hundreds of kilometres deep.',
      'A glass of water (about 250 g) contains roughly 8 × 10²⁴ water molecules.'
    ]
  },
  {
    id: 'ol-acids', emoji: '🧪', title: 'Acids, bases and salts', level: 'SPSO', theme: 'chemistry',
    sim: 'Add alkali to acid drop by drop and watch the universal indicator change colour. Find the volume where it is exactly neutral.',
    summary: [
      'Acids produce hydrogen ions, H⁺(aq), in water. Alkalis are soluble bases that produce hydroxide ions, OH⁻(aq).',
      'The pH scale runs from 0 to 14: below 7 acidic, 7 neutral, above 7 alkaline. Strong acids fully ionise; weak acids partly ionise.',
      'Acid + metal → salt + hydrogen. Acid + base → salt + water. Acid + carbonate → salt + water + carbon dioxide.',
      'Neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l).',
      'Soluble salts are made by reacting acid with excess insoluble base (then filter) or by titration (for sodium, potassium and ammonium salts).',
      'Insoluble salts (e.g. barium sulfate, silver chloride) are made by precipitation, mixing two solutions.',
      'Tests: hydrogen gives a “pop” with a lighted splint; CO₂ turns limewater milky.'
    ],
    terms: [
      ['Acid', 'A substance that produces H⁺ ions in water.'],
      ['Alkali', 'A soluble base that produces OH⁻ ions in water.'],
      ['pH', 'A scale from 0 to 14 showing how acidic or alkaline a solution is.'],
      ['Neutralisation', 'Reaction of an acid with a base to form a salt and water.'],
      ['Salt', 'A compound formed when the H⁺ of an acid is replaced by a metal or ammonium ion.'],
      ['Titration', 'Adding one solution from a burette to find the exact volume needed to react.'],
      ['Precipitate', 'An insoluble solid formed when two solutions are mixed.']
    ],
    quiz: [
      q('What gas is made when zinc reacts with hydrochloric acid?', ['Hydrogen', 'Carbon dioxide', 'Oxygen', 'Chlorine'], 'Acid + metal → salt + hydrogen.'),
      q('Which pH is a strong alkali?', ['13', '7', '1', '5'], 'Above 7 is alkaline; close to 14 is strong.'),
      q('Acid + carbonate gives salt + water + …', ['carbon dioxide', 'hydrogen', 'oxygen', 'nothing else'], 'The fizzing is CO₂.'),
      q('Which salt does sulfuric acid make with copper(II) oxide?', ['Copper(II) sulfate', 'Copper(II) chloride', 'Copper nitrate', 'Copper carbonate'], 'Sulfuric acid gives sulfates.'),
      q('How would you make insoluble barium sulfate?', ['Precipitation', 'Titration', 'Excess base and filter', 'Distillation'], 'Mix barium chloride and sodium sulfate solutions.'),
      q('What is the ionic equation for neutralisation?', ['H⁺ + OH⁻ → H₂O', 'Na⁺ + Cl⁻ → NaCl', 'H₂ + O → H₂O', '2H⁺ → H₂'], 'The other ions are spectators.'),
      q('Farmers add lime (calcium hydroxide) to soil to…', ['neutralise acidic soil', 'make soil more acidic', 'add nitrogen', 'kill weeds'], 'Most crops grow best near pH 7.'),
      q('Which test shows carbon dioxide?', ['Turns limewater milky', 'Squeaky pop', 'Relights a glowing splint', 'Bleaches damp litmus'], 'Hydrogen pops; oxygen relights a splint; chlorine bleaches.')
    ],
    tips: [
      'Learn the three general equations and the gas tests word for word.',
      'Strong vs concentrated are different: strong is about ionisation, concentrated is about amount per dm³.',
      'For salt preparation, say whether the salt is soluble first, then choose the method.',
      'Use excess solid base so all the acid is used up, then filter off the extra.'
    ],
    facts: [
      'Your stomach makes hydrochloric acid with a pH of about 1.5 to 2.',
      'Red cabbage juice works as a homemade pH indicator, turning red in acid and green-yellow in alkali.'
    ]
  },
  {
    id: 'ol-periodic', emoji: '🗂️', title: 'The Periodic Table and metals', level: 'SPSO', theme: 'chemistry',
    summary: [
      'Elements are arranged by increasing proton number. Groups (columns) share the same number of outer electrons; periods (rows) share the same number of shells.',
      'Metals are on the left, non-metals on the right. Across a period, elements change from metallic to non-metallic.',
      'Group 1 (alkali metals) are soft and react with water to make an alkali and hydrogen. Reactivity increases down the group.',
      'Group 17 (halogens) are coloured, diatomic non-metals. Reactivity decreases down the group; a more reactive halogen displaces a less reactive one.',
      'Group 18 (noble gases) are unreactive because they have full outer shells.',
      'Transition metals are hard and dense, form coloured compounds, have variable oxidation states and are useful catalysts.',
      'Reactivity series: K, Na, Ca, Mg, Al, (C), Zn, Fe, Pb, (H), Cu, Ag, Au. A more reactive metal displaces a less reactive one from its compounds. Iron rusts with water and oxygen.'
    ],
    terms: [
      ['Group', 'A vertical column of elements with the same number of outer electrons.'],
      ['Period', 'A horizontal row of elements with the same number of electron shells.'],
      ['Alkali metals', 'Group 1 metals that react with water to form alkalis.'],
      ['Halogens', 'Group 17 elements, which exist as diatomic molecules.'],
      ['Noble gases', 'Group 18 elements, unreactive because of full outer shells.'],
      ['Displacement', 'A more reactive element pushes a less reactive one out of a compound.'],
      ['Alloy', 'A mixture of a metal with other elements, e.g. steel, brass.']
    ],
    quiz: [
      q('Which is most reactive with water?', ['Potassium', 'Lithium', 'Sodium', 'Magnesium'], 'Reactivity increases down Group 1.'),
      q('Why are noble gases unreactive?', ['They have full outer shells', 'They are gases', 'They are heavy', 'They have no electrons'], 'They do not need to gain, lose or share electrons.'),
      q('Chlorine water is added to potassium bromide. What happens?', ['Bromine is displaced', 'No reaction', 'Chlorine is displaced', 'Potassium is displaced'], 'Chlorine is more reactive than bromine.'),
      q('Elements in the same period have the same number of…', ['electron shells', 'outer electrons', 'protons', 'neutrons'], 'Groups share outer electrons.'),
      q('Which property is typical of transition metals?', ['Coloured compounds', 'Very low density', 'Very soft', 'Unreactive gases'], 'Copper(II) sulfate is blue, for example.'),
      q('Zinc is placed in copper(II) sulfate solution. The result is…', ['Copper is displaced, solution turns colourless', 'No reaction', 'Zinc is displaced', 'Hydrogen is made'], 'Zinc is above copper in the reactivity series.'),
      q('Which two things are needed for iron to rust?', ['Water and oxygen', 'Water and salt', 'Oxygen and heat', 'Carbon dioxide and water'], 'Salt speeds it up but is not needed.'),
      q('Why are alloys often used instead of pure metals?', ['They are harder and stronger', 'They are always cheaper', 'They conduct better', 'They are lighter'], 'Different-sized atoms stop layers sliding.')
    ],
    tips: [
      'Learn the reactivity series with a mnemonic, including where carbon and hydrogen go.',
      'Describe trends with “down the group” and give a reason using electrons.',
      'For displacement, state the observation (colour change, solid forms), not only the product.',
      'Rust prevention: barrier methods (paint, oil, plastic) and sacrificial protection (zinc, galvanising).'
    ],
    facts: [
      'Caesium reacts so violently that it explodes on contact with water.',
      'Mendeleev left gaps in his periodic table and correctly predicted elements that had not been discovered.'
    ]
  },
  {
    id: 'ol-redox', emoji: '🔋', title: 'Redox, electrolysis and energy changes', level: 'SPSO', theme: 'chemistry',
    summary: [
      'Oxidation is gain of oxygen, loss of electrons or increase in oxidation state. Reduction is the opposite. Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons).',
      'A redox reaction has oxidation and reduction happening together. The oxidising agent is itself reduced.',
      'Electrolysis uses electricity to break down a molten or dissolved ionic compound.',
      'Cations (+) go to the cathode (−) and gain electrons (reduction). Anions (−) go to the anode (+) and lose electrons (oxidation).',
      'Electrolysis of molten lead(II) bromide gives lead at the cathode and bromine at the anode. Electroplating and purifying copper use electrolysis.',
      'Exothermic reactions give out heat (ΔH negative), e.g. combustion, neutralisation. Endothermic reactions take in heat (ΔH positive), e.g. thermal decomposition.',
      'Bond breaking takes in energy; bond making gives out energy.'
    ],
    terms: [
      ['Oxidation', 'Loss of electrons, gain of oxygen, or increase in oxidation state.'],
      ['Reduction', 'Gain of electrons, loss of oxygen, or decrease in oxidation state.'],
      ['Electrolyte', 'A molten or aqueous ionic compound that conducts and is decomposed.'],
      ['Cathode', 'The negative electrode, where reduction happens.'],
      ['Anode', 'The positive electrode, where oxidation happens.'],
      ['Exothermic', 'A reaction that releases heat to the surroundings.'],
      ['Endothermic', 'A reaction that absorbs heat from the surroundings.']
    ],
    quiz: [
      q('In Mg → Mg²⁺ + 2e⁻, magnesium is…', ['oxidised', 'reduced', 'neutralised', 'unchanged'], 'It loses electrons.'),
      q('During electrolysis, positive ions move to the…', ['cathode', 'anode', 'battery', 'beaker wall'], 'Opposite charges attract.'),
      q('Molten lead(II) bromide is electrolysed. What forms at the anode?', ['Bromine', 'Lead', 'Hydrogen', 'Oxygen'], 'Br⁻ ions lose electrons at the anode.'),
      q('Why must an ionic compound be molten or dissolved for electrolysis?', ['So the ions can move', 'So it is hot', 'So it has electrons', 'So it is a gas'], 'Ions in a solid are fixed.'),
      q('Burning fuel is…', ['exothermic', 'endothermic', 'neither', 'electrolysis'], 'It releases heat.'),
      q('In CuO + H₂ → Cu + H₂O, the reducing agent is…', ['H₂', 'CuO', 'Cu', 'H₂O'], 'Hydrogen takes the oxygen away and is itself oxidised.'),
      q('To copper-plate a spoon, the spoon should be the…', ['cathode', 'anode', 'electrolyte', 'battery'], 'Cu²⁺ ions are reduced onto the cathode.'),
      q('Breaking bonds is…', ['endothermic', 'exothermic', 'neither', 'always fast'], 'Energy is needed to pull atoms apart.')
    ],
    tips: [
      'Use OIL RIG and PANIC (Positive Anode, Negative Is Cathode).',
      'Write half-equations with electrons and make sure the charges balance.',
      'On an energy profile diagram, label reactants, products, ΔH and the activation energy.',
      'For aqueous electrolysis, consider which ions are preferentially discharged.'
    ],
    facts: [
      'Aluminium was once more expensive than gold, until electrolysis made it cheap to extract in 1886.',
      'Hand warmers use the exothermic rusting of iron powder.'
    ]
  },
  {
    id: 'ol-organic', emoji: '🛢️', title: 'Organic chemistry and the atmosphere', level: 'SPSO', theme: 'chemistry',
    summary: [
      'Crude oil is a mixture of hydrocarbons, separated by fractional distillation into fractions such as petrol, kerosene and diesel.',
      'Alkanes (CₙH₂ₙ₊₂) are saturated: only single C–C bonds. They burn and react with chlorine in UV light.',
      'Alkenes (CₙH₂ₙ) have a C=C double bond, so they are unsaturated. They decolourise bromine water.',
      'Cracking breaks long alkanes into shorter alkanes and alkenes, which are more useful.',
      'Alkenes join together in addition polymerisation to make plastics such as poly(ethene). Plastics are non-biodegradable.',
      'Ethanol can be made by fermenting sugar with yeast or by adding steam to ethene. Alcohols + carboxylic acids → esters.',
      'Air is about 78% nitrogen and 21% oxygen. Pollutants include CO, SO₂ (acid rain) and nitrogen oxides. CO₂ and methane are greenhouse gases.'
    ],
    terms: [
      ['Hydrocarbon', 'A compound of hydrogen and carbon only.'],
      ['Homologous series', 'A family of compounds with the same general formula and similar chemical properties.'],
      ['Saturated', 'Having only single carbon–carbon bonds.'],
      ['Cracking', 'Breaking large hydrocarbons into smaller, more useful ones.'],
      ['Polymer', 'A very long molecule made from many small monomers joined together.'],
      ['Fermentation', 'Yeast turning sugar into ethanol and carbon dioxide without oxygen.'],
      ['Greenhouse gas', 'A gas that traps infrared radiation, warming the Earth.']
    ],
    quiz: [
      q('Which test tells an alkene from an alkane?', ['Bromine water turns colourless', 'Limewater turns milky', 'Litmus turns red', 'Splint pops'], 'The C=C bond reacts with bromine.'),
      q('What is the formula of propane (an alkane with 3 carbons)?', ['C₃H₈', 'C₃H₆', 'C₃H₄', 'C₃H₁₀'], 'CₙH₂ₙ₊₂.'),
      q('Why is cracking done?', ['To make shorter, more useful hydrocarbons and alkenes', 'To make crude oil', 'To remove sulfur', 'To make water'], 'Demand for petrol and alkenes is high.'),
      q('Which monomer makes poly(ethene)?', ['Ethene', 'Ethane', 'Ethanol', 'Methane'], 'Ethene’s double bond opens up to join.'),
      q('Incomplete combustion of fuels produces poisonous…', ['carbon monoxide', 'oxygen', 'nitrogen', 'water'], 'It stops blood carrying oxygen.'),
      q('Which gas causes acid rain?', ['Sulfur dioxide', 'Oxygen', 'Argon', 'Helium'], 'It forms sulfuric acid in rain.'),
      q('An alcohol reacts with a carboxylic acid to make…', ['an ester', 'an alkane', 'a polymer', 'a salt only'], 'Esters often smell fruity.'),
      q('What percentage of air is nitrogen?', ['About 78%', 'About 21%', 'About 1%', 'About 50%'], 'Oxygen is about 21%.')
    ],
    tips: [
      'Draw full displayed formulae showing every bond.',
      'Learn the general formulae and name endings: -ane, -ene, -ol, -oic acid.',
      'For polymer questions, show the repeat unit in brackets with “n”.',
      'Link each pollutant to its source and its effect.'
    ],
    facts: [
      'About 8 million tonnes of plastic enter the oceans every year.',
      'The smell of bananas comes from an ester called isoamyl acetate.'
    ]
  },

  /* ================= BIOLOGY ================= */
  {
    id: 'ol-cells', emoji: '🔬', title: 'Cells and movement of substances', level: 'SPSO', theme: 'biology',
    sim: 'Put potato strips into sugar solutions of different concentrations. Watch whether water moves in or out by osmosis, and see the change in mass.',
    summary: [
      'Animal and plant cells both have a nucleus, cytoplasm, cell membrane, mitochondria and ribosomes.',
      'Plant cells also have a cellulose cell wall, chloroplasts and a large central vacuole with cell sap.',
      'Cells are specialised for their job, e.g. red blood cells (no nucleus, biconcave), root hair cells (long extension, large surface area).',
      'Cells → tissues → organs → organ systems → organism.',
      'Diffusion: net movement of particles from a region of higher concentration to lower concentration. It needs no energy.',
      'Osmosis: net movement of water molecules from a region of higher water potential to lower water potential through a partially permeable membrane.',
      'Active transport moves substances against a concentration gradient and needs energy from respiration (e.g. root hairs taking in mineral ions).'
    ],
    terms: [
      ['Cell membrane', 'Partially permeable layer that controls what enters and leaves the cell.'],
      ['Mitochondrion', 'Organelle where aerobic respiration releases energy.'],
      ['Chloroplast', 'Organelle containing chlorophyll, where photosynthesis happens.'],
      ['Diffusion', 'Net movement of particles down a concentration gradient.'],
      ['Osmosis', 'Net movement of water across a partially permeable membrane, from higher to lower water potential.'],
      ['Active transport', 'Movement against a concentration gradient using energy.'],
      ['Turgid', 'A plant cell that is firm because its vacuole is full of water.']
    ],
    quiz: [
      q('Which structure is found in plant cells but not animal cells?', ['Cell wall', 'Nucleus', 'Cell membrane', 'Mitochondria'], 'Cellulose cell wall, chloroplasts and a large vacuole.'),
      q('Where does aerobic respiration take place?', ['Mitochondria', 'Nucleus', 'Ribosome', 'Cell wall'], 'Mitochondria release energy from glucose.'),
      q('A potato strip in concentrated sugar solution will…', ['lose mass', 'gain mass', 'stay the same', 'burst'], 'Water leaves by osmosis.'),
      q('Red blood cells placed in pure water will…', ['swell and burst', 'shrink', 'stay the same', 'become plasmolysed'], 'Animal cells have no cell wall to stop them bursting.'),
      q('Which process needs energy from respiration?', ['Active transport', 'Diffusion', 'Osmosis', 'Evaporation'], 'It moves substances against the gradient.'),
      q('Root hair cells have a long extension to…', ['increase surface area for absorption', 'anchor the plant', 'make food', 'store starch'], 'More area means faster uptake.'),
      q('Oxygen moves from the alveoli into the blood by…', ['diffusion', 'active transport', 'osmosis', 'respiration'], 'From high to low concentration.'),
      q('A group of similar cells working together is a…', ['tissue', 'organ', 'system', 'organelle'], 'Tissues make up organs.')
    ],
    tips: [
      'In osmosis answers, always say “water potential” and “partially permeable membrane”.',
      'Say “net movement”: particles move both ways, but more go one way.',
      'Plant cells become plasmolysed, not “burst”; animal cells can burst.',
      'Link each specialised cell’s feature to its function.'
    ],
    facts: [
      'Your body has about 37 trillion cells.',
      'An ostrich egg yolk is a single cell, one of the largest known.'
    ]
  },
  {
    id: 'ol-enzymes', emoji: '🧬', title: 'Biological molecules and enzymes', level: 'SPSO', theme: 'biology',
    sim: 'Change the temperature and pH and see how fast the enzyme works. Find the optimum, and see what happens when the enzyme denatures.',
    summary: [
      'Carbohydrates (sugars, starch, glycogen, cellulose) are made of C, H and O and are the main energy source.',
      'Proteins are made of amino acids. Fats are made of glycerol and fatty acids and store energy and insulate.',
      'Food tests: iodine turns blue-black with starch; Benedict’s turns brick-red with reducing sugar when heated; biuret turns violet with protein; the ethanol emulsion test gives a cloudy white emulsion with fats.',
      'Enzymes are proteins that act as biological catalysts: they speed up reactions without being used up.',
      'Lock and key: the substrate fits into the enzyme’s specific active site to form an enzyme–substrate complex.',
      'Enzyme activity rises with temperature up to the optimum (about 37 °C in humans). Above that, the active site changes shape and the enzyme is denatured.',
      'Each enzyme has an optimum pH, e.g. pepsin in the stomach works best at about pH 2; amylase at about pH 7.'
    ],
    terms: [
      ['Enzyme', 'A protein that speeds up a chemical reaction in living things.'],
      ['Substrate', 'The molecule an enzyme acts on.'],
      ['Active site', 'The part of the enzyme where the substrate binds.'],
      ['Denatured', 'Permanently changed shape of an enzyme’s active site, so it no longer works.'],
      ['Optimum', 'The temperature or pH where an enzyme works fastest.'],
      ['Amino acids', 'The building blocks of proteins.'],
      ['Benedict’s test', 'Test for reducing sugars: blue to green, yellow, orange or brick-red on heating.']
    ],
    quiz: [
      q('Which test shows starch?', ['Iodine turns blue-black', 'Benedict’s turns brick-red', 'Biuret turns violet', 'Cloudy emulsion'], 'Iodine solution with starch.'),
      q('Proteins are made of…', ['amino acids', 'glucose', 'glycerol only', 'fatty acids only'], 'Many amino acids linked together.'),
      q('Why does an enzyme stop working at 70 °C?', ['Its active site changes shape (denatured)', 'It is killed', 'It melts', 'It runs out of energy'], 'Enzymes are molecules, not living things, so they are not “killed”.'),
      q('Enzymes are specific because…', ['each active site fits only one substrate shape', 'they are proteins', 'they are small', 'they work at 37 °C'], 'Lock and key.'),
      q('Pepsin works best at about pH…', ['2', '7', '9', '12'], 'The stomach is acidic.'),
      q('What does amylase break down?', ['Starch into maltose', 'Protein into amino acids', 'Fat into glycerol', 'Glucose into starch'], 'Amylase is a carbohydrase.'),
      q('At low temperature (5 °C), enzyme activity is low because…', ['molecules move slowly, so fewer collisions', 'the enzyme is denatured', 'there is no substrate', 'the pH changes'], 'Warming it up restores activity.'),
      q('Which test gives a violet colour with protein?', ['Biuret', 'Iodine', 'Benedict’s', 'Ethanol'], 'Biuret reagent.')
    ],
    tips: [
      'Never say enzymes are “killed”. Say denatured.',
      'Describe graphs fully: rise, optimum value with units, then sharp fall.',
      'For food tests, give the reagent, method (heat?) and both the starting and positive colours.',
      'Enzymes are not used up. Mention this in definitions.'
    ],
    facts: [
      'Biological washing powders contain enzymes that digest food stains at low temperatures.',
      'Catalase can break down about 40 million hydrogen peroxide molecules per second.'
    ]
  },
  {
    id: 'ol-nutrition', emoji: '🍃', title: 'Nutrition in plants and humans', level: 'SPSO', theme: 'biology',
    summary: [
      'Photosynthesis: carbon dioxide + water → glucose + oxygen, using light energy absorbed by chlorophyll.',
      'Limiting factors for photosynthesis are light intensity, carbon dioxide concentration and temperature.',
      'Leaves are adapted: broad and thin, with palisade cells packed with chloroplasts, stomata for gas exchange and veins (xylem and phloem).',
      'Human digestion breaks large insoluble food molecules into small soluble ones that can be absorbed.',
      'Mouth: amylase starts digesting starch. Stomach: pepsin digests protein in acid. Small intestine: digestion is completed with enzymes from the pancreas and intestine wall.',
      'Bile from the liver emulsifies fats into small droplets, increasing the surface area for lipase.',
      'Villi in the small intestine give a huge surface area, with capillaries and lacteals to absorb nutrients. Water is absorbed mainly in the small intestine and colon.'
    ],
    terms: [
      ['Photosynthesis', 'Plants using light energy to make glucose from CO₂ and water.'],
      ['Chlorophyll', 'Green pigment that absorbs light energy.'],
      ['Limiting factor', 'The factor in shortest supply that limits the rate of a process.'],
      ['Stomata', 'Pores in the leaf (mostly the underside) for gas exchange.'],
      ['Digestion', 'Breakdown of large insoluble food molecules into small soluble ones.'],
      ['Emulsification', 'Breaking fats into small droplets (by bile).'],
      ['Villi', 'Finger-like projections in the small intestine for absorption.']
    ],
    quiz: [
      q('What are the products of photosynthesis?', ['Glucose and oxygen', 'Carbon dioxide and water', 'Starch and CO₂', 'Oxygen and water'], 'CO₂ + H₂O → glucose + O₂.'),
      q('Which is NOT a limiting factor for photosynthesis?', ['Oxygen concentration', 'Light intensity', 'CO₂ concentration', 'Temperature'], 'Oxygen is a product.'),
      q('Where is most chlorophyll found in a leaf?', ['Palisade mesophyll cells', 'Epidermis', 'Xylem', 'Root hairs'], 'They are near the upper surface for most light.'),
      q('What does bile do?', ['Emulsifies fats', 'Digests protein', 'Digests starch', 'Absorbs water'], 'It is not an enzyme.'),
      q('Where does protein digestion begin?', ['Stomach', 'Mouth', 'Large intestine', 'Liver'], 'Pepsin works in acid.'),
      q('Why do villi help absorption?', ['They give a large surface area', 'They make enzymes', 'They store food', 'They make bile'], 'Plus thin walls and a good blood supply.'),
      q('A plant is kept in the dark for 2 days, then a leaf is tested with iodine. It stays brown because…', ['no starch was made', 'iodine does not work on leaves', 'the leaf has no chlorophyll', 'starch turned to protein'], 'This is called destarching.'),
      q('Into what is fat digested?', ['Fatty acids and glycerol', 'Amino acids', 'Glucose', 'Maltose'], 'By lipase.')
    ],
    tips: [
      'Write the photosynthesis word equation with “light energy” and “chlorophyll” above the arrow.',
      'For limiting factor graphs, say which factor limits on each part of the curve.',
      'Bile is not an enzyme; it emulsifies fats.',
      'Learn which enzyme acts where, on what substrate, and what the products are.'
    ],
    facts: [
      'The small intestine is about 6 m long. Its folds and villi give it an inner surface of about 30 m², roughly half a badminton court.',
      'One large tree can release enough oxygen in a year for about two people.'
    ]
  },
  {
    id: 'ol-transport', emoji: '❤️', title: 'Transport and respiration in humans', level: 'SPSO', theme: 'biology',
    summary: [
      'Humans have a double circulation: blood passes through the heart twice in each complete circuit (to the lungs, then to the body).',
      'The left ventricle has the thickest wall because it pumps blood all around the body. Valves stop blood flowing backwards.',
      'Arteries carry blood away from the heart at high pressure (thick, elastic walls). Veins return blood at low pressure and have valves. Capillaries have walls one cell thick for exchange.',
      'Blood: red blood cells carry oxygen using haemoglobin; white blood cells fight infection; platelets help clotting; plasma carries dissolved substances.',
      'Aerobic respiration: glucose + oxygen → carbon dioxide + water, releasing a lot of energy.',
      'Anaerobic respiration in muscles: glucose → lactic acid, releasing less energy and creating an oxygen debt. In yeast: glucose → ethanol + carbon dioxide.',
      'Gas exchange happens in the alveoli, which are thin, moist, numerous and surrounded by capillaries.'
    ],
    terms: [
      ['Double circulation', 'Blood passes through the heart twice in one complete circuit.'],
      ['Haemoglobin', 'Red protein in red blood cells that carries oxygen.'],
      ['Artery', 'Vessel carrying blood away from the heart at high pressure.'],
      ['Vein', 'Vessel carrying blood to the heart, with valves.'],
      ['Capillary', 'Tiny vessel with a one-cell-thick wall for exchange of materials.'],
      ['Aerobic respiration', 'Releasing energy from glucose using oxygen.'],
      ['Oxygen debt', 'Oxygen needed after exercise to break down lactic acid.']
    ],
    quiz: [
      q('Which chamber of the heart has the thickest wall?', ['Left ventricle', 'Right ventricle', 'Left atrium', 'Right atrium'], 'It pumps blood to the whole body.'),
      q('Which blood vessel has valves along its length?', ['Vein', 'Artery', 'Capillary', 'Aorta'], 'Valves stop backflow at low pressure.'),
      q('What carries oxygen in the blood?', ['Haemoglobin in red blood cells', 'Plasma', 'Platelets', 'White blood cells'], 'Forms oxyhaemoglobin.'),
      q('What are the products of aerobic respiration?', ['Carbon dioxide and water', 'Lactic acid', 'Glucose and oxygen', 'Ethanol only'], 'Plus a lot of energy.'),
      q('During hard exercise, muscles produce…', ['lactic acid', 'ethanol', 'glucose', 'starch'], 'Anaerobic respiration.'),
      q('Why do capillaries have very thin walls?', ['Short diffusion distance', 'To hold high pressure', 'To stop backflow', 'To store blood'], 'Exchange happens quickly.'),
      q('Which vessel carries deoxygenated blood to the lungs?', ['Pulmonary artery', 'Pulmonary vein', 'Aorta', 'Vena cava'], 'It is the only artery with deoxygenated blood.'),
      q('Which of these helps alveoli with gas exchange?', ['Large surface area and thin walls', 'Thick walls', 'Few capillaries', 'Dry surface'], 'Moist, thin and well supplied with blood.')
    ],
    tips: [
      'Respiration releases energy; it does not “make” or “produce” energy.',
      'Breathing and respiration are different: breathing is moving air, respiration is a chemical reaction in cells.',
      'Trace the path of blood through the heart in order, naming each chamber and vessel.',
      'Pulmonary artery and pulmonary vein are the exceptions for oxygenated/deoxygenated blood.'
    ],
    facts: [
      'If all your blood vessels were laid end to end, they would stretch about 100 000 km, more than twice around the Earth.',
      'Your heart beats about 100 000 times a day.'
    ]
  },
  {
    id: 'ol-genetics', emoji: '🧬', title: 'Reproduction and inheritance', level: 'SPSO', theme: 'biology',
    summary: [
      'Asexual reproduction needs one parent and makes genetically identical offspring. Sexual reproduction involves the fusion of male and female gametes, giving variation.',
      'DNA is a double helix. A gene is a length of DNA that codes for one protein. Genes are carried on chromosomes in the nucleus.',
      'Human body cells have 46 chromosomes (23 pairs). Gametes have 23 (haploid).',
      'Mitosis makes two identical cells for growth and repair. Meiosis makes four genetically different gametes with half the chromosome number.',
      'Alleles are different forms of a gene. A dominant allele (capital letter) shows when present; a recessive allele (small letter) shows only when there are two copies.',
      'Genotype is the alleles you have (e.g. Tt); phenotype is the characteristic you show (e.g. tall).',
      'A cross Tt × Tt gives a 3 : 1 ratio of dominant to recessive phenotype. Sex is decided by X and Y chromosomes: XX female, XY male.'
    ],
    terms: [
      ['Gene', 'A length of DNA that codes for a protein.'],
      ['Allele', 'One of the different forms of a gene.'],
      ['Dominant', 'An allele expressed when only one copy is present.'],
      ['Recessive', 'An allele expressed only when two copies are present.'],
      ['Homozygous', 'Having two identical alleles (TT or tt).'],
      ['Heterozygous', 'Having two different alleles (Tt).'],
      ['Meiosis', 'Cell division that halves the chromosome number to make gametes.']
    ],
    quiz: [
      q('How many chromosomes are in a human sperm cell?', ['23', '46', '92', '12'], 'Gametes are haploid.'),
      q('Two heterozygous tall plants (Tt × Tt) are crossed. The ratio of tall to short is…', ['3 : 1', '1 : 1', '1 : 2 : 1', 'all tall'], 'TT, Tt, Tt are tall; tt is short.'),
      q('Which cell division is used for growth and repair?', ['Mitosis', 'Meiosis', 'Fertilisation', 'Mutation'], 'It makes identical cells.'),
      q('A person with genotype Bb has brown eyes (B dominant). They are…', ['heterozygous', 'homozygous dominant', 'homozygous recessive', 'haploid'], 'Two different alleles.'),
      q('What is the chance a baby is a boy?', ['50%', '25%', '75%', '100%'], 'XX × XY gives half XX and half XY.'),
      q('Which gives genetic variation?', ['Sexual reproduction', 'Taking cuttings', 'Binary fission', 'Mitosis'], 'Gametes from two parents combine.'),
      q('Tt × tt gives what ratio of tall to short?', ['1 : 1', '3 : 1', 'all short', 'all tall'], 'Half Tt, half tt.'),
      q('Genes are made of…', ['DNA', 'protein', 'fat', 'glucose'], 'DNA codes for proteins.')
    ],
    tips: [
      'Draw genetic diagrams fully: parents’ phenotypes and genotypes, gametes, Punnett square, offspring genotypes, phenotypes and ratio.',
      'Use one letter for the gene: capital for dominant, small for recessive.',
      'Ratios are probabilities; real numbers may not match exactly.',
      'Do not mix up mitosis (identical) and meiosis (variation).'
    ],
    facts: [
      'If all the DNA in one of your cells were stretched out, it would be about 2 m long.',
      'Gregor Mendel worked out the laws of inheritance by growing about 28 000 pea plants.'
    ]
  },
  {
    id: 'ol-ecology', emoji: '🌍', title: 'Ecology and the environment', level: 'SPSO', theme: 'biology',
    summary: [
      'An ecosystem is a community of organisms interacting with each other and their physical environment.',
      'Food chains start with a producer. Energy flows from the Sun through producers to consumers; only about 10% is passed on at each step.',
      'Energy is lost at each trophic level through respiration, movement, heat and undigested waste, so food chains are short.',
      'Pyramids of numbers and biomass show the amount at each trophic level.',
      'The carbon cycle: photosynthesis removes CO₂; respiration, decomposition and combustion return it.',
      'Decomposers (bacteria and fungi) break down dead matter and recycle nutrients.',
      'Human impact: deforestation, pollution (e.g. eutrophication from fertilisers), and global warming from extra greenhouse gases. Conservation protects biodiversity.'
    ],
    terms: [
      ['Ecosystem', 'A community of organisms and their physical environment.'],
      ['Producer', 'An organism that makes its own food by photosynthesis.'],
      ['Trophic level', 'A feeding level in a food chain.'],
      ['Decomposer', 'An organism that breaks down dead matter (bacteria, fungi).'],
      ['Biomass', 'The total mass of living material.'],
      ['Eutrophication', 'Excess nutrients cause algal blooms, leading to oxygen loss in water.'],
      ['Biodiversity', 'The variety of different species in an area.']
    ],
    quiz: [
      q('What is the original source of energy in almost all food chains?', ['The Sun', 'Producers', 'Decomposers', 'Soil'], 'Producers capture light energy.'),
      q('About how much energy passes to the next trophic level?', ['10%', '50%', '90%', '100%'], 'Most is lost as heat and in respiration.'),
      q('Which process removes CO₂ from the air?', ['Photosynthesis', 'Respiration', 'Combustion', 'Decomposition'], 'The rest return CO₂.'),
      q('Why are food chains usually short?', ['Energy is lost at each level', 'Animals are lazy', 'There are too many producers', 'Decomposers eat the energy'], 'Little energy reaches high levels.'),
      q('What happens first in eutrophication?', ['Fertiliser runs into water and algae grow quickly', 'Fish die', 'Bacteria use up oxygen', 'Water freezes'], 'Then algae die, bacteria decompose them and use up oxygen.'),
      q('What do decomposers do?', ['Break down dead matter and recycle nutrients', 'Make food from light', 'Eat only plants', 'Produce oxygen'], 'Bacteria and fungi.'),
      q('Deforestation increases CO₂ in the air because…', ['fewer trees photosynthesise and burning releases CO₂', 'trees make CO₂', 'soil absorbs oxygen', 'animals breathe more'], 'Two effects together.'),
      q('A pyramid of biomass shows…', ['the mass of living material at each level', 'the number of organisms', 'the energy from the Sun', 'the size of each animal'], 'It is nearly always pyramid-shaped.')
    ],
    tips: [
      'Arrows in a food chain show the direction of energy flow: from the eaten to the eater.',
      'Explain energy loss with specific reasons: respiration, heat, excretion, uneaten parts.',
      'Learn eutrophication as a sequence of steps.',
      'Explain why a pyramid of numbers may not be a pyramid (e.g. one tree feeding many insects).'
    ],
    facts: [
      'Singapore’s Bukit Timah Nature Reserve has more tree species than the whole of North America.',
      'Phytoplankton in the oceans produce about half of the oxygen we breathe.'
    ]
  }
  );
})();
