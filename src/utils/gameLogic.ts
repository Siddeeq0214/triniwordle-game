import { LetterState, Guess } from '../types';

export const checkGuess = (guess: string, target: string): Guess => {
  const guessLetters = guess.split('');
  const targetLetters = target.split('');
  const states: LetterState[] = Array(guess.length).fill(LetterState.ABSENT);
  const targetLetterCount = new Map<string, number>();

  // Count target letters
  targetLetters.forEach(letter => {
    targetLetterCount.set(letter, (targetLetterCount.get(letter) || 0) + 1);
  });

  // First pass: mark correct positions
  guessLetters.forEach((letter, i) => {
    if (letter === targetLetters[i]) {
      states[i] = LetterState.CORRECT;
      targetLetterCount.set(letter, targetLetterCount.get(letter)! - 1);
    }
  });

  // Second pass: mark present letters
  guessLetters.forEach((letter, i) => {
    if (states[i] === LetterState.CORRECT) return;

    if (targetLetterCount.get(letter) && targetLetterCount.get(letter)! > 0) {
      states[i] = LetterState.PRESENT;
      targetLetterCount.set(letter, targetLetterCount.get(letter)! - 1);
    }
  });

  return { word: guess, states };
};

export const isWinner = (guess: string, target: string): boolean => {
  return guess === target;
};