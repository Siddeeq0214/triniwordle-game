import React, { FC } from "react";
import { HelpCircle } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  onHelp?: () => void;
}

export const Header: FC<HeaderProps> = ({ onHelp }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          className={styles.iconButton}
          onClick={onHelp}
          aria-label="Help"
        >
          <HelpCircle size={24} />
        </button>

        <div className={styles.titleGroup}>
          <h1 className={styles.title}>TRINI WORDLE</h1>
          <p className={styles.subtitle}>Come play ah lil game nah!</p>
        </div>

        {/* <button
          className={styles.iconButton}
          onClick={onReset}
          aria-label="New Game"
        >
          {" "}
          <RotateCcw size={24} />
        </button> */}
        <div style={{width: 40}}></div>
      </div>
    </header>
  );
};
