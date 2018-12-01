import {
    createStore,
    combineReducers
} from 'redux';
import {UPDATE_USER} from './actions';
import {UPDATE_TODO} from './actions';
import {UPDATE_POSTS} from './actions';


function userReducer(state = [], {type,payload}) {
    switch(type){
        case UPDATE_USER:
            return payload.user;
        default:
            return state;
    }
};

function todoReducer(state = [], {type,payload}) {
    switch(type){
        case UPDATE_TODO:
            return payload.todo;
        default:
            return state;
    }
};

function postsReducer(state = [], {type,payload}) {
    switch(type){
        case UPDATE_POSTS:
            return payload.posts;
        default:
            return state;
    }
};

const allReducers = combineReducers({
    users: userReducer,
    todo: todoReducer,
    posts: postsReducer,
});


export default allReducers;