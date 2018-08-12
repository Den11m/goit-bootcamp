import React, {Component} from 'react';
import {Route, NavLink, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies'


class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <h2>Home page</h2>}/>
                    <Route path='/movies' component={Movies}/>
                    <Route path='/about' render={() => <h2>About</h2>}/>
                    <Route exact component={()=><h1>Error page not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
