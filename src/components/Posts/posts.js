import React from 'react'
import { AddPostActionCreator, UpdatePostInputTextActionCreator } from '../../store/posts_reducer'
export const Posts = ({state, dispatch}) => {
    const InputChanged = e => {
        let action = UpdatePostInputTextActionCreator(e.target.value)
        dispatch(action)
    }
    const ButtonClicked = () => {
        let action = AddPostActionCreator()
        dispatch(action)
    }
    return (
        <div className="Posts">
            {state.posts.data.map((post, i) => {
                return <div key={i}>{post}</div>
            })}
            <input value={state.posts.PostInputText} onChange={InputChanged}/>
            <button onClick={ButtonClicked}>Add</button>
        </div>
    )
}