import React, {FC} from 'react';
import {Row} from '../Grid/Row';
import { Guess } from '../../types';
import {MAX_GUESSES} from '../../utils/constants';
import styles from './Grid.module.css';

interface GridProps {
    guesses: Guess[];
    currentGuess: string;
    currentRow: number;
    shake: boolean;
}

export const Grid: FC<GridProps> = ({
    guesses,
    currentGuess,
    currentRow,
    shake
}) => {
    return (
        <div>
            {Array.from({length: MAX_GUESSES}).map((_, i) => {
                const guess = guesses[i];
                const isCurrentRow = i === currentRow;

                return (
                    <Row 
                      key={i}
                      guess={guess}
                      currentGuess = {isCurrentRow ? currentGuess : ''}
                      rowIndex={i}
                      isCurrentRow = {isCurrentRow}
                      shake = {shake && isCurrentRow}
                    />
                );
            })}
        </div>
    );
};