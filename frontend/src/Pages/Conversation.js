import React, { useEffect, useState } from "react";

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
        <div>
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
