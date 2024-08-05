import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  // subscribing to store to check if the searched keyword is already present in the store

  // 
  /* searchCache = {
      "iphone": ["iphone 11","iphone 14"]
     }

     searchQuery = iphone
*/

  useEffect(() => {
    // API call
    // make an API call after every key press
    // but if the difference b/w 2 API call is <200ms
    // then decline the API call

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // setSearchQuery(json.items);
    setSuggestions(json[1]);

    // update cache
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }));
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
    <div className="grid grid-flow-col p-2 bg-black">
      <div className="flex col-span-1">
        {/* <img className='h-5 m-1 ml-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="Hamburger" /> */}
        <h1
          className="m-1 ml-4 my-1 text-xl cursor-pointer text-white"
          onClick={toggleMenuHandler}
        >
          ☰
        </h1>
        <a href="/">
          <img
            className="h-5 mx-4 mt-2"
            src="https://i.postimg.cc/WzCKrmBC/Youtube-Logo-PNG.png"
            alt="yt Logo"
          />
        </a>
      </div>
      <div className="w-full col-span-10 ml-32">
        <div>
          <input
            className="w-1/2 bg-black rounded-l-full border-gray-600 border-2 outline-none p-1 text-white pl-4"
            type="text"
            name="search-bar"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="border-2 border-l-0 border-gray-600 p-1  rounded-r-full">
            🔍
          </button>
        </div>
        { showSuggestions && (
          <div className="fixed w-[32rem] bg-black text-white py-2 px-2 rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s}>🔍 {s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-7 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
          alt="user"
        />
      </div>
    </div>   
    </div>
  );
}

export default Head;
