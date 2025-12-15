import React, { FC } from "react";
import { Tile } from "../Tile/Tile";
import { LetterState, Guess } from "../../types";
import { WORD_LENGTH } from "../../utils/constants";
import styles from "./Grid.module.css";

interface RowProps {
  guess?: Guess;
  currentGuess?: string;
  rowIndex: number;
  isCurrentRow: boolean;
  shake: boolean;
}

export const Row: FC<RowProps> = ({
  guess,
  currentGuess = "",
  rowIndex,
  isCurrentRow,
  shake = false,
}) => {
  const letters: string[] = guess
    ? guess.word.split("")
    : currentGuess.split("");

  const states: LetterState[] = guess
    ? guess.states
    : Array(WORD_LENGTH).fill(LetterState.EMPTY);

  return (
    <div className={`${styles.row} ${shake ? styles.shake : ''}`}>
      {Array.from({ length: WORD_LENGTH }).map((_, i) => (
        <Tile
          key={i}
          letter={letters[i] || ''}
          state={states[i]}
          position={i}
          revealed={!!guess}
          rowIndex ={rowIndex} //temp fix 
        />
      ))}
    </div>
  );
};
