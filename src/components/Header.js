import React, { Component } from 'react';
import Nav from './Nav.js';

export default class Header extends Component{
    
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.page}</h1>
                <Nav/>
            </React.Fragment>
        
        )
    }
}