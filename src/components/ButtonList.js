import React, { useState } from 'react'
import Button from './Button'


const list = ["All","News","Live","Gaming","Cricket","Songs","Movies","Sports","Fashion","Olympic","Music","Prodcasts","Trending"];
 
const ButtonList = () => {
    
  return (
    <div className='flex max-w-6xl'>
    <div className='flex overflow-y-auto scroll-m-0 scroll-smooth scrollbar-hide  whitespace-nowrap '>
    {
        list.map((item)=>(
            <Button key={item} name ={item}/>         
        ))
    }     
    </div>      
    </div>
  )
}

export default ButtonList;
