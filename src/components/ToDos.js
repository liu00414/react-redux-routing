import React, { Component } from 'react';
import Header from './Header.js';
import Loader from './Loader.js';

export default class Users extends Component{
     constructor(){
        super();
        this.state = {
            todo:[],
            error: null,
            isLoading:false
        }
    }
  handleData =(data)=>{    
        this.setState({
            name:'Fred',
            todo: data,
            error: null,
            isLoading:false
        });
        
    }
  componentDidMount(){
        this.setState({isLoading:true});
        let url = 'https://jsonplaceholder.typicode.com/todos/';
        fetch(url)
        .then(response => response.json())
        .then(this.handleData)
        .catch(err => {
            this.setState({error:err})
        })      
      
    }
    render(){
        const userID=this.props.match.params.userID;
        return(
        <React.Fragment>
           <Header page='To Dos'/> 
           {this.state.isLoading&&<Loader />}
                <ul>
                    {(!userID)&&this.state.todo&&this.state.todo.map((item)=>(
                        <li key={item.id}>{item.title}<p>Status: {item.completed===true?'Done':'Pending'}</p>
                        </li>
                    ))}
                    {userID&&this.state.todo&&this.state.todo.map((item)=>(
                        item.userId==userID&&(<li key={item.id}>{item.title}<p>Status: {item.completed===true?'Done':'Pending'}</p>
                        </li>)
                    ))}
                </ul>
        </React.Fragment>
        )
    }
}