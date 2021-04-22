const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {postText: 'Hi, this is my first post', likesCount: '10'},
        {postText: 'The second post', likesCount: '8'},
        {postText: 'Third post, dunno what to write here', likesCount: '20'},
        {postText: 'Fourth post, ok', likesCount: '15'},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let stateCopy = {...state, posts: [...state.posts]}
            let newPost = {
                postText: stateCopy.newPostText,
                likesCount: 0
            }
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        default:
            console.log('Error. Something went wrong')
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText})

export default profileReducer