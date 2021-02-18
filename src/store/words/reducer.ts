import { ADD_WORDS, INC_CORRECT, INC_CURRENT_WORD, WordActionTypes } from './types';

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
        length: action.payload.length,
        currentWordIndex: 0,
        correct: 0,
      }
    case INC_CURRENT_WORD:
      return {
        ...state,
        currentWordIndex: state.currentWordIndex + 1
      }
    case INC_CORRECT:
      return {
        ...state,
        correct: state.correct + 1
      }
    default:
      return state
  }
}