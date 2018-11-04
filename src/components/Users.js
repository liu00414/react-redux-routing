import React, { Component } from 'react';
import Header from './Header.js';
import Loader from './Loader.js';
import {NavLink} from 'react-router-dom';
import { faUser }from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Users extends Component{
     constructor(){
        super();
        this.state = {
            users: [],
            error: null,
            isLoading:false
        }
    }
  handleData =(data)=>{
        this.setState({
            name:'Fred',
            users: data,
            error: null,
            isLoading:false
        })
        
        
    }
  componentDidMount(){
        this.setState({isLoading:true, error:null});
        let url = 'https://jsonplaceholder.typicode.com/users';
        
        fetch(url)
        .then(response => response.json())
        .then(this.handleData)
        .catch(err => {
            this.setState({error:err.message,isLoading:false})
        })      
      
    }
    render(){
        return(
        <React.Fragment>
           <Header page='Users'/> 
           {this.state.isLoading&&<Loader />}
            {this.state.error && ( <h3>{this.state.error}</h3> ) }
                <ul>
                    {this.state.users&&this.state.users.map((item)=>(
                        <li key={item.id}><FontAwesomeIcon icon={faUser} />  {item.name}
                            <button><NavLink to={'/to-dos/'+item.id+'/'+item.name}>To Do</NavLink></button>
                            <button><NavLink to={'/posts/'+item.id+'/'+item.name}>Posts</NavLink></button>
                        </li>
                    ))}
                </ul>
        </React.Fragment>
        )
    }
}

//{this.state.error&&(<h3>{this.state.error.message}</h3>)}