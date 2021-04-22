import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <div className='content'>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/friends'
                       render={() => <FriendsContainer />}/>
                <Route path='/messenger'
                       render={() => <MessengerContainer />}/>
                <Route path='/feed'
                       render={() => <Feed/>}/>
                <Route path='/music'
                       render={() => <Music/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/settings'
                       render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
