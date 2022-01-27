import axios from "axios";
import React, { useEffect, useState } from "react";
import IconAccount from "../assets/person_black_24dp.svg";
import AddConv from "../components/AddConv";
import Chat from "../components/Chat";

const Conversation = (props) => {
  const { login } = props;
  const [infoUser, setInfoUser] = useState([]);
  const [conversationData, setConversationData] = useState([]);

  useEffect(async () => {
    await axios
      .get("https://star-tup-api.herokuapp.com/api/conv/all", {
        withCredentials: true,
      })
      .then((res) => {
        setConversationData(res.data);
        console.log(conversationData);
      })
      .catch((err) => console.log(err.response.data));
  }, [login]);

  useEffect(async () => {
    await axios
      .get("https://star-tup-api.herokuapp.com/api/user/one", {
        withCredentials: true,
      })
      .then((res) => {
        setInfoUser(res.data);
        console.log(infoUser);
      });
  }, []);

  return (
    <>
      {login ? (
        <div className="conversation">
          <div className="bubble"></div>
          <div className="top">
            <div> {infoUser.firstname} </div>
            <img src={IconAccount} alt="account-icon" />
          </div>
          {conversationData.length > 0 ? (
            <div className="allConv">
              {conversationData.map((elem) => (
                <Chat conversationData={elem} key={elem._id} />
              ))}
            </div>
          ) : (
            <p> You dont have conversation yet </p>
          )}
          <AddConv />
        </div>
      ) : (
        <div>you need to be logged before</div>
      )}
    </>
  );
};

export default Conversation;
