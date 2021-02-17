import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { generateWords } from '../../store/words/actions';
import InputArea from './typing/InputArea/InputArea';
import Words from './typing/Words/Words';

const Content = () => {
  const dispatch = useDispatch()
  dispatch(generateWords(25))
  return (
    <div>
      <Words />
      <InputArea />
    </div>
  );
};

export default Content;