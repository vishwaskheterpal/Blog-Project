import React from 'react'
import './settings.css'
import Sidebar from '../../components/SideBar/Sidebar'
import settingsImg from '../../assets/settingsImg.jpg'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
                <div className="settingsPP">
                    <img src={settingsImg} alt = 'settings' />
                    <label htmlFor='fileInput'>
                    <i class="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type='file' id = 'fileInput' style = {{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type= 'text' placeholder ='Vishwas' />
                <label>Email</label>
                <input type= 'email' placeholder ='vishwas@gmail.com' />
                <label>Password</label>
                <input type= 'password' />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
