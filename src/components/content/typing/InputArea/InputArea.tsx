import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateWords } from '../../../../store/words/actions';
import { WordsState } from '../../../../store/words/reducer';

interface InputAreaProps {
  handleUserSubmission: (submission:string) => void
}

const InputArea = (props: InputAreaProps) => {

  const [userInput, setUserInput] = useState('');

  const dispatch = useDispatch();
  const wordCount = useSelector( (state: WordsState) => state.length )

  const handleInputChange = (event: any) => {
    const currentText: string = event.target.value;

    // treat a space as a submission
    if (currentText[currentText.length - 1] === ' ') {
      // send user input to our callback
      props.handleUserSubmission(userInput)
      setUserInput('')
    }
    else {
      setUserInput(currentText)
    }
  }

  const handleRedoClick = (event: any) => {
    dispatch(generateWords(wordCount))
  }

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange}/>
      <button onClick={handleRedoClick}>Redo</button>
    </div>
  );
};

export default InputArea;