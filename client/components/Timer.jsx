import React from 'react';

  export default class Timer extends React.Component {
      
    constructor(props){
        super(props);
        this.state = {
            timerValue: this.props.timerValue
        }
    }
    render() {
            let min = Math.round(this.state.timerValue/60);
            let sec = this.state.timerValue - min*60;
          return (
                <div className={'timer'}>
                    <h1>{min}:{sec}</h1>
                </div>
          );
      }
  }
