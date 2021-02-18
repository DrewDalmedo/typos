import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { generateWords } from '../../store/words/actions';
import Bar from './bar/Bar';
import InputArea from './typing/InputArea/InputArea';
import Words from './typing/Words/Words';

const Content = () => {
  const dispatch = useDispatch()
  dispatch(generateWords(25))
  return (
    <div>
      <Bar />
      <Words />
      <InputArea />
    </div>
  );
};

export default Content;