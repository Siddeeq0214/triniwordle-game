export const WORD_DEFINITIONS: Record<string, string> = {
  'LIMBO': 'A traditional Caribbean dance where dancers bend backwards to pass under a horizontal bar',
  'BREDD': 'Friend or buddy (from "bred" - brother)',
  'MAMAG': 'To mess around or handle roughly',
  'LICKS': 'Beating or punishment; also can mean a lot of something',
  'TABAN': 'A mess or confusion; disorder',
  'FELLA': 'A guy or man; fellow',
  'CHUPS': 'The sound of sucking teeth to show annoyance or disgust',
  'SWEET': 'Nice, good, or pleasant; also used as "sweet hand" (skilled)',
  'MOUTH': 'Talking too much; "yuh mouth too big"',
  'LIMEY': 'Stuck up or acting superior',
  'BUNJI': 'Friend or buddy; also a popular soca artist',
  'JAMET': 'A rough or uncouth person; troublemaker',
  'ZESSY': 'Messy, chaotic, or scandalous',
  'PAPPY': 'Soft, mushy, or weak',
  'BOOGY': 'Dirty or disgusting; also mucus',
  'CRASS': 'Nasty, disgusting, or of poor quality',
  'SKUNT': 'An exclamation of surprise or frustration (mild curse)',
  'OLEPA': 'Mischievous or annoying behavior',
  'BLIGH': 'Bad luck or misfortune',
  'GYALZ': 'Girls (plural of "gyal")',
  'TIEFY': 'Thief or someone who steals',
  'NANNY': 'Godmother; also a female goat',
  'CHUNE': 'Song or music (from "tune")',
  'WASSI': 'Wasp or any stinging insect',
  'FRAID': 'Afraid or scared',
  'BRUCK': 'Broken or to break something'
};

export const getDefinition = (word: string): string | undefined => {
  return WORD_DEFINITIONS[word.toUpperCase()];
};