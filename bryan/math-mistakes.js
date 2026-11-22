/* Bryan's math mistakes (错题本).
   To add a question, copy one entry and change it:
   id      — unique, e.g. '2026-11-work-rate'
   date    — when it was added
   source  — where it came from
   topic   — short topic name
   q       — the question (blank lines start a new paragraph)
   pic     — optional: key of a drawing in PICS (math-mistakes.html); it goes just before the last paragraph of q
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
  },
  {
    id: '2026-11-marbles-xyz',
    date: '2026-11-22',
    source: 'Practice paper · Q19',
    topic: 'Ratio · before and after changes',
    q: 'Three boxes, X, Y and Z, contained a total of 848 marbles at first. 120 marbles were removed from Box X. The number of marbles in Box Y was doubled. 1/5 of the marbles in Box Z were given away. In the end, the ratio of the number of marbles in Box X to that of Box Y to that of Box Z was 1 : 2 : 1.\n\nHow many marbles were there in Box X at first?',
    answer: 344,
    unit: 'marbles',
    hint: 'Let the END amount in Box X be 1 unit. Then work backwards: how many units were in X, Y and Z at first?',
    steps: [
      'In the end: X = 1 u, Y = 2 u, Z = 1 u.',
      'X at first: 120 were removed, so X = 1 u + 120.',
      'Y at first: it was doubled to 2 u, so Y = 1 u.',
      'Z at first: 4/5 of Z was left = 1 u, so Z = 5/4 u.',
      'Total at first: (1 u + 120) + 1 u + 5/4 u = 848',
      '13/4 u = 728  →  1 u = 224',
      'X at first = 224 + 120 = 344'
    ],
    trap: 'Easy slips: (1) forgetting to add back the 120 at the end and answering 224; (2) treating Y "at first" as 2 u, when 2 u is Y AFTER doubling. Write a clear "at first" line and an "in the end" line for every box before you add anything up.',
    check: 'At first X = 344, Y = 224, Z = 280. Total 344 + 224 + 280 = 848 ✓. After: X = 224, Y = 448, Z = 224 (280 − 56). 224 : 448 : 224 = 1 : 2 : 1 ✓.',
    habit: 'Before / after questions: let the END ratio be units, then undo each change to get the "at first" amounts. Always add back what was removed before writing the answer.'
  },
  {
    id: '2026-11-two-squares-a',
    date: '2026-11-22',
    source: 'Practice paper · Q18(a)',
    topic: 'Geometry · two identical squares (a)',
    q: 'The figure is made up of two identical squares, ABCD and CEFG, a trapezium DEKJ and a triangle DEJ. The line DE is parallel to the line JK. ∠CDE = 54° and ∠EJK = 33°.\n\n(a) Find ∠BCG.',
    pic: 'twoSquares',
    answer: 108,
    unit: '°',
    hint: '"Identical squares" means CD = CE. What kind of triangle is CDE?',
    steps: [
      'The squares are identical, so CD = CE. Triangle CDE is isosceles.',
      '∠CED = ∠CDE = 54°.',
      '∠DCE = 180° − 54° − 54° = 72°.',
      'Angles at a point C add up to 360°: ∠BCD = 90°, ∠ECG = 90°.',
      '∠BCG = 360° − 90° − 90° − 72° = 108°'
    ],
    trap: 'Missing that "identical squares" is a clue: it tells you CD = CE, which makes triangle CDE isosceles. Without that, you cannot find ∠DCE.',
    check: '90° + 72° + 90° + 108° = 360° ✓',
    habit: 'Circle words like "identical", "equal" or "isosceles" in the question. They usually mean two sides are equal, so two angles are equal too.'
  },
  {
    id: '2026-11-two-squares-b',
    date: '2026-11-22',
    source: 'Practice paper · Q18(b)',
    topic: 'Geometry · two identical squares (b)',
    q: 'The figure is made up of two identical squares, ABCD and CEFG, a trapezium DEKJ and a triangle DEJ. The line DE is parallel to the line JK. ∠CDE = 54° and ∠EJK = 33°.\n\n(b) Find ∠DHJ.',
    pic: 'twoSquares',
    answer: 87,
    unit: '°',
    hint: 'DE is parallel to JK. Which angle at E is equal to ∠EJK = 33°?',
    steps: [
      'DE ∥ JK, so ∠DEJ = ∠EJK = 33° (alternate angles).',
      'In triangle DHE: ∠HDE = ∠CDE = 54° and ∠HED = 33°.',
      '∠DHE = 180° − 54° − 33° = 93°.',
      'J, H and E lie on a straight line, so ∠DHJ = 180° − 93° = 87°'
    ],
    trap: 'Stopping at ∠DHE = 93° and writing that as the answer. The question asks for ∠DHJ, which is the angle NEXT to it on the straight line JE.',
    check: '∠DHJ + ∠DHE = 87° + 93° = 180° (angles on a straight line) ✓',
    habit: 'See parallel lines (the arrows) → look for alternate angles (the "Z" shape). Before writing, read the angle name again: which three letters?'
  }
];
