import React from 'react'
import './write.css'
import writeImage from '../../assets/writeImage.jpg'

export default function Write() {
  return (
    <div className='write'>
        <img  className='writeImg' src = {writeImage} alt = "Write "/>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-circle-plus"></i>
                </label>
                <input type = "file" id = "fileInput" style = {{display:"none"}}/>
                <input type = "text" placeholder= "Title" className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type='text' class = 'writeInput writeText' ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
