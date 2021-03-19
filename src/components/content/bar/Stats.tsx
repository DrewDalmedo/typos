// for displaying wpm and accuracy
import React from 'react';

interface WPMProps {
  wpm?:string 
}

interface AccuracyProps {
  acc?:string 
}

interface StatsProps {
  wpm?: string,
  accuracy?: string,
}

const WPM = (props: WPMProps) => {
  return (
    <>
      <span>{props.wpm ? props.wpm : '--'} WPM</span>
    </>
  );
}

const Accuracy = (props: AccuracyProps) => {
  return (
    <>
      <span>{props.acc ? props.acc : '--'}% Accuracy</span>
    </>
  );
}

const Stats = (props: StatsProps) => {
  return (
    <div>
      <WPM wpm={props.wpm} /> / <Accuracy acc={props.accuracy} />
    </div>
  );
}

export default Stats;