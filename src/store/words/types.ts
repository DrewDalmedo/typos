// words
export const ADD_WORDS: string = "ADD_WORDS"
export const INC_CURRENT_WORD: string = "INC_CURRENT_WORD"
export const INC_CORRECT: string = "INC_CORRECT"
export const CALC_WPM: string = "CALC_WPM"
export const CALC_ACC: string = "CALC_ACC"
export const START_TIMER: string = "START_TIMER"
export const END_TIMER: string = "END_TIMER"

// let's try this...
interface StandardAction {
  type: string,
  payload: string | string[] | Date
}

export type WordActionTypes = StandardAction