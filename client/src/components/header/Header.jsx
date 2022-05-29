import React from 'react'
import './header.css'
import headerImg from '../../assets/headerImg.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className = "headerImg" src = {headerImg} alt="Header" />
    </div>
  )
}
