import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Timer from './Timer.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const minValue = 0 * 60;
const maxValue = 12 * 60;
let timerValue = 8 * 60;

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Timer timerValue={timerValue} />
          <Slider style={{ width: 200 }}
            step={30}
            value={timerValue}
            max={maxValue}
            min={minValue}
            onChange={(e, value) => updateTimer(value)}
          />
          <RaisedButton label='START' onClick={startTimer} />
          <RaisedButton label='EDIT' onClick={editTimer} />
        </div>
      </MuiThemeProvider>
    )
  }
}



function updateTimer(value) {
  console.log('update timer to new value ' + value);
  timerValue = value;
}

function startTimer() {
  console.log('start timer');
  var seconsTimer = setInterval(() =>{
    if(timerValue<=0){      
      stopTimer(seconsTimer);
      notifyTimerEnds();
    }
    updateTimer(timerValue-1);
  }, 1000);
}

function notifyTimerEnds(){
  console.log('Timer finished');
}

function stopTimer(timer){
  console.log('stop timer');
  clearInterval(timer);
}

function editTimer() {
  console.log('edit timer');
}
