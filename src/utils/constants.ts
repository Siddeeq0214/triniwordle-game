export const WORD_LENGTH = 5 as const;
export const MAX_GUESSES = 6 as const;
export const FLIP_ANIMATION_DURATION = 500 as const;
export const REVEAL_TIME_MS = 300 as const;

export const KEYBOARD_LAYOUT: string[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"],
];

export const MESSAGES = {
  NOT_ENOUGH_LETTERS: "Not enough letters",
  NOT_IN_WORD_LIST: "Not in word list",
  WIN: "CONGRATULATIONS,",
  LOSE: (word: string) => `The word was ${word}`,
} as const;
