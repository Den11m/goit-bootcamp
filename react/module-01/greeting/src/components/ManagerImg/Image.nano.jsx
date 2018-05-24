import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Nano = ({img, name}) => (
    <Fragment>
    <img src={img}
         className="nano-image"
         alt="NanoAvatar"/>
        {name}
    </Fragment>
);

Nano.propTypes = {
    img: PropTypes.string,
};
Nano.defaultProps = {
    img: './noimag.png',
};

export default Nano;