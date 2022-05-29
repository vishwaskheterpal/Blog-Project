import React from 'react'
import'./post.css';
import postImg from '../../assets/postImg.jpg'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src={postImg} alt='Post'/>
        
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet  
            </span>
            <hr/>
            <span className="postDate">1 hour ago   </span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, ipsum!
            Molestias nihil quaerat ipsa omnis corrupti iure, quam quibusdam dignissimos 
            optio, id animi, r   epellat placeat maxime. Doloremque quod quis labore!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, ipsum!
            Molestias nihil quaerat ipsa omnis corrupti iure, quam quibusdam dignissimos 
            optio, id animi, r   epellat placeat maxime. Doloremque quod quis labore!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, ipsum!
            Molestias nihil quaerat ipsa omnis corrupti iure, quam quibusdam dignissimos 
            optio, id animi, r   epellat placeat maxime. Doloremque quod quis labore!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, ipsum!
            Molestias nihil quaerat ipsa omnis corrupti iure, quam quibusdam dignissimos 
            optio, id animi, r   epellat placeat maxime. Doloremque quod quis labore!                                    
        </p>
    </div>
  )
}
