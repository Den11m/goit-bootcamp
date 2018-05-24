import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Exemple.css'

export default class InputMy extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
    };
    static defaultProps = {
        type: "default-input"
    };

    render() {
        const {type, value, className, placeholder, ...props} = this.props;
        return (
            <input className={type === 'default-input' ? 'default-input-2' : {className}} type={type} value={value} placeholder={placeholder} {...props}/>
        );
    }
}
