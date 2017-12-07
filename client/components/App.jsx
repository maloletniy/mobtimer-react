import React from 'react';
import Timer from './Timer.jsx';

const minValue = 0 * 60;
const maxValue = 12 * 60;
const initialTimerValue = 8*60;

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Timer initialTimerValue={initialTimerValue} />
        </div>
    )
  }
}



