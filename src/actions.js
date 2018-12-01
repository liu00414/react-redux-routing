export const UPDATE_USER='user:updateUser'
export function updateUser(newPayload){
    return {
        type:UPDATE_USER,
        payload:{
            user: newPayload
                
            },
    }
}


export const UPDATE_TODO='todo:updateToDo'
export function updateToDo(newPayload){
    return {
        type:UPDATE_TODO,
        payload:{
            todo: newPayload
                
            },
    }
}
export const UPDATE_POSTS='todo:updatePosts'
export function updatePosts(newPayload){
    return {
        type:UPDATE_POSTS,
        payload:{
            posts: newPayload
                
            },
    }
}