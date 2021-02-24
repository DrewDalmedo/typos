import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { generateWords } from '../../../store/words/actions';
import { WordsState } from '../../../store/words/reducer';


import Stats from './Stats';
import WordCount from './WordCount';

const Bar = () => {
  const dispatch = useDispatch()
  const accuracy = useSelector( (state: WordsState) => state.accuracy )

  const changeWordCount = (count:number) => {
    dispatch(generateWords(count));
  }

  return (
    <div className="bar">
      <WordCount changeWordCount={changeWordCount} />
      <Stats accuracy={accuracy}/>
    </div>
  );
};

export default Bar;