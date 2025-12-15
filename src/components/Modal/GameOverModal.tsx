import React, { FC } from 'react';
import styles from './Modal.module.css';

interface GameOverModalProps {
  isOpen: boolean;
  won: boolean;
  word: string;
  guesses: number;
  onClose: () => void;
  onNewGame: () => void;
}

export const GameOverModal: FC<GameOverModalProps> = ({
  isOpen,
  won,
  word,
  guesses,
  onClose,
  onNewGame
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>
          {won ? 'Congratulations!' : 'Game Over'}
        </h2>
        <p className={styles.message}>
          {won
            ? `You guessed the word in ${guesses} ${guesses === 1 ? 'try' : 'tries'}!`
            : `The word was: ${word}`}
        </p>
        <div className={styles.actions}>
          <button className={styles.button} onClick={onNewGame}>
            New Game
          </button>
          <button className={styles.buttonSecondary} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};