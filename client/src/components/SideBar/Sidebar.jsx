import React from 'react'
import './sidebar.css'
import sidebarImg from '../../assets/sidebarImg.jpg'

export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img className="sidebarImg" src = {sidebarImg} alt = "sidebar" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sports</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-facebook"></i>
              <i className="sidebarIcon fa-brands fa-twitter"></i>
              <i className="sidebarIcon fa-brands fa-pinterest"></i>
              <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
