import React from "react";
import style from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={style.friendIcon}>
            <img src={'https://www.shareicon.net/data/256x256/2016/05/30/772931_users_512x512.png'} alt={'avatar'} className={style.friendAvatar}/>
            <div>{props.name}</div>
            <button>Unfollow</button>
        </div>
    );
}

export default Friend;
