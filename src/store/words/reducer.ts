import { ADD_WORDS, CALC_ACC, CALC_WPM, INC_CORRECT, INC_CURRENT_WORD, WordActionTypes } from './types';

export interface WordsState {
  words: string[]
  length: number,
  currentWordIndex: number,
  correct: number,
  WPM: string,
  accuracy: string,
}

const initialState: WordsState = {
  words: [],
  length: 0,
  currentWordIndex: 0,
  correct: 0,
  WPM: '--',
  accuracy: '--'
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
        WPM: '--',
        accuracy: '--',
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
    case CALC_WPM:
      return {
        ...state,
        WPM: action.payload
      }
    case CALC_ACC:
      return {
        ...state,
        accuracy: action.payload
      }
    default:
      return state
  }
}