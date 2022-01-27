import React from "react";
import { Link } from "react-router-dom";

const Chat = (props) => {
  // const { conversationData } = props;
  // const messages = conversationData.messages;
  // const lastMessage = messages[messages.length - 1];
  // console.log(conversationData);
  // let MyDateString;
  // if (lastMessage) {
  //   let date = new Date(lastMessage.date);

  //   MyDateString =
  //     ("0" + date.getDate()).slice(-2) +
  //     "/" +
  //     ("0" + (date.getMonth() + 1)).slice(-2) +
  //     "/" +
  //     date.getFullYear();
  //   console.log(MyDateString);
  // }

  return (
    <Link
      to={"/oneconversation"}
      // params={conversationData._id}
      className="oneConv"
    >
      {/* <h5> {conversationData.usersID[0]} </h5> */}
      {/* {lastMessage ? ( */}
      <>
        {/* <p>{lastMessage.text} </p> */}
        {/* <p className="date">{MyDateString} </p> */}
      </>
      ) : (<p>no message</p>
      )}
    </Link>
  );
};

export default Chat;
