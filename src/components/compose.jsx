import React, { Component } from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";

class Compose extends Component {
  state = {
    reciever: "",
    sub: "",
    content: "",
    disabled: true
  };

  schema = {
    reciever: Joi.string()
      .email()
      .required(),
    sub: Joi.string().required(),
    content: Joi.string().required()
  };

  validate = () => {
    const { reciever, sub, content } = this.state;
    const { error } = Joi.validate({ reciever, sub, content }, this.schema);
    if (!error) {
      this.setState({ disabled: false });
      return;
    } else console.log(error.details);
  };

  genKey = () => {
    return Date.now();
  };

  handleChange = event => {
    this.validate();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSend = () => {
    const { reciever, sub, content } = this.state;
    this.props.dispatch({
      type: "SEND",
      mail: { id: this.genKey(), reciever, sub, content }
    });
    this.setState({ reciever: "", sub: "", content: "" });
  };

  render() {
    const { reciever, sub, content, disabled } = this.state;
    return (
      <div className="compose">
        <React.Fragment>
          <h1 style={{ textAlign: "center" }}>NEW MAIL</h1>
          <div className="compose">
            <input
              type="text"
              name="reciever"
              value={reciever}
              onChange={this.handleChange}
              placeholder="TO"
            />
            <br />
            <input
              type="text"
              name="sub"
              value={sub}
              onChange={this.handleChange}
              placeholder="SUBJECT"
            />
            <br />
            <textarea
              name="content"
              cols="30"
              rows="10"
              value={content}
              onChange={this.handleChange}
              placeholder="CONTENT"
            />
            <br />
            <button
              onClick={this.handleSend}
              disabled={disabled}
              className={disabled ? "btn-nt-allowed" : "btn-allowed"}
            >
              send
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default connect()(Compose);
