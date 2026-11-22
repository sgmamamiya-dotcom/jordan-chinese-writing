// Bryan's vocabulary MCQ bank, typed in from scanned pages of Conquer Vocabulary Workbook.
// Each set: id (unique, never change it once used: progress is stored against it), level, ex (exercise number), theme,
// q: [sentence with ___ for the blank, [option1..option4], correct option number 1-4].
// paperWrong: question numbers Bryan got wrong on paper; they start in his 错题本.
// To add P5/P6 later, append more sets with level 'P5' / 'P6'.
var VOCAB_SETS = [
  // ---------------- P4 · Phrasal verbs ----------------
  { id: 'p4-36', level: 'P4', ex: 36, theme: 'Phrasal verbs', paperWrong: [7], q: [
    ['All the chocolate cakes in the confectionery were ___ by lunchtime.', ['sold out', 'sold away', 'sold off', 'sold over'], 1],
    ['My older brother always ___ to me when we have an argument.', ['gives out', 'gives in', 'gives off', 'gives on'], 2],
    ['Shirley took a long time to ___ the death of her grandmother.', ['get off', 'get in', 'get over', 'get across'], 3],
    ['The noise at the party ___ only after the police arrived.', ['died down', 'died in', 'died over', 'died up'], 1],
    ['The football match was ___ as most of the players had fallen ill.', ['called away', 'called in', 'called on', 'called off'], 4],
    ['Geraldine was ___ her classmate for taking her eraser without her permission.', ['angry to', 'angry on', 'angry with', 'angry for'], 3],
    ['Sam is not ___ for the job of a security guard as he is not brave and strong enough.', ['cut off', 'cut out', 'cut in', 'cut through'], 2],
    ['The lady was ___ by what the sales assistant said and decided to buy the necklace.', ['taken in', 'taken up', 'taken back', 'taken over'], 1],
    ['We were going to the playground and our neighbour decided to ___ with us.', ['come in', 'come along', 'come over', 'come up'], 2],
    ['You have to ___ on aerated drinks as you are putting on too much weight.', ['cut down', 'cut off', 'cut over', 'cut in'], 1]
  ] },
  { id: 'p4-37', level: 'P4', ex: 37, theme: 'Phrasal verbs', paperWrong: [9, 10], q: [
    ['Tommy ___ his aunt. Both of them like to play the violin.', ['takes after', 'takes on', 'takes up', 'takes over'], 1],
    ['This pair of shoes does not ___ that dress.', ['go on', 'go by', 'go with', 'go for'], 3],
    ['Mr Peters is so busy that he cannot ___ any more responsibilities.', ['take in', 'take off', 'take along', 'take on'], 4],
    ['We cannot ___ water for more than three days or we will die.', ['go without', 'go through', 'go by', 'go on'], 1],
    ['The organisers ___ posters to inform the public of the upcoming charity concert.', ['put out', 'put up', 'put in', 'put on'], 2],
    ['The tennis players are determined to ___ the championship title for the school this year.', ['win in', 'win off', 'win on', 'win back'], 4],
    ['The price of these bungalows has ___ but Mr Peterson still cannot afford to buy one.', ['gone up', 'gone down', 'gone away', 'gone in'], 2],
    ['The shop assistants ___ the items at the window display after the promotion was over.', ['took down', 'took over', 'took off', 'took up'], 1],
    ['My mother ___ to help when my brother and I could not come to an agreement.', ['stepped aside', 'stepped in', 'stepped down', 'stepped up'], 2],
    ['The busker ___ a hat ___ after his performance to collect donations from the public.', ['passed … along', 'passed … around', 'passed … away', 'passed … about'], 2]
  ] },
  { id: 'p4-38', level: 'P4', ex: 38, theme: 'Phrasal verbs', paperWrong: [1, 5], q: [
    ['"Let\'s ___ the barbecue as no one is interested in it," said Jerry.', ['call back', 'call off', 'call over', 'call out'], 2],
    ['"Do not lean too far out or the canoe will ___," Sam told his friend.', ['tip off', 'tip up', 'tip out', 'tip over'], 4],
    ['Do not ___ what happened yesterday as she is still very angry.', ['bring in', 'bring on', 'bring about', 'bring up'], 4],
    ['The doctors are hoping that the patient will ___ the night.', ['pull out', 'pull on', 'pull through', 'pull over'], 3],
    ['Josephine will be ___ with work for the next two months. She cannot go to Thailand with us.', ['tied off', 'tied on', 'tied away', 'tied up'], 4],
    ['The police ___ the door when no one opened it after they had knocked three times.', ['broke in', 'broke down', 'broke off', 'broke away'], 2],
    ['Our teacher told us to ___ with our plans for a class barbecue even though he could not join us.', ['go off', 'go ahead', 'go by', 'go up'], 2],
    ['You have to ___ your languages if you want a job as a translator.', ['brush up', 'brush away', 'brush off', 'brush aside'], 1],
    ['The sight of the burnt building ___ memories of the time when my old house burnt down.', ['brings back', 'brings in', 'brings off', 'brings over'], 1],
    ['We tried to ___ her ___ but she would not listen to us.', ['calm … over', 'calm … in', 'calm … down', 'calm … off'], 3]
  ] },
  { id: 'p4-39', level: 'P4', ex: 39, theme: 'Phrasal verbs', paperWrong: [2], q: [
    ['I ___ an interesting storybook when I was at the bookstore today.', ['came off', 'came across', 'came to', 'came about'], 2],
    ['Mr Williams earns just enough for his family to ___.', ['get by', 'get in', 'get up', 'get off'], 1],
    ['Please ___ the wet clothes to dry.', ['hang off', 'hang up', 'hang on', 'hand over'], 2],
    ['I felt ___ when my best friend could not come to my party.', ['let on', 'let out', 'let down', 'let up'], 3],
    ['The electrician will help us to ___ the new plasma television set.', ['set on', 'set in', 'set off', 'set up'], 4],
    ['I was ___ of my house as I had forgotten to bring my keys.', ['locked out', 'locked up', 'locked away', 'locked in'], 1],
    ['I ___ my principal when I was at the shopping centre today.', ['ran on', 'ran into', 'ran off', 'ran to'], 2],
    ['The haughty girl ___ on the rest of her poorer classmates. She refused to mix around with any of them.', ['looked up', 'looked down', 'looked over', 'looked in'], 2],
    ['You will be able to find her easily as her lime green dress will make her ___ from the rest of the crowd.', ['stand away', 'stand in', 'stand over', 'stand out'], 4],
    ['After we had made the report, the police promised to ___ the case of animal abuse in our neighbourhood.', ['look on', 'look into', 'look up', 'look in'], 2]
  ] },
  { id: 'p4-40', level: 'P4', ex: 40, theme: 'Phrasal verbs', paperWrong: [1, 3, 4, 8], q: [
    ['Ten workers were ___ as the company was not doing well.', ['laid over', 'laid down', 'laid off', 'laid out'], 3],
    ['The king has ten servants ___ him.', ['waiting in', 'waiting out', 'waiting up', 'waiting on'], 4],
    ['You have to ___ the dress before you buy it.', ['try at', 'try on', 'try out', 'try for'], 2],
    ['I ___ with a cold the day before I left for my trip.', ['came on', 'came down', 'came off', 'came away'], 2],
    ['The toy robot ___ when the child threw it against the wall.', ['came off', 'came on', 'came apart', 'came about'], 3],
    ['My aunt ___ me as her own daughter. She helps me with my work and takes care of me.', ['looks to', 'looks on', 'looks around', 'looks in'], 2],
    ['On the first day of school, the teacher ___ the rules that the students were supposed to follow.', ['lay over', 'lay in', 'lay down', 'lay up'], 3],
    ['Mr Jones ___ to the demands of the robber so that his family would not be hurt.', ['played along', 'played down', 'played back', 'played off'], 1],
    ['Although I do not like the way my sister messes up our room, I have learnt to ___ it.', ['live with', 'live on', 'live to', 'live by'], 1],
    ['I offered to help her with the housework but she ___ me ___.', ['turned … out', 'turned … off', 'turned … in', 'turned … down'], 4]
  ] },
  { id: 'p4-41', level: 'P4', ex: 41, theme: 'Phrasal verbs', paperWrong: [1, 6, 8, 9, 10], q: [
    ['The customer ___ the expensive watch before buying it.', ['looked out', 'looked over', 'looked to', 'looked up'], 2],
    ['I am certain that I can ___ the robber from among a group of people.', ['pick on', 'pick off', 'pick out', 'pick up'], 3],
    ['Will you be ___ for the tennis club?', ['trying off', 'trying on', 'trying back', 'trying out'], 4],
    ['Francis will ___ as manager of the electronics company from next month.', ['take over', 'take on', 'take up', 'take in'], 1],
    ['The manager ___ what was discussed during the meeting before making a decision.', ['thought over', 'thought up', 'thought out', 'thought of'], 1],
    ['There was too much information for me to ___. I could not remember everything that he said.', ['take up', 'take in', 'take on', 'take over'], 2],
    ['Whenever my brother pretends to be a king, I will ___ and pretend to be a queen.', ['play back', 'play on', 'play along', 'play up'], 3],
    ['"Let\'s ___ things ___ instead of arguing," Mandy told her sister.', ['talk … back', 'talk … up', 'talk … over', 'talk … down'], 3],
    ['No matter what I said, I could not ___ her ___ lending me her necklace.', ['talk … over', 'talk … out to', 'talk … into', 'talk … through'], 3],
    ['A teacher ___ Jim and Peter ___ when they were caught fighting in the canteen.', ['pulled … on', 'pulled … apart', 'pulled … in', 'pulled … off'], 2]
  ] },
  { id: 'p4-42', level: 'P4', ex: 42, theme: 'Phrasal verbs', paperWrong: [6, 10], q: [
    ['The soldiers are ___ for their general\'s command.', ['standing in', 'standing by', 'standing out', 'standing up'], 2],
    ['Geraldine managed to ___ of the room when no one was looking.', ['slip out', 'slip off', 'slip away', 'slip over'], 1],
    ['We are ___ for the nature reserve at dawn tomorrow.', ['setting up', 'setting out', 'setting about', 'setting in'], 2],
    ['If the restaurant does not serve steak, I will ___ fish.', ['settle down', 'settle in', 'settle up', 'settle for'], 4],
    ['Susan has invited me to ___ at her house tonight as it is the weekend.', ['sleep on', 'sleep off', 'sleep through', 'sleep over'], 4],
    ['"Please do not ___ for me. I\'ll be late tonight," Mr Peterson told his wife.', ['wait on', 'wait in', 'wait up', 'wait about'], 3],
    ['James just ___ while his brothers fought. He did not do anything to help.', ['sat over', 'sat on', 'sat by', 'sat in'], 3],
    ['Although the film was boring, we ___ it because we had already paid for the tickets.', ['sat on', 'sat by', 'sat through', 'sat with'], 3],
    ['When Mr Samson lost his job, he had to ___ all the valuable items in his house to make ends meet.', ['sell off', 'sell up', 'sell on', 'sell out'], 1],
    ['The lady told the butler to ___ her guest ___.', ['see … over', 'see … out', 'see … around', 'see … through'], 2]
  ] },
  { id: 'p4-43', level: 'P4', ex: 43, theme: 'Phrasal verbs', paperWrong: [2, 4, 6, 8], q: [
    ['You have to ___ from your friends when you are ill.', ['keep off', 'keep out', 'keep away', 'keep back'], 3],
    ['I was disappointed when Shirley ___ of the outing at the last minute.', ['backed away', 'backed out', 'backed down', 'backed up'], 2],
    ['The kitchen almost caught fire when the hot soup ___.', ['boiled up', 'boiled down', 'boiled over', 'boiled away'], 3],
    ['When the effect of the painkillers ___, you will feel the pain in your arm again.', ['wears away', 'wears down', 'wears out', 'wears off'], 4],
    ['I ___ the railing as tightly as I could as the bus swerved from right to left.', ['held up', 'held in', 'held on to', 'held by'], 3],
    ['My grandmother will ___ her traditional Peranakan outfits to me when I get married.', ['hand down', 'hand out', 'hand in', 'hand back'], 1],
    ['Agnes ___ her sadness at the funeral as she did not want anyone to see her cry.', ['held on', 'held back', 'held over', 'held up'], 2],
    ['My sister ___ me ___ all night with her constant chattering.', ['kept … in', 'kept … over', 'kept … away', 'kept … up'], 4],
    ['Janice ___ very quickly after her illness. She returned to school a week later.', ['bounced around', 'bounced back', 'bounced off', 'bounced away'], 2],
    ['Sophie ___ her savings to buy a present for her mother on Mother\'s Day.', ['dipped into', 'dipped through', 'dipped on', 'dipped out'], 1]
  ] },
  { id: 'p4-44', level: 'P4', ex: 44, theme: 'Phrasal verbs', paperWrong: [1, 2, 10], q: [
    ['That drunkard always ___ trouble at the coffee shop.', ['kicks in', 'kicks about', 'kicks out', 'kicks up'], 4],
    ['The roof of the hut ___ during the thunderstorm.', ['fell out', 'fell over', 'fell in', 'fell back'], 3],
    ['Andrew likes to ___ his robots against the wall.', ['line up', 'line on', 'line over', 'line by'], 1],
    ['You have to ___ what you have done and accept the punishment.', ['face up to', 'face with', 'face off', 'face down'], 1],
    ['I find it hard to ___ my mother\'s high expectations of me.', ['live with', 'live through', 'live up to', 'live on'], 3],
    ['___ on that day, I should not have been so rude to her.', ['Looking out', 'Looking back', 'Looking in', 'Looking up'], 2],
    ['The model student of the school ___ being caught for shoplifting a few days ago.', ['ended up', 'ended by', 'ended in', 'ended with'], 1],
    ['The hikers ___ the unique sound of the rare bird that they were looking for.', ['listened out for', 'listened on', 'listened in on', 'listened up'], 1],
    ['As we walked through the forest, the weaker hikers were ___ the rest of the group.', ['falling out', 'falling off', 'falling under', 'falling behind'], 4],
    ['Mr and Mrs Williams ___ the police when they realised that their daughter was missing.', ['called after', 'called forth', 'called on', 'called in'], 4]
  ] },
  { id: 'p4-45', level: 'P4', ex: 45, theme: 'Phrasal verbs', paperWrong: [2, 3, 5, 6, 8, 9], q: [
    ['The earthquake ___ the entire population in this town.', ['wiped in', 'wiped away', 'wiped out', 'wiped off'], 3],
    ['"Please stop talking and ___ to work now," the teacher told her class.', ['get on', 'get down', 'get through', 'get off'], 2],
    ['Hurry! The train is ___!', ['moving off', 'moving away', 'moving out', 'moving in'], 1],
    ['The hikers were ___ after climbing up the steep slope.', ['worn in', 'worn off', 'worn out', 'worn away'], 3],
    ['I ___ the lady who had dropped her purse in the park.', ['went on', 'went up', 'went after', 'went through'], 3],
    ['Please ___ what I have to say and pass the message to your mother.', ['take on', 'take up', 'take over', 'take down'], 4],
    ['My brother is really ___ me with his annoying habit of imitating what I do.', ['getting through', 'getting by', 'getting with', 'getting to'], 4],
    ['"What are you ___? Can you please explain yourself clearly?" Martha told Marie.', ['getting on', 'getting about', 'getting at', 'getting in'], 3],
    ['The children will ___ an hour after their dinner as they have to wake up early the next day.', ['turn up', 'turn in', 'turn out', 'turn over'], 2],
    ['Just before the lesson ended, the teacher ___ everything that she had taught.', ['summed up', 'made up', 'showed up', 'took up'], 1]
  ] },

  // ---------------- P4 · Objects and sounds / Collective nouns ----------------
  { id: 'p4-60', level: 'P4', ex: 60, theme: 'Objects and sounds', paperWrong: [2, 3, 6, 8], q: [
    ['We could hear the coins ___ in her pockets as she ran.', ['jingling', 'slamming', 'creaking', 'tingling'], 1],
    ['The children covered their ears every time they heard the cymbals ___.', ['bang', 'clash', 'slam', 'rattle'], 2],
    ['I could hear the curtains ___ in the breeze.', ['rattling', 'slapping', 'cracking', 'flapping'], 4],
    ['The room was so quiet that we could hear the clock ___.', ['ticking', 'whistling', 'beating', 'tingling'], 1],
    ['The hinges of the door ___ whenever I open and close it.', ['creak', 'tinkle', 'slam', 'bang'], 1],
    ['We could hear the ___ of the church bells from a distance.', ['bang', 'tinkle', 'peal', 'swish'], 3],
    ['The aeroplanes ___ above our heads during the National Day Parade.', ['clanged', 'zoomed', 'murmured', 'slammed'], 2],
    ['The men sang and ___ on their guitars as they sang a folk song to the elderly at the home.', ['plucked', 'strummed', 'picked', 'tinkled'], 2],
    ['Alfred ___ the stack of cards before distributing them to the other players in order to play the game.', ['pressed', 'slammed', 'shuffled', 'tossed'], 3],
    ['The animals stopped moving when they heard the ___ of the ringmaster\'s whip.', ['rattle', 'beat', 'slam', 'crack'], 4]
  ] },
  { id: 'p4-61', level: 'P4', ex: 61, theme: 'Collective nouns', paperWrong: [2, 5], q: [
    ['The baker has just baked a ___ of garlic bread.', ['set', 'batch', 'bundle', 'bunch'], 2],
    ['My mother wants to fumigate the house to get rid of the ___ of mice.', ['flock', 'gaggle', 'nest', 'brood'], 3],
    ['The wealthy lady wore a ___ of diamonds around her neck.', ['series', 'cluster', 'batch', 'bale'], 2],
    ['The ___ of buffaloes on this farm belongs to a wealthy farmer.', ['group', 'team', 'pride', 'herd'], 4],
    ['The ___ of horses here are all champion race horses.', ['pride', 'swarm', 'stud', 'pack'], 3],
    ['A few campers were killed by a ___ of wolves last night.', ['pack', 'tribe', 'herd', 'litter'], 1],
    ['A ___ of natives has been living at the other end of this forest for the past decade.', ['family', 'team', 'troupe', 'tribe'], 4]
  ] },
  { id: 'p4-62', level: 'P4', ex: 62, theme: 'Collective nouns', paperWrong: [1, 2, 3, 4, 7], q: [
    ['I like looking at the ___ of stars every night.', ['galaxy', 'group', 'bunch', 'batch'], 1],
    ['From the ship, we watched a ___ of whales in the ocean.', ['herd', 'pride', 'school', 'swarm'], 3],
    ['The ___ of labourers sleep in the old house at the end of this road.', ['team', 'gang', 'band', 'troupe'], 2],
    ['In my dream, a ___ of angels came down and lifted me into the sky.', ['group', 'team', 'choir', 'host'], 4],
    ['We saw a ___ of birds flying noisily above us.', ['pride', 'nest', 'flock', 'shoal'], 3],
    ['Our dog has just given birth to a ___ of puppies.', ['litter', 'herd', 'pack', 'nest'], 1],
    ['I screamed in pain when the ___ of drawers fell on my leg.', ['suite', 'set', 'pack', 'chest'], 4],
    ['I like this ___ of pearls very much but I cannot afford to buy it.', ['bundle', 'string', 'set', 'clump'], 2]
  ] },

  // ---------------- P4 · General revision ----------------
  { id: 'p4-76', level: 'P4', ex: 76, theme: 'General revision', paperWrong: [2, 3], q: [
    ['The ___ girl is always unhappy. She seldom smiles or laughs.', ['sulky', 'sensible', 'stern', 'strange'], 1],
    ['The students are looking forward to their ___ to the Science Centre.', ['outing', 'time', 'journey', 'voyage'], 1],
    ['As a/an ___, you will learn from a more experienced staff for a week.', ['amateur', 'student', 'trainee', 'learner'], 3],
    ['Susan went on a shopping ___ at the toy store on her birthday.', ['fling', 'tour', 'spree', 'journey'], 3],
    ['I ___ to lend my sister all my toys when she was ill and had to stay in bed.', ['requested', 'submitted', 'offered', 'allowed'], 3],
    ['Mr Brown is a/an ___ man in his company who is well respected by the staff.', ['strong', 'infamous', 'distinguished', 'striking'], 3],
    ['A ___ occurred in India when two passenger trains collided with each other during the peak period.', ['crisis', 'problem', 'scene', 'tragedy'], 4]
  ] },
  { id: 'p4-77', level: 'P4', ex: 77, theme: 'General revision', paperWrong: [6], q: [
    ['In the past, many ___ from China came to Singapore to work.', ['immigrants', 'nomads', 'tourists', 'customers'], 1],
    ['The fans became ___ when they saw their idol on stage.', ['hysterical', 'comical', 'glad', 'sullen'], 1],
    ['Due to the war, food was ___ and many people starved to death.', ['rare', 'slow', 'scarce', 'abundant'], 3],
    ['Many English words are ___ from Latin.', ['spoken', 'made', 'created', 'derived'], 4],
    ['We decided to ___ up on food as a storm was approaching.', ['pile', 'stock', 'store', 'keep'], 2],
    ['My savings have been ___. I do not have any more money.', ['removed', 'returned', 'exhausted', 'consumed'], 3],
    ['The soldiers made a surprise attack in the middle of the night and ___ the enemy territory within an hour.', ['inspected', 'invaded', 'fought', 'released'], 2]
  ] },
  { id: 'p4-78', level: 'P4', ex: 78, theme: 'General revision', paperWrong: [3, 8, 10], q: [
    ['The man who was ___ of theft was given a short jail term.', ['arrested', 'interrogated', 'convicted', 'judged'], 3],
    ['James was not speaking ___. He was not making sense.', ['nicely', 'considerately', 'politely', 'coherently'], 4],
    ['The ___ from an old boat was floating in the river.', ['rubble', 'dirt', 'debris', 'garbage'], 3],
    ['Sharon was ___ to be a pilot no matter what anyone said.', ['determined', 'certain', 'allowed', 'definite'], 1],
    ['It was ___ of her to talk so loudly at the restaurant.', ['impossible', 'considerate', 'improper', 'immoral'], 3],
    ['I like to go for a ___ in the swimming pool near my house after school every day.', ['plunge', 'dip', 'dive', 'splash'], 2],
    ['When the witch-doctor was asked to heal the sick, she would always perform a ___.', ['chant', 'ritual', 'prayer', 'prediction'], 2],
    ['According to ___, a lady who has just given birth is not allowed to take a bath.', ['practice', 'culture', 'custom', 'gossip'], 3],
    ['The ___ girl refused to listen to her parents. She preferred to do things her own way.', ['rude', 'uncaring', 'inconsiderate', 'obstinate'], 4],
    ['He showed the ___ determination of a young man who was willing to brave all dangers to reach the top of the mountain.', ['gritty', 'clever', 'trained', 'heroic'], 1]
  ] },
  { id: 'p4-83', level: 'P4', ex: 83, theme: 'General revision', paperWrong: [6, 9, 10], q: [
    ['I ___ into a corner when the dog came towards me.', ['reversed', 'retreated', 'regressed', 'returned'], 2],
    ['Samantha has a very ___ personality. She is always happy and cheerful.', ['quiet', 'bubbly', 'timid', 'unique'], 2],
    ['Mavis was chosen to ___ our class in the badminton tournament.', ['symbolise', 'nominate', 'elect', 'represent'], 4],
    ['I spent a week ___ at home after I fractured my arm in an accident.', ['relaxing', 'rejuvenating', 'refreshing', 'recuperating'], 4],
    ['These old buildings will be ___ and new ones will be built in their place.', ['destroyed', 'torn', 'restored', 'demolished'], 4],
    ['That man whom the reporters are talking to is a/an ___ of the first emperor of China.', ['descendant', 'disciple', 'issue', 'product'], 1],
    ['Mr and Mrs Wilkinson were feeling ___ when the kidnappers did not appear with their son at the arranged time.', ['edgy', 'queer', 'irritated', 'sad'], 1],
    ['A lady whom I met in New Zealand became my travelling ___ throughout the trip.', ['acquaintance', 'mate', 'comrade', 'companion'], 4],
    ['I have a/an ___ that there will be an accident if the boys go cycling today.', ['prediction', 'intuition', 'premonition', 'guess'], 3],
    ['The boys ___ out from behind the door to make sure that there was no one around before stepping out of the room.', ['peered', 'stared', 'gazed', 'glimpsed'], 1]
  ] },
  { id: 'p4-84', level: 'P4', ex: 84, theme: 'General revision', paperWrong: [1], q: [
    ['The food at the buffet ___ my appetite. I could not wait to try them.', ['enhanced', 'extended', 'whetted', 'aroused'], 3],
    ['What is the normal ___ of a dog?', ['life', 'lifespan', 'existence', 'duration'], 2],
    ['The hiker who had not drunk any water for a day fainted from ___.', ['starvation', 'fatigue', 'lethargy', 'dehydration'], 4],
    ['In ___ society, man hunted animals for food.', ['old', 'primitive', 'basic', 'past'], 2],
    ['I have decided to ___ in an internationally renowned ballet school.', ['enrol', 'assign', 'administer', 'attend'], 1],
    ['The audience was ___ by the stunts performed by the acrobats.', ['impressed', 'struck', 'fearful', 'indifferent'], 1],
    ['The police officer told the reporters ___ what had happened in the warehouse in the early hours of the morning.', ['shortly', 'slowly', 'quietly', 'briefly'], 4]
  ] },
  { id: 'p4-86', level: 'P4', ex: 86, theme: 'General revision', paperWrong: [1], q: [
    ['The bullet will be ___ from his body during the operation.', ['expelled', 'extended', 'pushed', 'extracted'], 4],
    ['Jack and his friends ___ their names on a tree trunk in the park.', ['pressed', 'carved', 'forced', 'pushed'], 2],
    ['Everyone laughed at the young boy\'s ___.', ['antics', 'activities', 'shows', 'manner'], 1],
    ['She is a ___ woman who will not buy things that she does not need.', ['clever', 'generous', 'meticulous', 'frugal'], 4],
    ['The flower girl\'s hair band was ___ with beautiful fresh flowers.', ['adorned', 'engraved', 'engulfed', 'immersed'], 1],
    ['Maryann wanted to help me with my project but I ___ her help.', ['rejected', 'allowed', 'discounted', 'excluded'], 1],
    ['The building was ___ into a warehouse when the company closed down.', ['transformed', 'converted', 'confined', 'contained'], 2]
  ] },
  { id: 'p4-89', level: 'P4', ex: 89, theme: 'General revision', paperWrong: [3, 5, 6, 7, 9], q: [
    ['In the past, people used salt to ___ their food for several days.', ['protect', 'freeze', 'maintain', 'preserve'], 4],
    ['Joanne has built up a ___ as a good piano and violin teacher.', ['name', 'status', 'reputation', 'character'], 3],
    ['Alice ___ when I fell while trying to kick a ball. It was rude of her.', ['sniggered', 'babbled', 'stammered', 'mumbled'], 1],
    ['My brother was ___ around my room when I was in school today.', ['sneaking', 'snooping', 'sniggering', 'prying'], 2],
    ['Tom ___ on his bicycle when he was first learning to ride.', ['staggered', 'wobbled', 'stumbled', 'toppled'], 2],
    ['The local car company ___ the parts that it needs from overseas to build their cars.', ['exports', 'imports', 'exchanges', 'trades'], 2],
    ['Jim and I could not come to an agreement on what to do so we ___ and decided to play the games that each of us liked.', ['agreed', 'fought', 'reconciled', 'compromised'], 4],
    ['When the tourists arrived at the village, they were surprised to find out that the locals were friendly and not ___.', ['jovial', 'kind', 'hostile', 'quiet'], 3],
    ['Mrs Fraiser is a/an ___ old lady who is always ready to help her neighbours.', ['aloof', 'indifferent', 'notorious', 'genial'], 4],
    ['Going to the university at the age of fifty is not a/an ___ task for some people. They are still able to do very well.', ['insurmountable', 'strange', 'irresistible', 'great'], 1]
  ] },
  { id: 'p4-90', level: 'P4', ex: 90, theme: 'General revision', paperWrong: [3, 7, 10], q: [
    ['Do you know what the ___ of disobeying your teacher are?', ['outcomes', 'results', 'values', 'consequences'], 4],
    ['Sandra ___ that she is related to the President but no one believes her.', ['highlights', 'claims', 'recites', 'argues'], 2],
    ['The police ___ Richard for helping to catch the thief and gave him a certificate of appreciation.', ['encouraged', 'commended', 'awarded', 'committed'], 2],
    ['The guide has to ensure that all safety ___ are met before the hike begins.', ['ideas', 'regulations', 'rulings', 'provisions'], 2],
    ['During the stampede, young children were ___ on by the people who were rushing to get away from the fire.', ['thumped', 'stamped', 'trampled', 'flattened'], 3],
    ['William was released by the police as he had a/an ___ on the night of the murder.', ['reason', 'backing', 'cause', 'alibi'], 4],
    ['John would not have committed the crime if his brother had not ___ him to.', ['instigated', 'predicted', 'started', 'requested'], 1],
    ['To ___ any suspicions you have of me, I will let you search my school bag to prove that I am not a thief.', ['dispel', 'disappear', 'vanish', 'solve'], 1],
    ['I was angry with what she had said about me but I did not have the ___ to scold her. I felt like a coward.', ['ability', 'courage', 'idea', 'thought'], 2],
    ['I like to shop in this supermarket because it has a wide ___ of fish and meat.', ['assortment', 'mixture', 'selection', 'section'], 3]
  ] },
  { id: 'p4-92', level: 'P4', ex: 92, theme: 'General revision', paperWrong: [6, 7, 10], q: [
    ['The sugar will ___ in the coffee when I stir it.', ['disappear', 'vanish', 'dilute', 'dissolve'], 4],
    ['It is too ___ to carry my old laptop when I go out as it is big and heavy.', ['cumbersome', 'impossible', 'ridiculous', 'uncomfortable'], 1],
    ['The police dogs managed to ___ out the trail left by the drug traffickers.', ['sniff', 'smell', 'nose', 'find'], 1],
    ['My mother had an angry ___ on her face when I came home today.', ['sign', 'feature', 'expression', 'appearance'], 3],
    ['If the jewellery is not well crafted, it will be ___ by the jewellery shop.', ['rejected', 'avoided', 'unwanted', 'abandoned'], 1],
    ['My mother has to take on the ___ tasks of being a caregiver, a friend and a playmate to my sisters and me.', ['varied', 'multiple', 'dual', 'common'], 2],
    ['As I was training for the coming swimming meet, I had to sleep early every night and ___ some of my favourite television programmes.', ['amend', 'sacrifice', 'remove', 'end'], 2],
    ['Do you know how many different ___ of insects there are in the Amazon rainforest?', ['selections', 'species', 'specimens', 'forms'], 2],
    ['You have to ___ from talking back to your parents even if you are feeling angry.', ['stop', 'prevent', 'wait', 'refrain'], 4],
    ['The bride and groom held a wedding ___ for their friends after the church service.', ['reception', 'festival', 'gathering', 'carnival'], 1]
  ] },
  { id: 'p4-93', level: 'P4', ex: 93, theme: 'General revision', paperWrong: [1, 8], q: [
    ['The king decided to ___ a war on the neighbouring country.', ['fight', 'attack', 'create', 'wage'], 4],
    ['The pair of earrings ___ the dress very well. She looks very beautiful.', ['shows', 'compliments', 'complements', 'balances'], 3],
    ['___ countries should provide funds to help the poorer countries.', ['Affluent', 'Big', 'Comfortable', 'Valuable'], 1],
    ['A fine will be ___ on those who dirty the lifts.', ['charged', 'fined', 'sentenced', 'imposed'], 4],
    ['It is ___ for both passengers and driver to wear seat belts in the car.', ['mandatory', 'certain', 'legalised', 'confirmed'], 1],
    ['Shirley, who works as a volunteer nurse, has ___ for those who are suffering from fatal illnesses.', ['interest', 'compassion', 'kindness', 'consideration'], 2],
    ['Everyone was shocked to learn about the ___ in oil prices in the newspapers today.', ['blast', 'charge', 'flash', 'surge'], 4],
    ['A large number of people have ___ to the advertisement calling for volunteers to help out at the animal shelter.', ['responded', 'reacted', 'acted', 'agreed'], 1],
    ['A car that was being chased by the police ___ into the river early yesterday morning.', ['threw', 'plunged', 'pushed', 'dropped'], 2],
    ['The airline has ___ our flight to Tokyo next month. We can collect our tickets tomorrow.', ['acceded', 'allowed', 'confirmed', 'confined'], 3]
  ] },
  { id: 'p4-94', level: 'P4', ex: 94, theme: 'General revision', paperWrong: [7], q: [
    ['The salesman has to ___ the target set by his company every month.', ['obtain', 'aim', 'meet', 'get'], 3],
    ['You will be charged if you give ___ information in court.', ['forged', 'common', 'secret', 'false'], 4],
    ['The photographer tried to ___ the animal out by rustling the leaves.', ['attract', 'trap', 'pull', 'lure'], 4],
    ['I ___ about my closet in search of my favourite T-shirt.', ['ransacked', 'rummaged', 'flipped', 'looted'], 2],
    ['All the worshippers ___ outside the church after the service was over.', ['coagulated', 'confined', 'congregated', 'collected'], 3],
    ['Many people jumped out of the burning building and ___ to safety before the explosion occurred.', ['scattered', 'dispersed', 'scrambled', 'stampeded'], 3],
    ['This car seat is not fixed. It can be ___ according to the height of the child.', ['adhered', 'adjusted', 'amended', 'attuned'], 2]
  ] }
];
