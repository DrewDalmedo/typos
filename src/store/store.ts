import { create } from 'domain'
import { createStore } from 'redux'

import wordsReducer from './words/reducer';

export const store = createStore(wordsReducer);