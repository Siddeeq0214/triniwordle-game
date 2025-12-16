import { ANSWER_WORDS } from './words';
import words from 'an-array-of-english-words';

// All the Trinidad Creole words that can be guessed
export const TRINI_WORDS = [
  'MAMAG',
  'LICKS',
  'FELLA',
  'CHUPS',
  'SWEET',
  'MOUTH',
  'BUNJI',
  'JAMET',
  'ZESSY',
  'BLIGH',
  'GYALZ',
  'NANNY',
  'CHUNE',
  'WASSI',
  'FRAID',
  'BOKEY',
  'DUNCE',
  'DOUEN',
  'JORTS',
  'KUYOH',
  'LIPAY',
  'MACCO',
  'MALJO',
  'RINGS',
  'SHIMS',
  'PEONG',
  'ALYUH',
  'TRINI',
  'TOTIN',
  'FADDA',
  'BREDS',
  'BRACE',
  'ACCRA'
];

// You can add more valid 5-letter words here for guesses
// These are common English words that players might try
// Filter all words to only 5-letter words and convert to uppercase
const ALL_5_LETTER_WORDS = words
  .filter((word: string) => word.length === 5)
  .map((word: string) => word.toUpperCase())
  .filter((word: string) => /^[A-Z]+$/.test(word)); // Only letters, no special chars

export const VALID_WORDS = new Set([
  ...ANSWER_WORDS,
  ...TRINI_WORDS,
  ...ALL_5_LETTER_WORDS
]);