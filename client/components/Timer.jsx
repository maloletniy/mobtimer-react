import React from 'react';
import Countdown from './Countdown.jsx';
import UserEditor from './UserEditor.jsx';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialTimerValue,
            started: false,
            interval: null,
            notifiactionsEnabled: false,
            users: [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]
        }
        this.bindMethods();
        this.askNotificationsPermission();
    }

    bindMethods() {
        this.toggleStartStop = this.toggleStartStop.bind(this);
        this.countDown = this.countDown.bind(this);
        this.stopCountDown = this.pauseCountDown.bind(this);
        this.timerFinished = this.timerFinished.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    render() {
        return (
            <div className={'timer'}>
                <Countdown secondsLeft={this.state.secondsLeft} />
                <button
                    onClick={this.toggleStartStop}
                    disabled={this.state.users.length <= 0}>
                    {this.state.started ? 'II PAUSE' : ' > START'}
                </button>
                <UserEditor
                    disabled={this.state.started}
                    users={this.state.users}
                    onAddUser={(user) => this.addUser(user)}
                    onDeleteUser={(user) => this.deleteUser(user)}
                />
            </div>
        );
    }

    deleteUser(user) {
        console.log('Delete user clicked on ' + user);
        this.setState({
            users: this.state.users.filter(e => e.id != user.id)
        });
    }

    addUser(user) {
        console.log('Adding user: ' + user);
        let newUsers = [].concat(this.state.users);
        newUsers.push(user);
        this.setState({
            users: newUsers
        });
    }

    askNotificationsPermission() {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                console.log('Permissions granted for notifications');
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
