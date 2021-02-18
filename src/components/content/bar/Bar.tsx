import React from 'react';
import { useDispatch } from "react-redux";
import { generateWords } from '../../../store/words/actions';


import Stats from './Stats';
import WordCount from './WordCount';

const Bar = () => {
  const dispatch = useDispatch()

  const changeWordCount = (count:number) => {
    dispatch(generateWords(count));
  }

  return (
    <div className="bar">
      <WordCount changeWordCount={changeWordCount} />
      <Stats />
    </div>
  );
};

export default Bar;