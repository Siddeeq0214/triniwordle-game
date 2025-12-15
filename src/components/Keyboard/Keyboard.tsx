import React, { FC } from "react";
import { Key } from "./Key";
import { LetterState } from "../../types";
import { KEYBOARD_LAYOUT } from "../../utils/constants";
import styles from "./Keyboard.module.css";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  letterStates: Map<string, LetterState>;
  disabled?: boolean;
}

export const Keyboard: FC<KeyboardProps> = ({
  onKeyPress,
  letterStates,
  disabled = false,
}) => {
  const getKeyState = (key: string): LetterState => {
    return letterStates.get(key) || LetterState.UNUSED;
  };

  return (
    <div className={styles.keyboard}>
      {KEYBOARD_LAYOUT.map((row, i) => (
        <div key={i} className={styles.keyboardRow}>
          {row.map((key) => (
            <Key
              key={key}
              keyValue={key}
              state={getKeyState(key)}
              onClick={onKeyPress}
              wide={key === "ENTER" || key === "BACK"}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
