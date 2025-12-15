import React, { FC } from "react";
import styles from "./Message.module.css";

interface MessageProps {
  message: string;
}

export const Message: FC<MessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.messageContainer}>
      <div className={styles.message}>{message}</div>
    </div>
  );
};
