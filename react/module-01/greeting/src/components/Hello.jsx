import React, {Component} from 'react';

export const Hello = (props) => {
    return (
        <table>
            <tbody>
            <tr>
                <td>name:</td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>skill:</td>
                <td>{props.skill}</td>
            </tr>
            </tbody>
        </table>
    )
};

const data = {
    name: 'Sergey',
    skill: 'JS'
};

export default class HelloClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: this.props.skill
        };
        setTimeout(() => {
                this.setState({
                    skill: 'JavaScript'
                })
            }, 5000
        )
    }
    render() {
        const {data, skill, ...props} = this.props;
        return <Hello skill={this.state.skill}/>
    }
}