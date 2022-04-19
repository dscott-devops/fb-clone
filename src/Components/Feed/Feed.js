import React from 'react'
import "./Feed.css"
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel/>
      <MessageSender/>
      <Post profilePic={"me.jpg"} image={"batman.jpg"} username={"Darryl Scott"} message={"This is the message"}/>
      <Post image={"farmers.jpg"} profileSrc={"daanye3.jpg"} username="Daanye Scott" />
      <Post image={"batman.jpg"} profileSrc={"me.jpg"} username="Darryl Scott" />
      <Post image={"esha6.jpg"} profileSrc={"esha3.jpg"} username="Aiysha Scott" />
      <Post image={"dumb.jpg"} profileSrc={"daanye4.jpg"} username="Somebody Else" />
      <Post image={"damn.jpg"} profileSrc={"me3.jpg"} username="Casa Nova" />
  

    </div>
  )
}

export default Feed