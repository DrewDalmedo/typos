import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import wordsReducer from './words/reducer';

export const store = createStore(
  wordsReducer, 
  // connect to redux devtools
  composeWithDevTools(
    // middleware and options go here
  )
);
