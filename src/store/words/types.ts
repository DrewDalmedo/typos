// words
export const ADD_WORDS: string = "ADD_WORDS"

interface AddWordsAction {
  type: typeof ADD_WORDS,
  payload: string | string[]
}

export type WordActionTypes = AddWordsAction