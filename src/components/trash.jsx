import React from "react";
import MailList from "./common/mailList";
import { connect } from "react-redux";

const Trash = ({ trash }) => {
  return (
    <div className="trash">
      <h1>TRASH</h1>
      <MailList mails={trash} type="trash" />
    </div>
  );
};

const mapStateToProps = state => {
  return { trash: state.trash };
};

export default connect(mapStateToProps)(Trash);
