import React from "react";
import MailList from "./common/mailList";
import { connect } from "react-redux";

const SentBox = ({ sentmails }) => {
  return (
    <div className="sent-box">
      <h1>SENT</h1>
      <MailList mails={sentmails} type="sent" />
    </div>
  );
};

const mapStateToProps = state => {
  return { sentmails: state.sentmails };
};

export default connect(mapStateToProps)(SentBox);
