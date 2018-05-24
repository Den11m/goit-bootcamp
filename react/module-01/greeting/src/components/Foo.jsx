import React from 'react';

export default class Foo extends React.Component{
    constructor( props ){
        super( props );
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        console.log(event.target.textContent);
        // your event handling logic
    }
    render(){
        return (
            <div onClick={this.handleClick}>
            <button type="button"
                    >
                Off
            </button>
            <button type="button">
        On
        </button>
            </div>
        );
    }
}