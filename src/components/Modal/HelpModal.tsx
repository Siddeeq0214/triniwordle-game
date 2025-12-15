import React, { FC } from 'react';
import styles from './Modal.module.css';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>How to Play Trini Wordle</h2>
        <div className={styles.helpContent}>
          <p className={styles.instruction}>
            Guess the <strong>TRINI WORD</strong> in 6 tries.
          </p>
          <p className={styles.instruction}>
            Each guess must be a valid 5-letter word. Press the enter button to submit.
          </p>
          <p className={styles.instruction}>
            After each guess, the color of the tiles will change to show how close your guess was to the word.
          </p>
          
          <div className={styles.divider}></div>
          
          <div className={styles.examples}>
            <h3 className={styles.examplesTitle}>Examples</h3>
            
            <div className={styles.example}>
              <div className={styles.exampleRow}>
                <span className={`${styles.exampleTile} ${styles.correct}`}>L</span>
                <span className={styles.exampleTile}>I</span>
                <span className={styles.exampleTile}>M</span>
                <span className={styles.exampleTile}>B</span>
                <span className={styles.exampleTile}>O</span>
              </div>
              <p className={styles.exampleDescription}>
                The letter <strong>L</strong> is in the word and in the correct spot.
              </p>
            </div>
            
            <div className={styles.example}>
              <div className={styles.exampleRow}>
                <span className={styles.exampleTile}>C</span>
                <span className={`${styles.exampleTile} ${styles.present}`}>H</span>
                <span className={styles.exampleTile}>U</span>
                <span className={styles.exampleTile}>N</span>
                <span className={styles.exampleTile}>E</span>
              </div>
              <p className={styles.exampleDescription}>
                The letter <strong>H</strong> is in the word but in the wrong spot.
              </p>
            </div>
            
            <div className={styles.example}>
              <div className={styles.exampleRow}>
                <span className={styles.exampleTile}>B</span>
                <span className={styles.exampleTile}>R</span>
                <span className={styles.exampleTile}>E</span>
                <span className={`${styles.exampleTile} ${styles.absent}`}>A</span>
                <span className={styles.exampleTile}>D</span>
              </div>
              <p className={styles.exampleDescription}>
                The letter <strong>A</strong> is not in the word in any spot.
              </p>
            </div>
          </div>
          
          <div className={styles.divider}></div>
          
          <p className={styles.instruction}>
            <strong>Note:</strong> Words include Trinidad and Tobago Creole expressions and slang! 🇹🇹
          </p>
        </div>
        
        <button className={styles.button} onClick={onClose}>
          Let's go!
        </button>
      </div>
    </div>
  );
};