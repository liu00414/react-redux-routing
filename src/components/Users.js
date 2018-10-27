import React, { Component } from 'react';
import Header from './Header.js';
import Loader from './Loader.js';
import {NavLink} from 'react-router-dom';

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
        this.props.sendData(data);
        
    }
  componentDidMount(){
        this.setState({isLoading:true});
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
        .then(response => response.json())
        .then(this.handleData)
        .catch(err => {
            this.setState({error:err})
        })      
      
    }
    render(){
        return(
        <React.Fragment>
           <Header page='Users'/> 
           {this.state.isLoading&&<Loader />}
                <ul>
                    {this.state.users&&this.state.users.map((item)=>(
                        <li key={item.id}>{item.name}
                            <button><NavLink to={'/to-dos/'+item.id}>To Do</NavLink></button>
                            <button><NavLink to={'/posts/'+item.id}>Posts</NavLink></button>
                        </li>
                    ))}
                </ul>
        </React.Fragment>
        )
    }
}