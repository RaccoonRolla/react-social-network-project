import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src='https://www.shareicon.net/data/256x256/2016/05/30/772931_users_512x512.png' alt={'avatar'}/>
            {props.postText}
            <br/>
            <div>{props.likeCount + ' people liked this post'}</div>
        </div>
    );
}

export default Post;
