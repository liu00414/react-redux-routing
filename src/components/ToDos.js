import React, { Component } from 'react';
import Header from './Header.js';
import Loader from './Loader.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {updateToDo} from '../actions';

class ToDos extends Component{
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
        });
      this.props.onUpdateToDo(data);
        
    }
  
  componentDidMount(){
      if(!this.props.todo){
        this.setState({isLoading:true});
        let url = 'https://jsonplaceholder.typicode.com/todos/';
        fetch(url)
        .then(response => response.json())
        .then(this.handleData)
        .catch(err => {
            this.setState({error:err})
        })  
      }
      
    }
    render(){
        const userID=this.props.match.params.userID;
        const userName=this.props.match.params.userName;
        return(
        <React.Fragment>
        
           <Header page='To Dos'/> 
           {this.state.isLoading&&<Loader />}
                <ul>
                    {(!userID)&&this.props.todo&&this.props.todo.map((item)=>(
                        <li key={item.id}><h3><FontAwesomeIcon icon={faClipboardCheck} /> {item.title}</h3><p>Status: {item.completed===true?'Done':'Pending'}</p>
                        </li>
                    ))}
                    {userID&&this.props.todo&&this.props.todo.map((item)=>(
                        item.userId==userID&&(<li key={item.id}><h3><FontAwesomeIcon icon={faClipboardCheck} />  {userName}: {item.title}</h3><p>Status: {item.completed===true?'Done':'Pending'}</p>
                        </li>)
                    ))}
                </ul>
        </React.Fragment>
        )
                    }
}

const mapStateToProps=state=>(
    {todo:state.todo}
)

const mapActionsToProps={
 onUpdateToDo:updateToDo   
}

export default connect(mapStateToProps,mapActionsToProps)(ToDos)