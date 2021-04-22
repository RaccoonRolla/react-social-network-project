import React from "react";
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let mapFriends = props.friends
        .map(friend => <Friend name={friend.name} id={friend.id}/>)

    return (
        <div>
            {mapFriends}
        </div>
    );
}

export default Friends;
