import React, { useEffect, useState } from "react";
import IconAccount from "../assets/person_black_24dp.svg";

const Conversation = (props) => {
  const { login } = props;
  const [data, setData] = useState([]);

  useEffect(async () => {
    await fetch("http://localhost:5000/api/conv/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [login]);

  return (
    <>
      {login ? (
        <div className="conversation">
          <div className="bubble"></div>
          <div className="top">
            <div>name</div>
            <img src={IconAccount} alt="account-icon" />
          </div>
          {data.map((elem) => (
            <div>{elem.usersID[0]} </div>
          ))}
        </div>
      ) : (
        <div>you need to be logged before</div>
      )}
    </>
  );
};

export default Conversation;
