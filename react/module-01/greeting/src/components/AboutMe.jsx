import React, {Component} from 'react';
import den from './Info'

// const TableAboutMe = (props) => {
//     let code = [];
//     for (let key in props.user) {
//         code.push(<tr>
//             <td>{key}:</td>
//             <td>{props.user[key]}</td>
//         </tr>)
//     }
//     return(
//         <table>
//             <tbody>
//             {code}
//             </tbody>
//         </table>
//     )
// };

class TableAboutMe extends Component {
    constructor(props){
        super();

    }
    render(){
        console.log(this.state);
        let code = [];
        const {name} = this.props;
        for (let key in name) {
            code.push(<tr>
                <td>{key}:</td>
                <td>{name[key]}</td>
            </tr>)
        }
       return (
           <table id="table">
               <tbody>
               {code}
               </tbody>
           </table>
       )
    }
}

export default TableAboutMe;