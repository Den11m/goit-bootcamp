import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import '../button/button.css';
import RenderIf from '../RenderIf';
import './timer.css';

export default class Timer extends Component {
    static propTypes= {
        time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        autoStart: PropTypes.bool,
        reverse: PropTypes.bool,
        onTimeOut: PropTypes.func,
    };
    static defaultProps = {
        time: 60,
        step: 1,
        autoStart: false,
        reverse: false,
        onTimeOut: () => {},
        // onTimeOut: console.log.bind(console, "Time out!")
    };
    state = {
        time: this.props.time,
        isStarted: false,
        timerLine: 100,
    };

    timerId = null;

    get timerValues() {
        let {time} = this.state;
        let min = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
        let sec = (time % 60) < 10 ? `0${time % 60}` : time % 60;
        return {
            minutes: min,
            seconds: sec
        }
    }

    timerTick = () => {
        if (this.state.time <= 0 && this.props.reverse) {
            this.props.onTimeOut(this.state.time);
            this.handleClickStop();
            // this.initialState();
            return
        }
        this.props.reverse ? this.reverseTick() : this.defaultTick();
        // this.toggleIsStarted(true)
    };

    reverseTick = () =>{
        this.setState((prevState) => {
            return ({
                time: prevState.time - 1,
                timerLine: prevState.timerLine - (prevState.timerLine / prevState.time),
            })
        });
    };

    defaultTick = () =>{
         this.setState((prevState) => {
            return ({
                time: parseInt(prevState.time) + 1,
                // timerLine: 0,
            })
        });
    };

    initialState = () => {
        this.setState({
            time: this.props.time,
            timerLine: 100,
        });
    };

    toggleIsStarted = (bool) => {
        this.setState ({
            isStarted: bool,
        })
    };

    handleClickStart = () => {
        if (this.timerId) {
            return
        }
        if (this.state.time <= 0 && this.props.reverse){
            this.initialState();
        }
        this.toggleIsStarted(true);
        this.timerId = setInterval(this.timerTick, 1000)
    };

    componentDidMount(){
        if(this.props.autoStart){
            this.handleClickStart();
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.time % this.props.step === 0;
    }

    componentWillUnmount(){
        this.stopHandler();
    }

    handleClickStop = () => {
        clearInterval(this.timerId);
        this.timerId = null;
        this.toggleIsStarted(false)
    };

    render() {

        return (
            <div>
                <h2>
                    {this.timerValues.minutes}:{this.timerValues.seconds}
                </h2>
                <RenderIf condition={this.state.isStarted}>
                 <button className="btn btn-pause" onClick={this.handleClickStop}/>
                </RenderIf>
                <RenderIf condition={!this.state.isStarted}>
                    <button className="btn btn-play" onClick={this.handleClickStart}/>
                </RenderIf>
                <RenderIf condition={this.props.reverse}>
                    <div className="timer__line" style={{width: this.state.timerLine + "%"}}/>
                </RenderIf>
            </div>
        )
    };
}


// {<Button isStarted={this.state.isStarted} handleClickStart={this.handleClickStart}}
//         {handleClickStop={this.handleClickStop}/>}