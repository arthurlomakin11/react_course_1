const UpdateUserInputText = 'update-user-input-text'
const AddUser = 'add-user'


const initialState = {
    data: ['Arthur', 'sadfjkd', 'sdfsdf'],
    UserInputText: ''
}

export const UsersReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case UpdateUserInputText:
            state.UserInputText = action.text;
            break;
        case AddUser:
            state.data.push(state.UserInputText);
            state.UserInputText = '';
            break;
        default:
            break;
    }

    return state;    
}

export const UpdateUserInputTextActionCreator = text => {
    return {
        type: UpdateUserInputText,
        text: text
    }
}

export const AddUserActionCreator = () => {
    return {
        type: AddUser
    }
}