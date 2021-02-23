import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCorrect, incrementCurrentWord } from '../../store/words/actions';
import { WordsState } from '../../store/words/reducer';
import Bar from './bar/Bar';
import InputArea from './typing/InputArea/InputArea';
import Words from './typing/Words/Words';

const Content = () => {
  const dispatch = useDispatch()

  const words = useSelector( (state: WordsState) => state.words)
  const currentWordIndex = useSelector( (state: WordsState) => state.currentWordIndex )

  const handleWordSubmission = (submission: string): void => {
    // check to see if the submitted word is equal to the words[currentWordIndex]
    // if it is increment correct
    // after the check increment the current word index

    // prevent oob error by checking if the currentWordIndex isn't greater or equal to the length of words
    if (!(currentWordIndex >= words.length)) {
      const currentWord = words[currentWordIndex]

      if (submission === currentWord) 
        dispatch(incrementCorrect()) 
      
      dispatch(incrementCurrentWord()) 

    }
  }

  return (
    <div>
      <Bar />
      <Words />
      <InputArea handleUserSubmission={handleWordSubmission}/>
    </div>
  );
};

export default Content;
