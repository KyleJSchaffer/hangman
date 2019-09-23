import React from 'react';
import Timer from './Timer';

class TimerContainer extends React.Component {

    //Creates an interval that calls the tick action every second
    componentDidMount() {
        this.timer = setInterval(this.props.tick, 1000)
    }

    //Removes the interval on unmount
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    //Renders the timer component
    render() {
        return (
            <div>
                <Timer timeLeft={this.props.timeLeft} />
            </div>
        )
    }
}

export default TimerContainer;