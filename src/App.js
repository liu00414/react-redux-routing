import React, { Component } from 'react';
import Users from './components/Users.js';
import ToDos from './components/ToDos.js';
import Posts from './components/Posts.js';
import NotFound from './components/NotFound.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class App extends Component {

  render() {
    return (
        <React.Fragment>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/to-dos" component={ToDos} />
            <Route path="/to-dos/:userID/:userName" component={ToDos} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:userID/:userName" component={Posts} />
            <Route component={NotFound} />
        </Switch>   
        </BrowserRouter>
        
        </React.Fragment>
    )
  }
}
//stateless functional component
function example(){
    return(
    <div></div>
    )
}

export default App;
