import React, { Component } from 'react';
import Header from './Header.js';
import Loader from './Loader.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinTongueSquint } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {updatePosts} from '../actions';

class Posts extends Component{
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
        this.props.onUpdatePosts(data);
    }
  componentDidMount(){
      if(!this.props.posts){
        this.setState({isLoading:true});
        let url = 'https://jsonplaceholder.typicode.com/posts/';
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
           <Header page='Posts'/> 
           {this.state.isLoading&&<Loader />}
                <ul>
                    {(!userID)&&this.props.posts&&this.props.posts.map((item)=>(
                        <li key={item.id}><h3><FontAwesomeIcon icon={faGrinTongueSquint} />  {item.title}</h3><p>{item.body}</p>
                        </li>
                    ))}
                    {userID&&this.props.posts&&this.props.posts.map((item)=>(
                        item.userId==userID&&(<li key={item.id}><h3><FontAwesomeIcon icon={faGrinTongueSquint} /> {item.title}</h3><p>{item.body}</p>
                         <p>From: {userName}</p>                     
                        </li>)
                    ))}
                </ul>
        </React.Fragment>
        )
    }
}

const mapStateToProps=state=>(
    {posts:state.posts}
)

const mapActionsToProps={
 onUpdatePosts:updatePosts   
}

export default connect(mapStateToProps,mapActionsToProps)(Posts)