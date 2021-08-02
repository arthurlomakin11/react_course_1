import React from 'react'
import { AddUserActionCreator, UpdateUserInputTextActionCreator } from '../../store/users_reducer'
export const Users = ({state, dispatch}) => {
    
    const InputChanged = e => {
        let action = UpdateUserInputTextActionCreator(e.target.value)
        dispatch(action)
    }
    const ButtonClicked = () => {
        let action = AddUserActionCreator()
        dispatch(action)
    }
    return (
        <div className="Users">
            {state.users.data.map((user, i) => {
                return <div key={i}>{user}</div>
            })}
            <input value={state.users.UserInputText} onChange={InputChanged}/>
            <button onClick={ButtonClicked}>Add</button>
        </div>
    )
}