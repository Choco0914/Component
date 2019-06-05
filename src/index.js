import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
      </div>
      <div className="content">
        <a href="/" className="author">
          Choco
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
