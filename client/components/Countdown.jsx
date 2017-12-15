import React from 'react';

export default class Countdown extends React.Component {
    render() {
        let min = Math.floor(this.props.secondsLeft / 60);
        let sec = this.props.secondsLeft - min * 60;
        return (
            <div>
                <h1>
                    <span>{min < 10 ? '0' + min : min}</span>
                    <span>:</span>
                    <span>{sec < 10 ? '0' + sec : sec}</span>
                </h1>
            </div>
        );
    }

}