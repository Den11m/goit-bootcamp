import React from 'react';
import PropTypes from 'prop-types';
import './input.css'

class Input extends React.Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
    };
    static defaultProps = {
        type: "test"
    };
    render(){
        const {type, className, value, placeholder, ...props} = this.props;
        return <input className={type === "test" ? 'default-input' : {className}} placeholder={placeholder} value={value} {...props}/>
    }
}

export default Input