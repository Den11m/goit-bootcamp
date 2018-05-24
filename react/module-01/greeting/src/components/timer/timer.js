import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Timer extends Component {
    state = {
        time: 0,
    };

    get timerValues() {
        let {time} = this.state;
        let min = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
        let sec = (time % 60) < 10 ? `0${time % 60}` : time % 60;
        return {
            minutes: min,
            seconds: sec
        }
    }

    // componentDidMount
    handleClickStart = ()=> {
        this.timerId = setInterval(() => {
            this.setState((prevState) => {
                return ({
                    time: prevState.time + 1
                })
            })
        }, 1000)
    };

    handleClickStop = () => {
        clearInterval(this.timerId);
    };

    handleClickReset = () => {
        this.setState({
            time: 0,
        })
    };

    // onClick={handleClickStop}

    render() {
        return (
            <div>
                <h3>{this.timerValues.minutes}:{this.timerValues.seconds}</h3>
                <button onClick={this.handleClickStart}>Start</button>
                <button onClick={this.handleClickStop}>Stop</button>
                <button onClick={this.handleClickReset}>Reset</button>
            </div>
        );
    }
}

Timer.propTypes = {};
