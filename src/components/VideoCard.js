import React from 'react'
// import WatchPage from './WatchPage';
// import CommentCard from './CommentCard';
import CommentContainer from './CommentContainer';

const VideoCard = ({info}) => {
    // console.log(info.snippet.title);
    // console.log(info.snippet.localized.title);
    // console.log(info.snippet.thumbnails.high.url);
  
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;

    let viewCountDisplay;
    const viewCount = parseInt(statistics.viewCount, 10);
  
    if (viewCount >= 1000000) {
      viewCountDisplay = (viewCount / 1000000).toFixed(2) + ' M Views';
    } else if (viewCount >= 100000) {
      viewCountDisplay = (viewCount / 100000).toFixed(2) + ' L Views';
    } else {
      viewCountDisplay = viewCount.toLocaleString() + ' Views';
    }

  return (
    <div className='w-64 mx-3 my-2'>
    <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg' />
      <ul className='flex flex-col flex-wrap overflow-hidden'>
        <li className='font-bold text-white'>{title}</li>
        <li className=' text-gray-500 text-sm'>{channelTitle
        }</li>
        <li className=' text-gray-500 text-sm' >{viewCountDisplay}</li>
      </ul>
      <CommentContainer commentCount={statistics.commentCount}/>
    </div>
  )
}


export default VideoCard;

