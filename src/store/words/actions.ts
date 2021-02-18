// actions
import randomWords from 'random-words';
import { ADD_WORDS, WordActionTypes } from './types';

export function generateWords(count: number): WordActionTypes {
  const genWords = randomWords(count)
  return addWords(genWords)
}

export function addWords(words: string | string[]): WordActionTypes {
  return {
    type: ADD_WORDS,
    payload: words
  }
}