const UpdatePostsInputText = 'update-posts-input-text'
const AddPost = 'add-post'

const initialState = {
    data: ['hi','hello!'],        
    PostInputText: ''
}

export const PostsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case UpdatePostsInputText:
            state.PostInputText = action.text;
            break;
        case AddPost:
            state.data.push(state.PostInputText);
            state.PostInputText = '';
            break;
        default:
            break;
    }

    return state;    
}

export const UpdatePostInputTextActionCreator = text => {
    return {
        type: UpdatePostsInputText,
        text: text
    }
}

export const AddPostActionCreator = () => {
    return {
        type: AddPost
    }
}