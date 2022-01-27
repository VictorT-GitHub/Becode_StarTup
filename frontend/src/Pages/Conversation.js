import React, { useEffect, useState } from "react";
import IconAccount from "../assets/person_black_24dp.svg";
import AddConv from "../components/AddConv";
import Chat from "../components/Chat";

const Conversation = (props) => {
  const { login } = props;
  const [data, setData] = useState([]);
  const [infoUser, setInfoUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/conv/all", {
      method: "GET",
      headers: { withCredentials: true },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [login]);

  //   useEffect(async () => {
  //     await fetch("http://localhost:5000/api/user/one", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setInfoUser(data);
  //         console.log(infoUser);
  //       });
  //   }, []);

  return (
    <>
      {login ? (
        <div className="conversation">
          <div className="bubble"></div>
          <div className="top">
            <div>name</div>
            <img src={IconAccount} alt="account-icon" />
          </div>
          {data.length > 0 ? (
            <div className="allConv">
              {data.map((elem) => (
                <Chat data={elem} key={elem._id} />
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
