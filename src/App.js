import React, { Component } from "react";
import Compose from "./components/compose";
import MailType from "./components/mailType";
import { Switch, Route } from "react-router-dom";
import Inbox from "./components/inbox";
import SentBox from "./components/sentBox";
import { connect } from "react-redux";
import Mail from "./components/common/mail";
import Trash from "./components/trash";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <MailType />
        <div className="mail-container">
          <Switch>
            <Route
              path="/mail/:type/:id"
              render={props => <Mail mail={this.props.inView} />}
            />
            <Route path="/compose" component={Compose} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/sentbox" component={SentBox} />
            <Route path="/trash" component={Trash} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { inView: state.inView };
};

export default connect(mapStateToProps)(App);
