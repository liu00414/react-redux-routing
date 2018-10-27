import React, { Component } from 'react';
import Header from './Header.js';
import Loader from './Loader.js';

export default class Users extends Component{
     constructor(){
        super();
        this.state = {
            posts: [],
            error: null,
            isLoading:false
        }
    }
  handleData =(data)=>{
        console.log(JSON.stringify(data), null, '\t');
        console.log(data);
        this.setState({
            name:'Fred',
            posts: data,
            error: null,
            isLoading:false
        })
        
    }
  componentDidMount(){
        this.setState({isLoading:true});
        let url = 'https://jsonplaceholder.typicode.com/posts/';
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
           <Header page='Posts'/> 
           {this.state.isLoading&&<Loader />}
                <ul>
                    {(!userID)&&this.state.posts&&this.state.posts.map((item)=>(
                        <li key={item.id}><h4>{item.title}</h4><p>{item.body}</p>
                        </li>
                    ))}
                    {userID&&this.state.posts&&this.state.posts.map((item)=>(
                        item.userId==userID&&(<li key={item.id}><h4>{item.title}</h4><p>{item.body}</p>
                        </li>)
                    ))}
                </ul>
        </React.Fragment>
        )
    }
}