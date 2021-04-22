const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {



    switch (action.type) {
        case SEND_MESSAGE:
            let stateCopy = {...state, messages: [...state.messages]}
            let newMessage = {
                message: stateCopy.newMessageText,
                userId: '2',
                className: 'messageSender'
            }
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            console.log('Error. Something went wrong')
            return state
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextAC = (newMessageText) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText})

export default messagesReducer