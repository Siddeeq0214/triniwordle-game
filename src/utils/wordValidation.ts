import {WORD_LENGTH} from './constants';
import {VALID_WORDS} from '../data/validWords';

export const isValidWord = (word:string): boolean => {
    if (word.length !== WORD_LENGTH) return false;
    if (!/^[A-Z]+$/.test(word)) return false;
    return VALID_WORDS.has(word);
};

export const isValidLength = (word: string): boolean => {
    return word.length === WORD_LENGTH;
}