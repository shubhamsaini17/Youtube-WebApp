import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  
  
  // early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className='pl-5 pt-2 w-52 text-white bg-black'>
    <ul>
        <li><Link to="/">🏠 Home </Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li className='pt-2'>You</li>
        <li>History</li>
      </ul>
    <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Firstpost</li>
        <li>Sports</li>
        <li>Mr. Beast</li>
        <li>ISRO</li>
      </ul>
    <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion & Beauty</li>
        <li>Prodcasts</li>
      </ul>
    </div>
  )
}


export default Sidebar
