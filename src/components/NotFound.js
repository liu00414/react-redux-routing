import React, { Component } from 'react';
import Header from './Header.js';


export default class NotFound extends Component{
     
    render(){    
        return(
            <React.Fragment>
            <Header page='No Such Page'/>
           <h1>Sorry, page not found.</h1>
        </React.Fragment>  
            )
    }
}