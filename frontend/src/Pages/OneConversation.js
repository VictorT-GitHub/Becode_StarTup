import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneConversation = (props) => {
  let { currentUser } = props;
  const convId = useParams();
  const [conversationData, setConversationData] = useState([]);
  let message;
  let usersID;

  useEffect(async () => {
    await axios
      .get("https://star-tup-api.herokuapp.com/api/conv/one/" + convId.id, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data[0]);
        setConversationData(res.data);
        console.log(conversationData);
        message = conversationData.messages;
        usersID = conversationData[0].usersID;
        console.log(usersID);
        let index = usersID.findIndex((x) => x._id !== currentUser);
        console.log(currentUser);
        console.log(index);
        console.log(message);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <>
      <div className="oneConversation">
        <div className="bubble">
          <p>{setConversationData.usersId} </p>
        </div>
        <div className="sendMessage">
          <div className="form-group">
            <input className="form-field" placeholder="Write a message..." />
            <button className="send">send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneConversation;
