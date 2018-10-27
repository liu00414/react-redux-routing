import React, { Component } from 'react';
import Users from './components/Users.js';
import ToDos from './components/ToDos.js';
import Posts from './components/Posts.js';
import NotFound from './components/NotFound.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';



class App extends Component {
  constructor(){
      super();
      this.state={
          users:[]
      }
  }
  
  render() {
    return (
        <React.Fragment>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Users}/>
            <Route exact path="/to-dos" component={ToDos}/>
            <Route path="/to-dos/:userID" component={ToDos} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:userID" component={Posts} />
            <Route component={NotFound} />
        </Switch>   
        </BrowserRouter>
        
        </React.Fragment>
    )
  }
}

export default App;
