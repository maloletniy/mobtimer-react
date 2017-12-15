import React from 'react';

export default class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
        this.change.bind(this);
        this.submit.bind(this);
    }

    render() {
        return (
            <div style={{ display: this.props.visible ? 'block' : 'none' }} >
                <input
                    placeholder={'Type username'}
                    onChange={(e) => this.change(e)}
                    onKeyDown={(e) => this.handleEnterPressed(e)}
                />
                <button onClick={() => this.submit()}>OK</button>
            </ div >
        );
    }

    change(e) {
        this.setState({
            value: e.currentTarget.value
        });
    }

    submit() {
        this.props.onSubmit(this.state.value);
    }

    handleEnterPressed(e) {
        if(e.which === 13){
            this.submit();
        }
    }

}