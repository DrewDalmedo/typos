// actions
import randomWords from 'random-words';
import { ADD_WORDS, INC_CURRENT_WORD, INC_CORRECT, WordActionTypes, CALC_WPM, CALC_ACC } from './types';

export function generateWords(count: number): WordActionTypes {
  const genWords = randomWords(count)
  return addWords(genWords)
}

export function addWords(words: string | string[]): WordActionTypes {
  return {
    type: ADD_WORDS,
    payload: words
  }
}

export function incrementCurrentWord(): WordActionTypes {
  return {
    type: INC_CURRENT_WORD,
    payload: [] 
  }
}

export function incrementCorrect(): WordActionTypes {
  return {
    type: INC_CORRECT,
    payload: []
  }
}

export function calculateWPM(wordCount: number, time: number): WordActionTypes {

  return {
    type: CALC_WPM,
    payload: `${1}` // change from 1 to calculation performed before the return
  }
}

export function calculateAccuracy(currentWordIndex: number, correct: number): WordActionTypes {
  const accuracy = (correct / (currentWordIndex+1)) * 100;
  return {
    type: CALC_ACC,
    payload: `${accuracy}` // change from 1 to calculation performed before the return
  }
}