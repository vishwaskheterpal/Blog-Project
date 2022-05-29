import React from 'react'
import Header from '../../components/header/Header'
import './home.css'
import Sidebar from '../../components/SideBar/Sidebar'
import Posts from '../../components/Posts/Posts'

export default function Home() {
  return (
    <>
        <Header/>
        <div className='home'>
           
           <Posts/> 
           <Sidebar/>
        </div>
    </>
  )
}
