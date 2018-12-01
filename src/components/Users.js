import React, { Component } from 'react';
import Header from './Header.js';
import Loader from './Loader.js';
import {NavLink} from 'react-router-dom';
import { faUser }from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {updateUser} from '../actions';


class Users extends Component{
     constructor(){
        super();
        this.state = {
            error: null,
            isLoading:false
        }
         
    }
    
  handleData =(data)=>{
        this.setState({
            name:'Fred',
            error: null,
            isLoading:false
        })
      
        this.props.onUpdateUser(data);
        
    }
  
  componentDidMount(){
      if(!this.props.users){
        this.setState({isLoading:true, error:null});
        let url = 'https://jsonplaceholder.typicode.com/users';
        
        fetch(url)
        .then(response => response.json())
        .then(this.handleData)
        .catch(err => {
            this.setState({error:err.message,isLoading:false})
        })  
      }
      
    }
    render(){
        console.log(this.props.users);
        return(
        <React.Fragment>
           <Header page='Users'/> 
           {this.state.isLoading&&<Loader />}
            {this.state.error && ( <h3>{this.state.error}</h3> ) }
                <ul>
                    {this.props.users&&this.props.users.map((item)=>(
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

const mapStateToProps=state=>(
    {users:state.users}
)

const mapActionsToProps={
 onUpdateUser:updateUser   
}

export default connect(mapStateToProps,mapActionsToProps)(Users)
//{this.state.error&&(<h3>{this.state.error.message}</h3>)}