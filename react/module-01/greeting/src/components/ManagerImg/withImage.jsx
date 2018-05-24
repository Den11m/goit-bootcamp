import React, {Component} from 'react';

const withImage = (EnchancedComponent) =>{
    class Comp extends Component {
        state = {
            img: './tiger.jpg',
            name: 'Den',
        };
        render() {
            return <EnchancedComponent img={this.state.img}
                                       name={this.state.name}/>
        }
        }
        return Comp;
};

export default withImage;

