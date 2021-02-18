import { GEN_WORDS, ADD_WORDS } from './types';

export interface WordsState {
  words: string[]
  generating: boolean
}

const initialState: WordsState = {
  words: [],
  generating: false
}

type Action = {type: string, payload?: string[]}

export default function wordsReducer(
  state: WordsState = initialState, 
  action: Action
): any {
  switch(action.type) {
    case GEN_WORDS:
      return {
        ...state,
        words: [...state.words],
        generating: true
      }
    case ADD_WORDS:
      return {
        ...state,
        words: action.payload,
        generating: false 
      }
    default:
      return state
  }
}