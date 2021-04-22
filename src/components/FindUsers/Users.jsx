import React from 'react'
import style from './Users.module.css'
import * as axios from "axios";
import userPhoto from './../../media/user_no_photo.png'

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return <div>
        <h3>Users</h3>
        <div className={style.container}>
            {props.users.map((u, index) => <div key={u.id + '_' + index} className={style.userContainer}>
                <div className={style.avatar}>
                    <img src={u.photos.large != null ? u.photos.large : userPhoto} />
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div className={style.userCard}>
                    <div>
                        <h4>{u.name}</h4>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>u.address.country</div>
                        <div>u.address.city</div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
}

export default Users