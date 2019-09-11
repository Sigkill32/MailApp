import React from "react";
import ReplyButton from "./replyButton";

const Mail = ({ mail }) => {
  return (
    <div className="mail">
      <ReplyButton sender={mail.sender} />
      <p>From: {mail.sender}</p>
      <p>To: {mail.reciever}</p>
      <p>Sub: {mail.sub}</p>
      <p>{mail.content}</p>
    </div>
  );
};

export default Mail;
