import React from "react";
import { Link } from "react-router-dom";

const Chat = (props) => {
  const { conversationData } = props;
  const messages = conversationData.messages;
  const lastMessage = messages[messages.length - 1];
  console.log("last :", lastMessage, "msg", messages);

  return (
    <Link to={"/oneconversation"} className="oneConv">
      <h5> {conversationData.usersID[0]} </h5>
      {lastMessage ? <p>{lastMessage.text} </p> : <p>no message</p>}
    </Link>
  );
};

export default Chat;
