import React from 'react';
import { useSelector } from 'react-redux'
import { WordsState } from "../../../../store/words/reducer";

const Words = () => {
  const words: string[] = useSelector( (state: WordsState ) => [...state.words] )
  return (
    <div>
      {words.join(" ")}
    </div>
  );
};

export default Words;