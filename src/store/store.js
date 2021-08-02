import { combineReducers, createStore } from "redux";
import { PostsReducer } from "./posts_reducer"
import { UsersReducer } from "./users_reducer"

// let renderDOM = () => {}

// const subscribe = observer => {
//     renderDOM = observer
// }

// const state = {
//     posts: {
//         data: ['hi','hello!'],        
//         PostInputText: ''
//     },
//     users: {
//         data: ['Arthur', 'sadfjkd', 'sdfsdf'],
//         UserInputText: ''
//     },
//     dispatch(action) {
//         this.posts = PostsReducer(this.posts, action)
//         this.users = UsersReducer(this.users, action)

//         renderDOM()
//     }
// }

// export {state, subscribe}


const reducers = combineReducers ({
    posts: PostsReducer, 
    users: UsersReducer
})
export const store = createStore(reducers)

