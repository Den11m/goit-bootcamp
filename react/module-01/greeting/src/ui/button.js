import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired
    };
    static defaultProps = {
        type: "default-button"
    };

    render() {
        const {type, children, ...props} = this.props;
        return <button className={type === 'super' ? 'super-button' : 'default-button'} {...props}>
            {children.toUpperCase()}
        </button>
    }
}

export default Button