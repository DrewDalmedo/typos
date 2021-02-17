import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateWords } from '../../../../store/words/actions';

const InputArea = () => {

  const [userInput, setUserInput] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event: any) => {
    const currentText: string = event.target.value;

    if (currentText[currentText.length - 1] === ' ') {
      setUserInput('')
    }
    else {
      setUserInput(currentText)
    }
  }

  const handleRedoClick = (event: any) => {
    dispatch(generateWords(25))
  }

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange}/>
      <button onClick={handleRedoClick}>Redo</button>
    </div>
  );
};

export default InputArea;