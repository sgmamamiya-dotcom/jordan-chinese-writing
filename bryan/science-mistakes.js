/* Bryan's science mistakes (错题本).
   To add a question, copy one entry and change it:
   id      — unique, e.g. '2026-11-q5'
   date    — when Bryan got it wrong
   source  — where it came from
   topic   — short topic name
   q       — the question
   pic     — optional: key of a picture in SCI_MISTAKE_PICS (science-mistakes.html)
   a       — the options, in the paper's order
   c       — index of the correct option (0 = option 1)
   was     — index of the option Bryan chose the first time
   why     — why the right answer is right
   trap    — why the option Bryan chose is wrong (the thinking slip)
   habit   — one exam habit to take away
*/
window.SCI_MISTAKES = [
  {
    id: '2026-11-plant-reproduce',
    date: '2026-11-22',
    source: 'Science worksheet · Q3',
    topic: 'Life cycle of a flowering plant',
    q: 'The diagram shows the different stages of a flowering plant. In which stage(s) is the plant able to reproduce?',
    pic: 'plantStages',
    a: ['D only', 'B and C only', 'C and D only', 'A, B, C and D'],
    c: 2,
    was: 0,
    why: 'The flower is the reproductive part of a flowering plant. Once a plant has flowers (C), it is mature and can reproduce: pollination and fertilisation can take place. D has flowers and a fruit, so it can reproduce too. A (seed) and B (seedling) are not mature yet and have no flowers.',
    trap: '"D only" treats the fruit as the start of reproduction. The fruit is the RESULT of reproduction: it only forms after fertilisation has already happened in the flower.',
    habit: 'See a FLOWER → the plant is mature and CAN reproduce. The fruit is evidence that it already did.'
  },
  {
    id: '2026-11-fertilised-egg',
    date: '2026-11-22',
    source: 'Science worksheet · Q4',
    topic: 'Human reproduction',
    q: 'Which of the following statements is NOT correct?',
    a: [
      'The egg is produced in the ovary.',
      'The sperm is produced in the testis.',
      'The fertilised egg develops in the ovary.',
      'The fusion of the sperm and egg results in a fertilised egg.'
    ],
    c: 2,
    was: 0,
    why: 'The fertilised egg develops into a baby in the WOMB (uterus), not in the ovary. Statements 1, 2 and 4 are all correct.',
    trap: 'Option 1 is a CORRECT statement: eggs really are produced in the ovary. The question asks for the one that is NOT correct, so a true statement can never be the answer.',
    habit: 'Circle NOT in the question. Before you write your answer, check: "Is the option I chose actually WRONG?"'
  }
];
