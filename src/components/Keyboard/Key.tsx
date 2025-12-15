import React, {FC, MouseEvent} from 'react';
import {LetterState} from '../../types';
import styles from './Keyboard.module.css';

interface KeyProps {
    keyValue: string;
    state: LetterState;
    onClick: (key: string) => void;
    wide?: boolean;
}

export const Key: FC<KeyProps> = ({
    keyValue,
    state,
    onClick,
    wide = false
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
        e.currentTarget.blur();
        onClick(keyValue);
    };

    const getStateClass = (): string => {
        switch (state) {
            case LetterState.CORRECT:
                return styles.correct;
            case LetterState.PRESENT:
                return styles.present;
            case LetterState.ABSENT:
                return styles.absent;
            default:
                return styles.unused;
        }
    };

    const displayKey = keyValue === 'BACK' ? '⌫' : keyValue;

    return (
        <button
        onClick = {handleClick}
        className = {`${styles.key} ${getStateClass()} ${wide ? styles.wide : ''}`}
        aria-label = {keyValue}
        >
            {displayKey}
        </button>
    );
};