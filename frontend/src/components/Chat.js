import React from "react";
import { Link } from "react-router-dom";

const Chat = (props) => {
  const { conversationData } = props;
  const messages = conversationData.messages;
  const lastMessage = messages[messages.length - 1];
  let MyDateString;
  if (lastMessage) {
    let date = new Date(lastMessage.date);

    MyDateString =
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear();
  }

  return (
    <Link to={conversationData._id} className="oneConv">
      <h5> {conversationData.usersID[0].firstname} </h5>
      {lastMessage ? (
        <>
          <p>{lastMessage.text} </p>
          <p className="date">{MyDateString} </p>
        </>
      ) : (
        <p>no message</p>
      )}
    </Link>
  );
};

export default Chat;
