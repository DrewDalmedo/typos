// actions
import { GEN_WORDS, ADD_WORDS } from './actionList';
// imports
import randomWords from 'random-words';

export const generateWords = (num: number) => {
  return (dispatch: any) => {
    dispatch({ type: GEN_WORDS });
    const words = randomWords(num);
    dispatch({ type: ADD_WORDS, payload: words });
  }
}