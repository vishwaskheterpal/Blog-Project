import React from 'react'
import './topbar.css'

import { Link } from 'react-router-dom';

export default function topbar() {
    const user = false;
  return (
        <div className = 'top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to = "/">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className='link' to = "/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className='link' to = "/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className='link' to = "/write">WRITE</Link>
                    </li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">

                {user ? 
                (<img className = 'topImg' src = "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?b=1&k=20&m=922745190&s=170667a&w=0&h=0lBPWualF5SE8Khy1uRoGOcMZry55ZiUUWvPUPIZ3H0=" 
                alt = "Blog " height = '500' width = '500'/>) :
                
                <ul className="topList">
                <li className='topListItem'>
                    <Link className='link' to = "/login">LOGIN</Link>
                </li>
                <li className='topListItem'>
                    <Link className='link' to = "/register">REGISTER</Link>
                </li>
                </ul>
                }
                
                
                <i class="topSearchIcon fa-solid fa-magnifying-glass-dollar"></i>

            </div>
        </div>
  )
}
