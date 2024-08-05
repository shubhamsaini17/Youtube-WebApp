const ChatMessage = ({name, message}) => {
  return (
    <div className="flex item-center shadow-sm p-2">
      <img
        className="h-6 rounded-full"
        src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        alt="user"
      />
      <span className="px-2 font-bold ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
