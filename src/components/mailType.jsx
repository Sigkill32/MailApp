import React from "react";
import { Link } from "react-router-dom";

const MailType = () => {
  return (
    <div className="mail-type">
      <aside className="sidebar">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/compose">Compose</Link>
            </li>
            <li>
              <Link to="/inbox">Inbox</Link>
            </li>
            <li>
              <Link to="/sentbox">Sent</Link>
            </li>
            <li>
              <Link to="/trash">Trash</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default MailType;
