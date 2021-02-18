// words
export const ADD_WORDS: string = "ADD_WORDS"
export const INC_CURRENT_WORD: string = "INC_CURRENT_WORD"
export const INC_CORRECT: string = "INC_CORRECT"

interface AddWordsAction {
  type: typeof ADD_WORDS,
  payload: string | string[]
}

interface IncrementCurrentWordAction {
  type: typeof INC_CURRENT_WORD,
  payload: string 
}

export type WordActionTypes = AddWordsAction | IncrementCurrentWordAction