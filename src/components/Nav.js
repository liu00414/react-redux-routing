import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component{
    
    render(){
        return(
        <nav>
            <NavLink to="/">Users</NavLink>
            <NavLink to="/to-dos">To Dos</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
        )
    }
}