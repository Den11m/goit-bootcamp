import React, {Component, Fragment} from 'react';
// import Post from "./components/Post/Post";
import Postslist from "./components/Post/Postslist";
// import den from './components/Info';
// import TableAboutMe from './components/AboutMe';
// import HelloClassState, {Hello} from './components/Hello';
// import Books from './components/Book';
// import Films from './components/Films';
// import Foo from './components/Foo';
// import Body from './components/training/body/body';
// import Timer from './components/training/timer/timer';
import Timer from './components/timer/timer';
import ManagerImg from './components/ManagerImg/ManagerImg';
import Nano from "./components/ManagerImg/Image.nano";
import withImage from './components/ManagerImg/withImage'
import Game from './components/Game/Game';
import { BrowserRouter, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import './App.css';


const EnchangeNano = withImage(Nano);

const TimerPage = ()=>(
    <Timer />
);

const PostPage = ()=>(
<Postslist name='Den'/>
);

const Menu = () => (
  <nav>
      <p>
          <NavLink to='/post/'>post</NavLink>
      </p>
      <p>
          <NavLink to='/game/'>game</NavLink>
      </p>
      <p>
          <NavLink to='/timer/'>timer</NavLink>
      </p>
  </nav>
);


// const ProfilePage = ()=> (
//     <Fragment>
//         <div><Nano img={img}/>User Name</div>
//         <EnchangeNano img={img}/>
//         <ManagerImg img={img} onDelete={this.onDelete} onChangeImage={this.onChangeImage}
//                     onDefault={this.onDefault}/>
//     </Fragment>
// );




class App extends Component {
    // state = {
    //     img: './tiger.jpg',
    // };
    //
    // onChangeImage = () => {
    //     this.setState({
    //         img: './panda.jpg',
    //     })
    // };
    //
    // onDelete = () => {
    //     this.setState({
    //         img: void 0,
    //     })
    // };
    //
    // onDefault = () => {
    //     this.setState({
    //         img: './tiger.jpg',
    //     })
    // };

    render(){
        // const {img} = this.state;
        return(
            <BrowserRouter>
            <Fragment>
                <h1>My page</h1>
                <Menu/>
                <Switch>
                    {/*<Route path='/' component={()=>}/>*/}
                    <Route path='/timer/' component={TimerPage}/>
                    <Route path='/post/' component={PostPage}/>
                    <Route path='/game/' component={Game}/>
                    <Route path='/article/'
                           component={()=> <Redirect to='/post/'/>}/>
                    <Route exect component={()=><h1>Error page not found</h1>}/>
                </Switch>
            </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;