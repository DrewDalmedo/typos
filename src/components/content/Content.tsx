import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateAccuracy, calculateWPM, incrementCorrect, incrementCurrentWord, setEndTimer, setStartTimer } from '../../store/words/actions';
import { WordsState } from '../../store/words/reducer';
import Bar from './bar/Bar';
import InputArea from './typing/InputArea/InputArea';
import Words from './typing/Words/Words';

const Content = () => {
  // redux
  const dispatch = useDispatch()

  const words = useSelector( (state: WordsState) => state.words)
  const currentWordIndex = useSelector( (state: WordsState) => state.currentWordIndex )
  const correct = useSelector( (state: WordsState) => state.correct )

  // local state
  let [startTime, setStartTime] = useState(0);
  let [endTime, setEndTime] = useState(0);

  const handleWordSubmission = (submission: string): void => {
    // check to see if the submitted word is equal to the words[currentWordIndex]
    // if it is increment correct
    // after the check increment the current word index

    // prevent oob error by checking if the currentWordIndex isn't greater or equal to the length of words
    if (!(currentWordIndex >= words.length)) {

      if (currentWordIndex === 0) {
        // set the start timer
        setStartTime( new Date().getTime() );
      }
      
      if (currentWordIndex === words.length - 1) {
        // set the end timer 
        let totalTime = Math.abs( startTime - new Date().getTime() ) / 1000
        // calculate the wpm
        const totalChars = words.join('').length
        dispatch( calculateWPM( totalChars, totalTime / 60 ) );
      }

      const currentWord = words[currentWordIndex]
      // useSelector only updates on rerender, which means if we increment correct inside this function, the correct var outside of this scope won't be updated until the function is done running, so we set a local var which can be updated if the current word is correct
      let localCorrect = correct;

      if (submission === currentWord) {
        dispatch(incrementCorrect()) 
        localCorrect += 1
      }
      
      dispatch(incrementCurrentWord()) 

      dispatch(calculateAccuracy(currentWordIndex, localCorrect))

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
