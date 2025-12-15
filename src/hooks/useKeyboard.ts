import { useEffect, useCallback } from "react";

interface UseKeyboardProps {
    onEnter: () => void;
    onDelete: () => void;
    onLetter: (letter: string) => void;
    enabled?: boolean;
}

export const useKeyboard = ({
    onEnter,
    onDelete,
    onLetter,
    enabled = true
}: UseKeyboardProps): void => {
    const handleKeyDown = useCallback((event: KeyboardEvent): void => {
        if (!enabled) return;

        const {key} = event;

        if (key === " Enter"){
            event.preventDefault();
            onEnter();
        } else if (key === "Backspace") {
            event.preventDefault();
            onDelete();
        } else if (/^[a-zA-Z]$/.test(key)) {
            event.preventDefault();
            onLetter(key.toUpperCase());
        }
    }, [onEnter, onDelete, onLetter, enabled]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
}