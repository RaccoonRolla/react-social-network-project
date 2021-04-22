import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let mapPostsData = props.posts
        .map(post => <Post postText={post.postText} likeCount={post.likesCount}/>)

    let newPost = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onUpdateNewPostText = () => {
        let newPostText = newPost.current.value
        props.updateNewPostText(newPostText)
    }

    let onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            onAddPost();
        }
    }

    return (
        <div>
            <h1>My posts</h1>
            <div>New post</div>
            <div>
                <div>
                    <textarea className={style.myPostsTextArea}
                              placeholder={'Enter your post here'}
                              onChange={onUpdateNewPostText}
                              ref={newPost}
                              value={props.newPostText}
                              onKeyDown={onEnterPress}
                        />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <br/>
            <div>
                {mapPostsData}
            </div>
        </div>
    );
}

export default MyPosts;
