import React, {Component} from 'react';

export default class DigitalClicker extends Component {

    constructor() {
        super();
        this.state = {
            timesClicked: 0,
        }
    }
    handleClick = () => {
        this.setState(previousState => ({
                timesClicked: previousState.timesClicked + 1
            }))
    }

    render() {
        return (
                <button label={this.state.timesClicked} onClick={this.handleClick}>
                    {this.state.timesClicked}
                </button>
            );
    }
}
