import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timerValue: this.props.initialTimerValue,
            timerStarted: false,
            interval: null
        }
        this.toggleStartStop = this.toggleStartStop.bind(this);
        this.countDown = this.countDown.bind(this);
        this.stopCountDown = this.pauseCountDown.bind(this);
        this.timerFinished = this.timerFinished.bind(this);
    }

    render() {
        let min = Math.floor(this.state.timerValue / 60);
        let sec = this.state.timerValue - min * 60;
        return (
            <div className={'timer'}>
                <h1>
                    <span>{min < 10 ? '0' + min : min}</span>
                    <span>:</span>
                    <span>{sec < 10 ? '0' + sec : sec}</span>
                </h1>
                <button onClick={this.toggleStartStop}>{this.state.timerStarted ? 'II PAUSE' : ' > START'}</button>
            </div>
        );
    }

    toggleStartStop() {
        if (this.state.timerStarted) {
            console.log('Pause timer');
            this.setState({
                interval: null,
                timerStarted: false
            });
            this.pauseCountDown();
        } else {
            console.log('Start timer');
            let interval = setInterval(this.countDown, 1000);
            this.setState({
                interval: interval,
                timerStarted: true,
            });
        }
    }

    countDown() {
        this.setState({
            timerValue: this.state.timerValue - 1
        });
        if (this.state.timerValue <= 0) {
            this.timerFinished();
            this.pauseCountDown();
        }
    }

    pauseCountDown() {
        clearInterval(this.state.interval);
    }

    timerFinished() {
        console.log('Timer finished');
    }

    editTimer() {
        console.log('Edit timer');
    }

}
