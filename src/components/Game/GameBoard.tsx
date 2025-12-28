import React, { FC, useState, useEffect } from "react";
import { Header } from "../Header";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { Message } from "../Message";
import {HelpModal, GameOverModal} from "../Modal";
import { useWordle } from "../../hooks/useWordle";
import { useKeyboard } from "../../hooks/useKeyboard";
import styles from "./GameBoard.module.css";

export const GameBoard: FC = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const {
    gameState,
    message,
    shake,
    submitGuess,
    updateCurrentGuess,
    deleteLastLetter,
    resetGame,
    letterStates,
  } = useWordle();

  // Show game over modal when game ends
  useEffect(() => {
    if (gameState.gameOver) {
      // Small delay to allow tile animations to complete
      const timer = setTimeout(() => {
        setShowGameOver(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowGameOver(false);
    }
  }, [gameState.gameOver]);

  const handleKeyPress = (key: string): void => {
    if (key === "ENTER") {
      submitGuess();
    } else if (key === "BACK") {
      deleteLastLetter();
    } else {
      updateCurrentGuess(key);
    }
  };

  const handleNewGame = (): void => {
    resetGame();
    setShowGameOver(false);
  };

  const handleCloseModal = (): void => {
    setShowGameOver(false);
  };


  useKeyboard({
    onEnter: submitGuess,
    onDelete: deleteLastLetter,
    onLetter: updateCurrentGuess,
    enabled: !gameState.gameOver,
  });

  return (
    <div className={styles.gameBoard}>
      <Header onHelp={() => setIsHelpOpen(true)} />
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      <GameOverModal
        isOpen={showGameOver}
        won={gameState.won}
        word={gameState.targetWord}
        guesses={gameState.guesses.length}
        onClose={handleCloseModal}
        onNewGame={handleNewGame}
      />
      <Message message={message} />
      <div className={styles.gameContainer}>
        <Grid
          guesses={gameState.guesses}
          currentGuess={gameState.currentGuess}
          currentRow={gameState.currentRow}
          shake={shake}
        />

        <Keyboard
          onKeyPress={handleKeyPress}
          letterStates={letterStates}
          disabled={gameState.gameOver}
        />
      </div>
    </div>
  );
};
