import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component{
    
    render(){
        return(
        <nav>
            <NavLink to="/" exact>Users</NavLink>
            <NavLink to="/to-dos" exact>To Dos</NavLink>
            <NavLink to="/posts" exact>Posts</NavLink>
        </nav>
        )
    }
}