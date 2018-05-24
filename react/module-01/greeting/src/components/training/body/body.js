import React, {Component} from 'react';
import Timer from '../timer/timer';
import './body.css'

const Body = () => {
    return (
        <div className="timer__body">
            <h3 className="timer__title">training</h3>
            <section className="timer">
                <div className="timer__header">
                    <span className="timer__icon"/>
                    <span>Time Left</span>
                </div>
                <Timer time='0' step={1} reverse={false}/>
            </section>
            <br/>
            <section className="timer">
                <div className="timer__header">
                    <span className="timer__icon"/>
                    <span>Time Left</span>
                </div>
                <Timer time={50} step={1} reverse autoStart onTimeOut={()=>{alert('TIME OUT!!!')}}/>
            </section>

        </div>
    )
};

export default Body;