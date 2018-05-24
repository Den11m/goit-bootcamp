import React from 'react';
import PropTypes from 'prop-types'


const Small = ({img}) => (
    <img src={img}
         className="small-image"
         alt="NanoAvatar"/>
);

Small.propTypes = {
img: PropTypes.string,
};
Small.defaultProps = {
    img: './noimag.png',
};

export default Small;