// for displaying wpm and accuracy
import React from 'react';

interface WPMProps {
  wpm?: number
}

interface AccuracyProps {
  acc?: number
}

interface StatsProps {

}

const WPM = (props: WPMProps) => {
  return (
    <>
      <span>{props.wpm ? `${props.wpm}` : '--'} WPM</span>
    </>
  );
}

const Accuracy = (props: AccuracyProps) => {
  return (
    <>
      <span>{props.acc ? `${props.acc}` : '--'}% Accuracy</span>
    </>
  );
}

const Stats = (props: StatsProps) => {
  return (
    <div>
      <WPM wpm={1} /> / <Accuracy acc={100}/>
    </div>
  );
}

export default Stats;