export interface Question {
  num: number;
  section: string;
  source: string;
  intro?: string; // shown above the question (e.g. shared-diagram note)
  text: string;
  image?: string;
  options?: string[];
  optionImages?: string[]; // for diagram-choice questions
}

const S1 = 'Questions 46 – 52';
const S2 = 'Questions 53 – 61';
const S3 = 'Questions 62 – 69';

export const QUESTIONS: Question[] = [
  {
    num: 46, section: S1, source: 'WASSCE Nov 2013 Qu 5',
    intro: 'Use the diagram to answer questions 46 and 47.',
    text: 'Find X∩Y∩Z.',
    image: '/images/q46-47.png',
    options: ['{e}', '{h, c}', '{e, h, c}', '{e, f, h, c}'],
  },
  {
    num: 48, section: S1, source: 'WASSCE June 2014 Qu 11',
    text: 'If X = {0, 2, 4, 6}, Y = {1, 2, 3, 4} and Z = {1, 3} are subsets of U = {x: 0 ≤ x ≤ 6}, find X∩(Y′∪Z).',
    options: ['{0, 2, 6}', '{1, 3}', '{0, 6}', '{ }'],
  },
  {
    num: 49, section: S1, source: 'WASSCE June 2015 Qu 42',
    text: 'Describe the shaded portion in the diagram.',
    image: '/images/q49.png',
    options: ['P′∩Q∩R′', '(P∩R)′∩Q', 'P′∩Q∩R', '(P∪Q)′∩R'],
  },
  {
    num: 50, section: S1, source: 'WASSCE Nov 2015 Qu 4',
    text: 'In the Venn diagram, R is a subset of S. Find the set which represents the shaded portion.',
    image: '/images/q50.png',
    options: ['R′', 'S', 'R′∪S', 'R′∩S'],
  },
  {
    num: 51, section: S1, source: 'WASSCE June 2016 Qu 38',
    text: 'Determine M′∩N from the Venn diagram.',
    image: '/images/q51.png',
    options: ['{f, g}', '{e}', '{c, f, g}', '{e, f, g}'],
  },
  {
    num: 52, section: S1, source: 'WASSCE Nov 2016 Qu 1',
    text: 'In a group of people who collected stamps (S), coins (C) or beads (B) as their hobbies, 15 collected stamps, 5 collected coins and 6 collected beads. Everyone who collected coins also collected stamps. Five people collected both stamps and beads and two people collected all the three items. Which of the following Venn diagrams illustrates the given information?',
    optionImages: [
      '/images/q52-a.png',
      '/images/q52-b.png',
      '/images/q52-c.png',
      '/images/q52-d.png',
    ],
  },
  {
    num: 53, section: S2, source: 'WASSCE June 2017 Qu 6',
    text: 'If M = {x: 3 ≤ x < 8} and N = {x: 8 < x ≤ 12}, which of the following is true?\n\nI.  8 ∈ M∩N\nII.  8 ∈ M∪N\nIII.  M∩N = ∅',
    options: ['III only', 'I and II only', 'II and III only', 'I, II and III'],
  },
  {
    num: 54, section: S2, source: 'WASSCE Nov 2017 Qu 31',
    text: 'If X = {1, 3, 5, 2} and Y = {1, 2, 6, 7, 8} are subsets of the universal set U = {1, 2, 3, …, 10}, find the number of elements in (X∪Y)′.',
    options: ['3', '4', '5', '6'],
  },
  {
    num: 55, section: S2, source: 'WASSCE June 2018 Qu 3',
    text: 'In a class of 39 students, 25 offer Fante and 19 offer Twi. Five students do not offer any of the two languages. How many students offer only Twi?',
    options: ['6', '7', '8', '9'],
  },
  {
    num: 56, section: S2, source: 'WASSCE Nov 2018 Qu 5',
    text: 'Which of the following describes the set P = {1, 2, 3, 4, 5, 6}?',
    options: [
      'P = {prime numbers < 7}',
      'P = {x : x is a positive integer < 7}',
      'P = {rational numbers < 7}',
      'P = {x : x is a real number < 7}',
    ],
  },
  {
    num: 57, section: S2, source: 'WASSCE June 2019 Qu 6',
    text: 'If T = {prime numbers} and M = {odd numbers} are subsets of μ = {x: 0 < x ≤ 10, where x is an integer}, find (T′∩M′).',
    options: [
      '{1, 2, 3, 5, 7, 8, 9}',
      '{1, 2, 4, 6, 8, 10}',
      '{1, 4, 6, 8, 10}',
      '{4, 6, 8, 10}',
    ],
  },
  {
    num: 58, section: S2, source: 'WASSCE Nov 2019 Qu 9',
    text: 'If P = {x: −2 < x ≤ 3} and Q = {x: 0 ≤ x < 5} are subsets of μ = {x: −2 ≤ x ≤ 5}. Find P′∪Q.',
    options: [
      '{−2, −1, 0, 1, 2, 3, 4, 5}',
      '{−1, 0, 1, 2, 3, 4, 5}',
      '{−2, 0, 1, 2, 3, 4, 5}',
      '{0, 1, 2, 3, 4}',
    ],
  },
  {
    num: 59, section: S2, source: 'WASSCE Nov 2019 Qu 18',
    text: 'If n(P) = 54, n(Q) = 27 and n(P∪Q) = 69, find n(P∩Q′).',
    options: ['12', '15', '24', '42'],
  },
  {
    num: 60, section: S2, source: 'WASSCE June 2020 Qu 2',
    text: 'If X = {x: x < 7} and Y = {y: y is a factor of 24} are subsets of μ = {1, 2, 3, …, 10}, find X∩Y.',
    options: [
      '{1, 2, 3, 4, 6, 8}',
      '{2, 3, 4, 6, 8}',
      '{1, 2, 3, 4, 6}',
      '{2, 3, 4, 6}',
    ],
  },
  {
    num: 61, section: S2, source: 'WASSCE Nov 2020 Qu 6',
    text: 'Using the Venn diagram, find (X∪Z)′∩Y.',
    image: '/images/q61.png',
    options: ['{8}', '{7, 8}', '{2, 4, 7, 8}', '{7, 8, 10, 11}'],
  },
  {
    num: 62, section: S3, source: 'WASSCE June 2021 Qu 6',
    text: 'If P = {−3 < x < 1} and Q = {−1 < x < 3}, where x is a real number, find P∩Q.',
    options: ['{−1 ≤ x ≤ 1}', '{−3 < x < 1}', '{−3 ≤ x ≤ 1}', '{−1 < x < 1}'],
  },
  {
    num: 63, section: S3, source: 'WASSCE Nov 2021 Qu 1',
    text: 'If X and Y are sets such that n(X) = 20, n(Y) = 30 and n(X∪Y) = 40, find n(X′∩Y).',
    options: ['35', '30', '20', '10'],
  },
  {
    num: 64, section: S3, source: 'WASSCE June 2022 Qu 31',
    text: 'In a class of 30 students, 18 take Mathematics, 5 take both Mathematics and Biology and 8 take neither Mathematics nor Biology. Find the number of students that take Biology.',
    options: ['6', '8', '9', '13'],
  },
  {
    num: 65, section: S3, source: 'WASSCE Nov 2022 Qu 4',
    text: 'Given that M = {x ∈ N: x > 3} and N = {x ∈ N: x < 7}, find M∩N.',
    options: ['{5, 6}', '{4, 5, 6}', '{3, 4, 6}', '{4}'],
  },
  {
    num: 66, section: S3, source: 'WASSCE Nov 2022 Qu 13',
    text: 'In a class of 40 students, (8 + 3x) read chemistry and 12 read Physics only. If 5 students read neither Chemistry nor Physics, find the value of x.',
    options: ['15', '10', '5', '0'],
  },
  {
    num: 67, section: S3, source: 'WASSCE June 2023 Qu 9',
    text: 'If P = {x: 1 ≤ x ≤ 6} and Q = {x: 2 < x < 9} where x ∈ R, find P∩Q.',
    options: ['{x: 2 ≤ x ≤ 6}', '{x: 2 < x ≤ 6}', '{x: 2 ≤ x < 6}', '{x: 2 < x < 6}'],
  },
  {
    num: 68, section: S3, source: 'WASSCE Nov 2023 Qu 2',
    text: 'Given that μ = {a, b, c, d, e, f}, P = {a, c, d, f} and Q = {b, d, e}, find (P′∩Q).',
    options: ['{ }', '{a, f}', '{b, e}', '{d}'],
  },
  {
    num: 69, section: S3, source: 'WASSCE June 2024 Qu 18',
    text: 'If P = {−2, 0, 2, 4, 6} and Q = {−3, −1, 0, 2, 3, 5}, find the set P∩Q.',
    options: ['{ }', '{−3, −1, 3, 5}', '{−2, 4, 6}', '{0, 2}'],
  },
];
