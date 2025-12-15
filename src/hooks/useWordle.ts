import { useState, useCallback } from 'react';
import { GameState, GameStatus, LetterState, Guess } from '../types';
import { getRandomWord } from '../data/words';
import { checkGuess, isWinner } from '../utils/gameLogic';
import { isValidWord, isValidLength } from '../utils/wordValidation';
import { WORD_LENGTH, MAX_GUESSES, MESSAGES } from '../utils/constants';

interface UseWordleReturn {
  gameState: GameState;
  gameStatus: GameStatus;
  message: string;
  shake: boolean;
  submitGuess: () => void;
  updateCurrentGuess: (letter: string) => void;
  deleteLastLetter: () => void;
  resetGame: () => void;
  letterStates: Map<string, LetterState>;
}

export const useWordle = (): UseWordleReturn => {
  const [gameState, setGameState] = useState<GameState>({
    targetWord: getRandomWord(),
    guesses: [],
    currentGuess: '',
    gameOver: false,
    won: false,
    currentRow: 0
  });

  const [message, setMessage] = useState<string>('');
  const [shake, setShake] = useState<boolean>(false);
  const [letterStates, setLetterStates] = useState<Map<string, LetterState>>(
    new Map()
  );

  const gameStatus: GameStatus = gameState.won 
    ? 'won' 
    : gameState.gameOver 
    ? 'lost' 
    : 'playing';

  const showMessage = useCallback((msg: string, duration = 2000): void => {
    setMessage(msg);
    setTimeout(() => setMessage(''), duration);
  }, []);

  const triggerShake = useCallback((): void => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  }, []);

  const updateLetterStates = useCallback((guess: Guess): void => {
    setLetterStates(prev => {
      const newStates = new Map(prev);
      guess.word.split('').forEach((letter, i) => {
        const state = guess.states[i];
        const currentState = newStates.get(letter);

        if (state === LetterState.CORRECT) {
          newStates.set(letter, LetterState.CORRECT);
        } else if (
          state === LetterState.PRESENT && 
          currentState !== LetterState.CORRECT
        ) {
          newStates.set(letter, LetterState.PRESENT);
        } else if (!currentState || currentState === LetterState.UNUSED) {
          newStates.set(letter, state);
        }
      });
      return newStates;
    });
  }, []);

  const submitGuess = useCallback((): void => {
    if (gameState.gameOver) return;

    if (!isValidLength(gameState.currentGuess)) {
      showMessage(MESSAGES.NOT_ENOUGH_LETTERS);
      triggerShake();
      return;
    }

    if (!isValidWord(gameState.currentGuess)) {
      showMessage(MESSAGES.NOT_IN_WORD_LIST);
      triggerShake();
      return;
    }

    const newGuess: Guess = checkGuess(
      gameState.currentGuess,
      gameState.targetWord
    );

    updateLetterStates(newGuess);

    const newGuesses = [...gameState.guesses, newGuess];
    const won = isWinner(gameState.currentGuess, gameState.targetWord);
    const gameOver = won || newGuesses.length >= MAX_GUESSES;

    setGameState(prev => ({
      ...prev,
      guesses: newGuesses,
      currentGuess: '',
      currentRow: prev.currentRow + 1,
      won,
      gameOver
    }));

    if (won) {
      showMessage(MESSAGES.WIN, 3000);
    } else if (gameOver) {
      showMessage(MESSAGES.LOSE(gameState.targetWord), 5000);
    }
  }, [gameState, showMessage, triggerShake, updateLetterStates]);

  const updateCurrentGuess = useCallback((letter: string): void => {
    if (gameState.gameOver || gameState.currentGuess.length >= WORD_LENGTH) {
      return;
    }
    setGameState(prev => ({
      ...prev,
      currentGuess: prev.currentGuess + letter
    }));
  }, [gameState.gameOver, gameState.currentGuess.length]);

  const deleteLastLetter = useCallback((): void => {
    if (gameState.gameOver) return;
    setGameState(prev => ({
      ...prev,
      currentGuess: prev.currentGuess.slice(0, -1)
    }));
  }, [gameState.gameOver]);

  const resetGame = useCallback((): void => {
    setGameState({
      targetWord: getRandomWord(),
      guesses: [],
      currentGuess: '',
      gameOver: false,
      won: false,
      currentRow: 0
    });
    setLetterStates(new Map());
    setMessage('');
    setShake(false);
  }, []);

  return {
    gameState,
    gameStatus,
    message,
    shake,
    submitGuess,
    updateCurrentGuess,
    deleteLastLetter,
    resetGame,
    letterStates
  };
};