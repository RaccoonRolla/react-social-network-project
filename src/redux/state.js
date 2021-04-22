import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {postText: 'Hi, this is my first post', likesCount: '10'},
                {postText: 'The second post', likesCount: '8'},
                {postText: 'Third post, dunno what to write here', likesCount: '20'},
                {postText: 'Fourth post, ok', likesCount: '15'},
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Alina'},
                {id: 2, name: 'Tim'},
                {id: 3, name: 'Kira'},
                {id: 4, name: 'Nikita'},
                {id: 5, name: 'Anton'},
                {id: 6, name: 'Nataliya'},
                {id: 7, name: 'Sasha'},
            ],
            messages: [
                {message: 'Hello, how are you?', userId: '1', className: 'messageReceiver'},
                {message: 'Hi! I\'m fine, thank you. And you?', userId: '2', className: 'messageSender'},
                {message: 'Where are you from?', userId: '1', className: 'messageReceiver'},
                {message: 'I\'m from Russia', userId: '2', className: 'messageSender'},
                {message: 'I\'m from Russia', userId: '1', className: 'messageReceiver'},
                {message: 'I\'m from Russia', userId: '2', className: 'messageSender'},
                {message: 'I\'m from Russia', userId: '1', className: 'messageReceiver'},
                {message: 'I\'m from Russia', userId: '2', className: 'messageSender'},
            ],
            newMessageText: '',
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Alina'},
                {id: 2, name: 'Tim'},
                {id: 3, name: 'Kira'},
                {id: 4, name: 'Nikita'},
                {id: 5, name: 'Anton'},
                {id: 6, name: 'Nataliya'},
                {id: 7, name: 'Sasha'},
            ],
        },


    },

    _callSubscriber() {
        console.log('No subscriber (state)')
    },

    setState(state) {
        this._state = state
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
        this._callSubscriber(this._state)
    }

}

export default store;