// actions
import randomWords from 'random-words';
import { ADD_WORDS, INC_CURRENT_WORD, INC_CORRECT, WordActionTypes } from './types';

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

export function incrementCurrentWord(): WordActionTypes {
  return {
    type: INC_CURRENT_WORD,
    payload: [] 
  }
}

export function incrementCorrect(): WordActionTypes {
  return {
    type: INC_CORRECT,
    payload: []
  }
}