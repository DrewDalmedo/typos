// words
export const GEN_WORDS: string = "GEN_WORDS"
export const ADD_WORDS: string = "ADD_WORDS"

interface GenerateWordsAction {
  type: typeof GEN_WORDS,
}

interface AddWordsAction {
  type: typeof ADD_WORDS,
  payload: string | string[]
}

export type WordActionTypes = GenerateWordsAction | AddWordsAction