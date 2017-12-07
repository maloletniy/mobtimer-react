import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialTimerValue,
            started: false,
            interval: null,
            notifiactionsEnabled: false
        }
        this.toggleStartStop = this.toggleStartStop.bind(this);
        this.countDown = this.countDown.bind(this);
        this.stopCountDown = this.pauseCountDown.bind(this);
        this.timerFinished = this.timerFinished.bind(this);
        this.askNotificationsPermission = this.askNotificationsPermission.bind(this);

        this.askNotificationsPermission();
    }

    render() {
        let min = Math.floor(this.state.secondsLeft / 60);
        let sec = this.state.secondsLeft - min * 60;
        return (
            <div className={'timer'}>
                <h1>
                    <span>{min < 10 ? '0' + min : min}</span>
                    <span>:</span>
                    <span>{sec < 10 ? '0' + sec : sec}</span>
                </h1>
                <button onClick={this.toggleStartStop}>{this.state.started ? 'II PAUSE' : ' > START'}</button>
            </div>
        );
    }

    askNotificationsPermission() {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                this.setState({
                    notifiactionsEnabled: true
                });
            }
        });
    }

    toggleStartStop() {
        if (this.state.started) {
            console.log('Pause timer');
            this.setState({
                interval: null,
                started: false
            });
            this.pauseCountDown();
        } else {
            console.log('Start timer');
            let interval = setInterval(this.countDown, 1000);
            this.setState({
                interval: interval,
                started: true,
            });
        }
    }

    countDown() {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        });
        if (this.state.secondsLeft <= 0) {
            this.pauseCountDown();
            this.timerFinished();
        }
    }

    pauseCountDown() {
        clearInterval(this.state.interval);
    }

    timerFinished() {
        new Notification("Timer finished!");
        this.setState({
            secondsLeft: this.props.initialTimerValue,
            started: false
        });
        console.log('Finished');
    }

    editTimer() {
        console.log('Edit timer');
    }

}
