import React, { useEffect } from "react";

const Conversation = (props) => {
  const { login } = props;

  useEffect(() => {
    fetch("https://star-tup-api.herokuapp.com/api/conv/all", {
      method: "GET",
      headers: { withCredentials: true },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [login]);

  return (
    <>
      {login ? (
        <div>
          <h1>test</h1>
        </div>
      ) : (
        <div>you need to be logged before</div>
      )}
    </>
  );
};

export default Conversation;
