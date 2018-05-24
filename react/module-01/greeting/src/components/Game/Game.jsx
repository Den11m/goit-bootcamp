import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Ball from './ball';

class Game extends Component {
    state = {
        balls: [
            {
                x: 20,
                y: 20,
                r: 2,
            },
            {
                x: 280,
                y: 20,
                r: 2,
            },
            {
                x: 280,
                y: 280,
                r: 2,
            },
            {
                x: 20,
                y: 280,
                r: 2,
            },
            {
                x: 150,
                y: 150,
                r: 2,
                controlled: true,
            },
        ],

    };

    componentDidMount() {
        window.addEventListener('keydown', this.handlePress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlePress);
    }

    get ballControlledIndex() {
        return this.state.balls.findIndex((ball) => ball.controlled);
    }

    moveLeft = () => {
        this.setState((prevState) => {
            const {balls} = prevState;
            if (balls[this.ballControlledIndex].x <= balls[this.ballControlledIndex].r * 10 / 2) {
                return false;
            }
            return {
                balls: [...balls.slice(0, this.ballControlledIndex),
                    {
                        ...balls[this.ballControlledIndex],
                        x: balls[this.ballControlledIndex].x - 5
                    },
                    ...balls.slice(this.ballControlledIndex + 1)]
            }
        })
    };

    moveRight = () => {
        this.setState((prevState) => {
            const {balls} = prevState;
            if (balls[this.ballControlledIndex].x >= (300 - balls[this.ballControlledIndex].r * 10 / 2 )) {
                return false;
            }
            return {
                balls: [...balls.slice(0, this.ballControlledIndex),
                    {
                        ...balls[this.ballControlledIndex],
                        x: balls[this.ballControlledIndex].x + 5
                    },
                    ...balls.slice(this.ballControlledIndex + 1)]
            }
        })
    };

    moveTop = () => {
        this.setState((prevState) => {
            const {balls} = prevState;
            if (balls[this.ballControlledIndex].y <= balls[this.ballControlledIndex].r * 10 / 2) {
                return false;
            }
            return {
                balls: [...balls.slice(0, this.ballControlledIndex),
                    {
                        ...balls[this.ballControlledIndex],
                        y: balls[this.ballControlledIndex].y - 5
                    },
                    ...balls.slice(this.ballControlledIndex + 1)]
            }
        })
    };

    moveBottom = () => {
        this.setState((prevState) => {
            const {balls} = prevState;
            if (balls[this.ballControlledIndex].y >= (300 - balls[this.ballControlledIndex].r * 10 / 2 )) {
                return false;
            }
            return {
                balls: [...balls.slice(0, this.ballControlledIndex),
                    {
                        ...balls[this.ballControlledIndex],
                        y: balls[this.ballControlledIndex].y + 5
                    },
                    ...balls.slice(this.ballControlledIndex + 1)]
            }
        })
    };


    ballDelete = () => {
        this.setState((prevState) => {
            const {balls} = prevState;
            let ballSacrificeIndex = this.state.balls.findIndex((ball) => ball.x === balls[this.ballControlledIndex].x && ball.y === balls[this.ballControlledIndex].y);
            // console.log(ballSacrificeIndex);
            if (ballSacrificeIndex === this.ballControlledIndex) {
                return false
            }
            return {
                balls: [...balls.slice(0, ballSacrificeIndex),
                    ...balls.slice(ballSacrificeIndex + 1, this.ballControlledIndex),
                    {
                        ...balls[this.ballControlledIndex],
                        r: balls[this.ballControlledIndex].r + .25
                    },
                ]
            }
        })
    };

    handlePress = (event) => {
        event.preventDefault();
        switch (event.keyCode) {
            case 37:
                this.moveLeft();
                this.ballDelete();
                break;
            case 39:
                this.moveRight();
                this.ballDelete();
                break;
            case 38:
                this.moveTop();
                this.ballDelete();
                break;
            case 40:
                this.moveBottom();
                this.ballDelete();
                break;
        }

    };


    render() {
        const {balls} = this.state;
        return (
            <Fragment>
                <h1>GAME</h1>
                <div className='container'>
                    {balls.map((ball, index) => <Ball key={index}{...ball}/>)}
                </div>
            </Fragment>
        );
    }
}

Game.propTypes = {};

export default Game;
