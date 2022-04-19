import React from 'react'
import "./StoryReel.css"
import Story from '../Story/Story'

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story image={"farmers.jpg"} profileSrc={"daanye3.jpg"} title="Daanye Scott" />
      <Story image={"batman.jpg"} profileSrc={"me.jpg"} title="Darryl Scott" />
      <Story image={"esha6.jpg"} profileSrc={"esha3.jpg"} title="Aiysha Scott" />
      <Story image={"dumb.jpg"} profileSrc={"daanye4.jpg"} title="Somebody Else" />
      <Story image={"damn.jpg"} profileSrc={"me3.jpg"} title="Casa Nova" />
    </div>
  )
}

export default StoryReel