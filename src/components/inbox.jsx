import React from "react";
import MailList from "./common/mailList";
import { connect } from "react-redux";

const Inbox = ({ inbox }) => {
  return (
    <div className="inbox">
      <h1>INBOX</h1>
      <MailList mails={inbox} type="inbox" />
    </div>
  );
};

const mapStateToProps = state => {
  return { inbox: state.inbox };
};

export default connect(mapStateToProps)(Inbox);
