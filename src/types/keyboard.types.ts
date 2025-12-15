import { LetterState } from "./game.types";

export interface KeyboardKey {
    key: string;
    state: LetterState;
}

export type KeyboardLayout = string[][];

export interface KeyboardProps {
    onKeyPress: (key: string) => void;
    letterStates: Map<string, LetterState>;
    disabled?: boolean;
}