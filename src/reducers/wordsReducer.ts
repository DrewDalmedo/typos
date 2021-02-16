import { GEN_WORDS, ADD_WORDS } from '../actions/actionList';

export default function wordsReducer(
  state = {
    words: [],
    generating: false,
  },
  action: {type: string, payload?: any}
) {
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
  }
}