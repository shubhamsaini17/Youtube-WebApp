import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
// import CommentCard from './CommentCard'


function body() {
  return (
    <div className='flex flex-row bg-black'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default body
