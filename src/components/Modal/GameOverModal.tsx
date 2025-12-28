import React, { FC } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.css';
import { getDefinition } from '../../data/wordDefinitions';

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

  const definition = getDefinition(word);
  const guessText = guesses === 1 ? 'try' : 'tries';
  
  const getWinMessage = (): string => {
    if (guesses === 1) return 'Boss ting! Yuh get it in one shot! 🎯';
    if (guesses === 2) return 'Wicked! Yuh real smart nah! 🧠';
    if (guesses === 3) return 'Nice! Yuh know yuh Trini words good! 💪';
    if (guesses === 4) return 'Good job! Yuh handle dat real nice! 👍';
    if (guesses === 5) return 'Close one! But yuh make it! 😅';
    return 'Phew! Yuh just scrape through! 😮‍💨';
  };

  const getLossMessage = (): string => {
    return 'No worries nah! Try again tomorrow - yuh go get it! 💪';
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

         {/* Close button in top left */}
         <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        {/* Title with emoji */}
        <div className={styles.gameOverHeader}>
          <h2 className={`${styles.title} ${won ? styles.titleWin : styles.titleLoss}`}>
            {won ? 'Congratulations!' : 'Game Over!'}
          </h2>
        </div>

        {/* Main message */}
        <div className={styles.gameOverContent}>
          {won ? (
            <>
              <p className={styles.celebrationMessage}>
                {getWinMessage()}
              </p>
              <p className={styles.guessCount}>
                You guessed the word in <strong>{guesses}</strong> {guessText}!
              </p>
            </>
          ) : (
            <>
              <p className={styles.lossMessage}>
                {getLossMessage()}
              </p>
              <div className={styles.wordReveal}>
                <p className={styles.wordLabel}>De word was:</p>
                <div className={styles.wordDisplay}>
                  {word.split('').map((letter, index) => (
                    <span 
                      key={index} 
                      className={styles.wordLetter}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Word definition */}
          {definition && (
            <div className={styles.definitionBox}>
              <p className={styles.definitionLabel}>What it mean:</p>
              <p className={styles.definitionText}>{definition}</p>
            </div>
          )}

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Action buttons */}
          <div className={styles.actions}>
            <button 
              className={`${styles.button} ${styles.buttonPrimary}`} 
              onClick={onNewGame}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};