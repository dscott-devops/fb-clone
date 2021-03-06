import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import { ChatBubbleOutline, Share, ThumbUp } from '@mui/icons-material'

const Post = ({profilePic, image, username, timestamp, message}) => {
  
  return (
    <div className='post'>
      <div className="post__top">
        <Avatar src={profilePic} 
        className="post__avatar"
        />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>
            timestamp
          </p>
        </div>
        

      </div>
      <div className="post__bottom">
        <p>{message}</p>
        <div className="post__image">
          <img src={image} alt={message} />
        
        </div>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp/>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline/>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <Share/>
          <p>Share</p>
        </div>
       


      </div>



    </div>
  )
  
}

export default Post