import React, {FC} from 'react';
import { LetterState } from '../../types';
import styles from './Tile.module.css';

interface TileProps {
    letter: string;
    state: LetterState;
    position: number;
    rowIndex: number;
    revealed: boolean;
}

export const Tile: FC<TileProps> = ({ 
    letter,
    state,
    position,
    rowIndex,
    revealed = false
}) => {
    const getStateClass = (): string => {
        switch (state) {
            case LetterState.CORRECT:
                return styles.correct;
            case LetterState.PRESENT:
                return styles.present;
            case LetterState.ABSENT:
                return styles.absent;
            default:
                return styles.empty;
        }
    };

    return (
     <div
      className={`${styles.tile} ${getStateClass()} ${
        revealed ? styles.flip : ''
      } ${letter && !revealed ? styles.filled : ''}`}
      style={{ 
        animationDelay: revealed ? `${position * 300}ms` : '0ms' 
      }}
    >
      <div className={styles.front}>{letter}</div>
      <div className={styles.back}>{letter}</div>
    </div>
  );
}