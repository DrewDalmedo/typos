import { ADD_WORDS, WordActionTypes } from './types';

export interface WordsState {
  words: string[]
}

const initialState: WordsState = {
  words: [],
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