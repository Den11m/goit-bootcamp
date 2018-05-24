import React from 'react';
import PropTypes from 'prop-types'
import './Img.css'

const Img = ({img, onChangeImage, onDelete, onDefault, name}) => {
    return (
        <div>
            <h4>{name}</h4>
            <img src={img} className="full-image" alt=""/>
            <button onClick={onChangeImage}>Change</button>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onDefault}>Default img</button>
        </div>
    )
};

Img.propTypes = {
    img: PropTypes.string.isRequired,
    onChangeImage: PropTypes.func,
    onDelete: PropTypes.func,
    onDefault: PropTypes.func,
};

Img.defaultProps = {
    img: './noimag.png',
    onChangeImage: () => {
    },
    onDelete: () => {
    },
    onDefault: () => {
    },
};

export default Img;