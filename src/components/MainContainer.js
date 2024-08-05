import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import CommentConatiner from './CommentContainer'

const MainContainer = () => {
  return (
    <div className='mx-8'>
        <ButtonList/>  
        <VideoContainer/>
        <CommentConatiner/>
    </div>
  )
}

export default MainContainer
