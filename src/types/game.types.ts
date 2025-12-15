export enum LetterState {
    CORRECT = 'correct',
    PRESENT = 'present',
    ABSENT = 'absent',
    EMPTY = 'empty',
    UNUSED = 'unused',
}

export interface Guess {
    word: string;
    states: LetterState[];
}

export interface GameState {
    targetWord: string;
    guesses: Guess[];
    currentGuess: string;
    gameOver: boolean;
    won: boolean;
    currentRow: number;
}

export interface GameStats {
    played: number;
    wins: number;
    currentStreak: number;
    maxStreak: number;
    distribution: number[];
}

export type GameStatus = 'playing' | 'won' | 'lost';