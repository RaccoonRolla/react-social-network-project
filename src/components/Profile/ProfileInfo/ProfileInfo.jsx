import React from "react";
import style from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={style.profile}>
            <div>
                <div><img src={'http://dl3.joxi.net/drive/2021/04/11/0015/0187/1007803/03/8d1d5dbefe.jpg'} alt='ava'/>
                </div>
                <div>
                    <div>Description</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
