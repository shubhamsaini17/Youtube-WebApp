import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { GOOGLE_API_KEY } from "../utils/constant";

const CommentContainer = ({videoId}) => {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    if(videoId && GOOGLE_API_KEY){
    getComments();
    }
  },[]);

  const getComments = async () => {
    const data = await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&videoId="+videoId+"&maxResults=100");
    const json = await data.json();
    setComment(json.items);
    // console.log(json);
  };

  return (
    <div className="flex flex-col">
      {comment.map((items) => (
          <CommentCard key={items.id} info={items} />
      ))}
    </div>
  );
};

export default CommentContainer;
