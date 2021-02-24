// words
export const ADD_WORDS: string = "ADD_WORDS"
export const INC_CURRENT_WORD: string = "INC_CURRENT_WORD"
export const INC_CORRECT: string = "INC_CORRECT"
export const CALC_WPM: string = "CALC_WPM"
export const CALC_ACC: string = "CALC_ACC"

interface AddWordsAction {
  type: typeof ADD_WORDS,
  payload: string | string[]
}

interface IncrementCurrentWordAction {
  type: typeof INC_CURRENT_WORD,
  payload: string 
}

interface IncrementCorrectAction {
  type: typeof INC_CORRECT,
  payload: string
}

interface CalculateWPMAction {
  type: typeof CALC_WPM,
  payload: string 
}

interface CalculateAccuracyAction {
  type: typeof CALC_ACC,
  payload: string 
}

export type WordActionTypes = AddWordsAction | IncrementCurrentWordAction | IncrementCorrectAction | CalculateWPMAction | CalculateAccuracyAction