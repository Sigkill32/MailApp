import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MailList extends Component {
  handleDelete = (id, type) => {
    const { sentmails, inbox, dispatch } = this.props;
    if (type === "sent") {
      const { trash, newMails } = this.delMail([...sentmails], id);
      dispatch({
        type: "DELETE",
        mailType: "sent",
        mails: { trash, newMails }
      });
    } else if (type === "inbox") {
      const { trash, newMails } = this.delMail([...inbox], id);
      dispatch({
        type: "DELETE",
        mailType: "inbox",
        mails: { trash, newMails }
      });
    } else {
      const trash = [...this.props.trash].filter(mail => mail.id !== id);
      dispatch({ type: "DELETE", mailType: "trash", mails: { trash } });
    }
  };

  delMail = (mails, id) => {
    const index = mails.findIndex(mail => mail.id === id);
    const trash = [...this.props.trash, mails[index]];
    const newMails = mails.filter(mail => mail.id !== id);
    return { trash, newMails };
  };

  handleView = mail => {
    this.props.dispatch({ type: "SET_INVIEW", inView: mail });
  };

  render() {
    const { type, mails } = this.props;
    return (
      <div className="mail-list">
        {mails.map(mail => (
          <div className="mail" key={mail.id}>
            <p>From: {mail.sender}</p>
            <p>To: {mail.reciever}</p>
            <p>Sub: {mail.sub}</p>
            <button onClick={() => this.handleDelete(mail.id, type)}>
              Delete
            </button>
            <button onClick={() => this.handleView(mail)}>
              <Link to={`/mail/${type}/${mail.id}`}>View</Link>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sentmails: state.sentmails,
    inbox: state.inbox,
    trash: state.trash
  };
};

export default connect(mapStateToProps)(MailList);
