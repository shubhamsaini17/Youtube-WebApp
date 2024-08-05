import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  // live message for adding msg in live chat
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="mx-4 w-full rounded-lg h-[500px] p-2 border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // dont use index as key in map.
            chatMessages.map((c, index) => (
              <ChatMessage
                className="felx flex-wrap"
                name={c.name}
                message={c.message}
                key={index}
              />
            ))
          }
        </div>
      </div>

      <form
        className="w-full border mt-1 bg-white mx-4 rounded-lg p-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shubham Saini",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          name=""
          className="px-2 border-blue-300 w-80 ml-1"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-4 shadow-lg ml-2 rounded-lg">⬆️</button>
      </form>
    </>
  );
};

export default LiveChat;
