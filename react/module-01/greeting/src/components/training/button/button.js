import React from 'react';
import PropTypes from 'prop-types';
// import './button.css'


const Button =({isStarted, handleClickStart, handleClickStop}) => {
    return (
        isStarted ?
            <button className="btn btn-pause" onClick={handleClickStop}></button> :
            <button className="btn btn-play" onClick={handleClickStart}></button>
    )
};

Button.propTypes = {
    handleClickStart: PropTypes.func.isRequired,
    handleClickStop: PropTypes.func.isRequired,
    isStarted: PropTypes.bool.isRequired,
};

export default Button