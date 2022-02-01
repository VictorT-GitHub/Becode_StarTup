import axios from "axios";
import React, { useEffect, useState } from "react";
import IconAccount from "../assets/person_black_24dp.svg";
import AddConv from "../components/AddConv";
import Chat from "../components/Chat";

const Conversation = (props) => {
  let { currentUser } = props;
  const [infoUser, setInfoUser] = useState([]);
  const [conversationData, setConversationData] = useState([]);

  useEffect(() => {
    axios
      .get("https://star-tup-api.herokuapp.com/api/conv/all", {
        withCredentials: true,
      })
      .then((res) => {
        setConversationData(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://star-tup-api.herokuapp.com/api/user/one", {
        withCredentials: true,
      })
      .then((res) => {
        setInfoUser(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <>
      <div className="conversation">
        <div className="bubble"></div>
        <div className="top">
          <div> {infoUser.firstname} </div>
          <img src={IconAccount} alt="account-icon" />
        </div>
        {conversationData.length > 0 ? (
          <div className="allConv">
            {conversationData.map((elem) => (
              <Chat
                conversationData={elem}
                key={elem._id}
                currentUser={currentUser}
              />
            ))}
          </div>
        ) : (
          <p> You dont have conversation yet </p>
        )}
        <AddConv />
      </div>
    </>
  );
};

export default Conversation;
