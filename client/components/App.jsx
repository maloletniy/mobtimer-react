import React from 'react';
import Timer from './Timer.jsx';

const minValue = 0 * 60;
const maxValue = 12 * 60;
const initialTimerValueSeconds = 10;

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Timer initialTimerValue={initialTimerValueSeconds} />
        </div>
    )
  }
}



