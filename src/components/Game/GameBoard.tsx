import React, { FC, useState } from "react";
import { Header } from "../Header";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { Message } from "../Message";
import {HelpModal} from "../Modal";
import { useWordle } from "../../hooks/useWordle";
import { useKeyboard } from "../../hooks/useKeyboard";
import styles from "./GameBoard.module.css";

export const GameBoard: FC = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const {
    gameState,
    message,
    shake,
    submitGuess,
    updateCurrentGuess,
    deleteLastLetter,
    letterStates,
  } = useWordle();

  const handleKeyPress = (key: string): void => {
    if (key === "ENTER") {
      submitGuess();
    } else if (key === "BACK") {
      deleteLastLetter();
    } else {
      updateCurrentGuess(key);
    }
  };

  useKeyboard({
    onEnter: submitGuess,
    onDelete: deleteLastLetter,
    onLetter: updateCurrentGuess,
    enabled: true,
  });

  return (
    <div className={styles.gameBoard}>
      <Header onHelp={() => setIsHelpOpen(true)} />
      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
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
