import React from "react";
import style from './Sidebar.module.css'
import {NavLink} from "react-router-dom";


const Sidebar = () => {
    return (
        <nav className={style.sidebar}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/friends' activeClassName={style.active}>Friends</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/messenger' activeClassName={style.active}>Messenger</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/feed' activeClassName={style.active}>Feed</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <br/>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}>Find users</NavLink>
            </div>
            <br/>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;
