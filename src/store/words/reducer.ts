import { ADD_WORDS, WordActionTypes } from './types';

export interface WordsState {
  words: string[]
  length: number,
  currentWordIndex: number,
  correct: number,
}

const initialState: WordsState = {
  words: [],
  length: 0,
  currentWordIndex: 0,
  correct: 0,
}

export default function wordsReducer(
  state: WordsState = initialState, 
  action: WordActionTypes 
): any {
  switch(action.type) {
    case ADD_WORDS:
      return {
        ...state,
        words: action.payload,
      }
    default:
      return state
  }
}