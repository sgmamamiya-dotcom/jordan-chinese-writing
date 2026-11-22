/* Bryan's math mistakes (错题本).
   To add a question, copy one entry and change it:
   id      — unique, e.g. '2026-11-work-rate'
   date    — when it was added
   source  — where it came from
   topic   — short topic name
   q       — the question (blank lines start a new paragraph)
   answer  — the final number (used to check Bryan's typed answer)
   unit    — shown after the answer box, e.g. 'days'
   hint    — a nudge, shown only if Bryan asks for it
   steps   — the worked solution, one line per step
   trap    — the common wrong idea and why it fails
   check   — how to check the answer
   habit   — one exam habit to take away
*/
window.MATH_MISTAKES = [
  {
    id: '2026-11-work-rate-together',
    date: '2026-11-22',
    source: 'Think Academy · Challenge',
    topic: 'Work rate · efficiency drops when working together',
    q: 'Team A needs 10 days to complete a project alone, while Team B needs 15 days to complete the same project. When the two teams work together, their efficiency decreases. Team A can complete only 4/5 of the work it could complete alone, while Team B can complete only 9/10 of the work it could complete alone.\n\nGiven that the project is completed in 8 days, for how many days did the two teams work together if they tried to minimise the number of days they worked together?',
    answer: 5,
    unit: 'days',
    hint: 'On a day when only ONE team works, which team should it be if you want as few "together" days as possible?',
    steps: [
      'Take the whole project as 1.',
      'Alone: A does 1/10 per day, B does 1/15 per day.',
      'Together: A does 1/10 × 4/5 = 4/50, B does 1/15 × 9/10 = 3/50. Together = 7/50 per day.',
      'On the other days only ONE team works. To have the fewest "together" days, let the faster team, A (1/10 per day), work alone.',
      'Let x = days together, so A works alone for (8 − x) days.',
      '7/50 × x + 1/10 × (8 − x) = 1',
      '7x/50 + 4/5 − 5x/50 = 1  →  2x/50 = 1/5  →  x = 5'
    ],
    trap: 'Thinking that on the "not together" days, A and B both still work, each at full speed. If both teams work on the same day, that IS working together, so their efficiency drops. Also, if that reading were right, A + B would do 1/10 + 1/15 = 1/6 per day and finish in 6 days without ever working together. The equation gives x = 12.5, which is more than 8 days, so it cannot be right.',
    check: '5 days together: 5 × 7/50 = 7/10. A alone for 3 days: 3 × 1/10 = 3/10. 7/10 + 3/10 = 1 ✓. (If B worked alone instead, x = 70/11 ≈ 6.4 days, more than 5, so A is the right choice.)',
    habit: '"Minimise" means there is a choice to make. Ask: "What can I choose here, and which choice gives the smallest number?" Then check that the answer makes sense (it must be less than 8 days).'
  }
];
