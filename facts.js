// Daily surprise facts for the home page.
// e: emoji, q: a question to guess first, a: short answer, fact: the full fact.
window.FACTS = [
  {e:"🐙", q:"How many hearts does an octopus have?", a:"Three", fact:"An octopus has three hearts. Two pump blood to the gills, and one pumps it to the rest of the body."},
  {e:"🍯", q:"Can honey go bad?", a:"Almost never", fact:"Honey almost never goes bad. Pots of honey found in ancient Egyptian tombs, thousands of years old, were still safe to eat."},
  {e:"🪐", q:"On Venus, which is longer: a day or a year?", a:"A day", fact:"A day on Venus is longer than a year on Venus. It spins so slowly that one turn takes 243 Earth days, but it goes around the Sun in only 225."},
  {e:"🍌", q:"Banana or strawberry: which one is a berry?", a:"The banana", fact:"To a scientist, a banana is a berry but a strawberry is not. Berries grow from one flower with seeds inside, and strawberries wear their seeds on the outside."},
  {e:"🦈", q:"Which came first on Earth: sharks or trees?", a:"Sharks", fact:"Sharks are older than trees. Sharks have been around for about 450 million years, and the first trees appeared about 385 million years ago."},
  {e:"🟫", q:"What shape is wombat poop?", a:"Cubes", fact:"Wombats make cube-shaped poop. The cubes don't roll away, which helps wombats mark their territory on rocks and logs."},
  {e:"🦦", q:"What do sea otters do so they don't drift apart while sleeping?", a:"Hold hands", fact:"Sea otters sometimes hold hands while they sleep, so they don't float away from each other on the water."},
  {e:"🦩", q:"What is a group of flamingos called?", a:"A flamboyance", fact:"A group of flamingos is called a flamboyance. \"Flamboyant\" means bright and showy, just like them."},
  {e:"🦋", q:"What do butterflies use to taste food?", a:"Their feet", fact:"Butterflies taste with their feet. When they land on a leaf, they can tell right away if it's good for their eggs."},
  {e:"🗼", q:"Is the Eiffel Tower taller in summer or in winter?", a:"Summer", fact:"The Eiffel Tower grows up to about 15 cm taller in summer. Heat makes the iron expand, and it shrinks back when it gets cold."},
  {e:"☀️", q:"How long does sunlight take to reach Earth?", a:"About 8 minutes", fact:"Sunlight takes about 8 minutes to reach Earth. When you see the Sun, you are seeing how it looked 8 minutes ago."},
  {e:"🐦", q:"Which bird can fly backwards?", a:"The hummingbird", fact:"Hummingbirds can fly backwards, and even upside down for a moment. Their wings beat up to 80 times a second."},
  {e:"🦴", q:"Who has more bones: a baby or a grown-up?", a:"A baby", fact:"Babies are born with about 300 bones, but adults have 206. As you grow, some bones join together."},
  {e:"🪐", q:"Which planet could float in a giant bathtub?", a:"Saturn", fact:"Saturn is so light for its size that it would float in water, if you could find a bathtub big enough."},
  {e:"🐨", q:"How many hours a day can a koala sleep?", a:"Up to 20", fact:"Koalas can sleep up to 20 hours a day. Their gum-leaf food has very little energy, so they rest a lot."},
  {e:"⚡", q:"Which is hotter: lightning or the surface of the Sun?", a:"Lightning", fact:"A bolt of lightning is about five times hotter than the surface of the Sun, for a tiny fraction of a second."},
  {e:"⭐", q:"Does a starfish have a brain?", a:"No", fact:"Starfish have no brain and no blood. A ring of nerves helps them move, and seawater does the job blood does for us."},
  {e:"🥜", q:"Is a peanut really a nut?", a:"No, it's a bean", fact:"Peanuts aren't nuts. They are legumes, like beans and peas, and they grow underground."},
  {e:"⏱️", q:"How long did the shortest war in history last?", a:"About 40 minutes", fact:"The shortest war in history was between Britain and Zanzibar in 1896. It was over in about 40 minutes."},
  {e:"🐧", q:"What do some penguins give to the penguin they like?", a:"A pebble", fact:"Some penguins give a smooth pebble to the penguin they want as a partner. The pebbles are used to build their nest."},
  {e:"🐋", q:"How heavy is a blue whale's heart?", a:"About 180 kg", fact:"A blue whale's heart weighs about 180 kg, more than two grown-ups put together."},
  {e:"🌳", q:"Are there more trees on Earth or stars in our galaxy?", a:"Trees", fact:"There are about 3 trillion trees on Earth, but only about 100 to 400 billion stars in our Milky Way galaxy."},
  {e:"🏔️", q:"Is Mount Everest getting taller or shorter?", a:"Taller", fact:"Mount Everest grows a few millimetres every year, because the land under India keeps pushing into Asia."},
  {e:"🐸", q:"How do frogs drink water?", a:"Through their skin", fact:"Frogs don't drink with their mouths. They soak up water through their skin, especially a patch on their belly."},
  {e:"🐊", q:"Can a crocodile stick out its tongue?", a:"No", fact:"A crocodile can't stick out its tongue. It is held down by a thin skin along the bottom of its mouth."},
  {e:"🌙", q:"Is the Moon moving closer to Earth or further away?", a:"Further away", fact:"The Moon moves about 3.8 cm further from Earth every year, about as fast as your fingernails grow."},
  {e:"🐸", q:"What is special about a glass frog's belly?", a:"It's see-through", fact:"Glass frogs have see-through bellies. Look underneath and you can see their heart beating."},
  {e:"🇸🇬", q:"Why are days in Singapore about 12 hours long all year?", a:"It's near the equator", fact:"Singapore is only about 1 degree north of the equator, so day and night are both about 12 hours long all year round."},
  {e:"☁️", q:"How heavy can one fluffy cloud be?", a:"About 500 tonnes", fact:"A big fluffy cloud can weigh about 500 tonnes, as much as 80 elephants. It floats because the water is spread into tiny droplets."},
  {e:"🦉", q:"Owls can't move their eyes. What do they do instead?", a:"Turn their heads", fact:"Owls can't move their eyes, so they turn their heads instead, up to 270 degrees, which is three-quarters of a circle."},
  {e:"🐜", q:"Do ants have lungs?", a:"No", fact:"Ants have no lungs. Air goes in through tiny holes along their bodies called spiracles."},
  {e:"🔤", q:"Where does the word \"alphabet\" come from?", a:"Alpha + beta", fact:"\"Alphabet\" comes from alpha and beta, the first two letters of the Greek alphabet, just like we say \"ABC\"."},
  {e:"🐘", q:"Which big animal can't jump?", a:"The elephant", fact:"Adult elephants can't jump. They are too heavy, and one foot always stays on the ground when they walk."},
  {e:"🦐", q:"Which sea animal can punch hard enough to crack glass?", a:"The mantis shrimp", fact:"A mantis shrimp punches so fast that it can crack a snail shell, and even the glass of a fish tank."},
  {e:"🔊", q:"Does sound travel faster in water or in air?", a:"Water", fact:"Sound travels about four times faster in water than in air. That's why whales can hear each other from far away."},
  {e:"🪐", q:"How long is one year on Pluto?", a:"248 Earth years", fact:"One year on Pluto lasts 248 Earth years. No one has lived for a whole Pluto year!"},
  {e:"🖐️", q:"Do identical twins have the same fingerprints?", a:"No", fact:"Even identical twins have different fingerprints. Yours are one of a kind."},
  {e:"🦎", q:"Which animal can regrow a lost leg?", a:"The axolotl", fact:"An axolotl can regrow a lost leg, and even parts of its heart and brain."},
  {e:"🌀", q:"What is Jupiter's Great Red Spot?", a:"A giant storm", fact:"Jupiter's Great Red Spot is a storm bigger than the whole Earth, and it has been spinning for hundreds of years."},
  {e:"🀄", q:"About how many strokes does the Chinese character \"biáng\" have?", a:"More than 50", fact:"The character for \"biáng\", from biángbiáng noodles, has more than 50 strokes. It's one of the hardest characters to write!"},
  {e:"🐝", q:"How do honeybees tell each other where flowers are?", a:"They dance", fact:"Honeybees do a \"waggle dance\" to show other bees which way to fly to find flowers, and how far to go."},
  {e:"🐬", q:"How do dolphins sleep without drowning?", a:"Half their brain sleeps", fact:"Dolphins sleep with half of their brain at a time. The awake half keeps them swimming up to the surface to breathe."},
  {e:"🦛", q:"What colour is hippo sweat?", a:"Reddish", fact:"Hippos make a reddish sweat that works like sunscreen and helps keep germs away."},
  {e:"🌈", q:"What shape is a rainbow really?", a:"A full circle", fact:"Rainbows are really full circles. From the ground we only see the top half, but from a plane you can sometimes see the whole ring."},
  {e:"🔥", q:"Which planet is the hottest?", a:"Venus", fact:"Venus is the hottest planet, even though Mercury is closer to the Sun. Its thick clouds trap the heat like a blanket."},
  {e:"🕸️", q:"Weight for weight, which is stronger: spider silk or steel?", a:"Spider silk", fact:"For its weight, spider silk is stronger than steel, and it can stretch too."},
  {e:"🐻‍❄️", q:"What colour is a polar bear's skin?", a:"Black", fact:"Polar bears have black skin. Their fur isn't really white either. Each hair is clear and hollow, and it looks white in the light."},
  {e:"🌍", q:"Is Earth a perfect ball?", a:"No", fact:"Earth isn't a perfect ball. Spinning makes it bulge a little around the middle, at the equator."},
  {e:"🧊", q:"Can water boil and freeze at the same time?", a:"Yes", fact:"At one special low pressure and temperature, called the triple point, water can boil and freeze at the same time."},
  {e:"🍽️", q:"How often does your stomach get a new lining?", a:"Every few days", fact:"Your stomach makes a new inside lining every few days, so its own acid doesn't digest it."}
];

// Same fact for everyone on the same day; changes at midnight.
window.factIndexForToday = function () {
  const d = new Date();
  const day = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
  // Step through the list in a scrambled order so similar facts don't land on back-to-back days.
  return (day * 17) % window.FACTS.length;
};
