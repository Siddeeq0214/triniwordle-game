export const ANSWER_WORDS: readonly string[] = [
  "LIMBO",
  "BREDD",
  "MAMAG",
  "LICKS",
  "TABAN",
  "FELLA",
  "CHUPS",
  "SWEET",
  "MOUTH",
  "LIMEY",
  "BUNJI",
  "JAMET",
  "ZESSY",
  "PAPPY",
  "BOOGY",
  "CRASS",
  "SKUNT",
  "OLEPA",
  "BLIGH",
  "GYALZ",
  "TIEFY",
  "NANNY",
  "CHUNE",
  "WASSI",
  "FRAID",
  "BRUCK",
] as const;

export const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * ANSWER_WORDS.length);
  return ANSWER_WORDS[randomIndex];
};
