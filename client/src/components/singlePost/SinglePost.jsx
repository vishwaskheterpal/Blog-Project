import React from 'react'
import './singlePost.css'
import singlePostImg from '../../assets/singlePostImg.jfif' 

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src = {singlePostImg}  alt = "" className='singlePostImg' />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
            
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            
            </div>
            </h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Safak</b></span>
              <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
               facere repellendus reiciendis fugiat hic minima quis eveniet 
               corporis quae? Quidem commodi, minus iure debitis distinctio
               vel qui rem voluptas amet!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
               facere repellendus reiciendis fugiat hic minima quis eveniet 
               corporis quae? Quidem commodi, minus iure debitis distinctio
               vel qui rem voluptas amet!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
               facere repellendus reiciendis fugiat hic minima quis eveniet 
               corporis quae? Quidem commodi, minus iure debitis distinctio
               vel qui rem voluptas amet!
              
            </p>
        </div>
    </div>
  )
}
