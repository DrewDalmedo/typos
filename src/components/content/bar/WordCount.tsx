import React from 'react';

interface WordCountProps {
  changeWordCount: (num: number) => void 
}

const WordCount = (props: WordCountProps) => {
  return(
    <>
      <span onClick={() => props.changeWordCount(10)}>10 </span>
      <span onClick={() => props.changeWordCount(25)}>25 </span>
      <span onClick={() => props.changeWordCount(50)}>50 </span>
      <span onClick={() => props.changeWordCount(100)}>100 </span>
    </>
  )
}

export default WordCount;