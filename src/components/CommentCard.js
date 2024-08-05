import React from 'react'


const CommentCard = ({info}) => {
    // console.log(info);
// console.log(info.snippet.topLevelComment.snippet.textOriginal);
// console.log(info.snippet.topLevelComment.snippet.authorDisplayName);
  const authorDisplayName = info?.snippet?.topLevelComment?.snippet?.authorDisplayName;
  const textOriginal = info?.snippet?.topLevelComment?.snippet?.textOriginal;

  return (
    <div className='w-1/2 mx-3 my-1 p-2 bg-gray-200 rounded-md flex'>
      <img src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" className='w-8 h-8 rounded-full mr-2' alt="" />
      <ul>
        <li className='font-bold from-neutral-500 text-xs'>{authorDisplayName}</li>
        <p className='text-sm ml-2'>- {textOriginal}</p>
      </ul>
    </div>
  )
}

export default CommentCard;


