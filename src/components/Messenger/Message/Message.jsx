import React from "react";
import style from './../Messenger.module.css'

const Message = (props) => {
    return (
        <li className={props.className}>
            <img src='https://www.shareicon.net/data/256x256/2016/05/30/772931_users_512x512.png' alt={'avatar'} id={props.id}/>
            {/*<div>{props.message}</div>*/}
            {/*className={style.message + ' ' + props.className}*/}
            {props.message}
        </li>
    );
}

export default Message;
