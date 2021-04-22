import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <a href='/profile'>
                <img src='https://img.icons8.com/bubbles/2x/facebook-new.png' alt='avatar' className={style.headerLogo}/>
            </a>
        </div>
    );
}

export default Header;
