import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentConatiner from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = ({ commentCount }) => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  // if i am on watchpage close the sidebar by default for that we use useEffect hook to dispatch an action and call a reducer funtion and syncronize the sidebarwith silce in store to CLOSEMENU action in the store.
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5 flex flex-col">
      <div className="mb-6 w-30">
        <div className="flex">
          <iframe
            width="1040"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
           <div className="w-[23rem]">
          <LiveChat />
        </div>
        </div>
      </div>
      <h1 className="mt-1 mb-2 ml-2 font-bold text-white text-2xl">Comments</h1>
      <CommentConatiner videoId={searchParams.get("v")} />
    </div>
  );
};

export default WatchPage;
