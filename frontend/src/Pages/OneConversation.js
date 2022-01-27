import React from "react";

const OneConversation = (props) => {
  const { login } = props;
  return <>{login ? <h1>qsdk</h1> : <div>you need to be logged before</div>}</>;
};

export default OneConversation;
