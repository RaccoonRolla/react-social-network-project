import React from "react";
import style from './Messenger.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";

const Messenger = (props) => {

    let mapMessages =
        props.messages
            .map(message => <Message message={message.message} id={message.userId}
                                     className={style[message.className]}/>)

    let mapDialogElements =
        props.dialogs
            .map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let newMessage = React.createRef()

    let onSendMessage = () => {
        props.sendMessage()
    }

    let onUpdateNewMessageText = () => {
        let newMessageText = newMessage.current.value
        props.updateNewMessageText(newMessageText)
    }

    let onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            onSendMessage();
        }
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                {mapDialogElements}
            </div>
            <div className={style.messengerContainer}>
                <ol className={style.messenger}>
                    {mapMessages}
                </ol>
            </div>

            <div></div>
            <textarea className={style.messengerTextArea}
                      onChange={onUpdateNewMessageText}
                      value={props.newMessageText}
                      placeholder={'Type your message here'}
                      ref={newMessage}
                      onKeyDown={onEnterPress}/>
            <div></div>
            <button className={style.messengerButton} onClick={onSendMessage}>Send message</button>
        </div>

    );
}

export default Messenger;
