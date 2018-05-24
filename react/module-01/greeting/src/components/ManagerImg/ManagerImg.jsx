import React, {Component, Fragment} from 'react';
import Img from './Image'
import Nano from "./Image.nano";
import Small from "./Image.small";

class ManagerImg extends Component {

    render(){
        const {img, onChangeImage, onDelete, onDefault} = this.props;
        return (
            <Fragment>
                <Img img={img}
                     onChangeImage={onChangeImage}
                     onDelete={onDelete}
                     onDefault={onDefault}
                />
            <Small img={img}/>
            <Nano img={img}/>
            </Fragment>
        );
    }
}

export default ManagerImg;
