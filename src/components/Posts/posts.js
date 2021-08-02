import React from 'react'
export const Posts = ({state, state: {posts: {data: posts, addPostInputText, addPost}}}) => {
    
    return (
        <div className="Posts">
            {state.posts.data.map((post, i) => {
                return <div key={i}>{post}</div>
            })}
            <input value={state.posts.addPostInputText} onChange={addPost.bind(state.posts)}/>
            <button onClick={}>Add</button>            
        </div>
    )
}