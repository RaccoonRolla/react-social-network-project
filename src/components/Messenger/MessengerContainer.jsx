import React from "react";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        dialogs: state.messagesPage.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        sendMessage: () => dispatch(sendMessageAC()),
        updateNewMessageText: (newMessageText) => dispatch(updateNewMessageTextAC(newMessageText))
    }
}

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger)

export default MessengerContainer;
