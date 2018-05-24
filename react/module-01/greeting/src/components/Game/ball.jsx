import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ball.css'

const Ball =({x, y, r, controlled}) => {
        return (
            <div className={`ball ${controlled ? 'active-ball' : ''}`} style={{left: x + 'px', top: y + 'px', width: (r*10) + 'px', height: (r*10) + 'px'}} >

            </div>
        );

};

Ball.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
};
Ball.defaultProps = {
    x: 0,
    y: 0,
    r: 1,
};



export default Ball;
