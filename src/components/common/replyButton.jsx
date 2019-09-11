import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ReplyButton extends Component {
  handleClick = () => {
    const { sender, dispatch } = this.props;
    dispatch({ type: "REPLY", action: sender });
  };

  render() {
    const { sender } = this.props;
    return (
      <Link
        id="reply"
        to={`/compose?sender=${sender}`}
        onClick={this.handleClick}
      >
        Reply
      </Link>
    );
  }
}

export default connect()(ReplyButton);
